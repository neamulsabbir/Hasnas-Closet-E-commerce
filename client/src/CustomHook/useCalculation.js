import { useEffect } from 'react';
import { getOrders } from '../State/Thunk/getOrders';
import { useDispatch, useSelector } from 'react-redux';

const useCalculation = () => {
    const dispatch = useDispatch()
    const orders = useSelector(state => state.orders.orders)

    let totalSold = 0;
    let totalCost = 0;
    let totalProfit = 0;
    orders.forEach(item => {
        totalSold += parseInt(item?.totalProductPrice);
        totalCost += parseInt(item?.totalCostPrice)
        // console.log(totalSold);
        totalProfit = totalSold - totalCost;
        });

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return [totalSold, totalCost, totalProfit]
};

export default useCalculation;