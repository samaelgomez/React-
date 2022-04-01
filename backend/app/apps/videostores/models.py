from django.db import models
from app.apps.core.models import TimestampedModel

class Videostore(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    name = models.TextField(db_index=True)
    image = models.TextField()
    location = models.TextField()
    
    def __str__(self):
        return self.name