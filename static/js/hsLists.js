/*** Javascript to load Horizontal scroll lists of Projects & Assignments ***/

function loadHsList(listName, data) {
    // Loop through data
    data.forEach((itemData) => {
        // Create html list
        var divContainer = d3.select(listName).append("div")
            .attr("class", "col-12 col-sm-6 col-md-4")
            .attr("ontouchstart", "this.classList.toggle('hover');")
            .attr("onclick", "location.href='" + itemData.refLink + "';")
            .on("mouseover", function() {
                d3.select("#desc").text(itemData.desc);
            })
            .append("div")
            .attr("class",  "pf-container");

        var divInner = divContainer.append("div")
            .attr("class", "front")
            .attr("style", "background-image: url(" + itemData.frontImageURL + ")")
            .append("div")
            .attr("class", "inner");

        divInner.append("p").text(itemData.frontLabel);
        divInner.append("span").text(itemData.frontDesc);

        divContainer.append("div")
            .attr("class", "back")
            .attr("style", "background-image: url(" + itemData.backImageURL + ")");

    });
};

function initHsLists() {
    // Load Project Horizontal Scroll List Items
    loadHsList("#projectsList", projectsData);

    // Load Assignment Horizontal Scroll List Items
    loadHsList("#assignmentsList", assignmentsData);
};

// Run initialize
initHsLists();