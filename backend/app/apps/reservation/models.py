from django.db import models
from app.apps.core.models import TimestampedModel
from app.apps.authentication.models import User
from app.apps.movies.models import Movie

class Reservation(TimestampedModel):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    movie = models.ForeignKey(Movie, on_delete=models.DO_NOTHING)
    day = models.CharField(max_length=10)

    def __str__(self):
        return self.id