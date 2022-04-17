from curses.ascii import HT
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from pokemontcgsdk import Card

def card_viewer(request):
    return HttpResponse("Card Viewer")

def get_specific_card(request, card_id):
    """
    Description:
        - Gets a specific Card object, given a card's PokemonTCGIO ID

    Params:
        - card_id (string): A PokemonTCGIO card id

    Returns:
        -  A Card object
    """
    try:
        return HttpResponse(Card.find(card_id))
    except:
        return HttpResponseNotFound(f"Card ID: {card_id} could not be found")