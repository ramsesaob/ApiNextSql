

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"><img src="logo.png" alt="log"   width={"200"}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/inicio">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/crear">Crear</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Por Categorias
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/realizadas">Completadas</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/porrealizar">No Completadas</a></li>
                   
                </ul>
                </li>
                <li className="nav-item">
                <a className="nav-link " href="/habilidades">Habilidades</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
    </nav>
  )
}

export default Header