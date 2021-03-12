import {CREATE_CONTACT,EDIT_CONTACT,UPDATE_CONTACT, DELETE_CONTACT} from "../constant/types"

const intialList={
    contacts: [
        
            {
              "id": 1,
              "name": "Karthik Kumar",
              "username": "Bret",
              "email": "Karthik@gmail.com",
              "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
              },
              "phone": "9787175346",
              "website": "hildegard.org",
              "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
              }
            },
            {
              "id": 2,
              "name": "Manu Kumar",
              "username": "Antonette",
              "email": "manu23@gmail.com",
              "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                  "lat": "-43.9509",
                  "lng": "-34.4618"
                }
              },
              "phone": "9787141565",
              "website": "anastasia.net",
              "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
              }
            },
            {
              "id": 3,
              "name": "Divya",
              "username": "Samantha",
              "email": "Divya@gmail.com",
              "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                  "lat": "-68.6102",
                  "lng": "-47.0653"
                }
              },
              "phone": "9787141565",
              "website": "ramiro.info",
              "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
              }
            },
            {
              "id": 4,
              "name": "Nirmal Mahesh",
              "username": "Karianne",
              "email": "nirmalmahesh64@gmail.com",
              "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                  "lat": "29.4572",
                  "lng": "-164.2990"
                }
              },
              "phone": "978714435",
              "website": "kale.biz",
              "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
              }
            },
            {
              "id": 5,
              "name": "Kamali ",
              "username": "Kamren",
              "email": "Kamaliku@gmail.com",
              "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                  "lat": "-31.8129",
                  "lng": "62.5342"
                }
              },
              "phone": "7656345612",
              "website": "demarco.info",
              "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
              }
            },
            {
              "id": 6,
              "name": "Hema Latha",
              "username": "Leopoldo_Corkery",
              "email": "Hemavathi@gmail.com",
              "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                  "lat": "-71.4197",
                  "lng": "71.7478"
                }
              },
              "phone": "8756453423",
              "website": "ola.org",
              "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
              }
            },
            {
              "id": 7,
              "name": "Salini",
              "username": "Elwyn.Skiles",
              "email": "salin23@gmail.com",
              "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                  "lat": "24.8918",
                  "lng": "21.8984"
                }
              },
              "phone": "7654324512",
              "website": "elvis.io",
              "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
              }
            },
            {
              "id": 8,
              "name": "Vikraman",
              "username": "Maxime_Nienow",
              "email": "Shekar@gmail.com",
              "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                  "lat": "-14.3990",
                  "lng": "-120.7677"
                }
              },
              "phone": "7865764532",
              "website": "jacynthe.com",
              "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
              }
            },
            {
              "id": 9,
              "name": "Hariharan",
              "username": "Delphine",
              "email": "hari34@gmail.com",
              "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                  "lat": "24.6463",
                  "lng": "-168.8889"
                }
              },
              "phone": "9865654343",
              "website": "conrad.com",
              "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
              }
            },
            {
              "id": 10,
              "name": "ThiyagaSeelan",
              "username": "Moriah.Stanton",
              "email": "thiyagu23@gmail.com",
              "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                  "lat": "-38.2386",
                  "lng": "57.2232"
                }
              },
              "phone": "8787654534",
              "website": "ambrose.net",
              "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
              }
            }
          
    ],
    contact :null,
};


 export const contactReducer = (state=intialList ,action) => {
    switch(action.type){
       case CREATE_CONTACT :
         return{
           ...state,
           contacts : [action.payload, ...state.contacts]
         };
         case EDIT_CONTACT :

           let arr=state.contacts.filter((contact) => contact.id == action.payload);
           arr =arr.values();
           for(let val of arr){
             arr=val;
           }

           return{
              ...state,
              contact:arr,
           };
           case UPDATE_CONTACT:
             return{
               ...state,
               contacts: state.contacts.map((contact) => contact.id == action.payload.id ? action.payload : contact),
             };
            case DELETE_CONTACT:
              return{
                   ...state,
                   contacts: state.contacts.filter((contact) => contact.id != action.payload),
              };

         default :
         return state;
    }
};