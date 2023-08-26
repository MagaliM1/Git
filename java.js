const productsContainer = document.querySelector(".products-container");
const btnmas = document.querySelector(".btn-mas");
const categoriasConte = document.querySelector(".categorias");
const categoriasList = document.querySelectorAll(".category");

const createProductTemplate = (product) => {
    const { id, img, name, precio, category } = product;
    return `
    <div class="product">
        <img src=${img} alt=${name}/>
        <div class="product-info">
            <h3>${name}</h3>
            <p>${precio}</p>
        </div>
                
        <button class="btn-add"
            data-id='${id}'
            data-name='${name}'
            data-precio='${precio}'
            data-img='${img}'
            data-category='${category}'>Agregar</button>
    </div> `;     
};

const isLast = () => {
    return appState.currentProducts === appState.productsLimit-1;
}

const btnMas = () => {
    appState.currentProducts += 1;
    let {products, currentProducts} = appState;
    renderProduct(products[currentProducts]);
    if (isLast()) {
        btnMas.classList.add(".hidden")
    }
};

const renderProduct = (productsList) => {
    productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

//filtrar categorias
const applyFilter = ({ target }) => {
    if (!isInactiveFilterBtn(target)) return;
    changeFilterState(target);
    productsContainer.innerHTML = '';
    if (appState.activeFilter) {
        renderFilteredProducts();
        appState.currentProductsIndex = 0;
        return;
    }
    renderProducts(appState.products[0]);
};

const renderFilteredProducts = () => {
    const filteredProducts = productsData.filter(
        (product) => product.category === appState.activeFilter
    );
    renderProducts(filteredProducts);
};

const isInactiveFilterBtn = (element) => {
    return (
        element.classList.container("category") &&
        !element.classList.container("active")
    );
};

const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(applyFilter.activeFilter);

};

const changeBtnActiveState = (selectedCategory) => {
    const categorias = [...categoriasList];
    categorias.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove("active");
            return;
        }
        categoryBtn.classList.add("active");
    })
};

const setbtnMasVisibility = () => {
    if (!appState.activeFilter) {
        showMoreBtn.classList.remove("hidden")
        return
    }
    showMoreBtn.classList.add("hidden")
};


const init = () => {
    renderProduct(appState.products[0]);
    btnMas.addEventListener("click", btnProducts);
    categoriasConte.addEventListener("click", applyFilter);
};
init();





