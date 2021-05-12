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
