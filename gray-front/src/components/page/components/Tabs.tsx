import { IconType } from 'react-icons'
import {
  Tabs as ChakraTabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useImageStore } from '../../../stores/medias/image.store.tsx'
import { ReactElement } from 'react'
import { useArticleStore } from '../../../stores/articles/article.store.tsx'
import { useSeriesStore } from '../../../stores/articles/series.store.tsx'
const Tabs = ({
  routes,
  current,
}: {
  routes: { path: string; icon: IconType }[]
  current: number
}) => {
  const resetImage = useImageStore((state) => state.resetItems)
  const resetArticle = useArticleStore((state) => state.resetItems)
  const resetSeries = useSeriesStore((state) => state.resetItems)

  const handleReset = async () => {
    resetImage()
    resetArticle()
    resetSeries()
  }

  const panels: ReactElement[] = []

  const tabs = routes.map((t, i) => {
    panels.push(<TabPanel key={i}></TabPanel>)

    return (
      <Link to={t.path} key={i} onClick={handleReset}>
        <Tab>
          <t.icon />
        </Tab>
      </Link>
    )
  })

  return (
    <ChakraTabs variant="enclosed" defaultIndex={current}>
      <TabList>{tabs}</TabList>
      <TabPanels>{panels}</TabPanels>
    </ChakraTabs>
  )
}

export default Tabs
