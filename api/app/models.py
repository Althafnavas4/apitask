from django.db import models 

# Create your models here.

class Task(models.Model):
    title=models.TextField()
    dis=models.TextField()