from django.core.management import BaseCommand, CommandError

from questions.models import Work
from rijksmuseum.rijks import europeana_search, resolve_handle, DigitalObject, HumanMadeObject


def import_rijks_data(iconclass: str):
    i = 1
    while True:
        items, total = europeana_search(iconclass, i)
        count = len(items)
        if count == 0:
            break
        print(f"Found {count} items starting at {i} (total: {total})")
        for item in items:
            rijks_uri = resolve_handle(item)
            if Work.objects.filter(id_in_source=rijks_uri).exists():
                print(f"Skipping {item} as it already exists")
                continue
            if rijks_uri:
                print(f"Resolved handle {item} to {rijks_uri}")
                obj = HumanMadeObject(rijks_uri)
                print(f"Parsed object {obj}")
                work = Work(
                    ic_code=iconclass,
                    image_url=obj.visual_item.digital_object.imageurl_small,
                    date_start=obj.begin_year,
                    date_end=obj.end_year,
                    source='rijks',
                    is_painting=(obj.type == "schilderij"),
                    name=str(obj),
                    id_in_source=rijks_uri
                )
                work.save()
        i += count
        if i > total:
            break


class Command(BaseCommand):
    help = "Import works of Rijksmuseum by Iconclass code"

    def add_arguments(self, parser):
        parser.add_argument('iconclass_code', type=str)

    def handle(self, *args, **options):
        import_rijks_data(options['iconclass_code'])
