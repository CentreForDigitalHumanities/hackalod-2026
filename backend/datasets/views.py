import os.path as op

from django.http import FileResponse, Http404
from django.views.decorators.http import require_GET

from . import iconclass_examples


@require_GET
def iconclass_image(request, ic_code: str):
    images = iconclass_examples.get_images(ic_code, n=1)
    if not images or not op.isfile(images[0]):
        raise Http404('No image found for this Iconclass code')
    return FileResponse(open(images[0], 'rb'))
