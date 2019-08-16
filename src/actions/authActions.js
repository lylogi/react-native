export const authLogin = (userNameOrEmailAddress, password) => ({
    type: 'AUTH_LOGIN',
    payload: {
        userNameOrEmailAddress,
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