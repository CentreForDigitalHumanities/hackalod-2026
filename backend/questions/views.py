from rest_framework import viewsets
from .models import DescribeQuestion
from .serializers import DescribeQuestionSerializer

class DescribeQuestionViewset(viewsets.ModelViewSet):
    queryset = DescribeQuestion.objects.all()
    serializer_class = DescribeQuestionSerializer
