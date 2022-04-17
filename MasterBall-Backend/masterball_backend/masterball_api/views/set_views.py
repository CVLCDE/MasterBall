from curses.ascii import HT
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from pokemontcgsdk import Set

# SETS
def set_viewer(request):
    return HttpResponse("Set Viewer")

def get_specific_set(request, set_id):
    """
    Description:
        - Gets a specific Set object, given a set's PokemonTCGIO ID

    Params:
        - set_id (string): A PokemonTCGIO set id
    
    Returns:
        - A Set Object
    """
    try:
        return HttpResponse(Set.find(set_id))
    except:
        return HttpResponseNotFound(f"Set ID: {set_id} could not be found")
    
def get_all_sets(request):
    """
    Description:
        - Gets all available Set objects according to the PokemonTCGIO API

    Params:
        - None 

    Returns
        - A list of Set objects
    """
    return HttpResponse(Set.all())