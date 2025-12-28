

import BlogIndex from "@/components/Blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harmony & Symphony",
  description:
    "Aprendizaje personalizado para todos los niveles de entusiastas de la música.",
  // other metadata
};

const Blog = () => {
  return (
    <>
      <BlogIndex/>
    </>
  );
};

export default Blog;
