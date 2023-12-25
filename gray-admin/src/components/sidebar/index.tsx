import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { setByWindowSize } from '../../utils/setByWindowSize.ts'
import { HamburgerIcon } from '@chakra-ui/icons'
import { container, spacing } from '../../constants/size.tsx'

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [alwaysOpen, setAlwaysOpen] = useState(false)

  useEffect(() => {
    setByWindowSize<boolean>(container.bp, setAlwaysOpen, [true, false])

    window.addEventListener('resize', () =>
      setByWindowSize<boolean>(container.bp, setAlwaysOpen, [true, false]),
    )
  }, [])

  return (
    <>
      <Box p={spacing.md}>
        <Button colorScheme="blue" onClick={onOpen}>
          <HamburgerIcon />
        </Button>
      </Box>
      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={alwaysOpen ? alwaysOpen : isOpen}
        size="xs"
      >
        {alwaysOpen ? <></> : <DrawerOverlay />}
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            Grayfield Admin System
          </DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Sidebar
