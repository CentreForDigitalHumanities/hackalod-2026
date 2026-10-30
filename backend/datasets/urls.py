from django.urls import path

from . import views

urlpatterns = [
    path('iconclass/<str:ic_code>/image', views.iconclass_image, name='iconclass-image'),
    path('iconclass/images/<str:filename>', views.iconclass_image_file, name='iconclass-image-file'),
]
