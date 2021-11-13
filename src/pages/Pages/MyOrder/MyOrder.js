import React, { useEffect, useState } from 'react';

const MyOrder = () => {
    const [order, setOrder] = useState([]);
    console.log(order, 'Order');

    useEffect(() => {
        fetch('http://localhost:5000/purchaes')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])
    return (
        <div>
            <h2 style={{display: 'flex', justifyContent:'center', padding: '20px 10px', margin: '0 auto'}} className="order-title">Order List</h2>
            <table class="table table-success table-striped">
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
                        order.map(item => (
                            <tr>
                                <th scope="row">1</th>
                                <td>{item.name}</td>
                                <td>{item.Email}</td>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td><button type="button" class="btn btn-primary btn-sm">Cancel</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MyOrder;
