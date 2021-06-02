import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom"

function UploadedStory(props){
   
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const storyArray = useSelector(state=>state.storyArray)
    const image = storyArray.find(x=>x.hasOwnProperty("value") && x.id === id);
    useEffect(() => {
        setTimeout(() => setLoading(true));
    })  
    const Storys  =()=>{
       return storyArray.map((x)=>{
           

               return <img className="popup"
               alt = "story"
               src =  {x.value}
           />
           
       })
    } 
    return <> 
    {image===null?alert("story not uploaded"):
    <div className = "overlay" style={{'opacity' : !loading ? 0 : 1}}>
         <div style = {{display:"flex",flexDirection:"row",overflowX:"auto",height:"100%"}}>
         {Storys()}
         </div>
        <Link class="close" to="/stories">&times;</Link>
    </div>}
  </>
}

export default UploadedStory