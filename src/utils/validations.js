const checkValidEmail = (email) => {
    const emVal =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !emVal.test(email);
};

const checkEmptyField = (data) => {
    return !data;
};

const checkValidPassword = (data) => {
    return !(data.length > 5);
};

export const validations = {
    checkValidEmail,
    checkEmptyField,
    checkValidPassword,
};
