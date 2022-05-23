from django.db import models
from app.apps.core.models import TimestampedModel
from app.apps.authentication.models import User
from app.apps.movies.models import Movie

class Reservation(TimestampedModel):
    id = models.TextField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    movies = models.ForeignKey(Movie, on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.id