// app/project/[id]/page.tsx
"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams for dynamic routing
import "bootstrap-icons/font/bootstrap-icons.css";
import { supabase } from "../../../lib/supabase"; // Adjust the import if needed
import Image from "next/image";

const ProjectDetail = () => {
  const { id } = useParams(); // Use the dynamic id from the URL
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      async function fetchProjectDetails() {
        const { data, error } = await supabase
          .from("project")
          .select("*")
          .eq("id", id)
          .single(); // Fetch the project by its `id`
        
        if (data) {
          setProject(data);
        } else {
          console.error("Error fetching project:", error);
        }
      }
      fetchProjectDetails();
    }
  }, [id]);

  const shadowStyles: Record<string, string> = {
    blue: "drop-shadow-[20px_0px_20px_rgb(59,130,246)]",
    red: "drop-shadow(0px 20px 20px rgb(255,0,0))",
    green: "drop-shadow(0px 20px 20px rgb(34,197,94))", // Example
  };

  if (!project) return <div className="bg-gray-950 w-full h-full">Loading...</div>; // Return loading state while data is being fetched

  return (
    <div className="bg-gray-950 text-white p-4 w-full h-full flex flex-col items-center justify-center">
            <img 
            src="/images/IMG_20240216_140406.jpg" 
            className="mt-10 w-40 h-40 rounded-full object-cover drop-shadow-[0px_0px_40px_rgb(256,256,256)]" 
            alt="Ian Hoogstrate" 
            />
              <p className="text-3xl font-bold pt-5">Ian Hoogstrate</p>
              <div className="flex space-x-4 pt-5">
        
                <a className="flex items-center justify-center w-12 h-12 rounded-full bg-white"
                  href="https://www.linkedin.com/in/ian-hoogstrate-25b49929b/">
                  <i className="bi bi-linkedin text-black text-3xl pt-1"></i>
                </a>
        
                <a
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white"
                  href="https://github.com/Ian0035">
                  <i className="bi bi-github text-black text-3xl pt-1"></i>
                </a>
        
                <a
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white"
                  href="https://www.instagram.com/ianhoogstrate/">
                  <i className="bi bi-instagram text-black text-3xl pt-1"></i>
                </a>
        
              </div>

        <div className="w-11/12 pt-20 flex justify-between">
        <div className="w-6/12">
            <img
                src={`/images/${project.img}`}
                alt={project.title}
                className={`rounded-lg w-full ${shadowStyles[project.color] || ""}`}
                />
        </div>
        <div className="text-center w-5/12 relative">
            <h1 className="text-3xl w-full font-semibold absolute top-[20%] left-1/2 transform -translate-x-1/2">
                {project.title}
            </h1>
            <p className="absolute top-[30%] w-full left-1/2 transform -translate-x-1/2 mt-4">
                {project.long_description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; // Ensure the component is the default export
