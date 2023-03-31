import { createContext } from "react";

export const CVContext = createContext();

const CVContextProvider = ({ children }) => {
    const projects = [
        {
            title: "Gen 1 Pokedex",
            gif: "",
            desc: "Gen 1 Pokedex for the original 151, created with React. May expand to include other generations in the future. ",
            url: "https://pokedex-151-ahua.vercel.app/",
            tools: ["React", "SCSS"],
        },
        {
            title: "RPG Where Everyone Is Useless",
            gif: "",
            desc: "An RPG game made using Lua and LÖVE2d. Assets used were all open-source. Learned the basics of 2D game development from scratch. Implemented elements of NPC speech, triggered events, character animation, movement and collision, enemies, death, respawn, dialogue, map creation, boss fight, sound effects and BGM.",
            url: "https://www.youtube.com/watch?v=zjV3ulOi0oI",
            tools: ["Lua", "LÖVE2d"],
        },
        {
            title: "Yahtzee in Python",
            gif: "",
            desc: "A single player, command-line version of Yahtzee I wrote in Python.",
            url: "https://www.youtube.com/watch?v=sKuwJnGtdt0&feature=youtu.be",
            tools: ["Python"],
        },
        {
            title: "React Movie App",
            gif: "",
            desc: "In this project, the aim was to display cinema posters by using the TMDB API. There is a search feature for keywords. Upon logging in, movie synopsis, trailer and rating are available.",
            url: "https://movie-app-c836e.web.app/",
            tools: ["React", "Bootstrap", "Axios", "Firebase"],
        },
        {
            title: "React Recipe App",
            gif: "",
            desc: "A recipe app made using React and the Edamam API. You can search for recipes based on ingredients and by the type of meal. Clicking on specific recipes will reveal more details, such as allergens, ingredients, yield, calories, measurements and its region.",
            url: "https://recipe-app-ahua.vercel.app/",
            tools: ["React", "Edamam API"],
        },
        {
            title: "React Blog App",
            gif: "",
            desc: "Utilizes Firebase Authentication, Cloud Firestore on the back-end, MUI, react-toastify on the frontend. Users can post images and text which are then retrieved and displayed as cards. They have the ability to edit, like or delete their own, and to like those of others.",
            url: "https://fireblog-ahua.web.app/",
            tools: ["React", "Firebase", "Firestore", "Material UI", "Toastify"],
        },
    ];

    const skills = [
        { name: "React", img: "" },
        { name: "JavaScript", img: "" },
        { name: "TypeScript", img: "" },
        { name: "Python", img: "" },
        { name: "Django", img: "" },
        { name: "PostgreSQL", img: "" },
        { name: "Git", img: "" },
        { name: "HTML", img: "" },
        { name: "CSS", img: "" },
    ];

    const certs = [
        { name: "CS50x Certificate", img: "", org: "Harvard" },
        { name: "CS50P Certificate", img: "", org: "Harvard" },
        { name: "React", img: "", org: "Clarusway" },
        { name: "Frontend Developer", img: "", org: "Clarusway" },
        { name: "JavaScript", img: "", org: "Clarusway" },
        { name: "HTMLCSS", img: "", org: "Clarusway" },
        { name: "JavaScript Algorithms & Data Structures", img: "", org: "freeCodeCamp" },
        { name: "React (Basic)", img: "", org: "HackerRank" },
        { name: "JavaScript (Basic)", img: "", org: "HackerRank" },
        { name: "JavaScript (Intermediate)", img: "", org: "HackerRank" },
        { name: "JavaScript Algorithms & Data Structures", img: "", org: "HackerRank" },
    ];

    return <CVContext.Provider value={{ projects, skills, certs }}>{children}</CVContext.Provider>;
};

export default CVContextProvider;
