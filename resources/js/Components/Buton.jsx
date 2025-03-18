export default function Buton({children, a}) {
    
    function redirec(){
        window.open(a, "_blank");
    }

    return(
        <>
        <button className="Boton" onClick={redirec}>
            {children}
        </button>
        </>
    );
}