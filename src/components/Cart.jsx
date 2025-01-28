

export function Cart(props){
    const {quantity } = props;
    return <div className='cart blue darken-4  white-text'>
        <i className="material-icons">local_grocery_store</i>
        { quantity ? <span className='cart-quontuty'>{quantity}</span> : null}
    </div>
}