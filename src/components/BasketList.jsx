import { BasketItem } from './BasketItem';

export function BasketList(props){
    const[order=[]] = props;
    return <ul className="collection">
                <li className="collection-item active">Корзина</li>
                {
                    order.length ? order.map(Item =>{
                        <BasketItem key={Item.mainId}{...Item} />
                    }) :  <li className="collection-item active">Корзина пуста</li>
                }
                <li className="collection-item active">Общая стоимость :</li>
    </ul>
}