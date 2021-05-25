export function Stories(props) {

    const storys = ()=>{
    return  props.chatsData.map((x)=>{
        return <div key = {x.id} style ={{borderRadius:'100%', width:"100px",height:"100px",backgroundColor:"lightblue",margin:"2%"}}>
            <x.emoji/>
        </div>
      })
    }
  
    return <>
        <div>
          Stories
        </div >
        <div style ={{display:"-webkit-box"}}>
            {storys()}
        </div>
    </>
  }
  