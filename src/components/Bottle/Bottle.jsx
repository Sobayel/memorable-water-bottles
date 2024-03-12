import PropTypes from 'prop-types';
import './Bottle.css';
const Bottle = ({bottle, handleAddToCart}) => {
    const {name, img, price} = bottle;
    console.log(bottle)
    return (
        <div className='bottle'>
            <h3>Name: {name}</h3>
            <p>Price:${price}</p>           
            <img src={img} alt="" />
            <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    bottle:PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;