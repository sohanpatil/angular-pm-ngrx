export function reducer(state, action){
    switch(action.type){

        case 'TOGGLE_PRODUCT_CODE':
        console.log('Existing State:'+JSON.stringify(state)+'\nPayload:'+action.payload);
            return{
                ...state,
                showProductCode: action.payload
            }

        default:
            return state;
    }
}