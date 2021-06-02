
import { useDispatch,useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { updateTab}from "./actions"

function Navigation(props) {
  const selectedTab = useSelector(state => state.selectedTab)
  // const image = useSelector(state => state.captureImage)
  const dispatch = useDispatch();
  const _selectTab = (tabId) => {
    dispatch(updateTab(tabId))
  }

  const isTransparent = props.buttons.find(x => x.isTransparent && selectedTab === x.id);
  return (
    <>
      {/* <div style = {image?{display:"none"}:null}> */}

      <div className="row" style = {{backgroundColor:isTransparent ? "#000000a1": null, ...props.style}}>
      {props.buttons.map((x) => 
        <Link to={x.url}> 
          <button onClick={() => {_selectTab(x.id)}} 
              style = {{
              border: 'none',
              borderRadius: '100%',
              backgroundColor: '#0000000f',
              }}>
            <x.icon style={{
              fill: x.id === selectedTab ? 'yellow': 'white'
            }}/>
          </button>
        </Link>)}
      </div>
      {/* </div> */}
    </>
  );
}

export default Navigation