const productsData = [
    {
        id: 1,
        img: "img/prod/fernet.jpg",
        name: "Fernet Branca",
        precio: $3000,
        category: "Con alcohol",
    },
    {
        id: 2,
        img: "img/prod/skyy.jpg",
        name: "Skyy Saborizado",
        precio: $3000,
        category: "Con alcohol",
    },
    {
        id: 3,
        img: "img/prod/smirnoff.jpg",
        name: "Smirnoff",
        precio: $2800,
        category: "Con alcohol",
    },
    {
        id: 4,
        img: "img/prod/coca.jpg",
        name: "Coca Cola",
        precio: $1000,
        category: "Sin alcohol",
    },
    {
        id: 5,
        img: "img/prod/speed.jpg",
        name: "Speed XL",
        precio: $600,
        category: "Sin alcohol",
    },
    {
        id: 6,
        img: "img/prod/monster.jpg",
        name: "Monster",
        precio: $700,
        category: "Sin alcohol",
    },
    {
        id: 7,
        img: "img/prod/dada7.jpg",
        name: "Dada 7",
        precio: $2500,
        category: "Con alcohol",
    },
];

const divideProducts = (size) => {
    let productsList = [];
    for (let i = 0; i < productsData.length; i += size)
    productsList.push(productsData.slice(i, i + size))
    return productsList;
};

const appState = {
    products: divideProducts(3),
    currentProducts: 0,
    productsLimit: divideProducts(3).length,
    activeFilter: null
};