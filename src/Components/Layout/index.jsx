
function Layout({children}){
    return(
        <main className="max-w-screen-md m-auto">
            <div className="grid grid-cols-3 gap-4 mt-20">
                {children}
            </div>
        </main>
        
    )
}

export default Layout