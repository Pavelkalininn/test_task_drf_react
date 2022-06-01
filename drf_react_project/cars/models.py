from django.db import models


class Mark(models.Model):
    title = models.CharField(
        'Марка',
        unique=True,
        help_text='Введите марку авто',
        max_length=200,
    )

    def __str__(self):
        return self.title


class Auto(models.Model):
    title = models.CharField(
        max_length=200
    )
    mark = models.ForeignKey(
        Mark,
        on_delete=models.CASCADE,
        related_name='cars',
        verbose_name='Марка'
    )
    year = models.PositiveSmallIntegerField(
        'Год выпуска',
        help_text='Введите год выпуска'
    )
    mileage = models.PositiveIntegerField(
        'Пробег',
        help_text='Введите пробег'
    )

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-mileage']
