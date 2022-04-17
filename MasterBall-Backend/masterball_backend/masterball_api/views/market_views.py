from curses.ascii import HT
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, JsonResponse
from pokemontcgsdk import Card

def market_viewer(request):
    return HttpResponse("Market Viewer")

def get_tcgplayer_object(request, card_id):
    """
    Description:
        - Gets a specific TCGPlayer object, given a card's POKEMONTCGIO ID

    Params:
        - card_id (string): A PokemonTCGIO card id 

    Returns:
        - A TCGPlayer Object
    """
    try:
        card = Card.find(card_id)
        return HttpResponse(card.tcgplayer)
    except:
        return HttpResponseNotFound(f"Card ID: {card_id} could not be found")

def get_tcgplayer_url(request, card_id):
    """
    Description:
        - Gets a card's TCGPlayer URL, given a card's PokemonTCGIO card id

    Params:
        - card_id (string): A PokemonTCGIO card id 

    Returns:
        - A url string for a card's TCGPlayer site
    """
    try:
        card = Card.find(card_id)
        card_url = card.tcgplayer.url
        return HttpResponse(card_url)
    except:
        HttpResponseNotFound(f"TCGPlayer URL for {card_id} not found")

def get_tcgplayer_prices(request, card_id):
    """
    Description:
        - Gets a card's TCGPlayer pricing data per relevant rarity

    Params:
        - card_id (string): A PokemonTCGIO card id 

    Returns:
        - A json object containing a card's rarity and the price of said rarity.
    """
    try:
        card = Card.find(card_id)
        card_prices = card.tcgplayer.prices

        # Extract the market value prices from card's where relevant rarities exist
        prices = {}
        for rarity, price_values in card_prices.__dict__.items():
            if price_values != None:
                prices[rarity] = price_values.market
        return JsonResponse(prices)
    except:
        HttpResponseNotFound(f"TCGPlayer Prices for {card_id} not found")  