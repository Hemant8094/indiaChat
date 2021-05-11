import { initialState } from "../initialState";

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case "updateTab":
            return {...state, selectedTab: action.payload};
        case 'imageTab':
            return {...state, captureImage : action.image}
        default:
            return state
    }

}
export default reducer