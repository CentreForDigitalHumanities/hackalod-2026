from django.urls import path

from . import views

urlpatterns = [
    path('iconclass/<str:ic_code>/images', views.iconclass_images, name='iconclass-images'),
    path('iconclass/images/<str:filename>', views.iconclass_image_file, name='iconclass-image-file'),
    path('rijks/by-id/<str:rijks_id>', views.rijks_id, name='rijks-id'),
    path('rijks/by-iconclass/<str:ic_code>', views.rijks_by_iconclass, name='rijks-by-iconclass')
]
