# Generated by Django 3.2.6 on 2021-11-13 04:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='place',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='place',
            name='updated_at',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='updated_at',
        ),
    ]
