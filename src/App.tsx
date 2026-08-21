import { useState } from 'react'
import './App.css'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'
import DataDE from './data/Data.de.json'
import DataFR from './data/Data.fr.json'

function App() {

	const [selectedLayout, setSelectedLayout] = useState(localStorage.getItem('selectedLayout') || '1');
	const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'de');
	const data = selectedLanguage === 'fr' ? DataFR : DataDE;

	const handleLayoutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLayout = e.target.value
		setSelectedLayout(newLayout)
		localStorage.setItem('selectedLayout', newLayout)
	}
	
	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLanguage = e.target.value
		setSelectedLanguage(newLanguage)
		localStorage.setItem('selectedLanguage', newLanguage)
	}

	return (
		<>
			{/* Floating Language Selector */}
			<div className="language-selector">
				<label htmlFor="language-select">Language:</label>
				<select
					id="language-select"
					value={selectedLanguage}
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
					value={selectedLayout}
					onChange={handleLayoutChange}>
					<option value="1">Layout 1</option>
					<option value="2">Layout 2</option>
				</select>
			</div>

			{/* Layout */}
			{selectedLayout === '1' 
				? <Layout1 data={data} /> 
				: <Layout2 data={data} />}
		</>
	)
}

export default App;