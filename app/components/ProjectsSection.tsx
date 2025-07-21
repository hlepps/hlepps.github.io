'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'pomaManager',
		description: 'ERP system created for a company producing stairs. Made using Blazor',
		image: '/manager.png',
		github: ''
	},
	{
		id: 2,
		title: 'pomaCAD',
		description: 'Standalone WPF app for conversion and processing of data from the Leica 3D Disto measuring device to the Compass stair design software',
		image: '/pomacad.png',
		github: ''
	},
	{
		id: 3,
		title: 'kertu',
		description: 'Modern web application designed for project management, task organization, and team collaboration, with creating intuitive interface and rich functionality in mind. Made using Blazor',
		image: '/kertu.png',
		github: 'https://github.com/Kertu-Team/Kertu'
	},
	{
		id: 4,
		title: '[wip] gebe',
		description: 'Simple Gameboy emulator written in c++ using raylib. Work in progress',
		image: '/gebe.png',
		github: 'https://github.com/hlepps/gebe'
	},
	{
		id: 5,
		title: 'music_store',
		description: 'A simple music "store", where you can "buy" and listen to songs, as an admin you can add songs and albums, manage users, edit all the information etc. Secured login, registration and database connection.',
		image: '/music_store.jpeg',
		github: 'https://github.com/hlepps/MusicStore'
	},
	{
		id: 6,
		title: 'kkgh',
		description: 'My Engineering Thesis, a 3D game with modifiable terrain made in Unity.',
		image: '/kkgh.gif',
		github: ''
	},
	{
		id: 7,
		title: 'boxcraft',
		description: 'Dynamic portfolio generator for developers',
		image: '/laptop.jpg',
		github: ''
	},
	{
		id: 8,
		title: 'falling_sand',
		description: 'Dynamic portfolio generator for developers',
		image: '/laptop.jpg',
		github: ''
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Featured Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/80 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex gap-4">
								<Link href={"/project/" + project.title } className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									View Project
								</Link>
								{project.github != '' && 
								<Link href={project.github} className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
									GitHub
								</Link>
								}
								
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
