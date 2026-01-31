import { motion } from "framer-motion";
import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "IndiaMART",
      role: "Software Engineer - Backend",
      location: "Noida, India",
      period: "2022 - Present",
      description: "Building and scaling backend systems for India's largest B2B marketplace serving millions of businesses.",
      achievements: [
        {
          title: "API Migration (PHP → Golang)",
          description: "Led migration of critical search APIs from legacy PHP to Golang, achieving 60% reduction in response times and 40% cost savings on infrastructure.",
        },
        {
          title: "Microservices Architecture",
          description: "Designed and deployed 5+ microservices on Kubernetes, enabling independent scaling and 99.9% uptime across services.",
        },
        {
          title: "Apache Solr Optimization",
          description: "Optimized search indexing pipeline handling 10M+ documents, reduced index refresh time by 70% through sharding and caching strategies.",
        },
        {
          title: "CI/CD Pipeline Enhancement",
          description: "Implemented automated testing and deployment pipelines, reducing deployment time from hours to minutes with zero-downtime releases.",
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-xl glass"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Building2 className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">{exp.role}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4 md:mt-0 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Achievements */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                      className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <h4 className="font-semibold text-sm text-primary mb-2">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
