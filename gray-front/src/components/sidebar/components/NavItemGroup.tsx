import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from '@chakra-ui/react'
import { GroupItem } from '../../../types/route-nav.tsx'
import { spacing } from '../../../constants/size.tsx'
import NavItem from './NavItem.tsx'

const NavItemGroup = ({
  groupItem,
  pathName,
}: {
  groupItem: GroupItem
  pathName: string[]
}) => {
  const groupPath = pathName[1]
  const itemPath = pathName[2] ? `${groupPath}/${pathName[2]}` : groupPath
  const child = groupItem.items.map((i) => {
    return <NavItem key={i.name} item={i} isCurrent={itemPath === i.path} />
  })

  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          bg={groupPath === groupItem.group ? 'primary.100' : 'natural.bg.100'}
        >
          <Box
            as="span"
            display="flex"
            flex="1"
            textAlign="left"
            alignItems="center"
            gap={spacing.sm}
          >
            <span>{groupItem.icon}</span>
            <span>{groupItem.name}</span>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={spacing.md}>
        <VStack pl={spacing.md} align="stretch">
          {child}
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default NavItemGroup
