from django.conf import settings
from django.urls import path, re_path, include
from django.contrib import admin
from django.views.generic import RedirectView

from rest_framework import routers

from .index import index
from .proxy_frontend import proxy_frontend
from .i18n import i18n

from example.views import hooray as ExampleView # DELETEME, see below

from questions import views as question_views

api_router = routers.DefaultRouter()  # register viewsets with this router
api_router.register(r'describe-questions', question_views.DescribeQuestionViewset)
api_router.register(r'one-out-questions', question_views.OneOutQuestionViewset)
api_router.register(r'casussen', question_views.CasusViewset)
api_router.register(r'library', question_views.LibraryViewset)

if settings.PROXY_FRONTEND:
    spa_url = re_path(r'^(?P<path>.*)$', proxy_frontend)
else:
    spa_url = re_path(r'', index)

urlpatterns = [
    path('api/example/', ExampleView), # this is just an example, please delete and utilize router above.
    path('admin', RedirectView.as_view(url='/admin/', permanent=True)),
    path('api', RedirectView.as_view(url='/api/', permanent=True)),
    path('api-auth', RedirectView.as_view(url='/api-auth/', permanent=True)),
    path('admin/', admin.site.urls),
    path('api/datasets/', include('datasets.urls')),
    path('api/', include(api_router.urls)),
    path('api-auth/', include(
        'rest_framework.urls',
        namespace='rest_framework',
    )),
    path('api/i18n/', i18n),path("users/", include("user.urls")),
    spa_url,  # catch-all; unknown paths to be handled by a SPA
]
