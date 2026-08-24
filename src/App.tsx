import { useState } from 'react'
import './App.css'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'
import DataDE from './data/Data.de.json'
import DataFR from './data/Data.fr.json'
import DataEN from './data/Data.en.json'

function App() {

	const [layout, setLayout] = useState(localStorage.getItem('layout') || '1');
	const [language, setLanguage] = useState(localStorage.getItem('language') || 'de');

	const selectLanguage = () => {
		switch (language) {
			case 'de':
				return DataDE;
			case 'fr':
				return DataFR;
			case 'en':
				return DataEN;
			default:
				return DataDE;
		}
	}

	const data = selectLanguage();

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

	const renderLayout = () => {
		switch (layout) {
			case '1':
				return <Layout1 data={data} />;
			case '2':
				return <Layout2 data={data} />;
			default:
				return <Layout1 data={data} />;
		}
	}
	
	return (
		<>
			{/* Language Selector */}
			<div className="language-selector">
				<label htmlFor="language-select">Language:</label>
				<select
					id="language-select"
					value={language}
					onChange={handleLanguageChange}>
					<option value="de">Deutsch</option>
					<option value="fr">Français</option>
					<option value="en">English</option>
				</select>
			</div>
			
			{/* Layout Selector */}
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
			{renderLayout()}
		</>
	)
}

export default App;