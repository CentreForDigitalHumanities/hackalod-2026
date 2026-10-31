from rest_framework import viewsets
from .models import Casus, DescribeQuestion, OneOutQuestion, LibraryBook
from .serializers import CasusSerializer, DescribeQuestionSerializer, OneOutQuestionSerializer, LibraryBookSerializer


class DescribeQuestionViewset(viewsets.ModelViewSet):
    queryset = DescribeQuestion.objects.all()
    serializer_class = DescribeQuestionSerializer

class OneOutQuestionViewset(viewsets.ModelViewSet):
    queryset = OneOutQuestion.objects.all()
    serializer_class = OneOutQuestionSerializer

class CasusViewset(viewsets.ModelViewSet):
    queryset = Casus.objects.all()
    serializer_class = CasusSerializer

class LibraryViewset(viewsets.ModelViewSet):
    queryset = LibraryBook.objects.all()
    serializer_class = LibraryBookSerializer
