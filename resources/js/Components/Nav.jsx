import Buton from "./Buton";

export default function Nav(){

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Miguel Angel Vazquez Avilés</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav positionNav">
                            <li className="nav-item">
                                <Buton
                                    a={'#'}>CV</Buton>
                            </li>
                            <li className="nav-item">
                                <Buton
                                    a={'mailto:miguelvazquez870@gmail.com'}>Contacto</Buton>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}