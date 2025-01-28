

export function Cart(props){
    const {quantity,handleBasketShow = Function.prototype} = props;
    return <div className='cart blue darken-4  white-text' onClick={handleBasketShow} >
        <i className="material-icons">local_grocery_store</i>
        { quantity ? <span className='cart-quontuty'>{quantity}</span> : null}
    </div>
}