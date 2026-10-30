'''
Small (1k, may increase later) subset of the iconclass AI test dataset
'''
import os.path as op
from django.conf import settings
import json
import random

DATA_LOC = op.join(settings.BASE_DIR, 'datasets', 'data', 'iconclass_ai_set')
IMG_LOC = op.join(DATA_LOC, 'images')

with open(op.join(DATA_LOC, 'sample.json')) as f:
    dataset = json.load(f)

def shuffle_dict(d: dict) -> dict:
    l = list(d.items())
    random.shuffle(l)
    return dict(l)

def get_images(ic_code: str, n=1) -> list[str]:
    output = []
    for (k, v) in shuffle_dict(dataset).items():
        if ic_code in v:
            output.append(op.join(IMG_LOC, k))
            if len(output) >= n:
                break
    return output

