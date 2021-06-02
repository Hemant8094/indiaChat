import{Link,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {ChatText,textArray,selectChat} from "./actions"
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
import {useState} from "react"
export function ChatsList(props) {
  const [isScroll,setScroll] = useState(false)
  
    const chats = ()=>{
     return props.chatsData.map((x)=>{
      return <Link to = {`/chats/${x.id}`} 
             style={{color: "black", textDecoration: "none"}}>
                <div className ="chatCard" key = {x.id}>
                    <div>
                        <x.emoji/>
                    </div>
                    {x.name}
                </div> 
     </Link>
     })
    }
    const x = (e) => {
      const xx = e.target;  
      setScroll(xx.scrollTop > 10);
    }
     return <div className = "chatContain" onScroll = {(e)=>  {x(e);}} >
                <div className = "chatHeading" style = {isScroll?{boxShadow:"0px 2px 5px 1px lightgrey",transition:"ease-in 1s"}:{borderBottom:"1px inset"}}>
                    Chats
                </div>
                 <div >
                {chats()}
   
                </div>
           </div>
   }

  
   export function Chatspace(props){

    const dispatch  = useDispatch()
    const text = useSelector(state=>state.chatText)
    const textArrays = useSelector(state=>state.textArray)
    const {id} = useParams()
    
    const textList = (array)=>{
      return array.map((textt)=>{  
        return <>
        <div className = "userName">{textt.userName}</div>
        <div className= "listContain" onClick = {()=>dispatch(selectChat(textt))} 
          style = {textt.isSelected?{backgroundColor:"#8080803b"}:null}>
          <li key = {textt.id} className = "listItem"> 
            {textt.value}
          </li>
        </div>
        </>
      })
    }
    
    const item = props.chatsData.find(x =>x.id === +id)
    return  ( <>
        <div className = "ChatsSpace" >
            <div style = {{padding:"19px",textAlign:"initial",borderBottom: "1px inset",position:"sticky",top:0,backgroundColor:"white"}}>
              <div style ={{position: "relative"}}>
                <item.emoji/>
              <div style = {{position: "absolute",
                            top: "11%",
                            left: "9%",
                            }}>
                {item.name}
              </div>

              </div>
            </div>
            <ul className="ullist">
           
            {textList(textArrays)}
            </ul>
            </div>
            <form onSubmit = {(e)=>{e.preventDefault();if(text!=="")dispatch(textArray(text));dispatch(ChatText(""))}}>
              <div style = {{position:"relative"}}>
            <Link to = "/chat-camera">
              <span className = "cameraSpan">
                <CameraIcon className = "chatCameraIcon"/>
              </span>
            </Link>
            <input placeholder = "Send a chat..."
                    className = "chatInput"
                    value = {text}
                    onChange={ (e)=> { console.log(e.target.value);dispatch(ChatText(e.target.value))}}/>

              </div>
            </form>
            </>)
  }
   