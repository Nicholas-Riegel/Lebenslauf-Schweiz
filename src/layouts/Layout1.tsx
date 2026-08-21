/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Layout1.module.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout1 = ({ data }: { data: any }) => {
  
	const { image, sidebar, header, summary, employment, education } = data;

	return (
		<div className={styles['container']}>
			
			{/* Sidebar */}
			<aside className={styles['sidebar']}>
		
				{/* Profile Picture */}
				<div className={styles['profile-picture']}>
					<img src={image.path} alt={image.alt} />
				</div>

				{/* Sidebar Sections */}
				{sidebar.sections.map((section: any) => (
				<section key={section.type} className={`${styles['sidebar-section']} ${styles[section.type]}`}>
						<h3 className={styles['sidebar-title']}>{section.title}</h3>
						{section.items.map((item: any, i: number) => (
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
				<header className={styles['header']}>

					<h1>{header.name}</h1>

					<h3 className={styles['job-title']}>{header.title}</h3>

			</header>

		{/* Professional Summary */}
		<section className={styles['main-section']}>

			<h2 className={styles['section-title']}>{summary.title}</h2>

			<p>{summary.content}</p>

		</section>

		{/* Employment */}
		<section className={styles['main-section']}>

			<h2 className={styles['section-title']}>{employment.title}</h2>
			{employment.jobs.map((item: any, i: number) => (
				<article key={i} className={styles['job-entry']}>
					<div className={styles['job-header']}>
						<h3 className={styles['job-title']}>{item.title}</h3>
						<span className={styles['job-date']}>{item.dates}</span>
					</div>
					<h4 className={styles['company-name']}>{item.company}</h4>
					<ul>
						{item.accomplishments.map((item: any, i: number) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</article>
			))}
		
		</section>
				
				{/* Education */}
				<section className={styles['main-section']}>

					<h2 className={styles['section-title']}>{education.title}</h2>
					
					{education.degrees.map((item: any, i: number) => (
						<article key={i} className={styles['education-entry']}>
							<div className={styles['edu-header']}>
								<h3 className={styles.degree}>{item.degree}</h3>
								<span className={styles['edu-date']}>{item.year}</span>
							</div>
							<h4 className={styles['school-name']}>{item.institution}</h4>
						</article>
					))}

				</section>
			</main>
		</div>
	)
}

export default Layout1