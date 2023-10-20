import "./style.css";
import data from "./data/amazon_uk_shoes_dataset.json";
let total_entries = 0;
let max_entries = 3;
let breadcrumbsList = [];
let current_entries = 0;
let final_entries = 0
data.forEach((i) => {
  if (breadcrumbsList.includes(i["breadcrumbs"]) === false) {
    breadcrumbsList.push(i["breadcrumbs"]);
  }
});


let breadcrumbs = ["Shoes"];
let lastbreadcrumb = breadcrumbs[breadcrumbs.length - 1];

data.forEach((i) => {
  if(i["breadcrumbs"].includes(lastbreadcrumb)){
    final_entries++;
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


//make it so it gets rid of duplicates
//make it so it doiesnt load doc until everything is loaded
//why is shop.js loading