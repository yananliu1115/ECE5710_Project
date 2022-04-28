from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    amount = models.PositiveIntegerField(default=1)
    