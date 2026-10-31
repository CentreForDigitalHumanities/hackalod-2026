from rest_framework import viewsets
from .models import Casus, DescribeQuestion, OneOutQuestion
from .serializers import CasusSerializer, DescribeQuestionSerializer, OneOutQuestionSerializer

class DescribeQuestionViewset(viewsets.ModelViewSet):
    queryset = DescribeQuestion.objects.all()
    serializer_class = DescribeQuestionSerializer

class OneOutQuestionViewset(viewsets.ModelViewSet):
    queryset = OneOutQuestion.objects.all()
    serializer_class = OneOutQuestionSerializer

class CasusViewset(viewsets.ModelViewSet):
    queryset = Casus.objects.all()
    serializer_class = CasusSerializer
