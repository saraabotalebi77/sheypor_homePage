import Data from "../data.js";

const get_category_items = (category_name) => {
    for (let i = 0; i < Data.categories.length; i++) {
        if (Data.categories[i].name == category_name) {
            return Data.categories[i].types_advertisement;
        }
    }
}
const show_province_cities = (province,cities)=>{
    const menu_wrapper = document.createElement("div");
    menu_wrapper.innerHTML = `
        <div class="popup--cities-menu-title cursor-pointer">
            <svg class="vertical-middle" width="22px" height="22px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z" fill="var(--blue)"/>
            </svg>
            <span class="fs-2 color-blue">بازگشت به لیست استان ها</span>
        </div>
        <ul class="popup--cities-menu">
            <li class="popup--menu--item hover--yellow-color cursor-pointer fw-bold">همه شهرهای ${province}</li>
            ${cities.map((city,index)=>(
                index==0 ?
                `<li class="popup--menu--item hover--yellow-color cursor-pointer fw-bold">${city}</li>`:
                `<li class="popup--menu--item hover--yellow-color cursor-pointer">${city}</li>`
            )).join("")}
        </ul> `;
    document.querySelector(".popup--provinces-menu").replaceWith(menu_wrapper);
}
const get_province_cities  = (province)=>{
    let cities ;
    for(let i=0 ; i<Data["cities"].length ; i++){
        if(Data["cities"][i].name == province){
            cities = Data["cities"][i].subset_cities;
            break;
        }
    }
    show_province_cities(province,cities);
}
export default function Popup(popup_type,popup_title){
    let list_items ;
    if(popup_type=="categories"){
        list_items = get_category_items(popup_title);
    }else if(popup_type=="cities"){
        list_items = Data.cities;
    }
    const popup = document.createElement("div");
    popup.className = "popup position-absolute rounded-5px"
    popup.innerHTML = `
        <div class="popup--title-wrapper dir-ltr">
            <span class="popup--close-icon close-icon d-inline-block vertical-middle cursor-pointer" ></span>
            ${popup_type=="categories" ? 
                `<h2 class="popup--title float-right">${popup_title}</h2>`
                :`<h2 class="popup--title text-center"> انتخاب استان</h2>`
            }
        </div>
        <form class="popup--search-form bg-white w-100 ">
            <div class="popup--search-form--input-wrapper rounded-5px p-10 fs-0">
                <img class="popup--search-form--img vertical-top" src="images/search.svg" alt="search-icon" width="20"/>
                <input type="search" placeholder="جستجو" class="popup--search-form--input px-5"/>
                <button type="reset" class="popup--search-form--reset-btn d-none vertical-top close-icon rounded-50per cursor-pointer"></button>
            </div>
        </form>
        <ul class="popup--provinces-menu" >
            ${
                popup_type=="cities" ?
                    `<li class="popup--menu--item popup--provinces-menu--item-1 fs-3 fw-bold">لیست استان ها</li>
                    <li class="popup--menu--item popup--provinces-menu--item-2 position-relative cursor-pointer fw-bold">همه ایران</li>`
                    :` <li class="popup--menu--item cursor-pointer fw-bold">همه</li>`
            }
            ${list_items.map(list_item => (
                `${
                    popup_type=="categories"?
                        `<li class="popup--menu--item hover--yellow-color cursor-pointer">${list_item}</li>`:
                        `<li class="popup--menu--item popup--provinces-menu--item position-relative hover--yellow-color cursor-pointer">${list_item.name}</li>`
                }`
               
            )).join("")
        }
        </ul>
    `;
    document.querySelector(".popup-wrapper").classList.add("active");
    document.querySelector(".popup-wrapper").appendChild(popup);
    document.querySelector(".popup--close-icon").addEventListener("click",()=>{
        popup.remove();
        document.querySelector(".popup-wrapper").classList.remove("active");
    })
    document.querySelectorAll(".popup--provinces-menu--item").forEach(menu_item=>{
        menu_item.addEventListener("click",(event)=>{
            get_province_cities(event.target.innerHTML);
        })
    })
}