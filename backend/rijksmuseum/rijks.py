import requests
import rdflib

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


class HumanMadeObject(RObject):
    name: None
    visual_item: None

    def _get_name(self):
        for identifier in self.data["identified_by"]:
            if identifier["type"] == "Name":
                return identifier["content"]

    """An actual art object - can be found in online catalogue"""
    def parse(self):
        self.visual_item_uri = self.data["shows"][0]["id"]
        print(self.visual_item_uri)
        self.visual_item = VisualItem(self.visual_item_uri)
        self.name = self._get_name()
        print(self.name)

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
            self.iconclass.append(c["equivalent"][0]["id"])
        print(self.iconclass)


class DigitalObject(RObject):
    pass
