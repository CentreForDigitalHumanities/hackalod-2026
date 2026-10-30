from django.urls import path

from . import views

urlpatterns = [
    path('iconclass/<str:ic_code>/image', views.iconclass_image, name='iconclass-image'),
]
