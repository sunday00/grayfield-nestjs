import { Navigate, Route, Routes } from 'react-router'
import Home from '../../views/home'
import Articles from '../../views/articles'
import Sidebar from '../../components/sidebar'
import { Grid, GridItem } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { setByWindowSize } from '../../utils/setByWindowSize.ts'
import { spacing, container } from '../../constants/size.tsx'

const Main = () => {
  const [alwaysSideOpen, setAlwaysSideOpen] = useState(false)
  useEffect(() => {
    setByWindowSize<boolean>(container.bp, setAlwaysSideOpen, [true, false])

    window.addEventListener('resize', () =>
      setByWindowSize<boolean>(container.bp, setAlwaysSideOpen, [true, false]),
    )
  }, [])

  return (
    <Grid templateColumns={alwaysSideOpen ? '320px 1fr' : '1fr'}>
      <GridItem>
        <Sidebar />
      </GridItem>
      <GridItem p={spacing.md}>
        <h1>MainLayout</h1>
        {/*top nav*/}
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="articles/*" element={<Articles />}></Route>

          <Route path="/" element={<Navigate to="home" replace />} />
        </Routes>
      </GridItem>
    </Grid>
  )
}

export default Main
