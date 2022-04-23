import { createStore } from 'redux'


const initialState = {
    count : 0
}


// REDUCERS
// Blogs
// auth => username, isLogged

const counterReducer = (state = initialState,action) => {
    console.log('store created');
    switch (action.type) {
        case  "INCREMENT" :
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case "DECREMENT" : 
            return {
                count: state.count -1
            }
        case "RESET" : 
            return {
                count: 0
            }    
        default :
            return state        
    }
}

// Store

const store = createStore(counterReducer)

// getState

console.log(store.getState());

// store.subscribe(() => {
//     console.log(store.getState() + 'store üzerinde değişiklik olduğundan çalışır sadece');
// })

// INCREMENT, DECREMENT , RESET => ACTIONS (object)

store.dispatch({
    type: "INCREMENT",
    incrementBy : 10
})

store.dispatch({
    type: "INCREMENT"
})

console.log(store.getState());



// DISPATCH
