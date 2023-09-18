import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductssData } from '../State/Thunk/getProductssData';
import { getOrders } from '../State/Thunk/getOrders';
import { getLoadUsers } from '../State/Thunk/getLoadUsers';

const useData = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const orders = useSelector(state => state.orders.orders)
    const users = useSelector((state) => state.users.users);

    useEffect(() => {
        dispatch(getProductssData())
        dispatch(getOrders())
        dispatch(getLoadUsers());
    }, [dispatch])

    return [products, orders,users]
};

export default useData;