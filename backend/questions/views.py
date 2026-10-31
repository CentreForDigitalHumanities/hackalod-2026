from rest_framework import viewsets
from .models import DescribeQuestion, OneOutQuestion
from .serializers import DescribeQuestionSerializer, OneOutQuestionSerializer

class DescribeQuestionViewset(viewsets.ModelViewSet):
    queryset = DescribeQuestion.objects.all()
    serializer_class = DescribeQuestionSerializer

class OneOutQuestionViewset(viewsets.ModelViewSet):
    queryset = OneOutQuestion.objects.all()
    serializer_class = OneOutQuestionSerializer
