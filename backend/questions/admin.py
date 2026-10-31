from django.contrib import admin

from questions.models import DescribeQuestion, Work, OneOutQuestion, LibraryBook


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

@admin.register(LibraryBook)
class LibraryBookAdmin(admin.ModelAdmin):
    model = LibraryBook
    list_display = ("casus", "game", "html")
