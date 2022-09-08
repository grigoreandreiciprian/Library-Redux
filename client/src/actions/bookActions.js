import { type } from "@testing-library/user-event/dist/type"
import Data from "../Api"
import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS , BOOK_ADD_REQUEST ,BOOK_ADD_SUCCESS, BOOK_ADD_FAIL, BOOK_UPDATE_FAIL, BOOK_UPDATE_SUCCESS , BOOK_UPDATE_REQUEST, BOOK_DELETE_REQUEST, BOOK_DELETE_SUCCESS, BOOK_DELETE_FAIL } from "../constants/booksConstants"


export const    getBooks = ()=> async(dispatch) =>{

    try{

        dispatch({type:BOOK_LIST_REQUEST})
        let data= new Data()

        let books= await data.getBooks()

        

        dispatch( {
            type: BOOK_LIST_SUCCESS,
            payload: books
        })

    }catch(e){

        dispatch( {
            type:BOOK_LIST_FAIL,
            
            payload: console.log(e)
        })
    }

}


export const addBook = (book) => async (dispatch,getState) =>{

    try{

        dispatch({type:BOOK_ADD_REQUEST})

        let data= new Data();

        await data.addBook(book);


        console.log(getState().bookList.books)

        const books= getState().bookList.books


        books.push(book);

        dispatch ({
            type: BOOK_LIST_SUCCESS,
            payload: books
        })

       
        dispatch ( {
            type: BOOK_ADD_SUCCESS,
            payload: book 
        })

       


        

       

    }catch(e){

        dispatch( {
            type:BOOK_ADD_FAIL,

            payload:console.log(e)
        })
    }

}

export const updateBook = (book) => async (dispatch,getState) =>{

    try{

        dispatch({type:BOOK_UPDATE_REQUEST})

        let data= new Data()

        await data.updateBook(book)

        const books= getState().bookList.books

        dispatch ({
            type: BOOK_LIST_SUCCESS,
            payload: books
        })

        dispatch ({
            type:BOOK_UPDATE_SUCCESS,
            payload:book,
        })

    }catch(e){
         
        dispatch({
            type: BOOK_UPDATE_FAIL,
            payload:console.log(e)
        })
    }
}


export const deleteBook = (book) => async (dispatch,getState) =>{
    try{
        dispatch({type:BOOK_DELETE_REQUEST})

       let data= new Data()

       await data.deleteBook(book)

       const books= getState().bookList.books

       dispatch({
        type:BOOK_LIST_SUCCESS,
        payload:books,
       })

       dispatch({
        type:BOOK_DELETE_SUCCESS,
        payload:book,
       })

    }catch(e){

        dispatch({
            type:BOOK_DELETE_FAIL,
            payload: e
        })
    }
}