import Layout from "../../Components/Layout"
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'

function MyAccount() {
    const context = useContext(ShoppingCartContext);
    context.setTitleToSearch('');
    
    return (
        <Layout>
            MyAccount
        </Layout>
    )
}

export default MyAccount
