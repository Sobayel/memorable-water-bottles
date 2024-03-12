import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLocalStorage, getStorageCart } from "../../Utilites/localstorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    // local cart from local storage
    useEffect(()=>{
        const storedCartId = getStorageCart();
        console.log(storedCartId);
    },[])


    const handleAddToCart = bottle =>{
        console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>Cart: {cart.length}</h4>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;