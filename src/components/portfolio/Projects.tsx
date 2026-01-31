import { motion } from "framer-motion";
import { ExternalLink, Github, Server, Database, Cloud, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string[];
  icon: typeof Server;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "High-Performance Search Engine",
      problem: "Legacy search system couldn't handle 1M+ daily queries with acceptable latency.",
      solution: "Built a distributed search service using Golang and Apache Solr with custom ranking algorithms and intelligent caching.",
      techStack: ["Golang", "Apache Solr", "Redis", "Kubernetes", "gRPC"],
      impact: [
        "Reduced P99 latency from 800ms to 120ms",
        "Handles 5000+ requests/second",
        "99.99% uptime achieved",
      ],
      icon: Zap,
    },
    {
      title: "API Gateway & Rate Limiter",
      problem: "Microservices lacked unified authentication and were vulnerable to traffic spikes.",
      solution: "Designed and implemented a custom API gateway with JWT auth, rate limiting, and circuit breaker patterns.",
      techStack: ["Golang", "Redis", "PostgreSQL", "Docker", "Prometheus"],
      impact: [
        "Unified auth across 15+ services",
        "Blocked 100K+ malicious requests daily",
        "Reduced API abuse by 95%",
      ],
      icon: Server,
    },
    {
      title: "Real-Time Data Pipeline",
      problem: "Batch processing created 4-hour delays in business analytics dashboards.",
      solution: "Architected an event-driven pipeline using message queues for real-time data ingestion and processing.",
      techStack: ["Golang", "RabbitMQ", "PostgreSQL", "Grafana", "AWS"],
      impact: [
        "Near real-time data availability",
        "Processes 2M+ events daily",
        "Reduced operational costs by 30%",
      ],
      icon: Database,
    },
    {
      title: "Auto-Scaling Infrastructure",
      problem: "Manual scaling during traffic spikes caused service degradation and high costs.",
      solution: "Implemented Kubernetes-based auto-scaling with custom metrics and predictive scaling algorithms.",
      techStack: ["Kubernetes", "Terraform", "AWS EKS", "Prometheus", "Golang"],
      impact: [
        "Zero downtime during 10x traffic spikes",
        "40% reduction in cloud costs",
        "Self-healing infrastructure",
      ],
      icon: Cloud,
    },
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">Featured Projects</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-xl glass card-hover flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Problem
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{project.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Solution
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">{project.solution}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Tech Stack
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="flex-1">
                  <span className="text-xs font-mono text-primary uppercase tracking-wider">
                    Impact
                  </span>
                  <ul className="mt-2 space-y-1">
                    {project.impact.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
