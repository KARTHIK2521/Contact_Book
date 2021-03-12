import React from 'react'
import {useSelector} from 'react-redux';
import Persons from './Persons';
import SearchContact from './SearchContact';
import './Person.css'


const Contact = () => {

    const contacts=useSelector((state) =>state.contact.contacts);


    return (
         <div>
        <SearchContact />

        <div className="container pt-5">
          <div className="row"> 
          <div className="col-md-8">
             
            <table className="table shadow sortable">
              <thead className="thead-light">
                         <tr>
                            <th scope="col">
                                <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label"></label>
                                </div>
                            </th>
                            <th scope="col-4">Name</th>
                            <th scope="col-3">Email</th> 
                            <th scope="col">Phone</th>
                            <th scope="col-2"></th>
                       </tr>
            </thead>
     <tbody>
        {
           contacts.map((contact) => (
               <Persons contact={contact} id={contact.id}/>
            

            ) )}         
  
            
  </tbody>
</table>
</div> 
      
   
    </div>
   </div>
        </div>
    )
}

export default Contact
