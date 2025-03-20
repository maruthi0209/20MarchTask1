export const Header = function () {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 d-flex flex-row justify-content-evenly">
                <a className="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg/320px-Honda_Civic_Type_R_%28FK%3B_France%29_front_view.jpg" alt="logo" /></a>
  
                <div className="navbar-nav" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#jumbotron">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#main">Main</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#body">Body</a>
                    </li>
                    </ul>
                </div>
</nav>
        </>
    )
}