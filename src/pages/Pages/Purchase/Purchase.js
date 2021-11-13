import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './Purchase.css';

function Purchase() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data, "Data");
        fetch('http://localhost:5000/purchaes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchase Complete Successfully...!!!🔥🔥🔥');
                    reset();
                }
            })
    };
    console.log(watch("example"));

    // const history = useHistory();
    // const goToPurchase = () => {
    //     history.push('/purchase-complete')
    // }

    const { user } = useAuth();
    return (
        <div className="form">
            <form className="purchase-form purchase" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} placeholder="Name" {...register("name")} />
                <input defaultValue={user.email} placeholder="email" {...register("Email", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
               
                    <input type="submit" value="Complete Purchase" />
            </form>
        </div>
    )
}
// onClick={goToPurchase}
export default Purchase;
