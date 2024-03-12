import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLocalStorage, getStorageCart } from "../../Utilites/localstorage";
import Cart from "../Cart/Cart";

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
        console.log('called the useEffect', bottles.length);
        if(bottles.length){
            const storedCartId = getStorageCart();
        console.log(storedCartId, bottles);
        const savedCart = [];
        for(const id of storedCartId){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                savedCart.push(bottle);
            }
        }
        console.log('saved Cart', savedCart)
        setCart(savedCart);
        }
    },[bottles])


    const handleAddToCart = bottle =>{
        console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>

            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;