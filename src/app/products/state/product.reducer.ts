import { Product } from "../product";
import * as fromRoot from '../../state/app.state';

export interface State extends fromRoot.State {
    products : ProductState;
}

export interface ProductState{
    showProductCode:boolean;
    currentProduct: Product;
    products: Product[]
}

const initialProductState:ProductState  ={
    currentProduct : null,
    products : [],
    showProductCode : true
    
}

export function reducer(state: ProductState = initialProductState, action): ProductState{
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