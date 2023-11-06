const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");

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
    });

    //modal footer

    const modalfooter = document.createElement("div");
    modalfooter.className = "modal-footer"
    modalfooter.innerHTML = `
        <div class="total-price">Total ;)</div>
    `;
    modalContainer.append(modalfooter)

};

cartBtn.addEventListener("click", displayCart);