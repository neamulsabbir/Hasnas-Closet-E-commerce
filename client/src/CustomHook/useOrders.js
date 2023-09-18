import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../State/Thunk/getOrders';

const useOrders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)
    
    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return [orders]
};

export default useOrders;