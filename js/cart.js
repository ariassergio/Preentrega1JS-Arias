const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");

const displayCart = () => {
    modalContainer.innerHTML = "";

    modalContainer.style.display ="block";
    modalOverlay.style.display ="block";
    //Modal Header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display ="none";
        modalOverlay.style.display ="none";
    });

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Carrito";
    modalTitle.className = "modal-title"
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);

    // Modal del Body
    if (cart.Length > 0){
    cart.forEach((product) =>{
        const modalBody = document.createElement("div");
        modalBody.className = "modal-body"
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}" />
            <div class="product-info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantify">
                <span class="quantify-btn-decrese">-</span>
                <span class="quantify-input">${product.quanty}</span>
                <span class="quantify-btn-increse">+</span>
            </div>
            <div class="price">${product.price * product.quanty} $</div>
            <div class="delete-product">❌</div>
        </div>    
        `;
        modalContainer.append(modalBody);
        
        //Sacar cantidad de productos
        const decrese = modalBody.querySelector(".quantify-btn-decrese")
        decrese.addEventListener("click", () =>{
            if(product.quanty !== 1){
                product.quanty--;
                displayCart();
                displayCartCounter();
            }
           
        })

        //Aumentar cantidad de productos

        const increse = modalBody.querySelector(".quantify-btn-increse");
        increse.addEventListener("click", () =>{
            product.quanty++;
            displayCart();
            displayCartCounter();
        })

        //Eliminar productos

        const deleteProduct = modalBody.querySelector(".delete-product");

        deleteProduct.addEventListener("click", () =>{
            deleteCartProduct(product.id);
        })
    });

    //modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0)
    const modalfooter = document.createElement("div");
    modalfooter.className = "modal-footer"
    modalfooter.innerHTML = `
        <div class="total-price"> Total: ${total}</div>
    `;
    modalContainer.append(modalfooter)
}else{
    const modalText = document.createElement("h2")
    modalText.className = "modal-body";
    modalText.innerText = "El carrito esta vacio";
    modalContainer.append(modalText)
}
};

cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) =>{
    const foundId = cart.findIndex((element) => element.id == id);
    console.log(foundId);
    cart.splice(foundId, 1);
    displayCart();
    displayCartCounter();
}

//Contador del carrito

const displayCartCounter = () =>{
    const cartLength = cart.reduce((acc, el) => acc +  el.quanty, 0)
    cartCounter.style.display = "block";
    cartCounter.innerText = cartLength;
}