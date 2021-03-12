import React, {useState} from 'react'
import { useDispatch } from 'react-redux'; 
import {addContact} from "../../action/contactAction";
import shortid from "shortid";
import {useHistory}  from "react-router-dom";
import {useForm } from 'react-hook-form'




const AddContact = ()=> {
  
 
  let history=useHistory();
    const dispatch= useDispatch();
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
    
    const  createContact = e =>{
      e.preventDefault();
    // console.log(name,phone,email);
     const new_contact={
           id:shortid.generate(),
           name:name,
           phone:phone,
           email:email,
     };
      dispatch(addContact(new_contact));
      history.push("/");
    }


    return (
        <div className="card border-0 shadow">
          <div className="card-header"> Add a Contact</div>
            <div className="card-body">

              <form onSubmit={(e)=>createContact(e)} >
                
                      <div className="form-group"> 
                   <input type="text" className="form-control"
                    placeholder="Enter your Name" value={name} 
                    onChange={(e) => setName(e.target.value)} minlength="4" maxlength="20" required />
                    
                </div>
                <div className="form-group"> 
                   <input type="tel" className="form-control" 
                   placeholder="Enter your Phone" value={phone} 
                   pattern="[6-9]{1}[0-9]{9}" onChange={(e) => setPhone(e.target.value)} required/>
                </div>
                <div className="form-group"> 
                   <input type="email" className="form-control"
                    placeholder="Enter your Email-id" value={email} 
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                      
                   <button className="btn btn-primary" type="submit">Create Account</button>

              </form>
        
           </div>
           
        </div>
    )
}

export default AddContact;
