import Buton from "./Buton";
import { General } from "@/Imgs/General";

export default function Footer() {
    return(
        <>
        <footer className="footer">
            <a href="https://www.linkedin.com/in/miguel-vazquez-170abb15a/" title="Linkedin de Miguel Angel"><img src={General.Linkeding} alt="Linkedin de Miguel" title="Linkedin de Miguel Angel"/></a>
            <div>
                <Buton
                    a={"#"}>
                        CV
                </Buton>
                <Buton
                    a={"mailto:miguelvazquez870@gmail.com"}>
                        Contacto
                </Buton>
            </div>
        </footer>
        </>
    );
}