var profileData = {
    activities: ["Raspberry Pi", "Reading", "App games", "Python", "Anime", "Webnovel", "NBA"],
    books: [
            {title: "A Song of Ice and Fire", author: "George R. R. Martin"},
            {title: "The World is Flat", author: "Thomas L. Friedman"}, 
            {title: "The Jungle", author: "Upton Sinclair"},
            {title: "The Lord of the Rings", author: "J. R. R. Tolkien"},
            {title: "Python Programming", author: "John Zelle"},
            {title: "Hands-On Machine Learning", author: "Aurelien Geron"},
            {title: "Library of Heaven's Path", author: "Heng Sao Tian Ya"},
            {title: "The Rising of the Shield Hero", author: "Aneko Yusagi"}
            ],
    movies: ["Avengers", "Netflix Godzilla", "Amazing Spider-man", "Rocky", "Gattaca", "Ex Machina", "Passengers", "The Pursuit of Happyness"],
    readings: ["Random News", "Light Novels", "Tech. News", "Manga", "World News", "WSJ"],
    titles: ["Software Engineer", "Aspiring M.L. Engineer"]
};

var projectsData = [{
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Rover",
        frontImageURL: "./static/images/rover.png",
        frontLabel: "Rover",
        frontDesc: "Raspberry Pi, Python, Flask, Bootstrap, and Javascript",
        backImageURL: "./static/images/rovercontrol.gif"
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/MyAnalyticSolver",
        frontImageURL: "./static/images/analytic_gui.png",
        frontLabel: "Analytic GUI",
        frontDesc: "TKInter",
        backImageURL: "./static/images/analytic_gui.gif"
        
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Hands-On%20ML",
        frontImageURL: "./static/images/handson-ml.png",
        frontLabel: "Hands-On ML",
        frontDesc: "District Pricing, Classification",
        backImageURL: "./static/images/handson-ml.gif"
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/AudioWordScrapper",
        frontImageURL: "./static/images/splinter.png",
        frontLabel: "Audio word scraper",
        frontDesc: "Splinter",
        backImageURL: "./static/images/audioscrape.gif"
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Train%20Audio%20Files",
        frontImageURL: "./static/images/convertToWave.png",
        frontLabel: "Record/Convert Audio",
        frontDesc: "ffmpeg and sounddevice",
        backImageURL: "./static/images/convertToWave.gif"
    },
    {
        refLink: "https://github.com/bdthai81/gitvengers/blob/master/DataCE/Plot%20Consumption%20%26%20Land%20use.ipynb",
        frontImageURL: "./static/images/meat_consumption.png",
        frontLabel: "Meat Consumption",
        frontDesc: "Jupyter Notebook, Requests, Pandas, Matplotlib, and Basemap",
        backImageURL: "./static/images/meat_consumption.gif"
    },
    {
        refLink: "https://github.com/bdthai81/gitvengers/blob/master/DataCE/Grazing%20Land%20using%20GeoPanda.ipynb",
        frontImageURL: "./static/images/grazeland_geopandas.png",
        frontLabel: "Grazeland",
        frontDesc: "Jupyter Notebook, Requests, Pandas, and Geopandas",
        backImageURL: "./static/images/grazeland_geopandas.gif"
    },
];

var assignmentsData = [{
        refLink: "https://bdthai81.github.io/JavaScript-challenge/StarterCode/",
        frontImageURL: "./static/images/module-11.png",
        frontLabel: "UFO Finder",
        frontDesc: "JavaScript, HTML, CSS, and D3.js",
        backImageURL: "./static/images/module-11.gif"
    },
    {
        refLink: "https://github.com/bdthai81/Web-Scraping-challenge",
        frontImageURL: "./static/images/module-10.png",
        frontLabel: "Mission to Mars",
        frontDesc: "Jupyter Notebook, Pandas, and Requests/Splinter",
        backImageURL: "./static/images/module-10.gif"
    },
    {
        refLink: "https://bdthai81.github.io/Web-challenge/",
        frontImageURL: "./static/images/module-9.png",
        frontLabel: "Latitude Analysis Dashboard",
        frontDesc: "HTML, CSS, and Bootstrap",
        backImageURL: "./static/images/module-9.gif"
    },
    {
        refLink: "https://github.com/bdthai81/Adv-Data-Storage-Retrieval-challenge",
        frontImageURL: "./static/images/module-8.png",
        frontLabel: "Surfs Up!",
        frontDesc: "SQLAlchemy ORM queries, Pandas, and Matplotlib",
        backImageURL: "./static/images/module-8.gif"
    },
    {
        refLink: "https://github.com/bdthai81/SQL-challenge",
        frontImageURL: "./static/images/module-7.png",
        frontLabel: "Sakila DB",
        frontDesc: "MySQL",
        backImageURL: "./static/images/module-7.gif"
    },
    {
        refLink: "https://github.com/bdthai81/Pyton-APIs-challenge",
        frontImageURL: "./static/images/module-6.png",
        frontLabel: "What's the Weather Like?",
        frontDesc: "Python requests, APIs, and JSON",
        backImageURL: "./static/images/module-6.gif"
    },
    {
        refLink: "https://github.com/bdthai81/matplotlib-challenge",
        frontImageURL: "./static/images/module-5.png",
        frontLabel: "Pyber / Pymaceuticals Inc",
        frontDesc: "Jupyter Notebook, Pandas, and Matplotlib",
        backImageURL: "./static/images/module-5.gif"
    },
    {
        refLink: "https://github.com/bdthai81/pandas-challenge",
        frontImageURL: "./static/images/module-4.png",
        frontLabel: "Heroes of Pymoli / Academy of Py",
        frontDesc: "Python Pandas",
        backImageURL: "./static/images/module-4.gif"
    },
    {
        refLink: "https://github.com/bdthai81/python-challenge",
        frontImageURL: "./static/images/module-3.png",
        frontLabel: "PyBank / PyPoll",
        frontDesc: "Python script",
        backImageURL: "./static/images/module-3.gif"
    },
    {
        refLink: "https://github.com/bdthai81/VBA-Script-challenge",
        frontImageURL: "./static/images/module-2.png",
        frontLabel: "Stock market analyst",
        frontDesc: "VBA scripting",
        backImageURL: "./static/images/module-2.gif"
    },
    {
        refLink: "https://github.com/bdthai81/Excel-challenge",
        frontImageURL: "./static/images/module-1.png",
        frontLabel: "KickStart My Chart",
        frontDesc: "Excel: pivot table and pivot chart",
        backImageURL: "./static/images/module-1.gif"
    },
];