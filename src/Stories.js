import{Link}from "react-router-dom"
import { useSelector} from "react-redux"

export function Stories(){
    const storyArray = useSelector(state=> state.storyArray)
 
    const storys = ()=>{
      // this only for account holder 
    return  storyArray.map((x)=>{
      return     <img  
                    alt = "story" 
                    src = {x.value} 
                    className = "image"
                    />
     
          
      })
    }
    // const Stories = ()=>{
    //   const dispatch  = useDispatch()
    //   return storyArray.map((x)=>{
    //    return <Link to = {`/stories/${x.id}`}>
    //     <div 
    //        style ={{borderRadius:'100%'
    //                ,width:"50px",
    //                height:"50px",
    //                backgroundColor:"lightblue"
    //                ,margin:"2%",
    //                overflow:"auto"}}
    //                >
    //                   {x.map((im)=>{
    //                     return  <img  
    //                     alt = "story" 
    //                     src = {im.value} 
    //                     className = "image"
    //                     />
    //                   })}
    //                    </div>
    //         </Link> 
    //   })
    // }
    return <>
        <div className = "storyHeading">
          Stories
        </div >
        <div style ={{display:"flex",overflowX:"auto",padding:"15px",justifyContent:"space-between"}}>
          
            <Link to ="/stories/id">
               <div 
                  style ={{borderRadius:'100%'
                          ,width:"50px",
                          height:"50px",
                          backgroundColor:"lightblue"
                          ,margin:"2%",
                          overflow:"hidden"}}
                           >
              
              {storys()}
                   
              </div>
            </Link> 
          
            {/* {Stories()} */}
        </div>
       
    </>
  }
  