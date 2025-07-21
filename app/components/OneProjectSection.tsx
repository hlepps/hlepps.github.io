"use client";

import { motion } from "framer-motion";
import { projects } from "./Projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function OneProjectSection({
  projectID,
}: {
  projectID: number;
}) {
  const project = projects.find((project) => project.id === projectID);
  if (project == null) notFound();
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: project.id * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-base md:text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-xs md:text-base text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                {project.github != "" && (
                  <Link
                    href={project.github}
                    className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.div>
		{project.segments?.map((segment) => (<motion.div
						key={segment.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: segment.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={segment.image} alt={segment.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-base md:text-xl font-bold mb-2">{segment.title}</h3>
							<p className="text-xs md:text-base text-gray-300 mb-4">{segment.description}</p>
						</div>
					</motion.div>
				))}
      </div>
    </section>
  );
}
