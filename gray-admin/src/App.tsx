import { Navigate, Route, Routes } from 'react-router'
import Main from './layouts/main'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
