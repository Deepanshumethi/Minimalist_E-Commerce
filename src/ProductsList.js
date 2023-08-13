// import image1 from "./American_Chair.jpg"
// import pop_up_toster from "./pop_up_toster.jpg"
// import lamp from "./lamp.png"
// import compartment from "./compartment.jpeg"
// import golden_light from "./golden light.jpg"
// import oil from "./oil.jpg"
// import bw_lamp from "./bw_lamp.jpeg"
// import blackshelf from "./shelf.jpg"
// import golden_lamp from "./Golden_lamp.png"
// import Lolo_vase from "./Lolo_vase.png"
// import arm_chair from "./Traditional_arm_chair.jpg"
const products=[
    {
        id:"1",
        product:"Little American Chair",
        price:1200,
        proud:(true),
        trending:(true),
        image:"image/American_Chair.jpg",
        image2:"image/American_Chair1.jpg",
        image3:"image/American_Chair3.jpg",
        categorie:"chair",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
        
    },
    {
        id:"2",
        product:"Pop-up toster",
        price:900,
        proud:(true),
        trending:(true),
        image:"image/pop_up_toster.jpg",
        image2:"image/pop_up_toster2.jpg",
        image3:"image/pop_up_toster3.jpg",
        categorie:"kitchen",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"3",
        product:"Lamp light blue",
        price:450,
        proud:(true),
        trending:(true),
        image:"image/lamp.png",
        image2:"image/lamp2.webp",
        image3:"image/lamp3.webp",
        categorie:"lamp",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1

    },
    {
        id:"4",
        product:"Pulp unit-5 compartment",
        price:2100,
        proud:(true),
        trending:(true),
        image:"image/compartment.jpeg",
        image2:"image/compartment2.jpg",
        image3:"image/compartment3.jpg",
        categorie:"furniture",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"5",
        product:"Golden modern light",
        price:1300,
        proud:(true),
        trending:(true),
        image:"image/golden light.jpg",
        image2:"image/golden_light2.webp",
        image3:"image/golden_light3.webp",
        categorie:"lamp",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"6",
        product:"Body oil 200ml",
        price:150,
        proud:(true),
        trending:(true),
        image:"image/oil.jpg",
        image2:"image/oil2.jpg",
        image3:"image/oil3.jpg",
        categorie:"skin care",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"7",
        product:"Black & White lamp",
        price:550,
        proud:(true),
        trending:(false),
        image:"image/bw_lamp.jpeg",
        categorie:"lamp",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"8",
        product:"Black shelf",
        price:730,
        proud:(true),
        trending:(false),
        image:"image/shelf.jpg",
        image2:"image/shelf2.webp",
        image3:"image/shelf3.webp",
        categorie:"furniture",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"9",
        product:"Lolo Vase",
        price:180,
        proud:(false),
        trending:(true),
        image:"image/Lolo_vase.png",
        image2:"image/Lolo_vase2.webp",
        image3:"image/Lolo_vase3.webp",
        categorie:"furniture",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"10",
        product:"Golden Lamp",
        price:1050,
        proud:(false),
        trending:(true),
        image:"image/Golden_lamp.png",
        categorie:"lamp",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    },
    {
        id:"11",
        product:"Traditional arm chair",
        price:2100,
        proud:(false),
        trending:(true),
        image:"image/Traditional_arm_chair.jpg",
        image2:"image/Traditional_arm_chair2.webp",
        image3:"image/Traditional_arm_chair3.webp",
        categorie:"chair",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        texture:"Plastic",
        weight:"12.5KG",
        size:"10 X 12",
        quantity:1
    }
];
export default products;