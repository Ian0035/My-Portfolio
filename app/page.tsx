"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "../lib/supabase";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Home() {
  const [cards, setCards] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Filter On Category / All");
  const [isSorted, setIsSorted] = useState(false); // Track if the projects are sorted or not

//updatedimages

  useEffect(() => {
    async function fetchCards() {
      const { data: projectsData } = await supabase
      .from("project")
      .select("*, project_category(category_id), category:project_category(category(name))");
  
      const projectsWithCategories = (projectsData || []).map((project: any) => ({
        ...project,
        categories: project.category
          ?.map((pc: any) => pc.category?.name) // Ensure accessing the correct structure
          .filter(Boolean) || [], // Remove any undefined values
      }));      
        setCards(projectsWithCategories || []);
      }

      fetchCards();
    }, []);

  // Sort the projects based on the order column (chronological order)
  const sortByOrder = async () => {
    const { data: projectsData } = await supabase
      .from("project")
      .select("*, project_category(category_id), category:project_category(category(name))")
      .order("order", { ascending: !isSorted }); // Toggle between ascending and descending order

    const projectsWithCategories = (projectsData || []).map((project: any) => ({
       ...project,
       categories: project.category
         ?.map((pc: any) => pc.category?.name) // Ensure accessing the correct structure
         .filter(Boolean) || [], // Remove any undefined values
    }));

    setCards(projectsWithCategories || []);
    setIsSorted(!isSorted); // Toggle the sort state
  };

  const fetchProjectDetails = async (id: string) => {
    const { data } = await supabase.from("project")
    .select("*")
    .eq("id", id)
    .single();
    setSelectedProject(data);
  };


  // Filtered cards based on selected category
  const filteredCards = selectedCategory === "Filter On Category / All"
    ? cards
    : cards.filter((card) => card.categories.includes(selectedCategory));


    // Predefined categories
  const categories = {
    "Filter On Category / All": 0,
    "AI": 1,
    "Data": 2,
    "Website": 3,
    "WebApplication": 4,
    "Docker": 5,
    "Game": 6,
    "IoT": 7,
  };

  const shadowStyles: Record<string, string> = {
    blue: "hover:drop-shadow-[0px_20px_20px_rgb(59,130,246)]",
    python: "hover:drop-shadow-[0px_20px_20px_rgb(255,255,0)]",
    sql: "hover:drop-shadow-[0px_20px_20px_rgb(222,0,0)]",
    firstwebsite: "hover:drop-shadow-[0px_20px_20px_rgb(254,122,99)]",
    weatherstation: "hover:drop-shadow-[0px_20px_20px_rgb(96,99,97)]",
    netlify: "hover:drop-shadow-[0px_20px_20px_rgb(33,150,0)]",
    php: "hover:drop-shadow-[0px_20px_20px_rgb(250,100,50)]",
    docker: "hover:drop-shadow-[0px_20px_20px_rgb(40,149,237)]",
    datavis: "hover:drop-shadow-[0px_20px_20px_rgb(0,155,75)]",
    pandas: "hover:drop-shadow-[0px_20px_20px_rgb(15,3,77)]",
    portfolio: "hover:drop-shadow-[0px_20px_20px_rgb(184,184,184)]",
    dotnet: "hover:drop-shadow-[0px_20px_20px_rgb(149,61,172)]",
    ml: "hover:drop-shadow-[0px_20px_20px_rgb(179,4,4)]",
    dl: "hover:drop-shadow-[0px_20px_20px_rgb(222,190,133)]",
    eprp: "hover:drop-shadow-[0px_20px_20px_rgb(40,149,237)]",
    happy: "hover:drop-shadow-[0px_20px_20px_rgb(250,190,233)]",
    bio: "hover:drop-shadow-[0px_20px_20px_rgb(70,173,5)]",
    mlloan: "hover:drop-shadow-[0px_20px_20px_rgb(164,212,255)]",
    nextjs: "hover:drop-shadow-[0px_20px_30px_rgb(255,255,255)]",
    bachelor: "hover:drop-shadow-[0px_20px_20px_rgb(40,196,92)]",
  };

  const projectStyles: Record<string, string> = {
    blue: "drop-shadow-[20px_0px_20px_rgb(59,130,246)]",
    python: "drop-shadow-[20px_0px_20px_rgb(255,255,0)]",
    sql: "drop-shadow-[20px_0px_20px_rgb(222,0,0)]",
    firstwebsite: " drop-shadow-[20px_0px_20px_rgb(254,122,99)]",
    weatherstation: "drop-shadow-[20px_0px_20px_rgb(96,99,97)]",
    netlify: "drop-shadow-[20px_0px_20px_rgb(33,150,0)]",
    php: "drop-shadow-[20px_0px_20px_rgb(250,100,50)]",
    docker: "drop-shadow-[20px_0px_20px_rgb(40,149,237)]",
    datavis: "drop-shadow-[20px_0px_20px_rgb(0,155,75)]",
    pandas: "drop-shadow-[20px_0px_20px_rgb(15,3,77)]",
    portfolio: "drop-shadow-[20px_0px_20px_rgb(184,184,184)]",
    dotnet: "drop-shadow-[20px_0px_20px_rgb(149,61,172)]",
    ml: "drop-shadow-[20px_0px_20px_rgb(179,4,4)]",
    dl: "drop-shadow-[20px_0px_20px_rgb(222,190,133)]",
    eprp: "drop-shadow-[20px_0px_20px_rgb(40,149,237)]",
    happy: "drop-shadow-[20px_0px_20px_rgb(250,190,233)]",
    bio: "drop-shadow-[20px_0px_20px_rgb(70,173,5)]",
    mlloan: "drop-shadow-[20px_0px_20px_rgb(164,212,255)]",
    nextjs: "drop-shadow-[20px_0px_30px_rgb(255,255,255)]",
    bachelor: "drop-shadow-[20px_0px_20px_rgb(40,196,92)]",
  };

  return (
    <div className="bg-gray-950 bg-[url(/images/background.jpg)] bg-[calc(50%+7px)_calc(-10px)] bg-no-repeat text-white p-4 w-full flex flex-col items-center justify-center">
      <img 
        src="/images/IMG_20240216_140406.jpg" 
        className="mt-36 w-40 h-40 rounded-full object-cover drop-shadow-[0px_0px_40px_rgb(256,256,256)]" 
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

       {/* Dropdown Menu & Sort Button */}
    <div className="flex space-x-4 mt-6">
      
      {/* Dropdown Menu */}
      <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex justify-center rounded-4xl px-10 py-3 text-base font-medium text-white ring-1 shadow-xs ring-gray-300">
              {selectedCategory}
              <ChevronDownIcon aria-hidden="true" className="ml-2 size-6 text-white" />
            </MenuButton>
          </div>
          <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5">
            {Object.keys(categories).map((category) => (
              <MenuItem key={category} as="div">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100 hover:text-gray-900"
                >
                  {category}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>

      {/* Sort by Chronological Order Button */}
      <button
          onClick={sortByOrder}
          className="text-white ring-1 shadow-xs ring-gray-300 px-6 py-3 rounded-4xl transition duration-300"
        >
          {isSorted ? "Revert Order" : "Sort Newest First"}
        </button>
    </div>


      {/* 📌 Show project list if no project is selected */}
      {!selectedProject && (
        <div className="flex flex-wrap gap-12 mt-2 justify-center p-10 pb-20 w-full">
          {filteredCards.map((card) => (
            <div 
              key={card.id} 
              className={`relative flex mt-10 flex-col rounded-xl bg-white text-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform duration-300 transform hover:scale-105  drop-shadow-[0px_15px_20px_rgb(255,255,255)] ${shadowStyles[card.color] || ""}`}
            >
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                <Image src={`/images/${card.img}`} alt={card.title} layout="fill" objectFit="cover" />
              </div>
              <div className="pl-6 pr-6 pt-6 pb-4">
                <h5 className="mb-2 text-xl font-semibold">{card.title}</h5>
                <p className="text-base font-light">{card.description}</p>
              </div>
              <div className="p-6 pt-0 mt-auto">
                <div className="mb-1.5 flex flex-wrap gap-2">
                {card.categories && card.categories.length > 0 ? (
                card.categories.map((category: string, index: number) => (
                  <p key={index} className="rounded-4xl text-white bg-gray-400 w-fit border text-sm font-light py-1 px-4">
                   # {category}
                  </p>
                ))
              ) : (
                <p className="text-sm font-light py-1 px-4">No Categories</p>
              )}

                </div>
                <button
                  onClick={() => fetchProjectDetails(card.id)}
                  className="rounded-lg bg-blue-400 hover:bg-blue-500 py-3 px-6 text-white transition-all"
                >
                  Read More
                </button>

              </div>
            </div>
            
          ))}
        </div>
      )}

      {/* 📌 Show project details if a project is selected */}
      {selectedProject && (
        <>
          {/* Original Layout for lg+ Screens */}
          <div className="hidden lg:flex w-11/12 pt-20 justify-between">
            {/* Image on the left */}
            <div className="w-6/12">
              <img
                src={`/images/${selectedProject.img}`}
                alt={selectedProject.title}
                className={`rounded-lg w-full ${projectStyles[selectedProject.color] || ""}`}
              />
            </div>
            
            {/* Text Content */}
            <div className="w-5/12 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-700 text-white px-4 py-2 mb-8 rounded-lg hover:bg-gray-600"
              >
                ← Back
              </button>
              <div className="text-center">
                <h1 className="text-3xl w-full font-semibold">{selectedProject.title}</h1>
                <p className="mt-4 xl:text-xl lg:text-md">{selectedProject.long_description}</p>
              </div>
            </div>
          </div>

          {/* New Layout for md and smaller */}
          <div className="lg:hidden flex flex-col w-11/12 pt-20">
            {/* Back Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="bg-gray-700 text-white px-4 py-2 mb-4 rounded-lg hover:bg-gray-600"
            >
              ← Back
            </button>
            
            {/* Title */}
            <h1 className="text-3xl font-semibold text-center">{selectedProject.title}</h1>
            
            {/* Description */}
            <p className="mt-4 text-center md:text-lg sm:text-base">
              {selectedProject.long_description}
            </p>

            {/* Image at the Bottom */}
            <img
              src={`/images/${selectedProject.img}`}
              alt={selectedProject.title}
              className={`rounded-lg w-full mt-6 ${projectStyles[selectedProject.color] || ""}`}
            />
          </div>
        </>
      )}
    </div>
  );
}
