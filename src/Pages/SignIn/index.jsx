import Layout from '../../Components/Layout'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
function SignIn() {
    const context = useContext(ShoppingCartContext);
    context.setTitleToSearch('');
    return (
        <Layout>
            SignIn
        </Layout>
    )
}

export default SignIn
