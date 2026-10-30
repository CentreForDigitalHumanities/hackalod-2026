import os.path as op

import iconclass
from django.http import FileResponse, Http404
from django.shortcuts import render
from django.views.decorators.http import require_GET
from django.views.static import serve

from . import iconclass_examples

from rijksmuseum import rijks


@require_GET
def iconclass_image(request, ic_code: str):
    images = iconclass_examples.get_images(ic_code, n=1)
    if not images or not op.isfile(images[0]):
        raise Http404('No image found for this Iconclass code')
    return FileResponse(open(images[0], 'rb'))


@require_GET
def iconclass_image_file(request, filename: str):
    return serve(request, filename, document_root=iconclass_examples.IMG_LOC)


def rijks_id(request, rijks_id: str):
    human_made_object = rijks.HumanMadeObject(rijks.id_to_url(rijks_id))
    iconclasses = human_made_object.visual_item.iconclass
    context = {
        "name": human_made_object.name,
        "iconclasses": iconclasses,
        "url": human_made_object.visual_item.digital_object.imageurl_small
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
