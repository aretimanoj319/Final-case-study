import axios from "axios";
export const getEmp = () => {
    return async function(dispatch, getState) {
        await axios.get('http://localhost:1234/jobs')
        .then(data => {
            console.log("krishna", data);
            return dispatch({
                type: "employee/getById",
                data: data.data
            });
        });
    };
}

export const applyjobs = (info) => {
    console.log(info);
    return function(dispatch){
        console.log(info);
        axios.post('http://localhost:1234/jobs',info).then(res => {
           console.log()
        })
        .catch(error => console.log(error));
    }
}

export const contactus=(contact)=>{
    console.log();
    return function(dispatch){
    axios.post('http://localhost:1234/contactus',contact).then(res =>{
        console.log(res);
    })
    .catch(error => console.log(error));
    }
}