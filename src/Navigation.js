import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { updateTab }from "./actions"

function Navigation(props) {
  const dispatch = useDispatch();
  const _selectTab = (tabId) => {
    dispatch(updateTab(tabId))
  }

  return (
      <div className="row">
      {props.buttons.map((x) => 
        <Link to={x.url}> 
          <button onClick={() => {_selectTab(x.id)}}>
            <x.icon />
          </button>
        </Link>)}
      </div>
  );
}

export default Navigation