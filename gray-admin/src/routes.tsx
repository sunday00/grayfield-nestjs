import { Icon } from '@chakra-ui/icons'
import { MdHome, MdLibraryBooks, MdNewspaper } from 'react-icons/md'
import { IoMdPaper } from 'react-icons/io'

const routes = [
  {
    group: 'homes',
    name: 'Home',
    icon: <Icon as={MdHome} className="mr-2" />,
    items: [
      {
        name: 'home',
        path: 'home',
        icon: <MdHome className="h-6 w-6" />,
      },
    ],
  },
  {
    group: 'articles',
    name: 'ManageArticle',
    icon: <Icon as={MdNewspaper} className="mr-2" />,
    items: [
      {
        name: 'series',
        path: 'articles/series',
        icon: <MdLibraryBooks className="h-6 w-6" />,
      },
      {
        name: 'article',
        path: 'articles/article',
        icon: <IoMdPaper className="h-6 w-6" />,
      },
    ],
  },
]
export default routes
