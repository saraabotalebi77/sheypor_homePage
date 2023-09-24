import Data from "../data.js";
const articles_wrapper = document.querySelector(".articles-wrapper")
export default function AddAndShowCard() {
    const advertisements = (Data["advertisement"] && Data["advertisement"].length != 0) ? Data["advertisement"] : null;
    advertisements.forEach(advertisement => {
        let prices_element = "";
        if (typeof (advertisement.price) == "object") {
            for (let key in advertisement.price) {
                if (parseInt(advertisement.price[key])) {
                    prices_element += `<span class="d-block my-5">${key}: <b class="fs-2 color-primary">${advertisement.price[key]}</b> تومان</span>`;
                }
            }
        } else {
            if (parseInt(advertisement.price)) {
                prices_element += `<span class="d-block my-5"><b class="fs-2 color-primary">${advertisement.price}</b> تومان</span>`;
            } else {
                prices_element += `<span class="d-block my-5">${advertisement.price}</span>`;
            }
        }
        const card_element = document.createElement("article");
        card_element.className = "card-advertisement d-inline-block vertical-top small-shadow bg-white rounded-5px p-10";
        card_element.innerHTML = `
        <a href="#" class="card-advertisement--link d-block h-100 position-relative dir-ltr fs-3">            
            <div class="card-advertisement--img-wrapper w-100">
                <img class="card-advertisement--img rounded-5px" src="images/${advertisement.image}" alt="${advertisement.image.slice(0, advertisement.image.indexOf("."))}" width="100%" height="100%">
            </div>
            <h3 class="card-advertisement--title fs-2 multiline-ellipses color-primary">
                ${advertisement.logo_company ?
                `<div class="card-advertisement--company-logo-wrapper d-none float-left bg-white px-5 py-5 mx-5 d-block-576px"><img class="card-advertisement--company-logo" src="images/${advertisement.logo_company}" alt="Image-1" width="100%" height="100%"/></div>`
                : ""}
                <span>${advertisement.title}</span>
            </h3>
            <div class="card-advertisement--info w-100 color-gray-03 position-absolute">
                ${advertisement.order_product ?
                '<div class="d-inline-block bg-light-blue rounded-5px px-5 py-5"><img class="vertical-middle" src="images/delivery-truck.svg" alt="delivery-truck"/><span class="fw-bold color-blue">خرید امن</span></div>'
                : ""}
                ${prices_element}
                <span class="multiline-ellipses">${advertisement.address}</span>
            </div>
            ${advertisement.logo_company ?
                `<div class="card-advertisement--company-logo-wrapper position-absolute bg-white px-5 py-5 d-none-576px"><img class="card-advertisement--company-logo" src="images/${advertisement.logo_company}" alt="Image-1" width="100%" height="100%"/></div>`
                : ""}
        </a>`;
        articles_wrapper.appendChild(card_element);
    })

}
