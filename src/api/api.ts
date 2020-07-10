import  axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/'
});

export type PostType = {
    errorText: string
    info: string
    yourBody: {success: boolean}
    yourQuery: {}

}


export const wednesdayAPI = {
    post(answer: boolean) {
        return instance.post<PostType>('auth/test',{success: answer}).then(response => response.data)
    }
}


// export const tryCatch = async ( onButtonClick: () => any) => {
//     try {
//         const response = await onButtonClick();
//         console.log('answer: ', response.data);
//         return response;
//     } catch (e) {
//         console.log('error: ', {...e});
//         return 'error';
//     }
// }