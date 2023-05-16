import { createContext } from "react";
import js from "../helpers/images/js.png";
import ts from "../helpers/images/ts.png";
import python from "../helpers/images/python.png";
import react from "../helpers/images/react.png";
import pg from "../helpers/images/pg.png";
import html from "../helpers/images/html.png";
import css from "../helpers/images/css.png";
import django from "../helpers/images/django.png";
import flask from "../helpers/images/flask.png";
import git from "../helpers/images/git.png";
import cFrontend from "../helpers/certs/ClaruswayFE.png";
import cHtmlCss from "../helpers/certs/ClaruswayHTMLCSS.png";
import cJS from "../helpers/certs/ClaruswayJS.png";
import cReact from "../helpers/certs/ClaruswayReact.png";
import cs50x from "../helpers/certs/CS50x.png";
import cs50p from "../helpers/certs/CS50P.png";
import fCCJS from "../helpers/certs/FCC_JS_Algorithms.png";
import hrJS from "../helpers/certs/HRJS.png";
import hrJS2 from "../helpers/certs/HRJS2.png";
import hrPython from "../helpers/certs/HRPython.png";
import hrReact from "../helpers/certs/HRReact.png";
import rpgPNG from "../helpers/thumbs/CS50-Final-Project-2022.png";
import ytzPNG from "../helpers/thumbs/YahtzeeInPython.png";
import p151PNG from "../helpers/thumbs/Pokedex-151.png";
import blogPNG from "../helpers/thumbs/React-Blog-App.png";
import moviePNG from "../helpers/thumbs/React-Movie-App.png";
import recipePNG from "../helpers/thumbs/Recipe-App.png";
import tnmaPNG from "../helpers/thumbs/True-North-Martial-Arts.png";
import rpgGIF from "../helpers/gifs/CS50-Final-Project-2022.gif";
import ytzGIF from "../helpers/gifs/YahtzeeInPython.gif";
import p151GIF from "../helpers/gifs/Pokedex-151.gif";
import blogGIF from "../helpers/gifs/React-Blog-App.gif";
import movieGIF from "../helpers/gifs/React-Movie-App.gif";
import recipeGIF from "../helpers/gifs/Recipe-App.gif";
import tnmaGIF from "../helpers/gifs/True-North-Martial-Arts.gif";

export const CVContext = createContext();

const CVContextProvider = ({ children }) => {
    const projects = [
        {
            title: "Gen 1 Pokedex",
            img: p151PNG,
            gif: p151GIF,
            desc: "Generation One Pokedex for the original 151, created with React and the PokeAPI. Styled with Pure SCSS. May expand to include other generations in the future.",
            url: "https://pokedex-151-ahua.vercel.app/",
            github: "https://github.com/ahua1994/pokedex-app",
            tools: ["React", "SCSS", "PokeAPI"],
        },
        {
            title: "React Blog App",
            img: blogPNG,
            gif: blogGIF,
            desc: "Users can post images and text which are then retrieved and displayed as cards. They have the ability to edit, like or delete their own, and to like those of others. There is a v2 that utilizes my own backend created with Django, available with comment CRUD operations.",
            url: "https://fireblog-ahua.web.app/",
            github: "https://github.com/ahua1994/blog-app-ahua",
            tools: ["React", "Firebase", "Firestore", "Material UI", "Toastify", "Django"],
        },
        {
            title: "RPG Where Everyone Is Useless",
            img: rpgPNG,
            gif: rpgGIF,
            desc: "An RPG game made using Lua and LÖVE2d. Assets used were all open-source. Implemented basic elements of NPC speech, triggered events, character animation, movement and collision, enemies, death, respawn, dialogue, map creation, boss fight, sound effects and BGM.",
            url: "https://www.youtube.com/watch?v=zjV3ulOi0oI",
            github: "https://github.com/ahua1994/CS50X-Final-Project---Andy-Hua",
            tools: ["Lua", "LÖVE2d"],
        },
        {
            title: "Yahtzee in Python",
            img: ytzPNG,
            gif: ytzGIF,
            desc: "A single player, command-line version of Yahtzee I wrote in Python for Harvard's CS50P. For thirteen turns a player will roll their dice, one to three times, trying to get the highest scoring combination.",
            url: "https://www.youtube.com/watch?v=sKuwJnGtdt0&feature=youtu.be",
            github: "https://github.com/ahua1994/Yahtzee-Python",
            tools: ["Python"],
        },
        {
            title: "React Movie App",
            img: moviePNG,
            gif: movieGIF,
            desc: "In this project, the aim was to display current cinema posters by using the TMDB API. There is a search feature for keywords. Upon logging in, movie synopsis, trailer and rating are available.",
            url: "https://movie-app-c836e.web.app/",
            github: "https://github.com/ahua1994/react-movie-app",
            tools: ["React", "Bootstrap", "Axios", "Firebase"],
        },
        {
            title: "React Recipe App",
            img: recipePNG,
            gif: recipeGIF,
            desc: "A recipe app made using React and the Edamam API. You can search for recipes based on ingredients and by the type of meal. Clicking on specific recipes will reveal more details, such as allergens, ingredients, yield, calories, measurements and its region.",
            url: "https://recipe-app-ahua.vercel.app/",
            github: "https://github.com/ahua1994/recipe-app",
            tools: ["React", "Edamam API"],
        },
        {
            title: "Trading Paper",
            img: "https://w7.pngwing.com/pngs/1021/831/png-transparent-work-in-process-information-architectural-engineering-others-building-text-logo-thumbnail.png",
            gif: "https://w7.pngwing.com/pngs/1021/831/png-transparent-work-in-process-information-architectural-engineering-others-building-text-logo-thumbnail.png",
            desc: "A paper trading application using realtime and historical stock data. Coming Soon",
            url: "https://trading-paper.web.app/",
            github: "https://github.com/ahua1994/trading-paper",
            tools: ["React"],
        },

        {
            title: "True North Martial Arts",
            img: tnmaPNG,
            gif: tnmaGIF,
            desc: "A Martial Arts dummy webpage I made featuring three disciplines; Shaolin Kung Fu, Muay Thai, and Taichi. Potential disciples may learn about the programs we offer, as well as some of the history and tradition behind our martial arts styles.",
            url: "https://true-north-ahua.vercel.app/",
            github: "https://github.com/ahua1994/true-north-ahua",
            tools: ["React"],
        },
    ];

    const skills = [
        { name: "React", img: react },
        { name: "JavaScript", img: js },
        { name: "TypeScript", img: ts },
        { name: "Python", img: python },
        { name: "Django", img: django },
        { name: "Flask", img: flask },
        { name: "PostgreSQL", img: pg },
        { name: "Git", img: git },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
    ];

    const certs = [
        { name: "CS50x Certificate", img: cs50x, org: "Harvard" },
        { name: "React Certificate", img: cReact, org: "Clarusway" },
        { name: "CS50P Certificate", img: cs50p, org: "Harvard" },
        { name: "Frontend Developer", img: cFrontend, org: "Clarusway" },
        { name: "JavaScript (Intermediate)", img: hrJS2, org: "HackerRank" },
        { name: "JavaScript", img: cJS, org: "Clarusway" },
        { name: "React (Basic)", img: hrReact, org: "HackerRank" },
        { name: "HTMLCSS", img: cHtmlCss, org: "Clarusway" },
        { name: "JavaScript (Basic)", img: hrJS, org: "HackerRank" },
        { name: "JavaScript Algorithms & Data Structures", img: fCCJS, org: "freeCodeCamp" },
        { name: "Python (Basic)", img: hrPython, org: "HackerRank" },
    ];

    return <CVContext.Provider value={{ projects, skills, certs }}>{children}</CVContext.Provider>;
};

export default CVContextProvider;
