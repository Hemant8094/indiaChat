import { ReactComponent as CancelIcon } from './assets/clear_black_24dp.svg';
import { ReactComponent as FlipIcon } from './assets/cameraswitch_black_24dp.svg';
import Mirror from "./assets/icons8-flip-vertical-52.png"
import {ReactComponent as Download} from "./assets/file_download_black_24dp.svg"
import { useRef,useCallback, useState } from "react";
import { imageTab,flipTab,mirrorTab,storyArray,videoRecord} from "./actions";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";


function Camera(props) {
    const webcamRef = useRef(null);
  
    const dispatch = useDispatch();
    const image = useSelector(state => state.captureImage)
    const isFlip = useSelector(state => state.cameraFlip)
    const isMirror = useSelector(state => state.mirrorFlip)
    const [isAnim,setAnim] = useState(false)


    const capture = useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc);
      },
      [webcamRef]
    );

    const capturingAnime = ()=>{
      setAnim(true)
      setTimeout(()=>{capture(); setAnim(false)},500)
      
    }
  const setImage = (image) => {
    dispatch(imageTab(image))
  }; 
  const filpCamera=()=>{
      if(isFlip){
          return "user"
      }else {
        return "environment"
      }


  }


  const handleDownload = ()=>{
    if(image!==null){
      const blob = new Blob([image],{type:"image/jpeg"})
      const url  = URL.createObjectURL(blob)
      const a  = document.createElement("a")
      a.href = url
      a.download = "image.jpeg"
      a.click()
    }
  }
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
          screenshotFormat ={"image/jpeg"}
          videoConstraints={{
            facingMode: { exact: filpCamera() }
          }}
          mirrored ={isMirror}
          />
    }
    
    {!image 
      ? <>
          <div style={{position: 'absolute', width: '100%', 'bottom': "63px"}}>
            <button onClick ={()=>capturingAnime()} 
            className = {isAnim?"captureTarget":"capture"}></button>            
          </div>
      
          <button  onClick = {()=>dispatch(flipTab(!isFlip))}style={{
              position: 'absolute',
              right: '2%',
              top: '2%',
              border: 'none',
              borderRadius: '100%',
              backgroundColor: '#0000000f'
            }}>
            <FlipIcon style={{fill: 'white'}}/>
          </button>
          <button onClick = {()=>dispatch(mirrorTab(!isMirror))}style = {{
              position: 'absolute',
              right: '2%',
              top: '9%',
              border: 'none',
              borderRadius: '100%',
              backgroundColor: '#0000000f'}}
          >{<img style = {{width:"22px",height:"22px"}} alt="mirror" src={Mirror}/>}</button>

        </>
      : 
      <>
      <div style={{position: 'absolute', width: '100%', 'top': 8, left: 8, textAlign: "initial"}}>
          <button 
            style={{backgroundColor: '#0000000f', border: 'none', borderRadius: '100%',}}
            onClick={() => setImage(null)}><CancelIcon style={{fill: 'white'}}/></button>

        </div>
            <div style = {{position:"absolute", bottom:"7px",left:"8px"}}>
              <button style = {{backgroundColor: '#0000000f', 
                                border: 'none', 
                                borderRadius: '100%'}}
                                onClick = {()=>handleDownload()}>
             <Download style={{fill: 'white'}} />
              </button>
              <button  onClick ={()=>dispatch(storyArray(image))}>story</button>

            </div>

        </>
    }
  </div>
}
export default Camera