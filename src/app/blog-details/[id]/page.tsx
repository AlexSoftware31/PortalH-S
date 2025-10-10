import { Metadata } from "next";
import DetailBlog from "@/components/Blog/DetailBlog";
import { Blog } from "@/types/blog";
import blogData from "@/components/Blog/blogData";

export const metadata: Metadata = {
  title: "Details Cursos ",
  description: "Detail cursos Harmony & Sysmphony",
  // other metadata
};

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; 
  const blog: Blog | undefined = blogData.find((v) => v.id === Number(id));
  
  if (!blog) {
    return (
      <h1 className="mt-10 text-center text-2xl font-semibold">
        Curso no encontrado
      </h1>
    );
  }

  return <DetailBlog blog={blog} />;
}
