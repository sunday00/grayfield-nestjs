import { useEffect, useState } from 'react'
import { setByWindowSizeUtil } from '../../utils/setByWindowSize.util.ts'
import { container } from '../../constants/size.tsx'
import routes from '../../routes.tsx'
import NavItemGroup from './components/NavItemGroup.tsx'
import { useLocation } from 'react-router'
import MobileSidebar from './Mobile.sidebar.tsx'
import WideSidebar from './Wide.sidebar.tsx'

const Sidebar = () => {
  const location = useLocation()
  const [alwaysOpen, setAlwaysOpen] = useState(false)

  useEffect(() => {
    setByWindowSizeUtil<boolean>(container.bp, setAlwaysOpen, [true, false])

    window.addEventListener('resize', () =>
      setByWindowSizeUtil<boolean>(container.bp, setAlwaysOpen, [true, false]),
    )
  }, [])

  const openIdx: number[] = []

  const menus = routes.map((r, idx) => {
    if (location.pathname.includes(r.group)) openIdx.push(idx)

    return (
      <NavItemGroup
        groupItem={r}
        key={r.name}
        pathName={location.pathname.split('/')}
      />
    )
  })

  return (
    <>
      {alwaysOpen ? (
        <WideSidebar openIdx={openIdx} menus={menus} />
      ) : (
        <MobileSidebar openIdx={openIdx} menus={menus} />
      )}
    </>
  )
}

export default Sidebar
