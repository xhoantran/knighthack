# Generated by Django 3.2.6 on 2021-11-14 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_rename_houusing_location_housing'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='end_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='place',
            name='start_date',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
