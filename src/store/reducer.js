import * as actionTypes from './actions';

const initialState = {
    persons: []
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADDPERSON:
        console.log('OK');
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,// 'Max',
                age: action.personData.age// Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            }

        case actionTypes.DELETEPERSON:
        console.log(state);
            return { ...state,
                 persons: state.persons.filter(person => person.id !== action.personId)
                }

    }
    return state
}

export default reducer;