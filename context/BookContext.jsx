import { createContext, useState } from "react";
import { database } from "../lib/appwrite";
import { ID, Permission, Role } from "react-native-appwrite";
import useUser from "../hooks/useUser";

const DATABASE_ID = '69d377dc000186a7152d';
const TABLE_ID = 'books';

export const BookContext = createContext();


export function BookProvider ({children}) {
    const { books, setBooks } = useState(null);
    const {user} = useUser();

    async function getBooks(){

    }
    
    async function getBookById(id){

    }

    async function addBook(bookData){
        try{
            const newBook = await database.createDocument(
                DATABASE_ID,
                TABLE_ID,
                ID.unique(),
                {...bookData, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.write(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id))
                ]
            )
        }catch (err){
            throw new Error(err.message || "An error occurred while adding the book");
        }
    }

    async function deleteBook(id){
        try{

        }catch (err){
            throw new Error(err.message || "An error occurred while deleting the book");
        }
    }


    return (
        <BookContext.Provider value={{ getBooks, getBookById, addBook, deleteBook}}>
            {children}
        </BookContext.Provider>
    )
}