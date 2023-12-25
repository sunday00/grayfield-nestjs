import { Navigate, Route, Routes } from 'react-router'
import Article from './article'
import Series from './series'

const Articles = () => {
  return (
    <>
      <Routes>
        <Route path="series/*" element={<Series />} />
        <Route path="article/*" element={<Article />} />

        <Route path="/" element={<Navigate to="article" replace />} />
      </Routes>
    </>
  )
}

export default Articles
