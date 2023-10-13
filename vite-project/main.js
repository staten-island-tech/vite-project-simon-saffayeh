import "./style.css";
import data from "./data/amazon_uk_shoes_dataset.json";
let total_entries = 0;
let max_entries = 25;
let breadcrumbsList = [];
let current_entries = 0;
let final_entries = 0
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
  if(i["breadcrumbs"].includes(lastbreadcrumb)){
    console.log(i["asin"])
    console.log(final_entries)
  }
  if (i["breadcrumbs"].includes(lastbreadcrumb) && total_entries < max_entries) {
      total_entries += 1;
      document.getElementById("container-cards").innerHTML += `
            <div class = "card">
            <h3>${i["title"]}</h3>
            <p>${i["asin"]}</p>
            <img class = "card-img" src = "${i["images_list"]}">
            </div>
            `;
  }
});
/* 
for (let i = 0; i < data.length; i++) {
  if (data[i]["breadcrumbs"].includes(lastbreadcrumb)  && total_entries < 10 ) {
    console.log("there")
    total_entries += 1;
    document.getElementById("container-cards").innerHTML += `
      <div class="card">
        <h3>${data[i]["title"]}</h3>
        <p>${data[i]["price"]}</p>
        <img class="card-img" src="${data[i]["images_list"]}">
      </div>`;
  } else {
    break;
  }
}
 */
// then make it not do everything and reload more at bottom of page
function loadMore(){
  max_entries += 25
  current_entries = 0;
  data.forEach((i) => {
    if(i["breadcrumbs"].includes(lastbreadcrumb)){
      current_entries += 1
      console.log(current_entries)
    }
    if (i["breadcrumbs"].includes(lastbreadcrumb) && max_entries > total_entries && current_entries >= total_entries && total_entries <= final_entries) {
        total_entries += 1;
        document.getElementById("container-cards").innerHTML += `
              <div class = "card">
              <h3>${i["title"]}</h3>
              <p>${i["asin"]}</p>
              <img class = "card-img" src = "${i["images_list"]}">
              </div>
              `;
    }
  });
}

$(window).scroll(function() {
  if($(window).scrollTop() + $(window).height() == $(document).height()) {
      loadMore()
  }
});

//make it so i can see earlier breadcrumbs ex. animals/dogs, animals should still displayt something