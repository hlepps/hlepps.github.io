import OneProjectSection from "../../components/OneProjectSection";

import {projects} from "../../components/Projects"

export async function generateStaticParams(){
 
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
	
  console.log("id:" + id);
  return (
    <div className="min-h-screen bg-black text-white">
		<h1>id: {id}</h1>
      <OneProjectSection projectID={Number(id)}/>
    </div>
  );
}
