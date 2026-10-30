from django.db import models
from iconclass import init
from datasets.iconclass_examples import get_images

ic = init()

class Question(models.Model):
    ic_code = models.CharField(max_length=100)
    label = models.CharField(max_length = 500)
    keywords = models.CharField(max_length=5000, help_text='Comma-separated list of keywords')

    def works(self, *args, **kwargs):
        '''returns'''
        n = 10
        return get_images(self.ic_code, n)


    def __str__(self):
        return self.label
