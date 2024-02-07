import { Navigate, Route, Routes } from 'react-router'
import Home from '../../views/home'
import Sidebar from '../../components/sidebar'
import { Grid, GridItem, Spacer } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { setByWindowSizeUtil } from '../../utils/setByWindowSize.util.ts'
import { spacing, container } from '../../constants/size.tsx'
import TopNav from '../../components/top-nav'

const Main = () => {
  const [alwaysSideOpen, setAlwaysSideOpen] = useState(false)
  useEffect(() => {
    setByWindowSizeUtil<boolean>(container.bp, setAlwaysSideOpen, [true, false])

    window.addEventListener('resize', () =>
      setByWindowSizeUtil<boolean>(container.bp, setAlwaysSideOpen, [
        true,
        false,
      ]),
    )
  }, [])

  return (
    <Grid templateColumns={alwaysSideOpen ? '240px 1fr 120px' : '1fr'}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem p={spacing.md}>
        <TopNav />
        <Routes>
          <Route path="home" element={<Home />}></Route>

          <Route path="/" element={<Navigate to="home" replace />} />
        </Routes>
      </GridItem>
      <GridItem>
        <Spacer />
      </GridItem>
    </Grid>
  )
}

export default Main
