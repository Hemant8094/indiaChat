

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
        case 'ChatText':
            return {...state,  chatText : action.text} 
        case 'textArray':
            return {...state,  textArray : [...state.textArray, action.text]}
        case 'storyArray':
            return {...state ,storyArray :[...state.storyArray,action.story]}
        case 'selectChat':
            const i = state.textArray.findIndex(x => x.id === action.chat.id)
            const chat = state.textArray[i];
            const isSelect =  chat.isSelected
            chat.isSelected = !isSelect;
            return {...state, textArray : [...state.textArray.slice(0, i),chat, ...state.textArray.slice(i+1, state.textArray.length )] }                   
        default:
            return state
    }

}
export default reducer