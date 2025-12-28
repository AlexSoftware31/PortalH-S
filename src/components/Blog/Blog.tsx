"use client";

import { useState } from "react";
import blogData from "./blogData";
import Breadcrumb from "../Common/Breadcrumb";
import SingleBlog from "./SingleBlog";


const BlogIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calcular índices
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Número total de páginas
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Cambiar página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Breadcrumb
        pageName="Cursos"
        description="Aprendizaje personalizado para todos los niveles de entusiastas de la música."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          {/* Paginación */}
          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Prev */}
                <li className="mx-1">
                  <button
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                      currentPage === 1
                        ? "bg-body-color/15 text-body-color cursor-not-allowed"
                        : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Prev
                  </button>
                </li>

                {/* Números */}
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i} className="mx-1">
                    <button
                      onClick={() => paginate(i + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                        currentPage === i + 1
                          ? "bg-primary text-white"
                          : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                      }`}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}

                {/* Next */}
                <li className="mx-1">
                  <button
                    onClick={() =>
                      currentPage < totalPages && paginate(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className={`flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition ${
                      currentPage === totalPages
                        ? "bg-body-color/15 text-body-color cursor-not-allowed"
                        : "bg-body-color/15 text-body-color hover:bg-primary hover:text-white"
                    }`}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;