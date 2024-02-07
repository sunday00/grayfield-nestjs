import { Box, HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { NavItem as ItemType } from '../../../types/route-nav.tsx'

const NavItem = ({
  item,
  isCurrent,
}: {
  item: ItemType
  isCurrent: boolean
}) => {
  return (
    <Link to={item.path} key={item.name}>
      <HStack>
        <Box>{item.icon}</Box>
        <Box
          fontWeight={isCurrent ? 'bold' : ''}
          color={isCurrent ? 'primary.600' : 'natural.font.900'}
        >
          {item.name}
        </Box>
      </HStack>
    </Link>
  )
}

export default NavItem
