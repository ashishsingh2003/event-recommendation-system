import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Event from './Event';
import  styles from './Home.module.css';
function Home() {
let searche=useRef();
let [events,setevents]=useState([]);
const getevent=async ()=>{
try {
  let res=await axios.get('http://localhost:8081/getevent');
  console.log(res)
 setevents(res.data);
} catch (error) {
  console.log("can not get event");
}
 

}
const searchevent=async (e)=>{
  e.preventDefault();
  const searcheve=searche.current.value;
  
  try {
    let res=await axios.get(`http://localhost:8081/searchevent/${searcheve}`);
    console.log(res.data)
    if(res.data){
    console.log(res.data);
    setevents(res.data);}
    else{
      console.log("got nothing");
    }
  } catch (error) {
    console.log("can not get event");
  }

}
useEffect(()=>{
  getevent();
},[])
  return (
    <div>
         <div className={styles.image}>
          <form onSubmit={searchevent} className={styles.but}>
          <input placeholder="Search" type="text" ref={searche} />
           <button >Search</button>
        </form>
          <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        <ul >
            {
                events.map((item,index)=>{
                    return <Event getevent={getevent}key={index}id={item._id} seat={item.seatleft} img={item.img} event={item.event} date={item.date}/>
                })
            }
        </ul>
    </div>
  )
}

export default Home