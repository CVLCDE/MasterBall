from django.urls import path 

from ..views import collection_card_views

urlpatterns = [
    path("", collection_card_views.collection_card_viewer, name="collection-card-viewer"),
    path("all-collection-cards/", collection_card_views.get_all_collection_cards, name="all-collection-cards")
]