import { useState } from 'react';

export default function useForm(initialValues = {}, onSubmit, validate) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setValues(prev => {
            const next = { ...prev, [name]: newValue };
            console.log('Input changed:', name, '=', newValue);
            if (validate) {
                const validation = validate(next);
                setErrors(validation || {});
            }
            return next;
        });
    };

    const handleSubmit = (e) => {
        if (e && e.preventDefault) e.preventDefault();
        if (validate) {
            const validation = validate(values);
            setErrors(validation || {});
            if (Object.keys(validation || {}).length) {
                console.log('Form submission blocked, validation errors:', validation);
                return;
            }
        }
        console.log('Form submitted with values:', values);
        if (typeof onSubmit === 'function') onSubmit(values);
    };

    const resetForm = (newValues = initialValues) => {
        setValues(newValues);
        setErrors({});
    };

    return { values, errors, handleChange, handleSubmit, resetForm, setValues, setErrors };
}
