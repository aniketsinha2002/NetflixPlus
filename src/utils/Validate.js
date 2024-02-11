const Validate = (email, password) => {

    // const nameCheck = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
    
    const emailCheck = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // if (!nameCheck) return "Set proper name"
    if (!emailCheck) return "Email ID is Not Valid"
    if (!passwordCheck) return "Password is Not Valid"

    return null;
}

export default Validate