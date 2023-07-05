import  NextAuth  from 'next-auth';
import { User } from 'types/intefaces';

declare module "next-auth"{
    interface Session{
        user:User
    }
}