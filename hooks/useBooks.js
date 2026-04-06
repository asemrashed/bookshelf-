import { useContext } from "react";
import { BookContext } from "../context/BookContext";

function useBooks (){
    const context = useContext(BookContext);

    if(!context) {
        throw new Error('useBooks hook must use within a BooksProvider')
    }

    return context
}

export default useBooks;