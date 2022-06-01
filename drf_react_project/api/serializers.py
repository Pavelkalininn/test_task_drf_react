import datetime

from rest_framework import serializers

from cars.models import Mark, Auto


class MarkSerializer(serializers.ModelSerializer):

    class Meta:
        fields = '__all__'
        model = Mark


class AutoSerializer(serializers.ModelSerializer):
    mark = serializers.SlugRelatedField(
        queryset=Mark.objects.all(),
        slug_field='title',
    )

    def validate_year(self, year):
        if (1900 > year
                or year > datetime.datetime.now().year):
            raise serializers.ValidationError('Некорректно введен год')
        return year

    class Meta:
        fields = '__all__'
        model = Auto
