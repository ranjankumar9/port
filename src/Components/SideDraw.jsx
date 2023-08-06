import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
  import React from 'react';
  import { RxHamburgerMenu } from "react-icons/rx";

function SideDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
          <RxHamburgerMenu size="30" />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>

            </DrawerHeader>
  
            <DrawerBody>
            <p>Home</p>
              <p>About</p>
              <p>Skills</p>
              <p>Project</p>
              <p>Contact</p>
              <p>Resume</p>
            </DrawerBody>
  
            <DrawerFooter>
              
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default SideDrawer;