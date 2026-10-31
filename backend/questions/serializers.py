import os.path as op

from django.urls import reverse
from rest_framework import serializers
from questions.models import Casus, DescribeQuestion, OneOutQuestion, Work, LibraryBook


class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ('id', 'image_url')

class DescribeQuestionSerializer(serializers.ModelSerializer):
    target_work = WorkSerializer()

    class Meta:
        model = DescribeQuestion
        fields = ('id', 'target_work', 'ic_code', 'label', 'keywords')


class OneOutQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = OneOutQuestion
        fields = ('id', 'label', 'target_ic_code', 'context_ic_code', 'hint')


class CasusSerializer(serializers.ModelSerializer):
    question1 = DescribeQuestionSerializer()
    question2 = OneOutQuestionSerializer()

    class Meta:
        model = Casus
        fields = ('id', 'label', 'question1', 'question2', 'reward_text')


class LibraryBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = LibraryBook
        fields = ('id', 'casus', 'game', 'html')
