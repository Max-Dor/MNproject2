
export function BasketItem(props){
    const{mainId, displayName, price, quantity} = props;
    return <li  className="collection-item ">{displayName} x {quantity} = {price}
            <span  class="secondary-content"><i class="material-icons">close</i></span>
    </li>
}