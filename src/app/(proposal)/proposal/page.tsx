import { profile, portfolioProjects } from "@/data/proposal";
import { User, ListOrdered, Briefcase, Wrench } from "lucide-react";

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto p-6 space-y-10">
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">About</h2>
          </div>
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-sm text-primary/80 font-medium mt-1">{profile.tagline}</p>
          <p className="text-sm mt-4 leading-relaxed text-muted-foreground">{profile.bio}</p>
        </div>

        {/* Approach */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <ListOrdered className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Approach</h2>
          </div>
          <div className="space-y-3">
            {profile.approach.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <p className="text-sm font-medium">{step.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Relevant Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl border border-primary/10 bg-gradient-to-br from-accent/5 to-background shadow-lg p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
              >
                <h3 className="font-medium">{project.title}</h3>
                {project.relevance && (
                  <span className="inline-block mt-1.5 px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium">
                    {project.relevance}
                  </span>
                )}
                <p className="text-sm text-muted-foreground mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <Wrench className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.skillCategories.map((category) => (
              <div key={category.name} className="rounded-xl border bg-card p-4 shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
                <h3 className="text-sm font-medium mb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
