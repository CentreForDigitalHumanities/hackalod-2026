from django.db import models
from iconclass import init
from datasets.iconclass_examples import get_images

ic = init()

class Work(models.Model):
    image_url = models.URLField()

class DescribeQuestion(models.Model):
    target_work = models.ForeignKey(Work,  on_delete=models.CASCADE)
    ic_code = models.CharField(max_length=100)
    label = models.CharField(max_length = 500)
    keywords = models.CharField(max_length=5000, help_text='Comma-separated list of keywords')

    def __str__(self):
        return self.label
