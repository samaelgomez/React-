from django.contrib import admin
from django.urls import path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('app.apps.videostores.urls')),
    path('api/', include('app.apps.shelves.urls')),
    path('api/', include('app.apps.movies.urls')),
    path('api/', include('app.apps.reservations.urls')),
    path('api/', include('app.apps.authentication.urls')),
]