import Navigation from "./Navigation"
import Camera from "./Camera"
import './App.css';
import {ChatsList,Chatspace} from "./Chats"
import {Stories} from "./Stories"
import { ReactComponent as ChatIcon } from './assets/chat_bubble_black_24dp.svg';
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
import { ReactComponent as StoiesIcon } from './assets/auto_stories_black_24dp.svg';
import { ReactComponent as PersonIcon } from './assets/person_black_24dp.svg';
import { useDispatch, } from "react-redux";
import { BrowserRouter,Route, Switch,} from "react-router-dom"
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
      <div className = "headerContain">

      <div className = "header">
        
          India-Chat
      </div>
      </div>
      <div className="App">
        <div className ="camera">
         <div className="data">
          <Switch>
            <Route path="/chats/:id">
              <Chatspace chatsData = {chatsData}/>
            </Route>
            <Route exact path="/chats">
              <ChatsList chatsData = {chatsData}/>
              <Navigation buttons={buttons}/>

            </Route>
            <Route path="/stories">
              <Stories chatsData = {chatsData} />
              <Navigation buttons={buttons}/>

            </Route>
            <Route path="/">
              <Camera />
              <Navigation buttons={buttons}/>

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
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  {name:xx(),emoji:PersonIcon,id:9},
  
]




export default App;
