import blogData from "@/components/Blog/blogData";
import Schedule from "@/components/Schedule";
import Video from "@/components/Video";
import { Blog } from "@/types/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description: "Video",
  // other metadata
};

const VideoPage = async ({
  params,
}: {
  params: Promise<{ id: string; level: string }>;
}) => {
  const { id, level} = await params;

  const blog: Blog | undefined = blogData.find((v) => v.id === Number(id));

  if (!blog) {
    throw new Error("Blog no encontrado");
  }
  
  return (
    <>
      <Video blog={blog} level={level} />
      <Schedule/>
    </>
  );
};

export default VideoPage;
