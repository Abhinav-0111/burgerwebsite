// const scroll = new LocomotiveScroll({
//     el: document.querySelector("body"),
//     smooth: true
// });

var curser = document.querySelector(".curser")


document.addEventListener("mousemove", function (dets) {
    curser.style.top = dets.y + "px"
    curser.style.left = dets.x + "px"

})

let images_dt = [
    {
        title: "THE CHICKEN <br> BURGER",
        price: "$12.90",
        MRP: "$24",
        calorie: 7845,
        fat: 98,
        protein: 112
    },
    {
        title: "THE PINK <br> BURGER",
        price: "$18.90",
        MRP: "$38",
        calorie: 4512,
        fat: 65,
        protein: 78
    },
    {
        title: "THE BLACK <br> BURGER",
        price: "$10.90",
        MRP: "$18",
        calorie: 6545,
        fat: 115,
        protein: 56
    },
    {
        title: "THE RED <br> BURGER",
        price: "$11.90",
        MRP: "$20",
        calorie: 9845,
        fat: 68,
        protein: 86
    },
    {
        title: "THE GREEN <br> BURGER",
        price: "$13.90",
        MRP: "$26",
        calorie: 1256,
        fat: 45,
        protein: 123
    },
    {
        title: "THE TORNADO <br> BURGER",
        price: "$18.90",
        MRP: "$38",
        calorie: 5678,
        fat: 92,
        protein: 99
    },
    {
        title: "THE COMBO <br> BURGER",
        price: "$9.90",
        MRP: "$17",
        calorie: 3245,
        fat: 49,
        protein: 78
    },
]

let index = 0
let imageoff = () => {
    Array.from(document.getElementsByClassName("img-main")).forEach((elm) => {
        elm.style.width = "35%";
        elm.style.filter = "blur(1.5px)"
    })
}
let len = Array.from(document.getElementsByClassName("img-main")).length * 300
let iconoff = () => {
    Array.from(document.getElementsByClassName("icon1")).forEach((elm) => {
        elm.style.transform = "unset"
        elm.style.opacity = ".3"
    })
}
document.querySelector(".bi-chevron-right").addEventListener("click", function () {
    index += 300;
    if (index > (len) - 300) {
        index = (len - 300)
    }
    document.querySelector(".images").scrollLeft = index;
    imageoff();
    document.getElementsByClassName("img-main")[index / 300].style.width = "60%";
    document.getElementsByClassName("img-main")[index / 300].style.filter = "blur(0px)"
    document.getElementsByClassName("title-1")[0].innerHTML = images_dt[(index / 300)].title
    document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index / 300)].price}<sup><del>${images_dt[(index / 300)].MRP}</del></sup>`
    document.getElementsByClassName("Protien")[0].innerHTML = images_dt[(index / 300)].protein
    document.getElementsByClassName("calorie")[0].innerHTML = images_dt[(index / 300)].calorie
    document.getElementsByClassName("fat")[0].innerHTML = images_dt[(index / 300)].fat
    iconoff();
    document.getElementsByClassName("icon1")[index / 300].style.transform = "scale(1.1)";
    document.getElementsByClassName("icon1")[index / 300].style.opacity = 1;
})

document.querySelector(".bi-chevron-left").addEventListener("click", function () {
    index -= 300;
    if (index < 0) {
        index = 0
    }
    document.querySelector(".images").scrollLeft = index;
    imageoff();
    document.getElementsByClassName("img-main")[index / 300].style.width = "60%";
    document.getElementsByClassName("img-main")[index / 300].style.filter = "blur(0px)"
    document.getElementsByClassName("title-1")[0].innerHTML = images_dt[(index / 300)].title
    document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index / 300)].price}<sup><del>${images_dt[(index / 300)].MRP}</del></sup>`
    document.getElementsByClassName("Protien")[0].innerHTML = images_dt[(index / 300)].protein
    document.getElementsByClassName("calorie")[0].innerHTML = images_dt[(index / 300)].calorie
    document.getElementsByClassName("fat")[0].innerHTML = images_dt[(index / 300)].fat
    iconoff();
    document.getElementsByClassName("icon1")[index / 300].style.transform = "scale(1.1)";
    document.getElementsByClassName("icon1")[index / 300].style.opacity = 1;
})

Array.from(document.getElementsByClassName("icon1")).forEach((elm, i) => {
    elm.addEventListener("click", function () {
        index = 300 * i

        document.querySelector(".images").scrollLeft = index;
        imageoff();
        document.getElementsByClassName("img-main")[index / 300].style.width = "60%";
        document.getElementsByClassName("img-main")[index / 300].style.filter = "blur(0px)"
        document.getElementsByClassName("title-1")[0].innerHTML = images_dt[(index / 300)].title
        document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index / 300)].price}<sup><del>${images_dt[(index / 300)].MRP}</del></sup>`
        document.getElementsByClassName("Protien")[0].innerHTML = images_dt[(index / 300)].protein
        document.getElementsByClassName("calorie")[0].innerHTML = images_dt[(index / 300)].calorie
        document.getElementsByClassName("fat")[0].innerHTML = images_dt[(index / 300)].fat
        iconoff();
        document.getElementsByClassName("icon1")[index / 300].style.transform = "scale(1.1)";
        document.getElementsByClassName("icon1")[index / 300].style.opacity = 1;
    })
})
















// let index = 0;
// let imagesoff = () => {
//     Array.from(document.getElementsByClassName("img-main")).forEach((el) => {
//         el.style.width = "35%"
//         el.style.filter = "blur(1.5px)"
//     })
// }

// let iconoff = () => {
//     Array.from(document.getElementsByClassName("icon1")).forEach((el) => {
//         el.style.transform = "unset"
//         el.style.opacity = ".3"
//     })
// }
// let len = Array.from(document.getElementsByClassName("img-main")).length * 300

// document.querySelector(".bi-chevron-right").addEventListener("click", function () {
//     index += 300;
//     if (index > (len) - 300) {
//         index = (len) - 300;
//     }
//     document.querySelector(".images").scrollLeft = index;
//     imagesoff();
//     document.getElementsByClassName("img-main")[index / 300].style.width = "60%";
//     document.getElementsByClassName("img-main")[index / 300].style.filter = "blur(0px)"
//     document.getElementsByClassName("title-1")[0].innerHTML = images_dt[(index / 300)].title;
//     document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index / 300)].price}<sup><del>${images_dt[(index / 300)].MRP}</del></sup>`
//     document.getElementsByClassName("calorie")[0].innerText = images_dt[(index / 300)].calorie;
//     document.getElementsByClassName("Protien")[0].innerText = images_dt[(index / 300)].protein;
//     document.getElementsByClassName("fat")[0].innerText = images_dt[(index / 300)].fat;
//     iconoff();
//     document.getElementsByClassName("icon1")[(index / 300)].style.transform = "scale(1.1)"
//     document.getElementsByClassName("icon1")[(index / 300)].style.opacity = 1;
// })

// document.querySelector(".bi-chevron-left").addEventListener("click", function () {
//     index -= 300;
//     if (index < 0) {
//         index = 0;
//     }
//     document.querySelector(".images").scrollLeft = index;
//     imagesoff();
//     document.getElementsByClassName("img-main")[index / 300].style.width = "60%";
//     document.getElementsByClassName("img-main")[index / 300].style.filter = "blur(0px)"
//     document.getElementsByClassName("title-1")[0].innerHTML = images_dt[(index / 300)].title;
//     document.getElementsByClassName("price")[0].innerHTML = `${images_dt[(index / 300)].price}<sup><del>${images_dt[(index / 300)].MRP}</del></sup>`
//     document.getElementsByClassName("calorie")[0].innerText = images_dt[(index / 300)].calorie;
//     document.getElementsByClassName("Protien")[0].innerText = images_dt[(index / 300)].protein;
//     document.getElementsByClassName("fat")[0].innerText = images_dt[(index / 300)].fat;
//     iconoff();
//     document.getElementsByClassName("icon1")[(index / 300)].style.transform = "scale(1.1)"
//     document.getElementsByClassName("icon1")[(index / 300)].style.opacity = 1;
// })

