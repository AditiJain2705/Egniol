"use client"
import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Snackbar,
    Alert,
} from '@mui/material';

const MessageForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        company: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Clear error on change
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission (e.g., send data to server)
            console.log('Form submitted:', formData);
            setOpenSnackbar(true);
            // Reset form
            setFormData({ name: '', mobile: '', company: '', email: '' });
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box sx={{  padding: 2, display:'flex',flexWrap:'wrap', justifyContent:'space-between'}}>
            
            <form onSubmit={handleSubmit}>
                <TextField
                                style={{backgroundColor:'white',width:'48%',margin: 8,}}

                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                style={{backgroundColor:'white',width:'48%',margin: 8,}}

                    label="Mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    error={!!errors.mobile}
                    helperText={errors.mobile}
                />
                <TextField
                style={{backgroundColor:'white',width:'48%',margin: 8,}}

                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    error={!!errors.company}
                    helperText={errors.company}
                />
                <TextField
                style={{backgroundColor:'white',width:'48%',margin: 8,}}

                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Message
                </Button>
            </form>
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Message sent successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default MessageForm;
