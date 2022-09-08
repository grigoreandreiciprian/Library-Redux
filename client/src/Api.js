export default class Data{

    api(path, method = 'GET', body= null, token = null){

         const url="http://localhost:3015/api/v1"+path
    
        const options={
            method,
            headers:{
                'Content-Type':'application/json;charset=utf-8'
            },

    
        };
    
        if(body !=null){
            options.body = JSON.stringify(body);
        }
    
        // pentru perimisuni in functie de utilizator
        if(token){
            options.headers['Authorization']= `Bearer ${token}`;
        }
    
        return fetch( url, options);
    }


    async getBooks(){

        let books= await this.api("/books",'GET')
         
        return books.json()
       
    }

    async addBook (book) {

        let data = await this.api("/books/add" , 'POST', book)

        return data
    }

    async updateBook (book) {

        let data= await this.api(`/books/update/${book.id}`, 'PUT', book)

        return data
    }

    async deleteBook(book){

        let data= await this.api(`/books/delete/${book.id}`, 'DELETE', book)

        return data
    }

}
