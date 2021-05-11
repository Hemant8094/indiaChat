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