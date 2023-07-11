import axios from "axios";

const url = 'http://localhost:5000/usuarios';

const login = async credntials => {
    const { data } = await axios.get(url, credntials)
    let valid = false;
    data.forEach(element => {
        if (element.username === credntials.username && element.password === credntials.password) {
            valid = true;
        }
    });
    return valid ? data : Error
}

export default { login }