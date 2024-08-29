import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const MyForm = () => {
    const [records, setRecords] = useState([]);
    const [editingId, setEditingId] = useState(null);

    // Validation schema using Yup
    const schema = yup.object().shape({
        F_name: yup.string().required('First name is required'),
        L_name: yup.string().required('L_name is required'),
        email: yup.string().email('Invalid email').required('Email is required'),
        phoneNumber: yup.string().required('Phone number is required'),
        password: yup.string().min(4, 'Minimum 4 characters').max(10, 'Maximum 10 characters').required('Password is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    // React Hook Form with Yup validation
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    // Fetch existing records when the component is mounted
    const fetchRecords = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/signin/");
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setRecords(data);
        } catch (error) {
            console.error("An error occurred while fetching records:", error);
        }
    };

    useEffect(() => {
        fetchRecords();
    }, []);

    // Handle form submission
    const onSubmit = async (formData) => {
        try {
            const url = editingId 
                ? `http://localhost:3000/api/signin/${editingId}` 
                : "http://localhost:3000/api/signin";
            const method = editingId ? "PUT" : "POST";
            const response = await fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log("Form submitted successfully");
                reset();
                setEditingId(null);
                fetchRecords(); // Refresh records after submission
            } else {
                console.log("Failed to submit the form");
            }
        } catch (error) {
            console.error("An error occurred while submitting the form:", error);
        }
    };

    // Handle record editing
    const handleEdit = (record) => {
        setEditingId(record.id);
        reset({
            F_name: record.F_name,
            L_name: record.L_name,
            email: record.email,
            phoneNumber: record.phoneNumber,
        });
    };

    // Handle record deletion
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/api/signin/${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                console.log("Record deleted successfully");
                fetchRecords(); // Refresh records after deletion
            } else {
                console.log("Failed to delete the record");
            }
        } catch (error) {
            console.error("An error occurred while deleting the record:", error);
        }
    };

    return (
        <div>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input type="text" placeholder="Enter first name" {...register('F_name')} />
                    <p>{errors.F_name?.message}</p>
                </div>
                <div>
                    <input type="text" placeholder="Enter L_name" {...register('L_name')} />
                    <p>{errors.L_name?.message}</p>
                </div>
                <div>
                    <input type="email" placeholder="Enter email" {...register('email')} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <input type="text" placeholder="Enter phone number" {...register('phoneNumber')} />
                    <p>{errors.phoneNumber?.message}</p>
                </div>
                <div>
                    <input type="password" placeholder="Enter password" {...register('password')} />
                    <p>{errors.password?.message}</p>
                </div>
                <div>
                    <input type="password" placeholder="Confirm password" {...register('confirmPassword')} />
                    <p>{errors.confirmPassword?.message}</p>
                </div>
                <button type="submit">{editingId ? "Update" : "Submit"}</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>L_name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((record) => (
                        <tr key={record.id}>
                            <td>{record.F_name}</td>
                            <td>{record.L_name}</td>
                            <td>{record.phoneNumber}</td>
                            <td>{record.email}</td>
                            <td>
                                <button onClick={() => handleEdit(record)}>Edit</button>
                                <button onClick={() => handleDelete(record.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyForm;
