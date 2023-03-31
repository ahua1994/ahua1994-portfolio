import { createContext } from "react";

export const CVContext = createContext();

const CVContextProvider = ({ children }) => {
    const projects = [
        { title: "Gen 1 Pokedex", gif: "", desc: "", url: "", tools: [] },
        { title: "RPG Where Everyone Is Useless", gif: "", desc: "", url: "", tools: [] },
        { title: "Yahtzee in Python", gif: "", desc: "", url: "", tools: [] },
        { title: "React Movie App", gif: "", desc: "", url: "", tools: [] },
        { title: "React Recipe App", gif: "", desc: "", url: "", tools: [] },
        { title: "React Blog App", gif: "", desc: "", url: "", tools: [] },
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
    const credits = [
        `<a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a>`,
    ];
    return (
        <CVContext.Provider value={{ projects, skills, certs, credits }}>
            {children}
        </CVContext.Provider>
    );
};

export default CVContextProvider;
