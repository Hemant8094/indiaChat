import{Link,useParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import {ChatText,textArray,selectChat} from "./actions"
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
export function ChatsList(props) {
  
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
    
     return <div style ={{height: "94%",overflow: "auto"}}>
                <div style = {{position:"sticky",
                            top:0,backgroundColor:"white",
                            padding:"10px",boxShadow:"0px 1px 4px",
                             fontSize:"23px",fontFamily:"cursive"
                             }}>
                                Chats
                </div>
                 <div>
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
        <div className = "ChatsSpace">
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
            <Link to = "/camera">
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
   