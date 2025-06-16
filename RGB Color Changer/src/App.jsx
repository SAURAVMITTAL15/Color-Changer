import { Route, Routes } from 'react-router'
// import './App.css'
import ColorChanger from "./components/ColorChanger.jsx";

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<ColorChanger />} />
      </Routes>
    </>
  )
}

export default App
