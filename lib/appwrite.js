import { Client, Account, Avatars } from "react-native-appwrite";

const client = new Client()
    .setProject('69d21ef5000911f5c74d')
    .setPlatform('dev.asem.bookshelf')
    .setEndpoint('https://sgp.cloud.appwrite.io/v1');

export const account = new Account(client);
export const avatars = new Avatars(client);