import { initialState } from "../initialState";

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case "updateTab":
            return {...state, selectedTab: action.payload};
        default:
            return state
    }

}
export default reducer