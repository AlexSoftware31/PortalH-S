"use client";

import { useState } from "react";
import Video from "@/components/Video";
import Schedule from "@/components/Schedule";
import { Blog } from "@/types/blog";

const VideoPageClient = ({ blog, level }: { blog: Blog; level: string }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <>
      <Video blog={blog} level={level} key={refreshKey} />
      <Schedule curso={blog.title} onRefresh={handleRefresh} />
    </>
  );
};

export default VideoPageClient;
