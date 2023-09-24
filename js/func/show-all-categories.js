import Data from "../Data.js";
import Popup from "./popup.js";
export default function ShowAllCategories(){
    const all_categories_wrapper = document.createElement("div");
    all_categories_wrapper.className = "search-form-wrapper--categories-menu-wrapper position-absolute bg-white w-100 small-shadow rounded-5px d-none-768px"
    all_categories_wrapper.innerHTML =`<ul class="search-form-wrapper--categories-menu w-100 fs-0">
        <div class="search-form-wrapper--categories-menu--items-wrapper-1 search-form-wrapper--categories-menu--items-wrapper d-inline-block vertical-top px-5 fs-3">
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <svg class="vertical-middle" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12ZM3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="#62666d"/>
                    </svg>
                    <span>همه گروه ها</span>
                </a>
            </li>
        </div>
        <div class="search-form-wrapper--categories-menu--items-wrapper-2 search-form-wrapper--categories-menu--items-wrapper d-inline-block vertical-top px-5 fs-3"></div>
        <div class="search-form-wrapper--categories-menu--items-wrapper-3 search-form-wrapper--categories-menu--items-wrapper d-inline-block vertical-top px-5 fs-3"></div>
        <div class="search-form-wrapper--categories-menu--items-wrapper-4 search-form-wrapper--categories-menu--items-wrapper d-inline-block vertical-top px-5 fs-3"></div>
        <div class="search-form-wrapper--categories-menu--items-wrapper-5 search-form-wrapper--categories-menu--items-wrapper d-inline-block vertical-top px-5 fs-3"></div>
    </ul>`;
    document.querySelector(".search-form-wrapper").appendChild(all_categories_wrapper);
    Data.categories.forEach((category,index)=>{
        if(index==0 || index==5){
            document.querySelector(".search-form-wrapper--categories-menu--items-wrapper-1").insertAdjacentHTML("beforeend",`
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <img class="vertical-middle" src="images/category_logo-${index}.svg" alt="${category.name}" width="20" height="20"/>
                    <span >${category.name}</span>
                </a>
                <ul class="search-form-wrapper--category-menu">
                    ${
                        category.types_advertisement.map((type_advertisement,index)=>(
                            index<14?
                            `<li class="search-form-wrapper--category-menu--item">
                                <a href="#" class="search-form-wrapper--category-menu--link color-gray-02 hover--yellow-color">
                                    ${type_advertisement}
                                </a>
                            </li>`:index==14?
                            `<li class="search-form-wrapper--category-menu--item search-form-wrapper--category-menu--more-items color-blue hover--yellow-color cursor-pointer">
                                بیشتر
                            </li>`:
                            ""

                        )).join("")
                    }
                </ul>
            </li>`)
        }else if(index==1 || index==6){
            document.querySelector(".search-form-wrapper--categories-menu--items-wrapper-2").insertAdjacentHTML("beforeend",`
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <img class="vertical-middle" src="images/category_logo-${index}.svg" alt="${category.name}" width="20" height="20"/>
                    <span>${category.name}</span>
                </a>
                <ul class="search-form-wrapper--category-menu">
                    ${
                        category.types_advertisement.map((type_advertisement,index)=>(
                            index<14?
                            `<li class="search-form-wrapper--category-menu--item">
                                <a href="#" class="search-form-wrapper--category-menu--link color-gray-02 hover--yellow-color">
                                    ${type_advertisement}
                                </a>
                            </li>`:index==14?
                            `<li class="search-form-wrapper--category-menu--item search-form-wrapper--category-menu--more-items color-blue hover--yellow-color cursor-pointer">
                                بیشتر
                            </li>`:
                            ""

                        )).join("")
                    }
                </ul>
            </li>`)
        }else if(index==2 || index==7){
            document.querySelector(".search-form-wrapper--categories-menu--items-wrapper-3").insertAdjacentHTML("beforeend",`
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <img class="vertical-middle" src="images/category_logo-${index}.svg" alt="${category.name}" width="20" height="20"/>
                    <span>${category.name}</span>
                </a>
                <ul class="search-form-wrapper--category-menu">
                    ${
                        category.types_advertisement.map((type_advertisement,index)=>(
                            index<14?
                            `<li class="search-form-wrapper--category-menu--item">
                                <a href="#" class="search-form-wrapper--category-menu--link color-gray-02 hover--yellow-color">
                                    ${type_advertisement}
                                </a>
                            </li>`:index==14?
                            `<li class="search-form-wrapper--category-menu--item search-form-wrapper--category-menu--more-items color-blue hover--yellow-color cursor-pointer">
                                بیشتر
                            </li>`:
                            ""

                        )).join("")
                    }
                </ul>
            </li>`)
        }else if(index==3 || index==8){
            document.querySelector(".search-form-wrapper--categories-menu--items-wrapper-4").insertAdjacentHTML("beforeend",`
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <img class="vertical-middle" src="images/category_logo-${index}.svg" alt="${category.name}" width="20" height="20"/>
                    <span>${category.name}</span>
                </a>
                <ul class="search-form-wrapper--category-menu">
                    ${
                        category.types_advertisement.map((type_advertisement,index)=>(
                            index<14?
                            `<li class="search-form-wrapper--category-menu--item">
                                <a href="#" class="search-form-wrapper--category-menu--link color-gray-02 hover--yellow-color">
                                    ${type_advertisement}
                                </a>
                            </li>`:index==14?
                            `<li class="search-form-wrapper--category-menu--item search-form-wrapper--category-menu--more-items color-blue hover--yellow-color cursor-pointer">
                                بیشتر
                            </li>`:
                            ""

                        )).join("")
                    }
                </ul>
            </li>`)
        }else if(index==4 || index==9){
            document.querySelector(".search-form-wrapper--categories-menu--items-wrapper-5").insertAdjacentHTML("beforeend",`
            <li class="search-form-wrapper--categories-menu--item">
                <a href="#" class="search-form-wrapper--categories-menu--link d-block fw-bold color-primary hover--yellow-color fs-2">
                    <img class="vertical-middle" src="images/category_logo-${index}.svg" alt="${category.name}" width="20" height="20"/>
                    <span>${category.name}</span>
                </a>
                <ul class="search-form-wrapper--category-menu">
                    ${
                        category.types_advertisement.map((type_advertisement,index)=>(
                            index<14?
                            `<li class="search-form-wrapper--category-menu--item">
                                <a href="#" class="search-form-wrapper--category-menu--link color-gray-02 hover--yellow-color">
                                    ${type_advertisement}
                                </a>
                            </li>`:index==14?
                            `<li class="search-form-wrapper--category-menu--item  search-form-wrapper--category-menu--more-items color-blue hover--yellow-color cursor-pointer">
                                بیشتر
                            </li>`:
                            ""

                        )).join("")
                    }
                </ul>
            </li>`)

        }
    })
    document.querySelectorAll(".search-form-wrapper--category-menu--more-items").forEach(more_item=>{
        more_item.addEventListener("click",(event)=>{
            const popup_title = event.target.parentElement.previousElementSibling.children[1].innerHTML;
            Popup("categories",popup_title);
        })
    })
       
}