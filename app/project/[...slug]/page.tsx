import { notFound } from "next/navigation";
import OneProjectSection from "../../components/OneProjectSection";



export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
	const {slug} = await params;
	if(slug?.length != 1)
	{
		notFound();
	}
  return (
    <div className="min-h-screen bg-black text-white">
      <OneProjectSection />
    </div>
  );
}
