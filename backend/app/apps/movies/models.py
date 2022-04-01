from django.db import models
from app.apps.core.models import TimestampedModel

class Movie(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    title = models.TextField(db_index=True)
    cover = models.TextField()
    releaseDate = models.CharField(max_length=10)
    duration = models.TextField()
    genres = models.TextField()
    synopsis = models.TextField()
    rating = models.CharField(max_length=4)
    
    def __str__(self):
        return self.title