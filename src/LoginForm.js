import React from 'react';
import useForm from './useFormHandler';

export default function LoginForm() {
    const initial = { email: '', password: '', remember: false };

    const validate = (v) => {
        const e = {};
        if (!v.email) e.email = 'Email required';
        if (!v.password) e.password = 'Password required';
        return e;
    };

    const onSubmit = (values) => {
        console.log('LoginForm onSubmit:', values);
        // perform login
    };

    const { values, errors, handleChange, handleSubmit, resetForm } = useForm(initial, onSubmit, validate);

    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid #ddd', padding: 12 }}>
            <h3>Login</h3>
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
                <label>
                    <input name="remember" type="checkbox" checked={values.remember} onChange={handleChange} /> Remember me
                </label>
            </div>
            <button type="submit">Login</button>
            <button type="button" onClick={() => resetForm(initial)} style={{ marginLeft: 8 }}>Reset</button>
        </form>
    );
}
