import React from 'react'
// Step 1.Import drawer from Chakra UI

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
  } from '@chakra-ui/react'

// Step 1.1  link tag from react-router-dom
import {Link} from "react-router-dom";

// Step 1.2 Import BiMenuAltRight From react-icons
import {BiMenuAltRight} from "react-icons/bi";

const Header = () => {
  return (
    <>
    <Button><BiMenuAltRight size={"20"}/>
    </Button>

    </>
    )
}

export default Header