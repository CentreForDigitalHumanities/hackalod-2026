from django.contrib import admin

from questions.models import DescribeQuestion, Work


@admin.register(DescribeQuestion)
class CorpusAdmin(admin.ModelAdmin):
    model = DescribeQuestion


@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    model = Work
    list_display = ("id_in_source", "name", "ic_code", "source", "date_start", "date_end", "is_painting")
    list_filter = ("is_painting", "source")
