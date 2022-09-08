import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { bookAddReducer, booksReducer, bookUpdateReducer } from "./reducers/bookReducers";


const reducer=combineReducers({

    bookList:booksReducer,
    addBook:bookAddReducer,
    updateBook:bookUpdateReducer
})


const initialState={
     
    bookList:{
        books:[]
    }
    
}

const midl=[thunk];




export const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...midl))
)