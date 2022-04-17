from django.urls import path

from ..views import market_views

urlpatterns = [
    path("", market_views.market_viewer, name="market-viewer"),
    path("<str:card_id>/", market_views.get_tcgplayer_object, name="card-tcgplayer-object"),
    path("<str:card_id>/tcgplayer-url/", market_views.get_tcgplayer_url, name="card-tcgplayer-url"),
    path("<str:card_id>/tcgplayer-prices/", market_views.get_tcgplayer_prices, name="card-prices"),
    
]