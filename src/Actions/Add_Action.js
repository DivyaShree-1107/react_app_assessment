import * as ActionTypes from './Type_Add';

export function onhandleChange(event) {
    return function (dispatch){
        dispatch ({
            type : 'save', payload :event.target
        });
    }
}

export function check() {
    return function (dispatch){
        dispatch ({
            type : 'check'
        });
    }
}
