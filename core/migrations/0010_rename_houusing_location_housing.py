# Generated by Django 3.2.6 on 2021-11-13 23:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20211113_2320'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='houusing',
            new_name='housing',
        ),
    ]
