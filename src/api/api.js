import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
});

export const wednesdayAPI = {
    post(checked) {
        return instance.post('auth/test',{success: checked}).then(response => response.data)
    }
}


export const tryCatch = async ( onButtonClick ) => {
    try {
        const response = await onButtonClick();
        console.log('answer: ', response.data);
        return response;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
}