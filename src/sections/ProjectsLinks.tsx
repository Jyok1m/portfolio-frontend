import { useLocale } from "../i18n/useLocale";
import SectionTitle from "../components/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectsLinks() {
	const { t } = useLocale();

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-6">
				<SectionTitle title={t.projects.title} subtitle={t.projects.description} />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{t.projects.items.map((project, index) => (
						<div
							key={project.slug}
							className="cyber-card group hover:scale-105 transition-all duration-500"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							{/* Project Header */}
							<div className="flex items-start justify-between mb-4">
								<h3 className="text-2xl font-bold neon-text group-hover:text-cyber-blue transition-colors duration-300">{project.name}</h3>

								{/* Status badge */}
								<div className="px-3 py-1 bg-cyber-cyan/20 border border-cyber-cyan/50 rounded-full text-cyber-cyan text-xs font-medium">
									{project.status}
								</div>
							</div>

							{/* Description */}
							<p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">{project.description}</p>

							{/* Tech Stack */}
							<div className="mb-6">
								<h4 className="text-sm font-semibold text-cyber-purple mb-3">{t.projects.techStack}</h4>
								<div className="flex flex-wrap gap-2">
									{project.stack.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-slate-800 border border-slate-600 rounded-full text-xs text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors duration-300"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Links */}
							<div className="flex flex-col gap-2">
								{project.links.site && (
									<a href={project.links.site} className="flex-1 cyber-button text-center" target="_blank" rel="noopener noreferrer">
										<span className="flex items-center justify-center space-x-2">
											<FontAwesomeIcon icon={["fas", "globe"]} className="w-4 h-4" />
											<span>{t.projects.cta.site}</span>
										</span>
									</a>
								)}

								<div className="flex flex-row gap-2">
									{project.links["repo-front"] && (
										<a
											href={project.links["repo-front"]}
											className="flex-1 cyber-button-secondary text-center"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="flex items-center justify-center space-x-2">
												<FontAwesomeIcon icon={["fas", "code"]} className="w-4 h-4" />
												<span>{t.projects.cta["repo-front"]}</span>
											</span>
										</a>
									)}

									{project.links["repo-back"] && (
										<a
											href={project.links["repo-back"]}
											className="flex-1 cyber-button-secondary text-center"
											target="_blank"
											rel="noopener noreferrer"
										>
											<span className="flex items-center justify-center space-x-2">
												<FontAwesomeIcon icon={["fas", "file"]} className="w-4 h-4" />
												<span>{t.projects.cta["repo-back"]}</span>
											</span>
										</a>
									)}
								</div>

								{project.links.repoMono && (
									<a href={project.links.repoMono} className="flex-1 cyber-button-secondary text-center" target="_blank" rel="noopener noreferrer">
										<span className="flex items-center justify-center space-x-2">
											<FontAwesomeIcon icon={["fas", "code-branch"]} className="w-4 h-4" />
											<span>{t.projects.cta.repoMono}</span>
										</span>
									</a>
								)}

								{project.links.repo && (
									<a href={project.links.repo} className="flex-1 cyber-button-secondary text-center" target="_blank" rel="noopener noreferrer">
										<span className="flex items-center justify-center space-x-2">
											<FontAwesomeIcon icon={["fas", "code-branch"]} className="w-4 h-4" />
											<span>{t.projects.cta.repo}</span>
										</span>
									</a>
								)}

								{project.links.repoInfra && (
									<a href={project.links.repoInfra} className="flex-1 cyber-button-secondary text-center" target="_blank" rel="noopener noreferrer">
										<span className="flex items-center justify-center space-x-2">
											<FontAwesomeIcon icon={["fas", "code-branch"]} className="w-4 h-4" />
											<span>{t.projects.cta.repoInfra}</span>
										</span>
									</a>
								)}
							</div>

							{/* Decorative corner accent */}
							<div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan/30 group-hover:border-cyber-cyan transition-colors duration-300"></div>
							<div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyber-purple/30 group-hover:border-cyber-purple transition-colors duration-300"></div>
						</div>
					))}
				</div>

				{/* Call to action */}
				<div className="mt-16 text-center">
					<div className="cyber-card bg-gradient-to-r from-slate-900/70 to-slate-800/70 max-w-2xl mx-auto">
						<h3 className="text-2xl font-bold neon-text mb-4">{t.projects.moreProjects.title}</h3>
						<p className="text-slate-300 mb-6">{t.projects.moreProjects.description}</p>

						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<a href="https://github.com/Jyok1m" className="cyber-button min-w-[120px]" target="_blank" rel="noopener noreferrer">
								<span className="flex items-center justify-center space-x-2">
									<FontAwesomeIcon icon={["fas", "code-branch"]} className="w-4 h-4" />
									<span>GitHub</span>
								</span>
							</a>

							<a href="https://gitlab.com/Jyok1m" className="cyber-button min-w-[120px]" target="_blank" rel="noopener noreferrer">
								<span className="flex items-center justify-center space-x-2">
									<FontAwesomeIcon icon={["fas", "code"]} className="w-4 h-4" />
									<span>GitLab</span>
								</span>
							</a>

							<a
								href="https://www.linkedin.com/in/joachim-jasmin/"
								className="cyber-button-secondary min-w-[120px]"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span className="flex items-center justify-center space-x-2">
									<FontAwesomeIcon icon={["fas", "briefcase"]} className="w-4 h-4" />
									<span>LinkedIn</span>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
