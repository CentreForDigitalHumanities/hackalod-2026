import json

from django.core.management import BaseCommand, CommandError

from questions.models import Work
from rijksmuseum.rijks import europeana_search, resolve_handle, DigitalObject, HumanMadeObject


def import_rkd_data(filename: str):
    data = json.load(open(filename))
    for ic_code in data.keys():
        print(f"Importing {len(data[ic_code])} works from {ic_code}")
        work_data = data[ic_code]
        for work in work_data:
            if Work.objects.filter(ic_code=ic_code).exists():
                print(f"Skipping {ic_code} as it already exists")
                continue
            work_obj = Work(
                ic_code=ic_code,
                name=work["title"],
                date_start=work["date_start"].split("-")[0],
                date_end=work["date_end"].split("-")[0],
                image_url=work["image_url"],
                is_painting=work["is_painting"],
                id_in_source=work["source"],
            )
            work_obj.save()


class Command(BaseCommand):
    help = "Import works of Rijksmuseum by Iconclass code"

    def add_arguments(self, parser):
        parser.add_argument('filename', type=str)

    def handle(self, *args, **options):
        import_rkd_data(options['filename'])
