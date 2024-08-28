import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const MyForm = () => {
    const schema = yup.object().shape({
        F_name: yup.string().required('first name is required'),
        L_name: yup.string().required('last name is required'),
        G_mail: yup.string().email('Invalid email').required('Email is required'),
        Phonenumber: yup.string().required('Phone number is required'),
        password: yup.string().min(4, 'Minimum 4 characters').max(10, 'Maximum 10 characters').required('Password is required'),
        confirm_password: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/api/signin", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                console.log("Form submitted successfully");
            } else {
                console.log("Failed to submit");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type='text' placeholder='Enter first name' {...register('F_name')} />
                    <p>{errors.fullname?.message}</p>
                </div>
                <div>
                    <input type='text' placeholder='Enter last name' {...register('L_name')} />
                    <p>{errors.fullname?.message}</p>
                </div>
                <div>
                    <input type='email' placeholder='Enter email' {...register('G_mail')} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <input type='text' placeholder='Enter phone number' {...register('Phonenumber')} />
                    <p>{errors.phone_number?.message}</p>
                </div>
                <div>
                    <input type='password' placeholder='Enter password' {...register('password')} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <input type='password' placeholder='Confirm password' {...register('confirm_password')} />
                    <p>{errors.confirm_password?.message}</p>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default MyForm;
