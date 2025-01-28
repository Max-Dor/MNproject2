import { useState, useEffect } from 'react';
import { API_URL , API_KEY }  from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

export function Shop(){

    const[goods, setGoods] = useState([]);
    const[loading,setLoading] = useState(true);
    const[order, setOrder] = useState([]);
    const[isBasketShow , setIsBasketShow] = useState(false);

    function addToBasket(item){
        const itemIndex = order.findIndex(orderItem => orderItem.mainId === item.mainId)
        if(itemIndex < 0){
            const newItem = {
                ...item,
                quantity: 1,
            }
            setOrder([...order, newItem])
        }else{
            const newOrder = order.map((orderItem, index)=> {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    }
                }else{
                    return orderItem;
                }
            })
            setOrder(newOrder)
        }
    };

    function handleBasketShow(){
        setIsBasketShow(!isBasketShow);
    }

    useEffect(function getGoods(){
        fetch(API_URL, {
            headers:{
                'Authorization': API_KEY,
            },
        }).then((response) => response.json())
            .then((data)=>{
                data.shop && setGoods(data.shop);
                setLoading(false);
            })
    },[]);

    return <main className='container content'>
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
        { loading ? <Preloader/> : <GoodsList goods={goods} addToBasket={addToBasket} />}
        { isBasketShow && <BasketList order={order} />}
    </main>
}