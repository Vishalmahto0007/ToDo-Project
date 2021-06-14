import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const AllUsersII = () => {

    const [user, setUser] = useState(null);

    useEffect(()=>{
     axios.get('https://reqres.in/api/users?page=2')
     .then(res=>{
         console.log(res);
         setUser({user: res.data})
     }).catch(err=>{
         console.log(err);
     })
    },[])

    console.log("State",user);

    return (
        <div>
             <h1 style={{marginBottom:"25px", marginTop:"25px"}}><span style={{paddingLeft:"70px", paddingRight:"70px",backgroundColor:"#151B54",color:"white"}}>All Users</span></h1>
            <div>
             {
                 user!==null && user.user.data.map(data=> (<div  style={{backgroundColor: "#FFF8DC", padding:"25px",}}>
                      <img src={data.avatar} alt="" />
                     
                     <div><span>{data.id}. </span>{data.first_name} {data.last_name}</div>
                     <h5>Email ID: {data.email}</h5>
                    
                     </div>
                     
                 ) )
             }
            </div>
             <div style={{fontSize:"1.5em"}}>Pages <Link to="/allusers1">1</Link>| 2
            </div>
        </div>
    )
}

export default AllUsersII;
