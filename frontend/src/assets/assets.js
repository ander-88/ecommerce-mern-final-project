// product1
import img1 from './img-p1-1.jpg'
import img2 from './img-p1-2.jpg'
import img3 from './img-p1-3.jpg'
// product2
import img4 from './img-p2-1.jpg'
import img5 from './img-p2-2.jpg'
import img6 from './img-p2-3.jpg'
// product3
import img7 from './img-p3-1.jpg'
import img8 from './img-p3-2.jpg'
import img9 from './img-p3-3.jpg'
// product4
import img10 from './img-p4-1.jpg'
import img11 from './img-p4-2.jpg'
import img12 from './img-p4-3.jpg'
// product5 femmes
import img13 from './imgF-p1-1.jpg'
import img14 from './imgF-p1-2.jpg'
// product6 femmes
import img15 from './imgF-p2-1.jpg'
import img16 from './imgF-p2-2.jpg'
import img17 from './imgF-p2-3.jpg'
// product7 femmes
import img18 from './imgF-p3-1.jpg'
import img19 from './imgF-p3-2.jpg'
import img20 from './imgF-p3-3.jpg'
// product8 Children
import img21 from './imgC-p1-1.jpg'
import img22 from './imgC-p1-2.jpg'
import img23 from './imgC-p1-3.jpg'
// product9 Children
import img24 from './imgC-p2-1.jpg'
import img25 from './imgC-p2-2.jpg'
import img26 from './imgC-p2-3.jpg'

// product10 boots
import img27 from './img-b-m-1-1.jpg'
import img28 from './img-b-m-1-2.jpg'
import img29 from './img-b-m-1-3.jpg'

// product11 boots
import img30 from './img-b-m-2-1.jpg'
import img31 from './img-b-m-2-2.jpg'
import img32 from './img-b-m-2-3.jpg'

// product12 boots
import img33 from './img-b-f-1-1.jpg'
import img34 from './img-b-f-1-2.jpg'
import img35 from './img-b-f-1-3.jpg'


// product13 femme boots
import img36 from './img-b-f-2-1.jpg'
import img37 from './img-b-f-2-2.jpg'
import img38 from './img-b-f-2-3.jpg'


// product14 kids boots
import img39 from './img-b-k-1-1.jpg'
import img40 from './img-b-k-1-2.jpg'
import img41 from './img-b-k-1-3.jpg'

// product15 kids boots
import img42 from './img-b-k-2-1.jpg'
import img43 from './img-b-k-2-2.jpg'
import img44 from './img-b-k-2-3.jpg'




//imgs
import dropDownIcon from './dropDownIcon.png'
import masterCard from './masterCard.png'
import visaCard from './visa-logo.jpg'
import addAdidas from './add-adidas.jpg'
import contactImg from './contactImg.jpg'


export const assets ={
    contactImg,
    addAdidas,
    dropDownIcon,
    masterCard,
    visaCard,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
    img39,
    img40,
    img41,
    img42,
    img43,
    img44,
}



export const products =[
    {
        _id:'a0001',
        name:"Adidas Samba OG",
        description:"A timeless classic with a premium leather upper, suede overlays, and a gum rubber outsole. Designed for indoor soccer, now a streetwear staple with iconic 3-Stripes branding and all-day comfort.",
        price: 120,
        image:[img2,img1,img3],
        category:"Men",
        subCategory:"sport",
        sizes:["39","40","41","42"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0002',
        name:"Adidas Handball Spezial Samba OG",
        description:"Originally made for indoor handball, the Adidas Handball Spezial is now a streetwear icon. Featuring a soft suede upper, gum rubber outsole, and retro design, it offers style, comfort, and durability for everyday wear.",
        price: 110,
        image:[img4,img5,img6],
        category:"Men",
        subCategory:"sport",
        sizes:["39","40","41","42","43"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0003',
        name:"Adidas SL 72 OG",
        description:"A retro runner from the 70s, the Adidas SL 72 OG features a lightweight nylon upper, suede overlays, and a slim EVA midsole. Designed for speed and comfort, its a vintage classic with modern street style appeal.",
        price: 100,
        image:[img7,img8,img9],
        category:"Men",
        subCategory:"sport",
        sizes:["40","41","42","43"],
        date:Date.now(),
        bestSeller:false
    },

    {
        _id:'a0004',
        name:"Adidas Stan Smith",
        description:"An icon of minimalism, the Adidas Stan Smith features a sleek leather upper, perforated 3-Stripes, and a rubber outsole. Originally a tennis shoe, now a timeless streetwear essential.",
        price: 120,
        image:[img10,img11,img12],
        category:"Men",
        subCategory:"sport",
        sizes:["40","41","42","43"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0005',
        name:"Adidas Handball Spezial",
        description:"A retro classic with a feminine touch, the Adidas Handball Spezial features a soft suede upper, gum rubber outsole, and vintage design. Perfect for timeless style and all-day comfort.",
        price: 100,
        image:[img13,img14],
        category:"Women",
        subCategory:"sport",
        sizes:["36","37","38","39"],
        date:Date.now(),
        bestSeller:false
    },

    {
        _id:'a0006',
        name:"Adidas SL 72 OG",
        description:"A vintage runner reimagined, the Adidas SL 72 OG Women features a lightweight nylon upper, suede overlays, and a slim EVA midsole. A perfect blend of retro style and modern comfort.",
        price: 110,
        image:[img15,img16,img17],
        category:"Women",
        subCategory:"sport",
        sizes:["37","38","39","40"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0007',
        name:"Adidas Samba OG",
        description:"A timeless classic with a feminine fit, the Adidas Samba OG Women features a premium leather upper, suede overlays, and a gum rubber outsole. A perfect mix of heritage style and everyday comfort.",
        price: 120,
        image:[img18,img19,img20],
        category:"Women",
        subCategory:"sport",
        sizes:["37","38","39","40","41"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0008',
        name:"Adidas Campus 00s x Liberty London Kids ",
        description:"A bold fusion of vintage and modern, the Adidas Campus 00s x Liberty London Kids features premium suede, iconic 3-Stripes, and a unique floral design. A stylish and comfortable choice for little trendsetters.",
        price: 75,
        image:[img21,img22,img23],
        category:"kids",
        subCategory:"sport",
        sizes:["30","31","32","33"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0009',
        name:"Adidas Campus 00s Kids ",
        description:"A retro classic reimagined for kids, the Adidas Campus 00s features a premium suede upper, iconic 3-Stripes, and a chunky sole. Stylish, durable, and perfect for everyday wear.",
        price: 70,
        image:[img24,img25,img26],
        category:"kids",
        subCategory:"sport",
        sizes:["30","31","32","33"],
        date:Date.now(),
        bestSeller:false
    },

    {
        _id:'a0010',
        name:"Bobbies",
        description:"Cody Vintage Leather Boots.",
        price: 200 ,
        image:[img27,img28,img29],
        category:"Men",
        subCategory:"Boots",
        sizes:["40","41","42","43"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0011',
        name:"J.M. WESTON",
        description:"Cambre Iconic leather ankle boots.",
        price: 995 ,
        image:[img30,img31,img32],
        category:"Men",
        subCategory:"Boots",
        sizes:["40","41","42","43"],
        date:Date.now(),
        bestSeller:false
    },

    {
        _id:'a0012',
        name:"Chloé",
        description:"These Chloé PVC ankle boots feature a square toe, a pull tab, a signature at the top of the shaft and a zip fastening.",
        price: 400 ,
        image:[img33,img34,img35],
        category:"Women",
        subCategory:"Boots",
        sizes:["37","38","40","41"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0013',
        name:"Galeries Lafayette",
        description:"Vaea zip leather ankle boots.",
        price: 140 ,
        image:[img36,img37,img38],
        category:"Women",
        subCategory:"Boots",
        sizes:["37","38","39","40"],
        date:Date.now(),
        bestSeller:false
    },

    {
        _id:'a0014',
        name:"Aster",
        description:"Sacho Leather Boots.",
        price: 37 ,
        image:[img39,img40,img41],
        category:"kids",
        subCategory:"Boots",
        sizes:["29","30","32","34"],
        date:Date.now(),
        bestSeller:true
    },

    {
        _id:'a0015',
        name:"Eagle",
        description:"Baby Flac 2 unisex rubber rain boots.",
        price: 40 ,
        image:[img42,img43,img44],
        category:"kids",
        subCategory:"Boots",
        sizes:["30","31","32","33"],
        date:Date.now(),
        bestSeller:false
    },


]