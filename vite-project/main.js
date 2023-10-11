import './style.css';
import data from './data/amazon_uk_shoes_dataset.json'

const currentUrl = window.location.pathname;
let breadcrumbs = currentUrl.split('/').filter(Boolean); // Split URL and remove empty elements
// Function to generate breadcrumbs based on the current URL or page context
function generateBreadcrumbs() {


    var breadcrumbsContainer = document.getElementById("breadcrumbs-list");
    breadcrumbsContainer.innerHTML = ""; // Clear previous breadcrumbs

    var breadcrumbPath = "";
    breadcrumbs.forEach(function (breadcrumb, index) {
        breadcrumbPath += '/' + breadcrumb;
        var breadcrumbItem = document.createElement("li");
        breadcrumbItem.innerHTML = '<a href="' + breadcrumbPath + '">' + breadcrumbsList[index] + '</a>';
        breadcrumbsContainer.appendChild(breadcrumbItem);
    });
}

// Call the function to generate breadcrumbs when the page loads
window.onload = generateBreadcrumbs;


/* let breadcrumbsList = []
data.forEach(i => {
    let sub = i["breadcrumbs"].split(" ")
    sub.forEach(element => {
        if (breadcrumbsList.includes(element) === false){
            breadcrumbsList.push(element)
        }
    });
    
});
 */
breadcrumbs = ["Shoes/Women's"]
data.forEach(i => {
    let sub = i["breadcrumbs"].split(" ")
    sub.forEach(element => {
        //console.log(breadcrumbs.includes(element))
        if (breadcrumbs.includes(element) === true){
            console.log('test')
            document.getElementById("test").innerHTML += `<h1>${i["title"]}</h1>`
        }
    });
    
});