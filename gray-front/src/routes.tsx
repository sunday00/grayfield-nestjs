import {
  MdHome,
  MdLibraryBooks,

} from 'react-icons/md'
import { FcHome, FcNews } from 'react-icons/fc'

const routes = [
  {
    group: 'home',
    name: 'Home',
    icon: <FcHome />,
    items: [
      {
        name: 'home',
        path: 'home',
        icon: <MdHome />,
      },
    ],
  },
  {
    group: 'dev',
    name: 'Develop',
    icon: <FcNews />,
    items: [
      {
        name: 'series',
        path: 'articles/series',
        icon: <MdLibraryBooks />,
      },
      {
        name: 'mono',
        path: 'articles/mono',
        icon: <MdLibraryBooks />,
      },
    ],
  },
  {
    group: 'essay',
    name: 'Essay',
    icon: <FcNews />,
    items: [
      {
        name: 'mono',
        path: 'articles/essay',
        icon: <MdLibraryBooks />,
      },
    ],
  },
]
export default routes
