/*** Javascript to load and refresh Profile Card on Left Panel ***/
// Update the profile display data
function update(tagName, tagText) {
    var t = d3.transition()
        .duration(750);
    // Select componet 
    var title = d3.select(tagName);
    // Swap to new text
    title.style("opacity", 0)
      .text(tagText)
    .transition(t)
      .style("opacity", 1)
    .transition()
      .delay(1000);
};
// Update shift up: remove first list item and append new item as 3rd
function updateShiftUp(tagName, tagText) {
    // Shift 2nd item to 1st item
    update(tagName+"1", d3.select(tagName+"2").text());
    // Shift 3rd item to 2nd item
    update(tagName+"2", d3.select(tagName+"3").text());
    // Update 3rd item with tagText
    update(tagName+"3", tagText);
};

// Load profile data
var activities = profileData["activities"];
var books = profileData["books"];
var movies = profileData["movies"];
var readings = profileData["readings"];
var titles = profileData["titles"];
// counter to determine sequential order
var profileCounter = 0;
// Take turn changing each items in the profile list
var profileListCounter = 0; 
// The initial display.
function initProfile() {
    // Update the 1st list items: Take the first item from array, counter=0
    update("#profileTitle", titles[(profileCounter%2)]);
    update("#profileActivitie1", activities[(profileCounter%activities.length)]);
    var book = "\"" + books[(profileCounter%books.length)]["title"] 
           + "\" by " + 
           books[(profileCounter%books.length)]["author"];
    update("#profileBook1", book);
    update("#profileMovie1", movies[(profileCounter%movies.length)]);
    update("#profileReading1", readings[(profileCounter%readings.length)]);

    // Update the 2nd list items, counter=1
    profileCounter += 1;
    update("#profileActivitie2", activities[(profileCounter%activities.length)]);
    book = "\"" + books[(profileCounter%books.length)]["title"] 
           + "\" by " + 
           books[(profileCounter%books.length)]["author"];
    update("#profileBook2", book);
    update("#profileMovie2", movies[(profileCounter%movies.length)]);
    update("#profileReading2", readings[(profileCounter%readings.length)]);

    // Update the 3rd list items, counter=2
    profileCounter += 1;
    update("#profileActivitie3", activities[(profileCounter%activities.length)]);
    book = "\"" + books[(profileCounter%books.length)]["title"] 
           + "\" by " + 
           books[(profileCounter%books.length)]["author"];
    update("#profileBook3", book);
    update("#profileMovie3", movies[(profileCounter%movies.length)]);
    update("#profileReading3", readings[(profileCounter%readings.length)]);
};

// Grab a random sample from the list.
d3.interval(() => {
    // Update in sequential order 
    update("#profileTitle", titles[(profileListCounter%2)]);
    selectedList = (profileListCounter%4);
    // Update list item
    switch (selectedList) {
        case 0:
            profileCounter += 1;
            updateShiftUp("#profileActivitie", activities[(profileCounter%activities.length)]);
            break;
        case 1:
            var book = "\"" + books[(profileCounter%books.length)]["title"] 
                        + "\" by " + 
                        books[(profileCounter%books.length)]["author"];
            updateShiftUp("#profileBook", book);
            break;
        case 2:
            updateShiftUp("#profileMovie", movies[(profileCounter%movies.length)]);
            break;
        case 3:
            updateShiftUp("#profileReading", readings[(profileCounter%readings.length)]);
            break;
    }
    profileListCounter += 1;
}, 2500);

// launch init()
initProfile();