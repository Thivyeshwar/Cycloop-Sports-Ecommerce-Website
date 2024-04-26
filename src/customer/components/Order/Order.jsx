import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../../State/Order/Action'

const OrderStatus = [
    { label: "On the way", value: "on_the_way" },
    { label: "Delivered", value: "delevered" },
    { label: "Cancelled", value: "cancalled" },
    { label: "Return", value: "return" },
]


const Order = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderHistory())
    }, [])
    const { order } = useSelector(store => store);
    console.log("order:", order);
    return (
        <div className='m-10 lg:px-20 px-5'>
            <h1><b>Orders Placed</b></h1>
            <Grid container sx={{ justifyContent: "space-between" }} >
                {/* <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5'>
                        <h1 className='font-bold text-lg'>
                            Filter
                        </h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>
                            {OrderStatus.map((option) => <div className='flex items-center'>
                                <input defaultValue={option.value} type="checkbox" className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                                <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                    {option.label}
                                </label>
                            </div>)}


                        </div>
                    </div>
                </Grid> */}
                <Grid item xs={12}>
                    <div className='space-y-5'>
                        {order.orders?.map((item) => <OrderCard item={item} />)}
                    </div>


                </Grid>
            </Grid>
        </div>
    )
}

export default Order