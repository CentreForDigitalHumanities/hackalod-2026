from django.contrib import admin

from questions.models import DescribeQuestion


@admin.register(DescribeQuestion)
class CorpusAdmin(admin.ModelAdmin):
    model = DescribeQuestion
