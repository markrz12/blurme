"""The home page of the app."""

from blurme import styles
from blurme.templates import template

import reflex as rx


@template(route="/", title="Home", image="/github.svg")
def index() -> rx.Component:
    """The home page.

    Returns:
        The UI for the home page.
    """
    return rx.vstack(
        rx.heading("Witaj w BlurMe!", font_size="3em"),
        rx.text("Jakiś tekst"),
        )

