import './Layout1.css'
import Data from '../data/Data.json'

const Layout1 = () => {
  
	const { image, sidebar, header, summary, employment, education } = Data;

	return (
		<div className='container'>
			
			{/* Sidebar */}
			<aside className="sidebar">
		
				{/* Profile Picture */}
				<div className="profile-picture">
					<img src={image.path} alt={image.alt} />
				</div>

				{/* Sidebar Sections */}
				{sidebar.sections.map((section) => (
					<section key={section.type} className={`sidebar-section ${section.type}`}>
						<h3 className="sidebar-title">{section.title}</h3>
						{section.items.map((item, i) => (
							<p key={i}>
								<strong>{item.label}:</strong>{' '}
								{item.url
									? (<a href={item.url} target="_blank">{item.value}</a>)
									: (item.value)
								}
							</p>
						))}
					</section>
				))}
			</aside>

			<main>

				{/* Header with Name */}
				<header className="header">

					<h1>{header.name}</h1>

					<h3 className="job-title">{header.title}</h3>

				</header>

				{/* Professional Summary */}
				<section className="main-section">

					<h2 className="section-title">{summary.title}</h2>

					<p>{summary.content}</p>

				</section>

				{/* Employment */}
				<section className="main-section">

					<h2 className="section-title">{employment.title}</h2>
					{employment.jobs.map((item, i) => (
						<article key={i} className="job-entry">
							<div className="job-header">
								<h3 className="job-title">{item.title}</h3>
								<span className="job-date">{item.dates}</span>
							</div>
							<h4 className="company-name">{item.company}</h4>
							<ul>
								{item.accomplishments.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</article>
					))}
				
				</section>
				
				{/* Education */}
				<section className="main-section">

					<h2 className="section-title">{education.title}</h2>
					
					{education.degrees.map((item, i) => (
						<article key={i} className="education-entry">
							<div className="edu-header">
								<h3 className="degree">{item.degree}</h3>
								<span className="edu-date">{item.year}</span>
							</div>
							<h4 className="school-name">{item.institution}</h4>
						</article>
					))}

				</section>
			</main>
		</div>
	)
}

export default Layout1