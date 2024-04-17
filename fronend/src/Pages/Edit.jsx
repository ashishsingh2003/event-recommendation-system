import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
function Edit() {
    let params=useParams();
    let navigate=useNavigate();
    let image=useRef();
  let item=useRef();
  let data=useRef();
  let seat=useRef();
    const editevent=async (e)=>{
         e.preventDefault();
         try {
            let img=image.current.value;
            let event=item.current.value;
            let date=data.current.value;
            let seatleft=seat.current.value;
            let res=await axios.put(`http://localhost:8081/edit/${params.id}`,{img,event,date,seatleft});
            console.log(res);
            navigate('/');
         } catch (error) {
            console.log("can not edit");
         }
        

    }
  return (
    <div>
            <div className="row">
  <div className="col-md-6 mx-auto">
   <h1 className="display-6">Edit Your Event</h1>
      <form onSubmit={editevent}>
          <div className="mb-3">
           <label htmlFor="img" className="form-label">Image</label>
           <input type="text" ref={image}className="form-control" name="img" placeholder="img"/>
          </div>
          <div  className="mb-3">
            <label htmlFor="event" className="form-label">Event</label>
            <input type="text" ref={item} className="form-control" name="event" placeholder="event"/>
           </div>
          <div  className="mb-3">
           <label htmlFor="date" className="form-label">Date</label>
           <input type="date" ref={data} className="form-control" name="date" placeholder="date"/>
          </div>
          <div  className="mb-3">
           <label htmlFor="seatleft" className="form-label">Seats</label>
           <input type="number" ref={seat} className="form-control" name="seatleft" placeholder="seatleft"/>
          </div>
          <button className="btn btn-sm btn-success">Edit event</button>
          
      </form>
  </div>

</div>
    </div>
  )
}

export default Edit