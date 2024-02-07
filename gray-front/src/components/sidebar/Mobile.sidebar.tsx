import {
  Accordion,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { spacing } from '../../constants/size.tsx'
import { HamburgerIcon } from '@chakra-ui/icons'
import BlogHome from './components/BlogHome.tsx'
import React from 'react'

const MobileSidebar = ({
  openIdx,
  menus,
}: {
  openIdx: number[]
  menus: React.JSX.Element[]
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box p={spacing.md}>
        <Button colorScheme="blue" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <a href="/">Grayfield Blog Admin</a>
          </DrawerHeader>
          <DrawerBody p="0">
            <Accordion
              allowMultiple
              defaultIndex={openIdx.length === 0 ? [0] : openIdx}
            >
              {menus}
            </Accordion>
            <BlogHome />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileSidebar
