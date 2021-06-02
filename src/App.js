import Navigation from "./Navigation"
import Camera from "./Camera"
import './App.css';
import {ChatsList,Chatspace} from "./Chats"
import {Stories} from "./Stories"
import { ReactComponent as ChatIcon } from './assets/chat_bubble_black_24dp.svg';
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
import { ReactComponent as StoiesIcon } from './assets/auto_stories_black_24dp.svg';
import { ReactComponent as PersonIcon } from './assets/person_black_24dp.svg';
import { useDispatch, useSelector} from "react-redux";
import { BrowserRouter,Route, Switch,} from "react-router-dom"
import { useEffect} from "react";
import {  updateTab } from "./actions";
import UploadedStory from "./Uploadedstory"

function App() {
  const dispatch = useDispatch()
  const image = useSelector(state => state.captureImage)

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
      url: "/indiachat",
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
      {/* <div className = "headerContain">

      <div className = "header">
        
          India-Chat
      </div>
      </div> */}
      <div className="App">
        <div className ="camera">
         <div className="data">
          <Switch>
            <Route  path="/chats/:id">
              <Chatspace chatsData = {chatsData}/>
            </Route>
            <Route  path="/chats">
              <ChatsList chatsData = {chatsData}/>
              <Navigation buttons={buttons}/>

            </Route>
            <Route path="/stories/id">
              <UploadedStory/>
            </Route>
            <Route path="/stories">
              <Stories chatsData = {chatsData} />
              <Navigation buttons={buttons}/>

            </Route>
            <Route  exact path="/indiachat">
              <Camera chatsData  = {chatsData}/>
              <Navigation buttons={buttons} style = {image?{display:"none"}:null} />

            </Route>
            <Route  exact path = "/chat-camera">
            <Camera chatsData  = {chatsData}/>
            </Route>
          </Switch>
        </div>
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
  {name:xx(),emoji:PersonIcon,id:10},
  {name:xx(),emoji:PersonIcon,id:11},
  {name:xx(),emoji:PersonIcon,id:12},
  {name:xx(),emoji:PersonIcon,id:13},
  {name:xx(),emoji:PersonIcon,id:14},
  {name:xx(),emoji:PersonIcon,id:15},
  {name:xx(),emoji:PersonIcon,id:16},
  {name:xx(),emoji:PersonIcon,id:17},
  {name:xx(),emoji:PersonIcon,id:18},
  {name:xx(),emoji:PersonIcon,id:19},
  {name:xx(),emoji:PersonIcon,id:20},
  {name:xx(),emoji:PersonIcon,id:21},
  {name:xx(),emoji:PersonIcon,id:22},
  {name:xx(),emoji:PersonIcon,id:23},
  {name:xx(),emoji:PersonIcon,id:24},
  {name:xx(),emoji:PersonIcon,id:25},
  {name:xx(),emoji:PersonIcon,id:26},
  {name:xx(),emoji:PersonIcon,id:27},
  {name:xx(),emoji:PersonIcon,id:28},
  {name:xx(),emoji:PersonIcon,id:29},
  {name:xx(),emoji:PersonIcon,id:30},
  
  
]




export default App;
