export default class StorageManager {
    static getToken = () => (localStorage.getItem('token') ? localStorage.getItem('token') : { token: '' });

    static getUserDetails = () => (localStorage.getItem('userDetails') ? JSON.parse(localStorage.getItem('userDetails')) : {});

    static setToken = (token, expiry) => localStorage.setItem('token', JSON.stringify({ token, exp_date: expiry }));

    static setUserDetails = (userDetails) => localStorage.setItem('userDetails', JSON.stringify(userDetails));
}
