import React from 'react';
import useForm from './useFormHandler';

export default function RegisterForm() {
    const initial = { name: '', email: '', password: '', confirmPassword: '' };

    const validate = (vals) => {
        const errs = {};
        if (!vals.name) errs.name = 'Name is required';
        if (!vals.email) errs.email = !vals.email ? 'Email is required' : (!/^\S+@\S+\.\S+$/.test(vals.email) ? 'Invalid email' : undefined);
        if (!vals.password) errs.password = 'Password is required';
        if (vals.password !== vals.confirmPassword) errs.confirmPassword = 'Passwords must match';
        return Object.keys(errs).reduce((acc, k) => (errs[k] ? (acc[k] = errs[k], acc) : acc), {});
    };

    const onSubmit = (values) => {
        console.log('RegisterForm onSubmit:', values);
        // place async registration call here
    };

    const { values, errors, handleChange, handleSubmit, resetForm } = useForm(initial, onSubmit, validate);

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
            <h3>Register</h3>
            <div>
                <label>Name</label><br />
                <input name="name" value={values.name} onChange={handleChange} />
                {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
            </div>
            <div>
                <label>Email</label><br />
                <input name="email" value={values.email} onChange={handleChange} />
                {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
            </div>
            <div>
                <label>Password</label><br />
                <input name="password" type="password" value={values.password} onChange={handleChange} />
                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
            </div>
            <div>
                <label>Confirm Password</label><br />
                <input name="confirmPassword" type="password" value={values.confirmPassword} onChange={handleChange} />
                {errors.confirmPassword && <div style={{ color: 'red' }}>{errors.confirmPassword}</div>}
            </div>
            <button type="submit">Register</button>
            <button type="button" onClick={() => resetForm(initial)} style={{ marginLeft: 8 }}>Reset</button>
        </form>
    );
}
