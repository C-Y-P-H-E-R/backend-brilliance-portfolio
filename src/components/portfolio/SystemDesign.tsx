import { motion } from "framer-motion";
import { Box, ArrowRight, Database, Server, Cloud, Cpu } from "lucide-react";

const SystemDesign = () => {
  const architectureNodes = [
    { icon: Cloud, label: "Load Balancer", sublabel: "AWS ALB" },
    { icon: Server, label: "API Gateway", sublabel: "Auth + Rate Limit" },
    { icon: Cpu, label: "Microservices", sublabel: "K8s Pods" },
    { icon: Database, label: "Data Layer", sublabel: "PostgreSQL + Redis" },
  ];

  const principles = [
    {
      title: "Horizontal Scalability",
      description: "Stateless services that scale out effortlessly under load",
    },
    {
      title: "Fault Tolerance",
      description: "Circuit breakers, retries, and graceful degradation",
    },
    {
      title: "Performance First",
      description: "Caching strategies, connection pooling, async processing",
    },
    {
      title: "Observability",
      description: "Distributed tracing, metrics, and centralized logging",
    },
  ];

  return (
    <section id="system-design" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">System Design Philosophy</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl glass"
            >
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <Box className="w-5 h-5 text-primary" />
                Typical Architecture
              </h3>
              
              <div className="space-y-4">
                {architectureNodes.map((node, index) => (
                  <div key={node.label}>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      <div className="p-2 rounded-md bg-primary/10">
                        <node.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{node.label}</p>
                        <p className="text-xs text-muted-foreground">{node.sublabel}</p>
                      </div>
                    </motion.div>
                    {index < architectureNodes.length - 1 && (
                      <div className="flex justify-center py-2">
                        <ArrowRight className="w-4 h-4 text-primary/50 rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Terminal decoration */}
              <div className="mt-6 p-4 rounded-lg bg-background font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-destructive" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary">$</span> kubectl get pods -n production
                  <br />
                  <span className="text-primary">● Running</span> api-gateway-7d8f9b (3 replicas)
                  <br />
                  <span className="text-primary">● Running</span> search-service-4c2a1 (5 replicas)
                  <br />
                  <span className="text-primary">● Running</span> data-pipeline-8e3b7 (2 replicas)
                </div>
              </div>
            </motion.div>

            {/* Design Principles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6">Design Principles I Follow</h3>
              
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="p-4 rounded-lg glass card-hover"
                  >
                    <h4 className="font-semibold text-primary mb-1">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Metrics highlight */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-card border border-border">
                <h4 className="font-semibold mb-4">By The Numbers</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-primary">99.9%</p>
                    <p className="text-sm text-muted-foreground">Uptime SLA</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">&lt;100ms</p>
                    <p className="text-sm text-muted-foreground">P99 Latency</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">10M+</p>
                    <p className="text-sm text-muted-foreground">Daily Requests</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">40%</p>
                    <p className="text-sm text-muted-foreground">Cost Reduction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDesign;
