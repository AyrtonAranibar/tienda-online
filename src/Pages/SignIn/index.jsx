import Layout from '../../Components/Layout';
import "./SignIn.css";
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function SignIn() {
    const context = useContext(ShoppingCartContext);

    const [message, setMessage] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const email = event.target.elements.email.value;
        if(context.users){

            const thisUser = context.users.filter(user => user.username === username && user.email === email)
            if(thisUser.length > 0){
                assignUser(thisUser[0]);
                setMessage("The user has logged in successfully!");
            }else{
                const newUser = {
                    id: uuidv4(),
                    username: username,
                    email: email,
                    orders: [],
                }
                assignUser(newUser);
                const newUsers = [...context.users,newUser]
                context.setUsers(newUsers);
                localStorage.setItem('users', JSON.stringify(newUsers));
                setMessage("The user was created successfully!");
                
            }

        }else{
            let users = [];
            const newUser = {
                id: uuidv4(),
                username: username,
                email: email,
                orders: [],
            }
            assignUser(newUser);
            users.push(newUser);
            context.setUsers(users);
            localStorage.setItem('users', JSON.stringify(users));
            setMessage("The user was created successfully!");
        }
    }

    function assignUser(user){
        context.setThisId(user.id);
        context.setThisUsername(user.username);
        context.setThisEmail(user.email);
        context.setOrder(user.orders);
    }
    return (
        <Layout>
            <div className="max-w-[24rem] m-auto">
                <div className="title-container flex justify-between mb-6 rounded-lg bg-opacity-70 bg-white p-4 mx-2 relative" >
                        <h1 className="sign-title font-bold text-gray-800">Sign In</h1>
                </div>
                <div className="flex flex-col gap-1 grid-cols-2 grid-rows-2 p-4 mx-4 rounded-lg bg-white bg-opacity-50 mb-4">
                    <form onSubmit={()=>handleSubmit(event)}>
                        <p className="my-4 text-xs text-gray-800">If you don't have an account, it will be generated automatically. Note: The information is stored on your device; this page does not store any kind of information.</p>
                        <label className="block w-full text-sm py-2" htmlFor="username">Enter your username</label>
                        <input className="block w-full text-sm px-2 py-3 mb-4" name="username" id="username" type="text" placeholder="user" required></input>
                        <label className="block w-full text-sm py-2" htmlFor="email">Enter your email</label>
                        <input className="block w-full text-sm px-2 py-3 mb-4" name="email" id="email" type="email" placeholder="email@gmail.com" required></input>
                        <p className="text-emerald-600 py-2 block">{message}</p>
                        <div className="flex items-center justify-center flex-row">
                            <button className="sign-in-button w-32 h-auto rounded py-1 px-2 mx-4 flex justify-center cursor-pointer" type="submit">
                                Sign In / Log In
                            </button>
                        </div>
                    </form>
                </div>  
            </div>
        </Layout>
    )
}

export default SignIn
