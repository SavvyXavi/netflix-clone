import { getMaxListeners } from "process";
import { Account } from "./models/Account";

export const ACCOUNTS: Account[] = [
    {
        id:1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        password: 'JaneFoster123',
        phoneNumber: '404-123-4567'
    },
    {
        id:2,
        firstName: 'Sam',
        lastName: 'Adams',
        email: 'samadams@gmail.com',
        password: 'JaneF123',
        phoneNumber: '404-123-1234'
    }    
]