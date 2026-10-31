import os.path as op
import random

from django.conf import settings
from django.db.models import Q
from django.urls import reverse
import iconclass
from django.http import FileResponse, Http404, JsonResponse
from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.views.static import serve

from questions.models import Work

from . import iconclass_examples

from rijksmuseum import rijks


@require_GET
def iconclass_images(request, ic_code: str):
    n = int(request.GET.get('n', 4))
    works = Work.objects.filter(ic_code=ic_code).order_by('?')[:n]
    objects = [
        {'url': work.image_url}
        for work in works
    ]
    return JsonResponse(objects, safe=False)


@require_GET
def iconclass_images_guess(request, ic_code: str):
    n = int(request.GET.get('n', 3))
    works = list(Work.objects.filter(ic_code=ic_code).order_by('?')[:n])
    works.append(Work.objects.filter(~Q(ic_code=ic_code)).order_by('?').first())
    objects = [
        {'url': work.image_url, 'other_class': work.ic_code != ic_code}
        for work in works
    ]
    random.shuffle(objects)
    return JsonResponse(objects, safe=False)


@require_GET
def image_from_period(request, ic_code: str, start_year: int, end_year: int, source: str):
    works = Work.objects.filter(ic_code=ic_code, date_start__gte=start_year, date_end__lte=end_year).order_by('?')
    if source != 'any':
        works = works.filter(source=source)
    if not works:
        return JsonResponse([], safe=False)
    return JsonResponse({'url': works[0].image_url}, safe=False)


@require_GET
def image_file(request, path: str):
    return serve(request, path, document_root=settings.DATA_ROOT)


def rijks_id(request, rijks_id: str):
    url = rijks.id_to_url(rijks_id)
    human_made_object = rijks.HumanMadeObject(url)
    iconclasses = human_made_object.visual_item.iconclass
    context = {
        "url": url,
        "object": human_made_object,
        "name": human_made_object.name,
        "iconclasses": iconclasses,
        "imageurl": human_made_object.visual_item.digital_object.imageurl_small
    }
    return render(request, 'rijks_id.html', context)


def rijks_by_iconclass(request, ic_code: str):
    uris = rijks.search_by_iconclass(ic_code)
    human_made_objects = [rijks.HumanMadeObject(x) for x in uris]
    context = {
        "iconclass": rijks.Iconclass(ic_code),
        "human_made_objects": human_made_objects
    }
    return render(request, 'rijks_by_iconclass.html', context)
