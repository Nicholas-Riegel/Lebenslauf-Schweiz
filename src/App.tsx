import { useState } from 'react'
import './App.css'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'
import DataDE from './data/Data.de.json'
import DataFR from './data/Data.fr.json'

function App() {

	const [layout, setLayout] = useState(localStorage.getItem('layout') || '1');
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'de');
	const data = language === 'fr' ? DataFR : DataDE;

	const handleLayoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLayout = e.target.value
		setLayout(newLayout)
		localStorage.setItem('layout', newLayout)
	}
	
	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLanguage = e.target.value
		setLanguage(newLanguage)
		localStorage.setItem('language', newLanguage)
	}

	return (
		<>
			{/* Floating Language Selector */}
			<div className="language-selector">
				<label htmlFor="language-select">Language:</label>
				<select
					id="language-select"
					value={language}
					onChange={handleLanguageChange}>
					<option value="de">Deutsch</option>
					<option value="fr">Francais</option>
				</select>
			</div>
			
			{/* Floating Layout Selector */}
			<div className="layout-selector">
				<label htmlFor="layout-select">Layout:</label>
				<select
					id="layout-select"
					value={layout}
					onChange={handleLayoutChange}>
					<option value="1">Layout 1</option>
					<option value="2">Layout 2</option>
				</select>
			</div>

			{/* Layout */}
			{layout === '1' 
				? <Layout1 data={data} /> 
				: <Layout2 data={data} />}
		</>
	)
}

export default App;