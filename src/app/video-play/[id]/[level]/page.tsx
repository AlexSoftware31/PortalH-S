import blogData from "@/components/Blog/blogData";
import VideoPageClient from "@/components/Video/VideoPageClient";
import { Blog } from "@/types/blog";



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

  
  return <VideoPageClient blog={blog} level={level} />;
};

export default VideoPage;
