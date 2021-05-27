import React from 'react'

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <div className="logo"></div>
                    <p className="TitleLogo">PuntoGroup</p>
                    <span className="text-span">Soluciones constructivas</span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="main_nav">
	                <ul className="navbar-nav mx-auto">
		                <li className="nav-item active"> <a className="nav-link" href="#">Steel Frame </a> </li>
		                <li className="nav-item"><a className="nav-link" href="#"> Sobre nosotros </a></li>
		                <li className="nav-item"><a className="nav-link" href="#"> Contacto </a></li>
                        <li className="nav-item"><a className="nav-link" href="#"> Proyectos </a></li>
		                <li className="nav-item dropdown">
		                    <a className="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown">  Servicios  </a>
		                    <ul className="dropdown-menu">
			                    <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
			                    <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
			                    <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
		                    </ul>
		                </li>
	                </ul>
                </div> 
            </div> 
        </nav>
    )
}
export default Navbar;
