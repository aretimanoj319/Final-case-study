const  intialstate={
    jobs:[],
    use:{},
    contactus:[],
    loading:false
};
const JobReducer=(state=intialstate, action)=>{
    console.log(action.type);
    switch(action.type){
        case "employee/getById":
            console.log("abc",action.data);
            return {
                 jobs:action.data,
                }
                case "APPLY_JOBS":
                    console.log(action.payload);
                    return {
                        ...state,
                        use: action.payload,
                        loading: false
                    }
                   case "cotact_Us":
                    //    console.log(action.payload);
                    //    return {
                    //        ...state,
                    //        contactus:action.payload
                    //    }
                          if (!state.contactus) state.contactus = [];
                          console.log(action.data);
                          return state;


            default:
                return state;
    }

}
export default JobReducer;