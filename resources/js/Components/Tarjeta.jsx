import Buton from "./Buton";

export default function Tarjeta({Imag, Alt, UrlGit, UrlPag, Titulo, children}) {
    


    return(
        <>
            <div className="cart">
                <img src={Imag} alt={Alt} title={Alt} />
                <div className="cartTex">
                    <h2>{Titulo}</h2>
                    <p>{children}</p>
                </div>
                <div className="cartButon">
                    <Buton
                        a={UrlGit}>
                            Codigo
                    </Buton>
                    <Buton
                        a={UrlPag}>
                            Pagina
                    </Buton>
                </div>
            </div>
        </>
    );
}