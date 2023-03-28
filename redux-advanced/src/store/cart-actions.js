import { cartActions } from "./cart-slice";
import { uiAction } from "./ui-slice";


export const fetchCartData = (cart) => {
    return async dispatch => {
        const fetchData = async () => {
            dispatch(uiAction.showNotification({
                status: "pending",
                title: "Requesting...",
                message: 'Requesting data please wait'
            }))
            const response = await fetch('https://productdetails-17bdd.firebaseio.com/cart.json');
            if (!response.ok) throw new Error('Sending Cart Data Failed');
            const data = response.json();
            return data
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({ items: cartData.items || [], totalQuantity: cartData.totalQuantity }))
        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error !",
                message: 'Failed to fetch cart data'
            }))
        }
    }
}

export const sentCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiAction.showNotification({
            status: "pending",
            title: "Sending...",
            message: 'Sending data please wait'
        }))

        const sendData = async () => {
            const response = await fetch('https://productdetails-17bdd.firebaseio.com/cart.json',
                {
                    method: "PUT",
                    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
                });
            if (!response.ok) throw new Error('Sending Cart Data Failed');
            dispatch(uiAction.showNotification({
                status: "success",
                title: "Success !",
                message: 'Sent cart data successfully'
            }))
        }

        try {
            sendData();
        } catch (error) {
            dispatch(uiAction.showNotification({
                status: "error",
                title: "Error !",
                message: 'Failed to sent cart data'
            }))
        }
    }

}