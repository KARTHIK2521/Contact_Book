import React, {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'; 
import {editContact ,updateContact } from "../../action/contactAction";
import shortid from "shortid";
import {useHistory}  from "react-router-dom";
import {useParams} from "react-router-dom";


const EditContact = ()=> {
    let {id}=useParams();
   let history=useHistory();
    const dispatch= useDispatch();
    const contact =useSelector((state)=>state.contact.contact);
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");
    
    

       useEffect(() => {
         if(contact != null){
           setName(contact.name);
           setEmail(contact.email);
           setPhone(contact.phone);

         }
          dispatch(editContact(id));
       } ,[contact]);
     
       const onUpdateContact = (e) =>{
          e.preventDefault();

         const update_contact = Object.assign(contact ,
          {name:name,phone:phone,email:email});

         //console.log(update_contact);
         dispatch(updateContact(update_contact));
         history.push("/");

       };


    return (
        <div className="card border-0 shadow">
          <div className="card-header"> Add a Contact</div>
            <div className="card-body">
              <form onSubmit={(e) => onUpdateContact(e)}>
                <div className="form-group"> 
                   <input type="text" className="form-control"
                    placeholder="Enter your Name" value={name}
                     onChange={(e) => setName(e.target.value)} minlength="4" maxlength="20" required />
                </div>

                <div className="form-group"> 
                   <input type="tel" className="form-control" 
                   placeholder="Enter your Phone" value={phone} pattern="[6-9]{1}[0-9]{9}"
                    onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <div className="form-group"> 
                   <input type="email" className="form-control"
                    placeholder="Enter your Email-id" value={email}
                     onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <button className="btn btn-primary" type="submit">Update Account</button>
              </form>
        
           </div>
           
        </div>
    )
}

export default EditContact;
