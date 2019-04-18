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
    titles: ["Data Analyst", "Software Engineer", "Aspiring M.L. Engineer"]
};

var projectsData = [{
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Rover",
        frontImageURL: "./static/images/rover.png",
        frontLabel: "Rover",
        frontDesc: "Raspberry Pi, Python, Flask, Bootstrap, and Javascript",
        backImageURL: "./static/images/rovercontrol.gif",
        desc: "Individual project: Web controlled rover with camera and sonar sensors. Objective: To teach it reinforcement learning."
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/RoverQLearning",
        frontImageURL: "./static/images/roverSim.png",
        frontLabel: "Rover Simulation",
        frontDesc: "Bootstrap, D3.js",
        backImageURL: "./static/images/roverSim.gif",
        desc: "5 sensors that detects distance from objects. Gather data from user interaction, by navigating the rover through a safe passage to collect mineral deposit."
    },
    {
        refLink: "https://bdthai81-happiness.herokuapp.com/",
        frontImageURL: "./static/images/happiness.png",
        frontLabel: "Happiness data visualization",
        frontDesc: "Python Flask powered RESTful API, HTML/CSS, D3.js, Leaflet.js, chart.js, Postgres, Heroku",
        backImageURL: "./static/images/happiness.gif",
        desc: "Team project: The purpose of this project is to measure happiness from 2011-2015 based on seven variables, including: Suicide, Global Peace Index, Happiness, Gross Domestic Product, Freedom, Generosity, Trust in Government. "
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/MyAnalyticSolver",
        frontImageURL: "./static/images/analytic_gui.png",
        frontLabel: "Analytic GUI",
        frontDesc: "Python and TKInter",
        backImageURL: "./static/images/analytic_gui.gif",
        desc: "A graphic user interface that loads a .CSV file and computes a regression/classification algorithm from scikit-learn."
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/nonRedundantTeammates",
        frontImageURL: "./static/images/nonRedundant.png",
        frontLabel: "Nonredundant Teams",
        frontDesc: "HTML/CSS, D3.js",
        backImageURL: "./static/images/nonRedundant.gif",
        desc: "Plot d3 chart of random new teammates without redundancy from previous 2 teams."
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Hands-On%20ML",
        frontImageURL: "./static/images/handson-ml.png",
        frontLabel: "Hands-On ML",
        frontDesc: "District Pricing, Classification",
        backImageURL: "./static/images/handson-ml.gif",
        desc: "Practice lessons from Hands-On Machine Learning with Scikit-Learn & TensorFlow."
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/AudioWordScrapper",
        frontImageURL: "./static/images/splinter.png",
        frontLabel: "Audio word scraper",
        frontDesc: "Jupyter Notebook and Splinter",
        backImageURL: "./static/images/audioscrape.gif",
        desc: "Scapes audio files based off a keyword from Forvo."
    },
    {
        refLink: "https://github.com/bdthai81/MyProjects/tree/master/Train%20Audio%20Files",
        frontImageURL: "./static/images/convertToWave.png",
        frontLabel: "Record/Convert Audio",
        frontDesc: "Python, ffmpeg and sounddevice",
        backImageURL: "./static/images/convertToWave.gif",
        desc: "Python script that converts .wav and .mp3 to .wav audio file with 44,100 sample rate. Python script that records audio."
    },
    {
        refLink: "https://github.com/bdthai81/gitvengers/blob/master/DataCE/Plot%20Consumption%20%26%20Land%20use.ipynb",
        frontImageURL: "./static/images/meat_consumption.png",
        frontLabel: "Meat Consumption",
        frontDesc: "Jupyter Notebook, Requests, Pandas, Matplotlib, and Basemap",
        backImageURL: "./static/images/meat_consumption.gif",
        desc: "Plot scatter, stack, and basemap plots base on meat consumption data extracted from FAO.org."
    },
    {
        refLink: "https://github.com/bdthai81/gitvengers/blob/master/DataCE/Grazing%20Land%20using%20GeoPanda.ipynb",
        frontImageURL: "./static/images/grazeland_geopandas.png",
        frontLabel: "Grazeland",
        frontDesc: "Jupyter Notebook, Requests, Pandas, and Geopandas",
        backImageURL: "./static/images/grazeland_geopandas.gif",
        desc: "Created a choropleth map of the world in Python using Geopandas and grazeland data from FAO.org."
    },
];

var assignmentsData = [{
        refLink: "https://github.com/bdthai81/Mapping-Web-challenge",
        frontImageURL: "./static/images/module-14.png",
        frontLabel: "Visualizing Data with Leaflet",
        frontDesc: "HTML, CSS, and Leaflet.js",
        backImageURL: "./static/images/module-14.gif",
        desc: "Create a map using Leaflet that plots all of the earthquakes from the USGS data set based on their longitude and latitude."
    },
    {
        refLink: "https://github.com/bdthai81/D3-challenge",
        frontImageURL: "./static/images/module-13f.gif",
        frontLabel: "Data Journalism and D3",
        frontDesc: "HTML, CSS, and D3.js",
        backImageURL: "./static/images/module-13b.gif",
        desc: "Create a scatter plot between two of the data variables such as Healthcare vs. Poverty or Smokers vs. Age."
    },
    {
        refLink: "https://bdthai81-bellybtnbiodiversity.herokuapp.com/",
        frontImageURL: "./static/images/module-12.png",
        frontLabel: "Belly Button Biodiversity",
        frontDesc: "Plotly.js, and Flask app to Heroku",
        backImageURL: "./static/images/module-12.gif",
        desc: "Build an interactive dashboard to explore the Belly Button Biodiversity DataSet and deploy on Heroku."
    },
    {
        refLink: "https://bdthai81.github.io/JavaScript-challenge/StarterCode/",
        frontImageURL: "./static/images/module-11.png",
        frontLabel: "UFO Finder",
        frontDesc: "JavaScript, HTML, CSS, and D3.js",
        backImageURL: "./static/images/module-11.gif",
        desc: "Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to the web page and set multiple filters."
    },
    {
        refLink: "https://github.com/bdthai81/Web-Scraping-challenge",
        frontImageURL: "./static/images/module-10.png",
        frontLabel: "Mission to Mars",
        frontDesc: "Jupyter Notebook, Pandas, and Requests/Splinter",
        backImageURL: "./static/images/module-10.gif",
        desc: "Built a web application that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page."
    },
    {
        refLink: "https://bdthai81.github.io/Web-challenge/",
        frontImageURL: "./static/images/module-9.png",
        frontLabel: "Latitude Analysis Dashboard",
        frontDesc: "HTML, CSS, and Bootstrap",
        backImageURL: "./static/images/module-9.gif",
        desc: "Ceated a dashboard showing off the analysis we've done for the weather."
    },
    {
        refLink: "https://github.com/bdthai81/Adv-Data-Storage-Retrieval-challenge",
        frontImageURL: "./static/images/module-8.png",
        frontLabel: "Surfs Up!",
        frontDesc: "SQLAlchemy ORM queries, Pandas, and Matplotlib",
        backImageURL: "./static/images/module-8.gif",
        desc: "Use Python and SQLAlchemy to do basic climate analysis and data exploration of the climate database provided in sqlite."
    },
    {
        refLink: "https://github.com/bdthai81/SQL-challenge",
        frontImageURL: "./static/images/module-7.png",
        frontLabel: "Sakila DB",
        frontDesc: "MySQL",
        backImageURL: "./static/images/module-7.gif",
        desc: "SQL script demostrating my understanding of mysql language."
    },
    {
        refLink: "https://github.com/bdthai81/Pyton-APIs-challenge",
        frontImageURL: "./static/images/module-6.png",
        frontLabel: "What's the Weather Like?",
        frontDesc: "Python requests, APIs, and JSON",
        backImageURL: "./static/images/module-6.gif",
        desc: "Created a Python script to visualize the weather of 500+ cities across the world of varying distance from the equator. With relations to Temperature, Humidity, Cloudiness, and Wind Speed vs Latitude."
    },
    {
        refLink: "https://github.com/bdthai81/matplotlib-challenge",
        frontImageURL: "./static/images/module-5.png",
        frontLabel: "Pyber / Pymaceuticals Inc",
        frontDesc: "Jupyter Notebook, Pandas, and Matplotlib",
        backImageURL: "./static/images/module-5.gif",
        desc: "Pyber: Build a Bubble Plot that showcases the relationship between four key variables: Average Fare, Total Number of Rides Per City, Total Number of Drivers Per City, and City Type.  Pymaceuticals Inc: Analyze the data to show how four treatments (Capomulin, Infubinol, Ketapril, and Placebo) compare."
    },
    {
        refLink: "https://github.com/bdthai81/pandas-challenge",
        frontImageURL: "./static/images/module-4.png",
        frontLabel: "Heroes of Pymoli / Academy of Py",
        frontDesc: "Python Pandas",
        backImageURL: "./static/images/module-4.gif",
        desc: "Heroes of Pymoli: Generate a report that breaks down the game's purchasing data into meaningful insights.  Academy of Py: Aggregate the data to and showcase obvious trends in school performance."
    },
    {
        refLink: "https://github.com/bdthai81/python-challenge",
        frontImageURL: "./static/images/module-3.png",
        frontLabel: "PyBank / PyPoll",
        frontDesc: "Python script",
        backImageURL: "./static/images/module-3.gif",
        desc: "PyBank: Python script that analyzes the records to calculate and generate a financial analysis report.  PyPoll: Python script that analyzes the votes and calculates each election results."
    },
    {
        refLink: "https://github.com/bdthai81/VBA-Script-challenge",
        frontImageURL: "./static/images/module-2.png",
        frontLabel: "Stock market analyst",
        frontDesc: "VBA scripting",
        backImageURL: "./static/images/module-2.gif",
        desc: "VBA scripting to analyze real stock market data."
    },
    {
        refLink: "https://github.com/bdthai81/Excel-challenge",
        frontImageURL: "./static/images/module-1.png",
        frontLabel: "KickStart My Chart",
        frontDesc: "Excel: pivot table and pivot chart",
        backImageURL: "./static/images/module-1.gif",
        desc: "organize and analyze a database of four thousand past projects in order to uncover any hidden trends."
    },
];