import { types } from "../types/types";

//2. Crear los casos del reducer dependiendo del type recibido

const initialState = {
    modalOpen: false
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiOpenModal:
            return {
                ...state,
                modalOpen: true
            }
        case types.uiCloseModal:
            return {
                ...state,
                modalOpen: false
            }

        default:
            return state;
    }

}