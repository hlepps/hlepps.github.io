import OneProjectSection from "../../components/OneProjectSection";

import {projects} from "../../components/Projects"

export async function generateStaticParams(){
 
  return projects.map((project) => ({
    title: String(project.id),
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
	const {id} = await params;
	
  return (
    <div className="min-h-screen bg-black text-white">
		<h1>{id}</h1>
      <OneProjectSection />
    </div>
  );
}
