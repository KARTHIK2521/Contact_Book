import React from 'react'
import Avatar from 'react-avatar'
import {Link} from 'react-router-dom';
import {deleteContact} from '../../action/contactAction'
import {useDispatch} from 'react-redux'


 const Persons = ( {contact}) => {
     const dispatch=useDispatch();
     const {name,phone,email,id} = contact;

    return (
         <tr  >
            <td > 
                              <div className="custom-control custom-checkbox ">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label"></label>
                                </div>
            </td>
            
              <td  className="nametop"><Avatar className="mr-2" name={contact.name} size="45" round={true}  /> {name}  <p id="my">{email}</p> </td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td className="action">
                  <Link to={`/contact/edit/${id}`}>
                      <span className="material-icons mr-2" >edit</span>
                  </Link>

                      <span className="material-icons text-danger" onClick={() => dispatch(deleteContact(id))} >remove_circle</span>
                 
              </td>
            </tr>
    )
}

export default Persons;
