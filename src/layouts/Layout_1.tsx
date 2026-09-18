// disabling no-explicit-any because nested json more trouble than worth for this app
/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './Layout_1.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMobileScreenButton, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Layout1 = ({ data }: { data: any }) => {
  
	const { 
		image, 
		personal_data, 
		contact, 
		languages, 
		header, 
		summary, 
		skills, 
		employment, 
		education 
	} = data;

	return (
		<div className={styles['container']}>
			
			{/* Sidebar */}
			<aside className={styles['sidebar']}>
				
				{/* Background Square */}
				<div className={styles['background-square']}></div>

				{/* Profile Picture */}
				<div className={styles['profile-picture']}>
					<img src={image.path} alt={image.alt} />
				</div>

				{/* Personal Data */}
				<section className={`${styles['sidebar-section']}`}>
					<h2 className={`${styles['sidebar-title']}`}>{personal_data.title}</h2>
					{personal_data.items.map((item: any, i: number) => (
						<p key={i}>{item.label}: {item.value}</p>
					))}
				</section>

				{/* Contact */}
				<section className={`${styles['sidebar-section']}`}>
					<h2 className={`${styles['sidebar-title']}`}>{contact.title}</h2>
					<FontAwesomeIcon icon={faLocationDot} />
					<p>{contact.location}</p>
					<FontAwesomeIcon icon={faMobileScreenButton} />
					<p>{contact.phone}</p>
					<FontAwesomeIcon icon={faEnvelope} />
					<p>{contact.email}</p>
				</section>
				
				{/* Languages */}
				<section className={`${styles['sidebar-section']}`}>
					<h2 className={`${styles['sidebar-title']}`}>{languages.title}</h2>
					{languages.items.map((item: any, i: number) => (
						<p key={i}>{item.label}: {item.value}</p>
					))}
				</section>

				{/* Soft Skills */}

			</aside>

			<main>

				{/* Header with Name */}
				<header className={styles['header']}>
					<h1>{header.name}</h1>
				</header>

				{/* Professional Summary */}
				<section className={styles['main-section']}>
					<ul className={styles['summary']}>
						{summary.items.map((item: any, i: number) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</section>

				{/* Skills */}
				<section className={styles['main-section']}>
					<h2 className={styles['section-title']}>{skills.title}</h2>
					{skills.items.map((item: any, i: number) => (
						<div key={i} className={styles['skill-entry']}>
								<h3>{item.label}</h3>
								<p className={styles['skill-list']}>{item.value}</p>
						</div>
					))}
				</section>

				{/* Employment */}
				<section className={styles['main-section']}>
					<h2 className={styles['section-title']}>{employment.title}</h2>
					{employment.items.map((item: any, i: number) => (
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
					{education.items.map((item: any, i: number) => (
						<article key={i} className={styles['education-entry']}>
							<div className={styles['edu-header']}>
								<h3 className={styles['degree']}>{item.degree_course}</h3>
								<span className={styles['edu-date']}>{item.year}</span>
							</div>
							{ item.institution && 
								(<h4 className={styles['school-name']}>{item.institution}</h4>) 
							}
							{ item.description && 
								(<ul>
									{item.description.map((item: any) => (
										<li key={item}>{item}</li>
									))}
								</ul>)
							}
						</article>
					))}
				</section>

			</main>
		
		</div>
	)
}

export default Layout1