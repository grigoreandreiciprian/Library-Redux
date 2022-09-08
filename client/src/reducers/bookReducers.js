import { BOOK_ADD_FAIL, BOOK_ADD_REQUEST, BOOK_ADD_SUCCESS, BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS, BOOK_UPDATE_FAIL, BOOK_DELETE_REQUEST, BOOK_DELETE_SUCCESS, BOOK_DELETE_FAIL } from "../constants/booksConstants";

export const booksReducer = (state= {books:[]},action)=>{

    switch(action.type){

        case BOOK_LIST_REQUEST:
            return {loading:true, books: []}
        case BOOK_LIST_SUCCESS:
            return {
                loading: false,
                books:action.payload
            }
         case BOOK_LIST_FAIL:
            return {loading:false, error: action.payload}
            
            default:
                return state;
    }
}


export const bookAddReducer = (state= {books:[]}, action) =>{


    switch(action.type){

        case BOOK_ADD_REQUEST:
            return {loading:true,books: []}
        case BOOK_ADD_SUCCESS:
            return {
                loading:false,
                book:action.payload
            }

        case BOOK_ADD_FAIL:
            return{loading:false,error:action.payload}

            default:
                return state;
    }
}


export const bookUpdateReducer = (state= {books:[]}, action) =>{

    switch (action.type){

        case BOOK_UPDATE_REQUEST:
            return {loading:true,books:[]}

       case BOOK_UPDATE_SUCCESS:
        return{
            loading:false,
            book:action.payload
        }

        case BOOK_UPDATE_FAIL:
            return{loading:false,error:action.payload}

            default:
                return state;
    }
}


export const bookDeleteReducer = (state = {books:[]}, action) =>{

    switch (action.type){

        case BOOK_DELETE_REQUEST:
            return {loading:true,books:[]}

        case BOOK_DELETE_SUCCESS:
            return{
                loading:false,
                book:action.payload
            }

        case BOOK_DELETE_FAIL:
            return{loading:false,error:action.payload}

             default:
                return state;      
        
    }
}