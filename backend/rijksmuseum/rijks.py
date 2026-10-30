import iconclass
import requests
from urllib.parse import unquote
import rdflib
from django.conf import settings


def id_to_url(id: str):
    return f"https://id.rijksmuseum.nl/{id}"


def parse_iconclass(uri: str) -> str:
    return unquote(uri.split("/")[-1])


ic = iconclass.init()


class Iconclass:
    def __init__(self, uri: str):
        self.uri = uri
        self.code = parse_iconclass(uri)
        try:
            self.label = ic[self.code]
        except Exception:
            self.label = None

    def __str__(self):
        return self.code


class RObject:
    def __init__(self, uri: str):
        self.retrieve_object(uri)
        self.parse()

    def retrieve_object(self, uri: str):
        self.uri = uri
        # Get data from JSON
        self.data = requests.get(self.uri).json()

    def parse(self):
        raise NotImplementedError

    @property
    def identifier(self):
        return self.uri.split("/")[-1]


class HumanMadeObject(RObject):
    """An actual art object - can be found in online catalogue"""
    name: None
    visual_item: None

    def _get_name(self):
        for identifier in self.data["identified_by"]:
            if identifier["type"] == "Name":
                return identifier["content"]

    def parse(self):
        self.visual_item_uri = self.data["shows"][0]["id"]
        print(self.visual_item_uri)
        self.visual_item = VisualItem(self.visual_item_uri)
        self.name = self._get_name()

    def __str__(self):
        return self.name

class VisualItem(RObject):
    iconclass: None

    def __init__(self, uri: str):
        self.iconclass = []
        super().__init__(uri)

    def parse(self):
        classes = self.data["represents_instance_of_type"]
        for c in classes:
            self.iconclass.append(Iconclass(c["equivalent"][0]["id"]))
        self.digital_object_uri = self.data["digitally_shown_by"][0]["id"]
        self.digital_object = DigitalObject(self.digital_object_uri)


class DigitalObject(RObject):
    def parse(self):
        print(self.data)
        self.imageurl = self.data["access_point"][0]["id"]
        self.imageurl_small = self.imageurl.replace("max", "800")


def europeana_search(query: str):
    uri = f"https://api.europeana.eu/record/v2/search.json?wskey={settings.EUROPEANA_API_KEY}&query={query}"
    headers = {
        "Accept": "application/json",
        "X-Api-Key": settings.EUROPEANA_API_KEY
    }
    data = requests.get(uri, headers=headers).json()
    items = []
    for item in data["items"]:
        print(item)
        if item["dataProvider"][0] != "Rijksmuseum":
            continue
        items.append(item["edmIsShownAt"][0])  # Handle
    return items


def resolve_handle(handle: str):
    handle = handle.replace("hdl.handle.net/", "hdl.handle.net/api/handles/")
    data = requests.get(handle).json()
    return data["values"][0]["data"]["value"]


def search_by_iconclass(iconclass: str):
    items = [resolve_handle(x) for x in europeana_search(f"iconclass:{iconclass}")]
    return items
