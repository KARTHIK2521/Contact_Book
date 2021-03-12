import {CREATE_CONTACT, EDIT_CONTACT, UPDATE_CONTACT , DELETE_CONTACT} from '../constant/types'

//action
export const addContact= (contact) =>({
    type:CREATE_CONTACT,
    payload:contact,
});
   

export const editContact = (id) => ({
  type: EDIT_CONTACT,
  payload:id,
});

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload:contact
});

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload:id
})


