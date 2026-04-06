import { Client, Account, Avatars, Databases } from "react-native-appwrite";

const client = new Client()
    .setProject('69d21ef5000911f5c74d')
    .setPlatform('dev.asem.bookshelf')
    .setEndpoint('https://sgp.cloud.appwrite.io/v1');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const database = new Databases(client);