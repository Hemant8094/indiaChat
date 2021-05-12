import Navigation from "./Navigation"
import Camera from "./Camera"
import './App.css';
import { ReactComponent as ChatIcon } from './assets/chat_bubble_black_24dp.svg';
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
import { ReactComponent as StoiesIcon } from './assets/auto_stories_black_24dp.svg';
import { ReactComponent as PersonIcon } from './assets/person_black_24dp.svg';
import { useDispatch, } from "react-redux";
import { BrowserRouter, Link, Route, Switch, useParams } from "react-router-dom"
import { useEffect} from "react";
import {  updateTab } from "./actions";

function App() {
  const dispatch = useDispatch()

  const buttons = [
    {
      name: 'Chats',
      id : 0,
      icon: ChatIcon,
      url: "/chats"
    },
    {
      name: 'Camera',
      id : 1,
      icon: CameraIcon,
      url: "/camera",
      isTransparent: true
    },
    {
      name: 'Stories',
      id : 2,
      icon: StoiesIcon,
      url: "/stories"
    }
  ]

  useEffect(() => {
    const item = buttons.find(x => window.location.pathname.includes(x.url))
    if (item) dispatch(updateTab(item.id))
  })

  return (
    <BrowserRouter>
      <div className="App">
      <div className ="camera">
        <div className="data">
          <Switch>
            <Route path="/chats/:id">
              <Chatspace chatsData = {chatsData}/>
            </Route>
            <Route exact path="/chats">
              <Chats chatsData = {chatsData}/>
            </Route>
            <Route path="/stories">
              <Stories />
            </Route>
            <Route path="/camera">
              <Camera />
            </Route>
          </Switch>
        </div>
        <Navigation buttons={buttons}/>
      </div>
      </div>
    </BrowserRouter>

  );
}
const xx = () => Math.random().toString(36);
const chatsData = [
  {name: xx(),emoji:PersonIcon,id:0},
  {name:xx(),emoji:PersonIcon,id:1},
  {name:xx(),emoji:PersonIcon,id:2},
  {name:xx(),emoji:PersonIcon,id:3},
  {name:xx(),emoji:PersonIcon,id:4},
  {name:xx(),emoji:PersonIcon,id:5},
  {name:xx(),emoji:PersonIcon,id:6},
  {name:xx(),emoji:PersonIcon,id:7},
  {name:xx(),emoji:PersonIcon,id:8},
  {name:xx(),emoji:PersonIcon,id:9},
]
function Chatspace(props){
  const {id} = useParams()

  const item = props.chatsData.find(x =>x.id === +id)
  return (<div>
      {item.name}
  </div>)
}
function Chats(props) {
  
 const chats = ()=>{
  return props.chatsData.map((x)=>{
   return <Link to = {`/chats/${x.id}`} style={{color: "black", textDecoration: "none"}}><div className ="chatCard" key = {x.id}>
    <div>
      <x.emoji/>
    </div>
    {x.name}
  </div> 
  </Link>
  })
 }
 
  return <div>
          <div style = {{position:"sticky",top:0,backgroundColor:"white",padding:"10px",boxShadow:"1px 1px 5px", fontSize:"23px",fontFamily:"cursive"}}>
            Chats
          </div>
          <div>
         {chats()}

          </div>
        </div>
}


function Stories() {
  return <h1>Stories</h1>
}


export default App;
