import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

// Define your types
type Project = {
  id: string;
  title: string;
  description: string;
  long_description: string;
  img: string;
  color?: string;
  categories?: string[];
};

type ProjectsTabProps = {
  filteredCards: Project[];
  fetchProjectDetails: (id: string) => void;
  projectStyles: Record<string, string>;
  shadowStyles: Record<string, string>;
  categories: Record<string, number>;
};

export default function ProjectsTab({
  filteredCards,
  fetchProjectDetails,
  onSortClick,
  isSorted,
  selectedCategory,
  setSelectedCategory,
  shadowStyles,
  projectStyles,
  categories,
  selectedProject,
  setSelectedProject
}: ProjectsTabProps & {
  onSortClick: () => void;
  isSorted: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
}) {

  const handleReadMore = async (id: string) => {
    await fetchProjectDetails(id);
    const selected = filteredCards.find((card) => card.id === id);
    setSelectedProject(selected || null);
  };

  return (
    <div className="w-full h-full max-h-full overflow-auto">
      {/* Category Dropdown */}
      <div className="flex space-x-4 mt-6 mx-auto justify-center">
        <Menu as="div" className="relative inline-block text-left">
          <MenuButton className="inline-flex items-center justify-center rounded-4xl px-4 py-2 text-sm font-medium text-white ring-1 ring-gray-300">
            {selectedCategory}
            <ChevronDownIcon aria-hidden="true" className="ml-2 size-6 text-white" />
          </MenuButton>
          <MenuItems className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5">
            {Object.keys(categories).map((category) => (
              <MenuItem key={category} as="div">
                <button
                  onClick={() => setSelectedCategory(category)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100"
                >
                  {category}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
        {/* Sort Button */}
        <button
          onClick={onSortClick}
          className="text-white ring-1 ring-gray-300 px-4 py-2 text-sm rounded-4xl transition duration-300"
        >
          {isSorted ? "Newest First" : "Oldest First"}
        </button>
      </div>

      {/* Project Cards or Detail View */}
      {!selectedProject ? (
        <div className="flex flex-wrap gap-12 mt-6 justify-center p-10 pb-20">
          {filteredCards
            .filter((card) =>
              selectedCategory === "Filter On Category / All"
                ? true
                : card.categories?.includes(selectedCategory)
            )
            .map((card) => (
              <div
                key={card.id}
                className={`relative flex flex-col rounded-xl bg-white text-gray-700 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform transform hover:scale-105 drop-shadow-[0px_15px_20px_rgb(255,255,255)] ${shadowStyles[card.color || ""] || ""}`}
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl shadow-lg">
                  <Image src={`/images/${card.img}`} alt={card.title} layout="fill" objectFit="cover" />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h5 className="mb-2 text-xl font-semibold">{card.title}</h5>
                  <p className="text-base font-light">{card.description}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {card.categories?.length ? (
                      card.categories.map((category, i) => (
                        <p key={i} className="rounded-4xl text-white bg-gray-400 border text-sm font-light py-1 px-4">
                          # {category}
                        </p>
                      ))
                    ) : (
                      <p className="text-sm font-light py-1 px-4">No Categories</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleReadMore(card.id)}
                    className="mt-auto w-fit rounded-lg bg-blue-400 hover:bg-blue-500 py-2 px-4 text-white"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <>
        <div className="hidden mx-auto lg:flex w-11/12 pt-20 justify-between">
            <div className="w-6/12">
                <img
                    src={`/images/${selectedProject.img}`}
                    alt={selectedProject.title}
                    className={`rounded-lg w-full ${selectedProject.color ? projectStyles[selectedProject.color] : ""}`}
                />
            </div>
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
        <div className="lg:hidden mx-auto flex flex-col w-11/12 pt-20">
            <button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-700 text-white px-4 py-2 mb-4 rounded-lg hover:bg-gray-600"
            >
                ← Back
            </button>
            
            <h1 className="text-3xl font-semibold text-center">{selectedProject.title}</h1>
            
            <p className="mt-4 text-center md:text-lg sm:text-base">
                {selectedProject.long_description}
            </p>

            <img
                src={`/images/${selectedProject.img}`}
                alt={selectedProject.title}
                className={`rounded-lg w-full mt-6 ${selectedProject.color ? projectStyles[selectedProject.color] : ""}`}
            />
        </div>
        </>
 
      )}
    </div>
  );
}
