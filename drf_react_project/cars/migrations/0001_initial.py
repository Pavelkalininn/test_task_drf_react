# Generated by Django 3.2.13 on 2022-06-01 09:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Mark',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Введите марку авто', max_length=200, verbose_name='Марка')),
            ],
        ),
        migrations.CreateModel(
            name='Auto',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('year', models.PositiveSmallIntegerField(help_text='Введите год выпуска', verbose_name='Год выпуска')),
                ('mileage', models.PositiveIntegerField(help_text='Введите пробег', verbose_name='Пробег')),
                ('mark', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cars', to='cars.mark', verbose_name='Марка')),
            ],
            options={
                'ordering': ['-mileage'],
            },
        ),
    ]
