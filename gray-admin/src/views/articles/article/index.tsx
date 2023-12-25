import { Navigate, Route, Routes } from 'react-router'
import ArticleList from './pages/ArticleList.tsx'
import ArticleItem from './pages/ArticleItem.tsx'

const Article = () => {
  return (
    <>
      <Routes>
        <Route path="list" element={<ArticleList />} />
        <Route path="show/:id" element={<ArticleItem />} />

        <Route path="/" element={<Navigate to="list" replace />} />
      </Routes>
    </>
  )
}

export default Article
