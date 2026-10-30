import os.path as op

from django.urls import reverse
from rest_framework import serializers
from questions.models import DescribeQuestion

class DescribeQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = DescribeQuestion
        fields = '__all__'
