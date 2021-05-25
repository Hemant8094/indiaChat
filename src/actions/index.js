 export const updateTab = (payload)=> ({
      type:"updateTab",
      payload,
     });

export const imageTab = (image)=>{
    return {
        type:"imageTab",
        image,
    }
}     
export const flipTab =(isUserFacing)=>{
    return{
        type:"flipTab",
        isUserFacing
    }
}
export const mirrorTab =(isMirror)=>{
    return{
        type:"mirrorTab",
        isMirror
    }
}
export const ChatText =(text)=>{
    return{
        type:"ChatText",
        text
    }
}
export const textArray = (text)=>{
    return{
        type:"textArray",
        text: {
            value: text,
            id: Math.random().toString(36),
            isSelected: false,
            userName:"me"
        }
    }
}
export const selectChat = (chat)=>{
    return{ type:"selectChat", chat }
}
