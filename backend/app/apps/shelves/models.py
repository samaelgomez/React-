from django.db import models
from app.apps.core.models import TimestampedModel
from app.apps.videostores.models import Videostore
from app.apps.movies.models import Movie

class Shelf(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    videostore = models.OneToOneField(Videostore, on_delete=models.DO_NOTHING, related_name="shelves")
    movie = models.OneToOneField(Movie, on_delete=models.DO_NOTHING, related_name="shelves")
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.slug