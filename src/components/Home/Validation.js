export default function Validation(values) {
    const errors = {}

    const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const sdt_pattern = /[0-9]/

    if(values.name === '') {
        errors.name ='Name is Required!'
    }

    if(values.email === '') {
        errors.email ='Email is Required!'
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Email didn't match!"
    } 

    if(values.sdt === ''){
        errors.sdt = 'Phone number is Required!'
    } else if (!sdt_pattern.test(values.sdt)) {
        errors.sdt = "Phone Number didn't match!"
    }

    if(values.note === '') {
        errors.note ='Note is Required!'
    }

    return errors;
}