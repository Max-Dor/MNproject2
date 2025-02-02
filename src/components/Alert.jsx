import { useEffect } from 'react';


export function Alert(props){
    const {name = '', closeAlert = Function.prototype} = props;

    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 3000)

        return ()=>{
            clearTimeout(timerId)
        }
    },[name]);
    return <div id='toast-container'>
                <div className='toast' >
                    {name} Добавлен в корзину
                </div>
    </div>
}