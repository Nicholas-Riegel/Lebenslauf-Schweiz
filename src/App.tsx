import { useState } from 'react'
import './App.css'
import Layout1 from './layouts/Layout1'
import Layout2 from './layouts/Layout2'
import DataDE from './data/Data.de.json'
import DataFR from './data/Data.fr.json'
import DataEN from './data/Data.en.json'

function App() {

	const [selectedLayout, setSelectedLayout] = useState(localStorage.getItem('selectedLayout') || '1');
	const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'de');

	const returnData = (arg: string) => {
		switch (arg) {
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

	const data = returnData(selectedLanguage);

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

	const returnLayout = (arg: string) => {
		switch (arg) {
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
					value={selectedLanguage}
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
					value={selectedLayout}
					onChange={handleLayoutChange}>
					<option value="1">Layout 1</option>
					<option value="2">Layout 2</option>
				</select>
			</div>

			{/* Layout */}
			{returnLayout(selectedLayout)}
		</>
	)
}

export default App;