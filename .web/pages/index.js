import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { ColorModeContext, EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Box, Heading, HStack, Image, Link, List, ListItem, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, OrderedList, Spacer, Text, VStack } from "@chakra-ui/react"
import { getEventURL } from "/utils/state.js"
import NextLink from "next/link"
import { HamburgerIcon } from "@chakra-ui/icons"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents())
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getEventURL().href}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <HStack alignItems={`flex-start`} sx={{"transition": "left 0.5s, width 0.5s", "position": "relative"}}>
  <Box sx={{"display": ["none", "none", "block"], "minWidth": "20em", "height": "100%", "position": "sticky", "top": "0px", "borderRight": "1px solid #F4F3F6"}}>
  <VStack sx={{"height": "100dvh"}}>
  <HStack sx={{"width": "100%", "borderBottom": "1px solid #F4F3F6", "padding": "1em"}}>
  <Image src={`/icon.png`} sx={{"height": "4.5em"}}/>
  <Spacer/>
</HStack>
  <VStack alignItems={`flex-start`} sx={{"width": "100%", "overflowY": "auto", "padding": "1em"}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/strona g\\u0142\\u00f3wna") || (((state.router.page.path === "/") && "Strona g\\u0142\\u00f3wna") === "Home")) ? `#fcd2e7` : `transparent`, "color": isTrue((state.router.page.path === "/strona g\\u0142\\u00f3wna") || (((state.router.page.path === "/") && "Strona g\\u0142\\u00f3wna") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em", "height": "2em"}}>
  <Text>
  {`Strona główna`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/dashboard") || (((state.router.page.path === "/") && "Dashboard") === "Home")) ? `#fcd2e7` : `transparent`, "color": isTrue((state.router.page.path === "/dashboard") || (((state.router.page.path === "/") && "Dashboard") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em", "height": "2em"}}>
  <Text>
  {`Dashboard`}
</Text>
</HStack>
</Link>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  <HStack sx={{"bg": isTrue((state.router.page.path === "/settings") || (((state.router.page.path === "/") && "Settings") === "Home")) ? `#fcd2e7` : `transparent`, "color": isTrue((state.router.page.path === "/settings") || (((state.router.page.path === "/") && "Settings") === "Home")) ? `#1A1060` : `black`, "borderRadius": "0.375rem", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "width": "100%", "paddingX": "1em", "height": "2em"}}>
  <Text>
  {`Settings`}
</Text>
</HStack>
</Link>
</VStack>
  <Spacer/>
</VStack>
</Box>
  <Box sx={{"paddingTop": "5em", "paddingX": ["auto", "2em"], "flex": "1"}}>
  <Box sx={{"alignItems": "flex-start", "boxShadow": "0px 0px 0px 1px rgba(84, 82, 95, 0.14)", "borderRadius": "0.375rem", "padding": "1em", "marginBottom": "2em"}}>
  <VStack>
  <Heading sx={{"fontSize": "3em", "marginBottom": "25px", "backgroundImage": "linear-gradient(271.68deg, #7566fe 0.75%, #f96caf 88.52%)", "backgroundClip": "text", "padding": "10px"}}>
  {`Witaj w BlurMe!`}
</Heading>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "bold", "marginTop": "10px", "marginBottom": "10px"}}>
  {`Dlaczego Blurme?`}
</Text>
  <List sx={{"textAlign": "left"}}>
  <ListItem>
  <Text as={`b`}>
  {`Prywatność: `}
</Text>
  {`Nasza aplikacja zapewnia pełną ochronę prywatności, eliminując ryzyko identyfikacji osób niezwiązanych z anonimizacją.`}
</ListItem>
  <ListItem>
  <Text as={`b`}>
  {`Prost obsługa: `}
</Text>
  {`Intuicyjny interfejs użytkownika sprawia, że korzystanie z Blurme jest łatwe dla każdego.`}
</ListItem>
  <ListItem>
  <Text as={`b`}>
  {`Elastyczność:  `}
</Text>
  {`Wybierz, która twarz na zdjęciu ma pozostać nieruszoną, a my zadbasz o resztę. Indywidualizuj swoje zdjęcia zgodnie z własnymi potrzebami.`}
</ListItem>
</List>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "bold", "marginTop": "20px", "marginBottom": "10px"}}>
  {`Jak to działa?`}
</Text>
  <OrderedList>
  <ListItem>
  <Text as={`b`}>
  {`Wgraj Zdjęcie: `}
</Text>
  {`Prosty proces rozpoczyna się od dodania zdjęcia, które chcesz anonimizować.`}
</ListItem>
  <ListItem>
  <Text as={`b`}>
  {`Zaznacz Twarz do Ochrony: `}
</Text>
  {`Oznacz twarz, którą chcesz zachować.`}
</ListItem>
  <ListItem>
  <Text as={`b`}>
  {`Anonimizuj Resztę: `}
</Text>
  {`Naciśnij przycisk, a Blurme automatycznie zastosuje efekt rozmycia do wszystkich obszarów poza zaznaczoną twarzą.`}
</ListItem>
  <ListItem>
  <Text as={`b`}>
  {`Pobierz i Podziel Się: `}
</Text>
  {`Gotowe! Pobierz anonimizowane zdjęcie i dziel się nim bez obaw o prywatność.`}
</ListItem>
</OrderedList>
  <Text sx={{"fontSize": "1.5em", "fontWeight": "bold", "marginTop": "20px", "marginBottom": "10px"}}>
  {`Do Czego Może Ci Się Przydać?`}
</Text>
  <List>
  <ListItem sx={{"textAlign": "left"}}>
  <Text as={`b`}>
  {`Ochrona Tożsamości: `}
</Text>
  {`Idealne do usuwania twarzy nieznajomych lub przypadkowych przechodniów z tła.`}
</ListItem>
  <ListItem sx={{"textAlign": "left"}}>
  <Text as={`b`}>
  {`Zachowanie Prywatności: `}
</Text>
  {`Przydatne w sytuacjach, gdzie chcesz udostępnić zdjęcia publicznie, ale z zachowaniem prywatności pewnych osób.`}
</ListItem>
  <ListItem sx={{"textAlign": "left"}}>
  <Text as={`b`}>
  {`Kreatywność: `}
</Text>
  {`Wyraź swoją kreatywność, zachowując jednocześnie istotne elementy na zdjęciach.`}
</ListItem>
</List>
  <Text sx={{"textAlign": "center"}}>
  {`Blurme to więcej niż tylko narzędzie - to rozwiązanie, które pozwala Ci kontrolować, jak prezentujesz swoje zdjęcia online, zachowując jednocześnie pełną prywatność. Przekształć swoje obrazy już teraz!`}
</Text>
</VStack>
</Box>
</Box>
  <Box sx={{"position": "fixed", "right": "1.5em", "top": "1.5em", "zIndex": "500"}}>
  <Menu>
  <MenuButton sx={{"width": "3em", "height": "3em", "backgroundColor": "white", "border": "1px solid #F4F3F6", "borderRadius": "0.375rem"}}>
  <HamburgerIcon sx={{"size": "4em", "color": "black"}}/>
</MenuButton>
  <MenuList>
  <MenuItem sx={{"_hover": {"bg": "#fcd2e7"}}}>
  <Link as={NextLink} href={`/`} sx={{"width": "100%"}}>
  {`Strona główna`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#fcd2e7"}}}>
  <Link as={NextLink} href={`/dashboard`} sx={{"width": "100%"}}>
  {`Dashboard`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#fcd2e7"}}}>
  <Link as={NextLink} href={`/settings`} sx={{"width": "100%"}}>
  {`Settings`}
</Link>
</MenuItem>
  <MenuDivider/>
  <MenuItem sx={{"_hover": {"bg": "#fcd2e7"}}}>
  <Link as={NextLink} href={`https://github.com/reflex-dev`} sx={{"width": "100%"}}>
  {`About`}
</Link>
</MenuItem>
  <MenuItem sx={{"_hover": {"bg": "#fcd2e7"}}}>
  <Link as={NextLink} href={`mailto:founders@=reflex.dev`} sx={{"width": "100%"}}>
  {`Contact`}
</Link>
</MenuItem>
</MenuList>
</Menu>
</Box>
</HStack>
  <NextHead>
  <title>
  {`Strona główna`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`/github.svg`} property={`og:image`}/>
  <meta content={`width=device-width, shrink-to-fit=no, initial-scale=1`} name={`viewport`}/>
</NextHead>
</Fragment>
  )
}
