import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { spacing } from '../../constants/size.tsx'

const TopNav = () => {
  return (
    <Box mb={spacing.md}>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default TopNav
