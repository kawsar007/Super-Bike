import React, { useEffect, useState } from 'react';
import './MyOrder.css';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    console.log(order, 'Order');

    useEffect(() => {
        fetch('https://thawing-escarpment-88664.herokuapp.com/purchaes')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel order?')
        if (proceed) {
            const url = `https://thawing-escarpment-88664.herokuapp.com/purchaes/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingOrder = order.filter(user => user._id !== id)
                        setOrder(remainingOrder)
                    }
                })
        }

    }


    return (
        <div className="table-responsive myOrder">
            <h2 style={{ display: 'flex', justifyContent: 'center', color: '#fff', padding: '20px 10px', margin: '0 auto' }} className="order-title">Order Information</h2>
            <table class="table table-success table-dark table-sm">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map((item, i) => (
                            <tr>
                                <th scope="row">{i+1}</th>
                                <td>{item.name}</td>
                                <td>{item.Email}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td><button onClick={() => handleDeleteOrder(item._id)} type="button" className="btn btn-primary btn-sm">Cancel</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyOrder;
