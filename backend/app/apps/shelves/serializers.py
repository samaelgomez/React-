from rest_framework import serializers
from .models import Shelf

from app.apps.core.models import TimestampedModel
from app.apps.videostores.models import Videostore
from app.apps.movies.models import Movie
from app.apps.movies.serializers import MovieSerializer

class ShelfSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(required=False)
    # movie = MovieSerializer(required=False)

    class Meta:
        model = Shelf
        fields = ("id", "slug", "videostore", "movie", "status")