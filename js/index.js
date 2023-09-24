import AddAndShowCard from "./func/add-card.js";
import Popup from './func/popup.js';
import ShowAllCategories from './func/show-all-categories.js';
const footer__menus__title = document.querySelectorAll(".footer--menu-wrapper--title");
const view_categories_items = document.querySelectorAll(".view-category-items");
const responsive_menu_icon = document.querySelector(".responsive-menu--menu-icon");
const cities_btn = document.querySelector(".search-form--cities-btn");
const close_responsive_menu = document.querySelector(".clsoe-responsive-menu");
const popup_wrapper = document.querySelector(".popup-wrapper");
const all_groups_btn = document.querySelector(".search-form--all-groups-btn");
window.addEventListener("load",()=>{
    AddAndShowCard();
})
footer__menus__title.forEach(footer__menu__title => {
    footer__menu__title.addEventListener("click", (event) => {
        event.target.parentElement.classList.toggle("active");
    })
})
view_categories_items.forEach(view_category_items => {
    view_category_items.addEventListener("click", (event) => {
        Popup("categories",event.target.id);
    })
})
cities_btn.addEventListener("click", () => {
    Popup("cities");
})
responsive_menu_icon.addEventListener("click",()=>{
    document.querySelector(".responsive-menu-wrapper").classList.add("active")
    document.body.classList.add("active");
})
close_responsive_menu.addEventListener("click",()=>{
    document.querySelector(".responsive-menu-wrapper").classList.remove("active");
    document.body.classList.remove("active");
})
popup_wrapper.addEventListener("click",(event)=>{
    if(event.target == popup_wrapper && event.target.childNodes.length!=0 ){
        event.target.childNodes[0].remove();
        popup_wrapper.classList.remove("active");
    }
})
all_groups_btn.addEventListener("click",()=>{
    if(document.querySelector(".search-form-wrapper--categories-menu-wrapper")){
        document.querySelector(".search-form-wrapper--categories-menu-wrapper").remove(); 
        document.querySelector("main").classList.remove("active");
    }else{
        ShowAllCategories();
        document.querySelector("main").classList.add("active");
    }
})
document.addEventListener("click",(event)=>{
    const composedPath = event.composedPath();
    if(document.querySelector(".search-form-wrapper--categories-menu-wrapper") && !composedPath.includes(document.querySelector(".search-form-wrapper--categories-menu-wrapper")) && !composedPath.includes(document.querySelector(".search-form--all-groups-btn"))){
        document.querySelector(".search-form-wrapper--categories-menu-wrapper").remove();
        document.querySelector("main").classList.remove("active");

    }
})