import os.path as op

from django.urls import reverse
from rest_framework import serializers
from questions.models import Question

class QuestionSerializer(serializers.ModelSerializer):
    works = serializers.SerializerMethodField()

    def get_works(self, obj):
        request = self.context.get('request')
        urls = [
            reverse('iconclass-image-file', args=[op.basename(path)])
            for path in obj.works()
        ]
        return [request.build_absolute_uri(url) for url in urls]


    class Meta:
        model = Question
        fields = '__all__'
