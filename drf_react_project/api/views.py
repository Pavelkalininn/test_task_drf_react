from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination

from api.serializers import MarkSerializer, AutoSerializer
from cars.models import Mark, Auto


class MarkViewSet(viewsets.ModelViewSet):
    queryset = Mark.objects.all()
    serializer_class = MarkSerializer


class AutoViewSet(viewsets.ModelViewSet):
    queryset = Auto.objects.all()
    serializer_class = AutoSerializer
    pagination_class = LimitOffsetPagination
