import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Backend",
      skills: ["Golang", "PHP", "RESTful APIs", "gRPC", "Microservices", "Event-Driven Architecture"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "Redis", "Apache Solr", "MongoDB", "Query Optimization"],
    },
    {
      title: "DevOps",
      skills: ["Docker", "Kubernetes", "CI/CD", "GitLab CI", "Jenkins", "Terraform"],
    },
    {
      title: "Cloud",
      skills: ["AWS EC2", "S3", "ALB", "EKS", "CloudWatch", "RDS"],
    },
    {
      title: "Tools & Practices",
      skills: ["Git", "Linux", "Nginx", "RabbitMQ", "Prometheus", "Grafana"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Skills & Technologies</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl glass card-hover"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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

export default Skills;
