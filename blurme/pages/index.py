"""The home page of the app."""

from blurme import styles
from blurme.templates import template

import reflex as rx


@template(route="/", title="Strona główna", image="/github.svg")
def index() -> rx.Component:
    """The home page.

    Returns:
        The UI for the home page.
    """
    return rx.vstack(
        rx.heading("Witaj w BlurMe!", font_size="3em", margin_bottom="25px", background_image="linear-gradient(271.68deg, #7566fe 0.75%, #f96caf 88.52%)", background_clip="text", padding = "10px"),
        rx.text("Dlaczego Blurme?", font_size="1.5em", font_weight="bold", margin_top="10px", margin_bottom="10px"),
        rx.list(
            rx.list_item(rx.text("Prywatność: ",as_="b"), "Nasza aplikacja zapewnia pełną ochronę prywatności, eliminując ryzyko identyfikacji osób niezwiązanych z anonimizacją."),
            rx.list_item(rx.text("Prost obsługa: ",as_="b"),"Intuicyjny interfejs użytkownika sprawia, że korzystanie z Blurme jest łatwe dla każdego."),
            rx.list_item(rx.text("Elastyczność:  ",as_="b"),"Wybierz, która twarz na zdjęciu ma pozostać nieruszoną, a my zadbasz o resztę. Indywidualizuj swoje zdjęcia zgodnie z własnymi potrzebami."),
            text_align="left"),
        rx.text("Jak to działa?", font_size="1.5em", font_weight="bold", margin_top="20px", margin_bottom="10px"),
        rx.ordered_list(
            rx.list_item(rx.text("Wgraj Zdjęcie: ",as_="b"), "Prosty proces rozpoczyna się od dodania zdjęcia, które chcesz anonimizować."),
            rx.list_item(rx.text("Zaznacz Twarz do Ochrony: ",as_="b"), "Oznacz twarz, którą chcesz zachować."),
            rx.list_item(rx.text("Anonimizuj Resztę: ",as_="b"), "Naciśnij przycisk, a Blurme automatycznie zastosuje efekt rozmycia do wszystkich obszarów poza zaznaczoną twarzą."),
            rx.list_item(rx.text("Pobierz i Podziel Się: ",as_="b"), "Gotowe! Pobierz anonimizowane zdjęcie i dziel się nim bez obaw o prywatność.")
        ),
        rx.text("Do Czego Może Ci Się Przydać?", font_size="1.5em", font_weight="bold", margin_top="20px", margin_bottom="10px"),
        rx.list(
            rx.list_item(rx.text("Ochrona Tożsamości: ",as_="b"),"Idealne do usuwania twarzy nieznajomych lub przypadkowych przechodniów z tła.", text_align="left"),
            rx.list_item(rx.text("Zachowanie Prywatności: ",as_="b"),"Przydatne w sytuacjach, gdzie chcesz udostępnić zdjęcia publicznie, ale z zachowaniem prywatności pewnych osób.", text_align="left"),
            rx.list_item(rx.text("Kreatywność: ",as_="b"),"Wyraź swoją kreatywność, zachowując jednocześnie istotne elementy na zdjęciach.", text_align="left"),
            ),
        rx.text("Blurme to więcej niż tylko narzędzie - to rozwiązanie, które pozwala Ci kontrolować, jak prezentujesz swoje zdjęcia online, zachowując jednocześnie pełną prywatność. Przekształć swoje obrazy już teraz!", text_align = "center"),
    )
