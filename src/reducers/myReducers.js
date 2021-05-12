import { initialState } from "../initialState";

const reducer =(state = initialState, action)=>{
    switch(action.type){
        case "updateTab":
            return {...state, selectedTab: action.payload};
        case 'imageTab':
            return {...state, captureImage : action.image}
        case 'flipTab':
                return {...state, cameraFlip : action.isUserFacing}   
        case 'mirrorTab':
            return {...state, mirrorFlip : action.isMirror}            
        default:
            return state
    }

}
export default reducer