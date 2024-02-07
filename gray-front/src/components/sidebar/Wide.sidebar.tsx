import React from 'react'
import { Accordion, Box, Divider } from '@chakra-ui/react'
import { spacing } from '../../constants/size.tsx'

const WideSidebar = ({
  openIdx,
  menus,
}: {
  openIdx: number[]
  menus: React.JSX.Element[]
}) => {
  return (
    <>
      <Box
        borderBottomWidth="1px"
        fontSize="xl"
        p={spacing.md}
        fontWeight="bold"
      >
        <header>
          <a href="/">Grayfield Blog Admin</a>
        </header>
      </Box>
      <Divider />
      <Accordion
        allowMultiple
        defaultIndex={openIdx.length === 0 ? [0] : openIdx}
      >
        {menus}
      </Accordion>
    </>
  )
}

export default WideSidebar
