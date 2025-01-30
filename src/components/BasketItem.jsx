
export function BasketItem(props){
    const{mainId, displayName, price, quantity} = props;
    return <li  className="collection-item ">
        {displayName} x {quantity} = {price.regularPrice}
        <span  class="secondary-content"><i class="material-icons basket-delete">close</i></span>

    </li>
}