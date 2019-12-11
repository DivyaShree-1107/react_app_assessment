// import * as ActionTypes from '../Actions/Type_Reg';


// const initialState={
//     firstName:"",
//     lastName:"",
//     userName:"",
//     password:"",
//  }

// export default (state=initialState, action ) => {
//     switch (action.type) {
//         case "SAVE": {
//             return {...state,[action.payload.name]:action.payload.value};
//         }
//         case "CHECK": {
//             switch(state.name){
//                 case 'reg': 
//                     if(parseInt(state.opr1)+parseInt(state.opr2)==state.res)
//                     return {...state,msg:'Correct'};
//                     else
//                     return {...state,msg:'InCorrect'};
                
//                 case 'cancel': 
//                     if(parseInt(state.opr1)-parseInt(state.opr2)==state.res)
//                     return {...state,msg:'Correct'};
//                     else
//                     return {...state,msg:'InCorrect'};             
//                 default:
//                     return{...state,msg:'operator should be selected '}
                

//             }
//         }
        
//         default :
//             return state ;
        
//     }
// }