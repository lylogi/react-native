export const authLogin = (email, password) => ({
    type: 'AUTH_LOGIN',
    payload: {
        email,
        password,
    },
});
  
export const authRegister = (email, password) => ({
    type: 'AUTH_REGISTER',
    payload: {
        email,
        password,
    },
});

export const authLogout = () => ({
    type: 'AUTH_LOGOUT',
});