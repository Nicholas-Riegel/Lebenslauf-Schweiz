import { useState } from 'react'
import './App.css'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'

function App() {
  const [selectedLayout, setSelectedLayout] = useState(() => {
    return localStorage.getItem('selectedLayout') || '1'
  })

  const handleLayoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLayout = e.target.value
    setSelectedLayout(newLayout)
    localStorage.setItem('selectedLayout', newLayout)
  }

  const renderLayout = () => {
    switch (selectedLayout) {
      case '1':
        return <Layout1 />
      case '2':
        return <Layout2 />
      default:
        return <Layout1 />
    }
  }

  return (
    <>
      {/* Floating Layout Selector */}
      <div className="layout-selector">
        <label htmlFor="layout-select">Layout:</label>
        <select
          id="layout-select"
          value={selectedLayout}
          onChange={handleLayoutChange}
        >
          <option value="1">Layout 1</option>
          <option value="2">Layout 2</option>
        </select>
      </div>

      {renderLayout()}
    </>
  )
}

export default App
