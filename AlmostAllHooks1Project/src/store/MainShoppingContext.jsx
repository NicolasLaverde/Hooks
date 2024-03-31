import { createContext, useContext, useReducer } from "react"
import { MockedListOfProducts } from "../components/MainPage"


const initialValue = {
    items: [],
    addSomeShoppingItem: () => {}
}

const ApiContext = createContext({...initialValue})

const types = {
    ADD_ITEM: 'ADD_ITEM'
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContextShoppingApi() {
    const context = useContext(ApiContext)
    if(!context){
        throw new Error('You cannot use this context')
    }
    return context
}
function ShoppingReducer(state, action) {
    console.log(action.payload)
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
    switch(action.type){
        case types.ADD_ITEM: {
            const idItem = action.payload
            const updatedItems = [...state.items]
            const findIndex = updatedItems.findIndex(itx => itx.id === idItem)
            const existingItem = updatedItems[findIndex]

            if(existingItem){
                console.log(updatedItems[findIndex].quantity)
                const updatedItem = {
                    ...existingItem,
                    quantity: existingItem.quantity +1
                }
                updatedItems[findIndex] = updatedItem
                
            } else {
                console.log(action.payload)
                const product = MockedListOfProducts.find(product =>product.id === idItem)
                console.log(product)
                updatedItems.push({
                id: action.payload,
                title: product.title,
                price: product.price,
                quantity: 1
                })
            }

            return {
                ...state,
                items: updatedItems
            }
        }
    }
}

// eslint-disable-next-line react/prop-types
export default function MainShoppingContext({children}) {
    const [shoppingState, dispatchShoppingState] = useReducer(
        ShoppingReducer, {
            items: [],
        })

    function handleAddSomeItem(item){
        console.log('here')
        dispatchShoppingState({
            type: types.ADD_ITEM,
            payload: item
        })
    }

    const ctxValue = {
        items: shoppingState.items,
        addSomeShoppingItem: handleAddSomeItem
    }

    return (
        <ApiContext.Provider value={ctxValue}>
            {children}
        </ApiContext.Provider>
    )
}

