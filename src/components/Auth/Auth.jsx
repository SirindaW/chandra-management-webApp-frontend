import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TextField, InputAdornment, IconButton, Button } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

import styles from './styles.js';
import { signin } from '../../actions/auth.js';
import { chandra1, logoblack } from '../../images/index.js';

const initialState = { email: '', password: '' }

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const [errMsg, setErrMsg] = useState('');

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { message } = await dispatch(signin(formData, navigate));
        setErrMsg(message);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    return (
        <div className="bg-primary w-full h-full absolute top-0">
            <div className={`${styles.flexCenter} w-full h-full`}>
                <div className={`${styles.flexCenter} sm:w-[810px] sm:h-[500px] h-[400px] bg-white drop-shadow-lg rounded-lg overflow-hidden`}>
                    <div className="sm:w-1/2 sm:mb-10"> 
                        <div className={`${styles.flexCenter} mb-9`}>
                            <img src={logoblack} alt="chandra logo" className="object-contained w-[190px] caret-transparent" />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="px-8">
                                <div className={`${styles.flexBetween} mb-6`}>
                                    <PersonIcon fontSize='large' color='primary' sx={{ marginRight: '8px'}} />
                                    <TextField name="username" label="Username" type="username" onChange={handleChange} variant="outlined" required fullWidth autoFocus />
                                </div>
                                <div className={`${styles.flexBetween}`}>
                                    <LockIcon fontSize='large' color='primary' sx={{ marginRight: '8px'}} />
                                    <TextField name="password" label="Password" type={showPassword ? "text" : "password"} onChange={handleChange} variant="outlined" required fullWidth
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={handleShowPassword}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }} 
                                    />
                                </div>
                                <div className="text-right text-[14px] text-red-600 mt-2">{errMsg}</div>
                            </div>
                            <div className="mt-5 w-full flex justify-end">
                                <div className="mr-10 w-[130px]">
                                    <Button type="submit" fullWidth variant="contained" color="primary">Login</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="w-1/2 h-full sm:flex hidden">
                        <img src={chandra1} alt="chandra resort" className="w-full h-full object-cover caret-transparent" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth