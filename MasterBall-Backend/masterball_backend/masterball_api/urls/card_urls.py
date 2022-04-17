from django.urls import path

from ..views import card_views

urlpatterns = [
    path("", card_views.card_viewer, name="card-viewer"),
    path("<str:card_id>/", card_views.get_specific_card, name="specific-card"),
]