from django.db import models
from iconclass import init
from datasets.iconclass_examples import get_images

ic = init()

SOURCE_CHOICES = (
    ('rijks', 'Rijksmuseum'),
    ('rkd', 'RKD'),
)

class Work(models.Model):
    ic_code = models.CharField("IC code", max_length=100, default='')
    image_url = models.URLField()
    date_start = models.IntegerField(null=True)
    date_end = models.IntegerField(null=True)
    source = models.CharField(max_length=100, choices=SOURCE_CHOICES, blank=True)
    is_painting = models.BooleanField(default=True)
    name = models.CharField(max_length=1000, default='')
    id_in_source = models.URLField("ID in source", max_length=100, default='')

    def __str__(self):
        return f"{self.name}"


class DescribeQuestion(models.Model):
    target_work = models.ForeignKey(Work,  on_delete=models.CASCADE)
    ic_code = models.CharField(max_length=100)
    label = models.CharField(max_length = 500)
    keywords = models.JSONField(
        default=dict,
        help_text='Keywords grouped by category, e.g. {"persoon": ["orfeus", "orpheus"]}',
    )

    def __str__(self):
        return self.label
