/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react'
import './App.css'
import Layout_1 from './layouts/Layout_1'
import Layout_2 from './layouts/Layout_2'
import data_de from './data/de.json'
import data_fr from './data/fr.json'
import data_en from './data/en.json'

function App() {

	const [selectedLayout, setSelectedLayout] = useState(localStorage.getItem('selectedLayout') || '1');
	const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'de');

	const returnData = (_language: string) => {
		switch (_language) {
			case 'de':
				return data_de;
			case 'fr':
				return data_fr;
			case 'en':
				return data_en;
			default:
				return data_de;
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

	const returnLayout = (_layout: string, _data: any) => {
		switch (_layout) {
			case '1':
				return <Layout_1 data={_data} />;
			case '2':
				return <Layout_2 data={_data} />;
			default:
				return <Layout_1 data={_data} />;
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
			{returnLayout(selectedLayout, data)}
		</>
	)
}

export default App;