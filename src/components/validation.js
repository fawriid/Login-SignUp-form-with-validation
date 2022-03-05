export const validation = (data, type) => {
    const errors = {}


    if (!data.email) {
        errors.email = "Email is required"
    } else if (!/^[A-Za-z0-9+_.-]+@(.+)$/.test(data.email)) {
        errors.email = "Email is invalid";
    } else {
        delete errors.email;
    }
    
    if (!data.password) {
        errors.password = 'Password is required'
    } else if (data.password.length < 8) {
        errors.password = 'Password is too short'
    } else {
        delete errors.password
    }
    
    
    if (type === "signUp") {
        if (!data.username.trim()) {
            errors.username = "Username is required";
        } else if (data.username.length < 3) {
            errors.username = "Username is not valid";
        } else {
            delete errors.username;
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "Please confirm your password";
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "Password doesn't match";
        } else {
            delete errors.confirmPassword;
        }

        if (!data.isAccepted) {
            errors.isAccepted = "Accepting the regulation is required";
        } else {
            delete errors.isAccepted;
        }
    }

    return errors
}

