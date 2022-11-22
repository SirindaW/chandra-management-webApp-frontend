import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3001' });

export const signIn = (formData) => API.post('/api/admin/employee/login', formData);

export const fetchEvents = () => API.get('/api/admin/reservation/event');
export const updateEventStatus = (data) => API.post('', data);

export const fetchBookings = () => API.get('/api/admin/reservation');
export const updateBookingStatus = (data) => API.post('api/admin/reservation/change_status', data);

export const fetchGuests = () => API.get('api/admin/allguest');
