"use client";

import { motion } from "framer-motion";
import { projects } from "./Projects";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

export default function OneProjectSection({
  projectID,
}: {
  projectID: number;
}) {
  const project = projects.find((project) => project.id === projectID);
  console.log("projectID:" + projectID);
  if (project == null) notFound();
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
        >
          {project.title}
        </motion.h2>
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
            <Link
              href={"/project/" + project.id}
              className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              View Project
            </Link>
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
    </section>
  );
}
