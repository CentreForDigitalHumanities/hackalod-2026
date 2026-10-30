from django.contrib import admin

from questions.models import DescribeQuestion, OneOutQuestion


@admin.register(DescribeQuestion)
class CorpusAdmin(admin.ModelAdmin):
    model = DescribeQuestion


@admin.register(OneOutQuestion)
class OneOutQuestionAdmin(admin.ModelAdmin):
    model = OneOutQuestion
