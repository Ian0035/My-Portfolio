"use client";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { supabase } from "../lib/supabase";
import "bootstrap-icons/font/bootstrap-icons.css";
import { motion, AnimatePresence } from "framer-motion";
import ProjectsTab from "./components/ProjectTabs";
import CertificatesTab from "./components/CertificatesTabs";
import ProfileTab from "./components/ProfileTabs";
import Spinner from "./components/spinner";
import Comet from "./components/comet";
import Footer from "./components/footer";
import StarField from "./components/Starfield";



export default function Home() {
  const [cards, setCards] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Filter On Category / All");
  const [isSorted, setIsSorted] = useState(false); // Track if the projects are sorted or not
  const tabs = ["Profile", "Certificates", "Projects"];
  const [selected, setSelected] = useState("Profile");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading delay or wait for resources
    const timer = setTimeout(() => setLoading(false), 5000); // adjust delay as needed
    return () => clearTimeout(timer);
  }, []);

  const tabOrder = ["Profile", "Certificates", "Projects"];

  const handleTabChange = (tab: string) => {
    if (tab !== selected) {
      setSelected(tab);
    }
  };
  
//updatedimages

  useEffect(() => {
    async function fetchCards() {
      const { data: projectsData } = await supabase
      .from("project")
      .select("*, project_category(category_id), category:project_category(category(name))")
      .order("order", { ascending: false }); // Toggle between ascending and descending order

  
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
    "Full Stack": 4,
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
    predictwage: "hover:drop-shadow-[0px_20px_20px_rgb(76,175,80)]",
    aisentiment: "hover:drop-shadow-[0px_20px_20px_rgb(191,230,246)]",
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
    predictwage: "drop-shadow-[20px_0px_20px_rgb(76,175,80)]",
    aisentiment: "drop-shadow-[20px_0px_20px_rgb(191,230,246)]",
  };
const tabIndex = tabs.indexOf(selected);

  const [tabHeights, setTabHeights] = useState<{ Profile: number; Certificates: number; Projects: number }>({
    Profile: 0,
    Certificates: 0,
    Projects: 0,
  });

useEffect(() => {
  const updateHeights = () => {
    const screenWidth = window.innerWidth;
    let projectsHeight;
    let profileHeight;
    profileHeight =
        screenWidth >= 1600 ? 326 :
        screenWidth >= 1440 ? 400 :
        screenWidth >= 1024 ? 520 :
        screenWidth >= 768  ? 620 :
        screenWidth >= 425  ? 820 :
        screenWidth >= 375  ? 880 :
        1040;

    let certHeight;
    certHeight =
        screenWidth >= 1600 ? 420 :
        screenWidth >= 1440 ? 450 :
        screenWidth >= 1024 ? 540 :
        screenWidth >= 768  ? 780 :
        screenWidth >= 425  ? 590 :
        screenWidth >= 375  ? 600 :
        620;

    if (!selectedProject) {
      projectsHeight =
        screenWidth >= 1600 ? 3200 :
        screenWidth >= 1440 ? 3600 :
        screenWidth >= 1400 ? 3700 :
        screenWidth >= 1330 ? 3800 :
        screenWidth >= 1280 ? 3900 :
        screenWidth >= 1200 ? 4450 :
        screenWidth >= 1152 ? 4600 :
        screenWidth >= 1024 ? 5000 :
        screenWidth >= 980  ? 6400 :
        screenWidth >= 900  ? 6800 :
        screenWidth >= 768  ? 8000 :
        10000;
    } else {
      projectsHeight =
        screenWidth >= 1440 ? 750 :
        1200;
    }
    

    // Use a tiny delay to ensure re-render catches it
    requestAnimationFrame(() => {
      setTabHeights({
        Profile: profileHeight,
        Certificates: certHeight,
        Projects: projectsHeight,
      });
    });
  };

  updateHeights();
  window.addEventListener("resize", updateHeights);

  return () => window.removeEventListener("resize", updateHeights);
}, [selectedProject]);

const cometRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const animateComet = () => {
      const comet = cometRef.current;
      if (!comet) return;

      // Set random horizontal position (-100px to 50% of viewport width)
      const randomLeft =
        Math.floor(Math.random() * (window.innerWidth / 2 + 100)) - 100;
      comet.style.left = `${randomLeft}px`;

      // Reset animation
      comet.style.animation = "none";
      void comet.offsetWidth; // trigger reflow
      comet.style.animation = "comet-fly 2s linear forwards";

      // Schedule next animation
      const nextDelay = Math.random() * 10000 + 5000;
      setTimeout(animateComet, nextDelay);
    };

    const initialDelay = 5000;
    const timeoutId = setTimeout(animateComet, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (

    <div className="relative bg-black min-h-screen overflow-hidden bg-no-repeat text-white pt-4 w-full flex flex-col items-center justify-center">

      {/* Star Field */}
      <StarField />

      <Comet />


      <img
        className="absolute right-0 top-[10rem] xl:w-[40rem] lg:w-[30rem] md:w-[20rem] sm:w-[10rem] w-[5rem] h-auto bop bop-delay-1 z-0"
        src="/images/planet1.png"
        alt="Planet 1"
      />
      <img
        className="absolute left-3 top-[55rem] xl:w-[20rem] lg:w-[20rem] md:w-[10rem] sm:w-[10rem] w-[5rem] h-auto bop bop-delay-2"
        src="/images/planet2.png"
        alt="Planet 2"
      />
      <img
        className="absolute right-1/12 top-[70rem] xl:w-[30rem] lg:w-[20rem] md:w-[10rem] sm:w-[10rem] w-[5rem] h-auto bop bop-delay-3"
        src="/images/planet3.png"
        alt="Planet 3"
      />
      <img
        className="absolute left-1/12 top-[110rem] xl:w-[30rem] lg:w-[20rem] md:w-[10rem] sm:w-[10rem] w-[5rem] h-auto bop bop-delay-4"
        src="/images/planet4.png"
        alt="Planet 4"
      />

      <header className="relative z-10">
          <motion.img
            src="/images/IMG_20240216_140406.jpg"
            className="mt-20 mx-auto w-40 h-40 rounded-full object-cover drop-shadow-[0px_0px_40px_rgb(256,256,256)]"
            alt="Ian Hoogstrate"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />

          <motion.p
            className="text-3xl font-bold pt-5 z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Reach For The <span className="text-red-400">Stars</span>
              </motion.p>

      </header>


      <div id="links" className="flex space-x-4 pt-5">
        <motion.a
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white z-0"
          href="https://www.linkedin.com/in/ian-hoogstrate-25b49929b/"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <i className="bi bi-linkedin text-black text-3xl pt-1"></i>
        </motion.a>

        <motion.a
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white z-0"
          href="https://github.com/Ian0035"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <i className="bi bi-github text-black text-3xl pt-1"></i>
        </motion.a>

        <motion.a
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white z-0"
          href="https://www.instagram.com/ianhoogstrate/"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.5 }}
        >
          <i className="bi bi-instagram text-black text-3xl pt-1"></i>
        </motion.a>
      </div>

              <div id="tabs" className="max-w-xl mx-auto mt-10">
                {/* Tabs */}
                <div className="flex gap-4 items-center justify-center mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => handleTabChange(tab) }
                      className={`relative pb-2 text-lg font-light transition-colors duration-300 ${
                        selected === tab ? "text-gray-400" : "text-white"
                      }`}
                    >
                      {tab}
                      {selected === tab && (
                        <motion.span
                          layoutId="underline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>



    {/* Content */}
    <div
        className="relative w-full overflow-hidden transition-all duration-300"
        style={{ height: tabHeights[selected as keyof typeof tabHeights]}}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${tabIndex * 100}%)` }}
        >
          {/* Each tab must be hidden visually but still rendered */}
          <div
            className="w-full flex-shrink-0 overflow-hidden mt-6"
          >
              <ProfileTab handleTabChange={handleTabChange} />

          </div>
          <div
            className="w-full flex-shrink-0 min-h-0 overflow-hidden mt-6"
          >
            <CertificatesTab />
          </div>
          <div
            className="w-full flex-shrink-0 min-h-0 overflow-hidden"
          >
            <ProjectsTab
                      filteredCards={filteredCards}
                      fetchProjectDetails={fetchProjectDetails}
                      onSortClick={sortByOrder}
                      isSorted={isSorted}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                      shadowStyles={shadowStyles}
                      projectStyles={projectStyles}
                      categories={categories}
                      selectedProject={selectedProject}
                      setSelectedProject={setSelectedProject}
                    />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )}
    </div>
  );
}
