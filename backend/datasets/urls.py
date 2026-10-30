from django.urls import path

from . import views

urlpatterns = [
    path('iconclass/<str:ic_code>/image', views.iconclass_image, name='iconclass-image'),
    path('rijks/by-id/<str:rijks_id>', views.rijks_id, name='rijks-id'),
    path('rijks/by-iconclass/<str:ic_code>', views.rijks_by_iconclass, name='rijks-by-iconclass')
]
