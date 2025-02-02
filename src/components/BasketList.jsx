import { BasketItem } from './BasketItem';

export function BasketList(props){

    const{order = [], handleBasketShow = Function.prototype, removeFromBasket = Function.prototype, incrQuantity = Function.prototype, decrQuantity=Function.prototype}= props;

    const totalPrice = order.reduce((sum,el)=>{
        return sum + el.price.regularPrice * el.quantity
    },0);

    return  <ul className="collection basket-list ">
    <li className="collection-item active ">Корзина</li>
    { 
        order.length ? order.map(item =>(
        <BasketItem key={item.mainId} {...item} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incrQuantity={incrQuantity} decrQuantity={decrQuantity} />
    )): <li className="collection-item ">Корзина пуста</li>
    }
    <li className="collection-item active ">Общая стоимость: {totalPrice} руб</li>
    <i className="material-icons basket-close "onClick={handleBasketShow}>close</i>
    </ul>
}