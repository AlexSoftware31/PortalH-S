"use client";

import VideoModal from "@/components/video-modal";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Blog } from "@/types/blog";
import TagButton from "../Blog/TagButton";
import Goal from "@/models/Goal";

const levels: ("basico" | "intermedio" | "avanzado")[] = [
  "basico",
  "intermedio",
  "avanzado",
];

type Goal = {
  temporal: string;
  alcance: string;
};

export default function Video({ blog, level }: { blog: Blog; level: string }) {
  const [isOpen, setOpen] = useState(false);
  const [levelselect, setLevel] = useState(level);
  const [token, setToken] = useState<string>("");
  const [goals, setGoal] = useState<Goal[]>([]);

  const [activeVideo, setActiveVideo] = useState<string>("");

  const { title, paragraph, videoLinks } = blog;

  const videos = videoLinks?.[levelselect] ?? [];

  const fullTitle = `${title} (${levelselect == "basico" ? "Básico" : levelselect.charAt(0).toUpperCase() + levelselect.slice(1)})`;

  const openModal = (videoUrl: string) => {
    const videoId = extractYouTubeId(videoUrl);
    setActiveVideo(videoId);
    setOpen(true);
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:v=|\/embed\/|\.be\/)([\w-]{11})/);
    return match ? match[1] : url;
  };

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch("/api/check-auth");
      const data = await res.json();
      setToken(data.token || "");
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (!blog.title || !token || token.trim() === "") return;

    const getGoals = async (email: string, curso: string) => {
      try {
        const res = await fetch(`/api/goal?email=${email}&curso=${curso}`);
        const data = await res.json();
        console.log(data);
        setGoal(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al obtener metas:", error);
        setGoal([]);
      }
    };

    getGoals(token, blog.title);
  }, [blog.title, token]);

  return (
    <>
      <br></br>
      <br></br>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title={fullTitle}
            paragraph={paragraph}
            center
            mb="80px"
          />
        </div>
        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-77/40 items-center justify-center">
                  <div className="flex gap-4">
                    {levels.map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setLevel(lvl)}
                        className={`rounded px-4 py-2 ${
                          levelselect === lvl
                            ? "bg-primary text-white"
                            : "bg-gray-300"
                        }`}
                      >
                        {lvl == "basico"
                          ? "Básico"
                          : lvl.charAt(0).toUpperCase() + lvl.slice(1)}
                      </button>
                    ))}
                  </div>
                  <br />

                  <h2 className="mb-4 text-xl font-bold capitalize">
                    Videos nivel{" "}
                    {levelselect == "basico" ? "Básico" : levelselect}
                  </h2>
                  <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {videos.map((url, index) => (
                      <li key={index}>
                        <button
                          onClick={() => openModal(url)}
                          className="bg-primary hover:bg-primary/90 w-full rounded p-2 text-white transition"
                        >
                          Ver Clase # {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <br />
                  {goals.length > 0 ? (
                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h4 className="text-body-color mb-3 text-sm font-medium">
                          Metas a lograr:
                        </h4>
                        <div className="flex flex-wrap items-center gap-2">
                          {goals.map((goal, index) => (
                            <TagButton
                              key={index}
                              text={`${goal.temporal} - ${goal.alcance}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
            {/* <div className="absolute right-0 bottom-0 left-0 z-[-1]">
              <img
                src="/images/video/shape.svg"
                alt="shape"
                className="w-full"
              />
            </div> */}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        src={activeVideo}
      />
    </>
  );
}
