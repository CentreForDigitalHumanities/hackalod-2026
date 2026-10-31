from django.urls import path

from . import views

urlpatterns = [
    path('iconclass/<str:ic_code>/images', views.iconclass_images, name='iconclass-images'),
    path('iconclass-guess/<str:ic_code>/images', views.iconclass_images_guess, name='iconclass-images'),
    path('image-from-period/<str:ic_code>/<int:start_year>/<int:end_year>/<str:source>/images', views.image_from_period, name='image-from-period'),
    path('images/<path:path>', views.image_file, name='image-file'),
    path('rijks/by-id/<str:rijks_id>', views.rijks_id, name='rijks-id'),
    path('rijks/by-iconclass/<str:ic_code>', views.rijks_by_iconclass, name='rijks-by-iconclass')
]
