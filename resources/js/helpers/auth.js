
export function login(credentials){
    return new Promise((res,rej)=>{

        axios.post('/api/auth/login', credentials)
        .then((response)=>{
            res(response.data)
        })
        .catch((err)=>{
            rej("wrong email or password")
        })
    })
}
