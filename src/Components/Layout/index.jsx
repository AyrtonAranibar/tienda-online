import "./Layout.css"

function Layout({children}){
    return(
        <main className="max-w-screen-md m-auto">
            <div className=" mt-20">
                {children}
            </div>
        </main>
        
    )
}

export default Layout