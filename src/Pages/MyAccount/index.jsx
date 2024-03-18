import Layout from "../../Components/Layout"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {
    const context = useContext(ShoppingCartContext);
    context.setTitleToSearch('');
    
    return (
        <Layout>

            <div className="max-w-[24rem] m-auto">
                <div className="title-container flex justify-between mb-6 rounded-lg bg-opacity-70 bg-white p-4 mx-2 relative" >
                        <h1 className="sign-title font-bold text-gray-800">My Account</h1>
                </div>
                <div className="flex flex-col gap-1 grid-cols-2 grid-rows-2 p-4 mx-4 rounded-lg bg-white bg-opacity-50 mb-4">
                    <p>{context.thisUsername}</p>
                    <p>{context.thisEmail}</p>
                </div>  
            </div>
        </Layout>
    )
}

export default MyAccount
