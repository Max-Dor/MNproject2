import { useState, useEffect } from 'react';
import { API_URL , API_KEY }  from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

export function Shop(){

    const[goods, setGoods] = useState([]);
    const[loading,setLoading] = useState(true);
    const[order, setOrder] = useState([]);
    const[isBasketShow , setIsBasketShow] = useState(false);
    const[alertName, setAlertName] = useState('')

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
        setAlertName(item.displayName);
    };

    function handleBasketShow(){
        setIsBasketShow(!isBasketShow);
    };

    const removeFromBasket = (itemId)=>{
        const newOrder = order.filter(el => el.mainId !== itemId)
        setOrder(newOrder)
    };

    const incrQuantity = (item)=>{
        const orderItem = order.map(e=>{
            if(e.mainId === item ){
                const newQuantity = e.quantity + 1;
                return{
                    ...e,
                    quantity: newQuantity
                }
            }else{
                return e;
            }
        })
        
        setOrder(orderItem)
    };

    const decrQuantity = (item)=>{
        const orderItem = order.map(e=>{
            if(e.mainId === item ){
                const newQuantity = e.quantity - 1;
                return{
                    ...e,
                    quantity: newQuantity >= 0 ? newQuantity : 0
                }
            }else{
                return e;
            }
        })
        
        setOrder(orderItem)
    };

    const closeAlert = ()=>{
        setAlertName('')
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
        { isBasketShow && (
        <BasketList
        order={order} 
        handleBasketShow = {handleBasketShow} 
        removeFromBasket={removeFromBasket} 
        incrQuantity={incrQuantity} 
        decrQuantity={decrQuantity}
        />
        )}
        {
            alertName && <Alert name={alertName} closeAlert={closeAlert }/>
        }
    </main>
}