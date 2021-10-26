const forSale = [
    {
        "name": "Unisex Long Sleeve Tee",
        "price": "$1.00",
        "img": "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FCE6zbBdaR9O8ixpQ16t6&w=828&q=75"
    },
    {
        "name": "Snapback",
        "price": "$10.0",
        "img": "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FzWiDwpcQ8msYs0JYm7o2&w=828&q=75"
    },
    {
        "name": "Unisex Zip Hoodie",
        "price": "$6.90",
        "img": "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2FG0GMUFSPQoyzuYjiRdjw&w=828&q=75"
    },
    {
        "name": "Mug",
        "price": "$69",
        "img": "https://commerce.withheadlesscms.com/_next/image?url=https%3A%2F%2Fmedia.graphcms.com%2F9PMP8m9KSTuL6yH0loET&w=828&q=75"
    }
]

const cardContainer = document.getElementById("cardContainer")



forSale.forEach(product =>{
    card = document.createElement("div")
    img = document.createElement("img")
    title = document.createElement("p")
    price = document.createElement("p")

    card.classList.add("cardMain")
    img.classList.add("imgMain")
    title.classList.add("titleMain")
    price.classList.add("priceMain")

    tempTitle = document.createTextNode(product.name);
    tempPrice = document.createTextNode(product.price);
    tempImg = product.img;

    title.appendChild(tempTitle);
    price.appendChild(tempPrice);
    img.src = tempImg;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    cardContainer.appendChild(card);
    console.log("done one")
})