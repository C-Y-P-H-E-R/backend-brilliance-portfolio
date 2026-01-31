import { motion } from "framer-motion";
import { Terminal, Server, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Server,
      title: "Backend First",
      description: "Deep expertise in building robust, scalable server-side applications",
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description: "Obsessed with optimizing latency, throughput, and resource efficiency",
    },
    {
      icon: Terminal,
      title: "Clean Code",
      description: "Writing maintainable, well-tested code that teams love to work with",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a backend engineer who thrives on solving complex problems at scale. 
                Currently at <span className="text-foreground font-medium">IndiaMART</span>, 
                India's largest B2B marketplace, I work on systems that handle millions of 
                requests daily.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey started with a curiosity about how things work under the hood. 
                That curiosity led me to master the art of building distributed systems, 
                from designing efficient APIs to orchestrating microservices on Kubernetes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe great backend engineering is invisible to users but makes everything 
                else possible. Fast load times, reliable services, seamless scaling — these 
                are the outcomes I engineer for every day.
              </p>

              {/* Code snippet decoration */}
              <div className="p-4 rounded-lg glass font-mono text-sm">
                <div className="text-muted-foreground">
                  <span className="text-primary">const</span> engineer = {"{"}
                </div>
                <div className="pl-4 text-muted-foreground">
                  focus: <span className="text-primary">"backend"</span>,
                </div>
                <div className="pl-4 text-muted-foreground">
                  stack: [<span className="text-primary">"Go"</span>, <span className="text-primary">"PHP"</span>, <span className="text-primary">"K8s"</span>],
                </div>
                <div className="pl-4 text-muted-foreground">
                  motto: <span className="text-primary">"Scale first, optimize always"</span>
                </div>
                <div className="text-muted-foreground">{"}"}</div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="md:col-span-2 space-y-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-lg glass card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-md bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
