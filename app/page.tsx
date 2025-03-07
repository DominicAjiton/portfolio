'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Github, Linkedin, Mail, Server, Code, Database } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Full Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Specializing in Next.js and Nest.js Development
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" size="lg">
                <Github className="mr-2 h-4 w-4" /> View Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 bg-accent/50">
        <div className="container px-4 mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technical Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code className="h-8 w-8" />}
              title="Frontend Development"
              skills={['Next.js', 'React', 'TypeScript', 'Tailwind CSS']}
            />
            <SkillCard
              icon={<Server className="h-8 w-8" />}
              title="Backend Development"
              skills={['Nest.js', 'Node.js', 'Express', 'REST APIs']}
            />
            <SkillCard
              icon={<Database className="h-8 w-8" />}
              title="Database & DevOps"
              skills={['PostgreSQL', 'MongoDB', 'Docker', 'AWS']}
            />
          </div>
        </div>
      </section>

 

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-accent/50">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects and opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button size="lg" variant="outline">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button size="lg">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex flex-col items-center text-center">
          {icon}
          <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
          <ul className="space-y-2">
            {skills.map((skill) => (
              <li key={skill} className="text-muted-foreground">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}

function ProjectCard({
  title,
  description,
  image,
  technologies,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

/*

     {/* Projects Section }
     <section id="projects" className="py-20">
     <div className="container px-4 mx-auto">
       <motion.h2
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         className="text-3xl font-bold text-center mb-12"
       >
         Featured Projects
       </motion.h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ProjectCard
           title="E-Commerce Platform"
           description="A full-stack e-commerce solution built with Next.js and Nest.js"
           image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
           technologies={['Next.js', 'Nest.js', 'PostgreSQL', 'Stripe']}
         />
         <ProjectCard
           title="Task Management System"
           description="Real-time task management application with team collaboration features"
           image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
           technologies={['React', 'Node.js', 'Socket.io', 'MongoDB']}
         />
       </div>
     </div>
   </section>

   */