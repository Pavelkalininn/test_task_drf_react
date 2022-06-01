from django.urls import path, include
from rest_framework import routers

from .views import AutoViewSet, MarkViewSet

router = routers.DefaultRouter()

router.register(r'cars', AutoViewSet, basename='car-list')
router.register(r'marks', MarkViewSet, basename='mark-list')

urlpatterns = [
    path('v1/', include(router.urls)),
]
