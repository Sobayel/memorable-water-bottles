const getStorageCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLocalStorage = id =>{
    const cart = getStorageCart();
    cart.push(id);
    saveCartToLocalStorage(cart);
}
const removeFromLocalStorage = id =>{
    const cart = getStorageCart();
    // removing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
}
 
export {addToLocalStorage, getStorageCart, removeFromLocalStorage}