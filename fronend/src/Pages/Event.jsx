import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Event(props) {
  let navigate=useNavigate();
  const viewevent=async ()=>{
    try {
      
    
      navigate(`/Show/${props.id}`);
    } catch (error) {
      console.log("can not get view");
    }
      

  }
  const deleteevent=async ()=>{
    try {
      let res=await axios.post(`http://localhost:8081/delete/${props.id}`);
      console.log(res);
      props.getevent();
      navigate('/')
    } catch (error) {
      console.log("can not delete");
    }
   
   
  }
  return (
    <div>
        <div className="card mt-3 mx-3" style={{width:"18rem", fontFamily:"cursive"}} >
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h3 className="card-title">{props.event}</h3>
        <h5 className="card-title">Date:{props.date}</h5>
        <h5 className="card-title">Seat-left:{props.seat}</h5>
        <button onClick={viewevent} className="btn btn-primary mr-3">View</button>
        <button   className="btn btn-primary mx-3 mr-3">Pay</button>
        <button onClick={deleteevent} className="btn btn-primary mr-3">Delete</button>
        </div>
        </div>
    </div>
  )
}

export default Event