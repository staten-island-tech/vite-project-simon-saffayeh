import "./style.css";
import data from "./data/amazon_uk_shoes_dataset.json";
let total_entries = 0;

let breadcrumbsList = [];
data.forEach((i) => {
  if (breadcrumbsList.includes(i["breadcrumbs"]) === false) {
    breadcrumbsList.push(i["breadcrumbs"]);
  }
});

const currentUrl = window.location.pathname;
let breadcrumbs = currentUrl.split("/").filter(Boolean); // Split URL and remove empty elements
// Function to generate breadcrumbs based on the current URL or page context
function generateBreadcrumbs() {
  var breadcrumbsContainer = document.getElementById("breadcrumbs-list");
  breadcrumbsContainer.innerHTML = ""; // Clear previous breadcrumbs

  var breadcrumbPath = "";
  breadcrumbs.forEach(function (breadcrumb, index) {
    breadcrumbPath += "/" + breadcrumb;
    var breadcrumbItem = document.createElement("li");
    breadcrumbItem.innerHTML =
      '<a href="' + breadcrumbPath + '">' + breadcrumbsList[index] + "</a>";
    breadcrumbsContainer.appendChild(breadcrumbItem);
  });
}

// Call the function to generate breadcrumbs when the page loads
window.onload = generateBreadcrumbs;

breadcrumbs = ["Fashion Trainers"];
let lastbreadcrumb = breadcrumbs[breadcrumbs.length - 1];
data.forEach((i) => {
  if (i["breadcrumbs"].includes(lastbreadcrumb)) {
    if (total_entries < 100) {
      total_entries += 1;
      document.getElementById("container-cards").innerHTML += `
            <div class = "card">
            <h3>${i["title"]}</h3>
            <p>${i["price"]}</p>
            <img class = "card-img" src = "${i["images_list"]}">
            </div>
            `;
    }
  }
});


NOTE fix how to break the loop hwen it is over instead of just keep cycleing