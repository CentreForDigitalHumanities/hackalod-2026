from django.contrib import admin

from questions.models import Question


@admin.register(Question)
class CorpusAdmin(admin.ModelAdmin):
    model = Question
