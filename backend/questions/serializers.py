import os.path as op

from django.urls import reverse
from rest_framework import serializers
from questions.models import DescribeQuestion, Work

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('id', 'image_url')

class DescribeQuestionSerializer(serializers.ModelSerializer):
    target_work = WorkSerializer()

    class Meta:
        model = DescribeQuestion
        fields = ('id', 'target_work', 'ic_code', 'label', 'keywords')
