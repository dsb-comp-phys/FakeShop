import {ActionTypes} from '../constants/action-types';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

// We will create the action creator for REMOVE_SELECTED_PRODUCT later.