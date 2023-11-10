const shopContent = document.getElementById("shopContent");
const cart = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () =>{
    const response =  await fetch("data.json");
    const data = await response.json();
    data.forEach((product)=>{
        const content = document.createElement("div");
        content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.productName}</h3>
        <p>$${product.price}</p> 
        `;
        shopContent.append(content);
    
        const buyButton = document.createElement("button");
        buyButton.innerText = "Agregar al carrito";
    
        content.append(buyButton);
    
        buyButton.addEventListener("click", () =>{
            const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
    
            if(repeat){
                cart.map((prod)=>{
                    if(prod.id === product.id){
                        prod.quanty++;
                        displayCartCounter();
                    }
                });
            }else{
                cart.push({
                    id: product.id,
                    productName: product.productName,
                    price: product.price,
                    quanty: product.quanty,
                    img: product.img,
                });
                displayCartCounter();
                saveLocal();
            }
        
           
        });
    });
}
getProducts();



const saveLocal = () =>{
   localStorage.setItem("carrito", JSON.stringify(cart)); 
}


