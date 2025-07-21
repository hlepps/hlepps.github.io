import OneProjectSection from "../../components/OneProjectSection";

import {projects} from "../../components/Projects"

export async function generateStaticParams(){
  console.log(projects.map((project) => ({
    id: String(project.id),
  })))
  return projects.map((project) => ({
    id: String(project.id),
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
      <OneProjectSection projectID={Number(id)}/>
    </div>
  );
}
