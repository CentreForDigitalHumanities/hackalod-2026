from django.contrib import admin

from questions.models import DescribeQuestion, Work, OneOutQuestion


@admin.register(DescribeQuestion)
class DescribeQuestionAdmin(admin.ModelAdmin):
    model = DescribeQuestion

@admin.register(OneOutQuestion)
class OneOutQuestionAdmin(admin.ModelAdmin):
    model = OneOutQuestion

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    model = Work
    list_display = ("id_in_source", "name", "ic_code", "source", "date_start", "date_end", "is_painting")
    list_filter = ("is_painting", "source")

