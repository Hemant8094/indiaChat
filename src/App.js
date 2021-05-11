import Navigation from "./Navigation"
import './App.css';
import { ReactComponent as ChatIcon } from './assets/chat_bubble_black_24dp.svg';
import { ReactComponent as CameraIcon } from './assets/camera_black_24dp.svg';
import { ReactComponent as StoiesIcon } from './assets/auto_stories_black_24dp.svg';
import { ReactComponent as PersonIcon } from './assets/person_black_24dp.svg';
import { ReactComponent as CancelIcon } from './assets/clear_black_24dp.svg';
import { ReactComponent as FlipIcon } from './assets/cameraswitch_black_24dp.svg';
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Switch, useParams } from "react-router-dom"
import { useEffect,useRef,useCallback } from "react";
import { imageTab, updateTab } from "./actions";
import Webcam from "react-webcam";

function App() {
  const selectedTab = useSelector(state => state.selectedTab);
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
      url: "/camera"
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

  const item = buttons.find(x => x.id === selectedTab);
  return (
    <BrowserRouter>
      <div className="App">
      <div className ="camera">
        <div>
          {item.name}
        </div>
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
         {chats()}
        </div>
}

function Camera() {
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const image = useSelector(state => state.captureImage)
    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
      },
      [webcamRef]
    );

  const setImage = (image) => {
    dispatch(imageTab(image))
  }; 

  return <div style={{position: 'relative', height: '100%'}}> 
    {
      image 
        ?  
          <img src={image} 
            alt=""
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'cover'}}
            /> 
          
        : <Webcam
          ref={webcamRef}
          width ='100%'
          height='100%'
          style={{ objectFit: 'cover'}}
          screenshotFormat ={"image/png"}
          />
    }
    {!image 
      ? <div style={{position: 'absolute', width: '100%', 'bottom': "32px"}}>
          <button onClick ={()=>capture()} 
          style={{    borderRadius: "100%",
                      width: '90px',
                      height: '90px',
                      border: '7px solid white',
                      backgroundColor: 'transparent'}}></button>
          <button style = {{       position: 'absolute',
                                  right: '10px',
                                  top: '-520px',
                                  border: 'none',
                                  borderRadius: '100%',
                                  backgroundColor: '#0000000f'}}><FlipIcon style={{fill: 'white'}}/></button>            
        </div>
      : <div style={{position: 'absolute', width: '100%', 'top': 8, left: 8, textAlign: "initial"}}>
          <button 
            style={{backgroundColor: '#0000000f', border: 'none', borderRadius: '100%',}}
            onClick={() => setImage(null)}><CancelIcon style={{fill: 'white'}}/></button>
        </div>
    }
  </div>
}
function Stories() {
  return <h1>Stories</h1>
}


export default App;
