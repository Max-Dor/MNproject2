
export function BasketItem(props){
    const{mainId, displayName, price, quantity, removeFromBasket =Function.prototype, incrQuantity= Function.prototype, decrQuantity=Function.prototype} = props;
    return <li  className="collection-item ">
        {displayName} x <i className='material-icons pointer' onClick={()=>decrQuantity(mainId) } >remove</i>
        {quantity}
        <i className='material-icons pointer' onClick={()=>incrQuantity(mainId)} >add</i> {price.regularPrice * quantity}руб.
        <span  className="secondary-content" onClick={()=>removeFromBasket(mainId)} >
            <i className="material-icons basket-delete">close</i>
        </span>

    </li>
}