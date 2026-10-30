from django.db import models
from iconclass import init
from datasets.iconclass_examples import get_images

ic = init()

class Work(models.Model):
    image_url = models.URLField()

class DescribeQuestion(models.Model):
    '''One work is shown: guess the keywords'''
    target_work = models.ForeignKey(Work, on_delete=models.CASCADE)
    ic_code = models.CharField(max_length=100)
    label = models.CharField(max_length = 500)
    keywords = models.JSONField(
        default=dict,
        help_text='Keywords grouped by category, e.g. {"persoon": ["orfeus", "orpheus"]}',
    )

    def __str__(self):
        return self.label

class OneOutQuestion(models.Model):
    '''Three works are shown, guess the one that doesn't belong'''
    label = models.CharField(max_length=500)
    target_ic_code = models.CharField(max_length=500, help_text='IC code for the common category (2 works)')
    context_ic_code = models.CharField(max_length=500, help_text='IC code for the odd one out category (1 work)')
    hint = models.CharField(max_length=500, blank=True)

