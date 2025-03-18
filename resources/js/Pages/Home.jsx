import { Head } from '@inertiajs/react';
import Nav from '@/Components/Nav';
import { General } from '@/Imgs/General';
import Tarjeta from '@/Components/Tarjeta';
import Footer from '@/Components/Footer';

export default function Home() {

    return(
        <>
        <Head title='Miguel Angel Vazquez Avilés'/>
        <Nav/>
        <main>
            <div className='partUno'>
                <picture className='imgPerfil'><img src={General.Perfil} alt="Foto de Perfil" title='Foto de Perfil Miguel Angel'/></picture>
                <div>
                    <p>
                        Soy desarrollador web con experiencia en desarrollo Full Stack, 
                        actualmente trabajando en Magic Pop. A lo largo de mi 
                        trayectoria, he perfeccionado mis habilidades en diversas 
                        oportunidades, logrando optimizar proyectos y mejorar su 
                        posicionamiento en buscadores. <br />
                        Mi enfoque se basa en crear soluciones eficientes y escalables, 
                        combinando tecnología e innovación para ofrecer experiencias 
                        digitales de alto impacto. Actualmente me encuentro a cargo de 
                        un equipo conformado por 5 integranter. <br />
                        Durante mi servicio social en el departamento de Desarrollo 
                        de la Comisión Nacional para la Protección y Defensa de los 
                        Usuarios de Servicios Financieros (CONDUSEF), colaboré en la 
                        documentación y planificación de proyectos, adquiriendo un 
                        profundo conocimiento sobre las necesidades de diversos tipos 
                        de usuarios.
                    </p>
                </div>
            </div>
            <div className='TextCenter'>
                <h1>Proyectos y Desarrollos</h1>
            </div>
            <div className='cuerp'>
                <Tarjeta
                    Imag={General.Decoracion}
                    Alt={'Decoracion de oficinas'}
                    Titulo={'Decoracion de Oficinas'}
                    UrlGit={'https://github.com/zeuqzavleugim/decoracion-de-oficinas'}
                    UrlPag={'https://decoraciondeoficinas.com.mx/'}>
                        Pagina para servicio de decoracion para oficinas con un 
                        enfoque en las medianas y grandes empresa.
                        Todo lo relacionado a viniles.
                </Tarjeta>
                <Tarjeta
                    Imag={General.Textiles}
                    Alt={'Textiles'}
                    Titulo={'Magic Pop Textiles'}
                    UrlGit={'https://github.com/zeuqzavleugim/Textiles'}
                    UrlPag={'https://magicpop.com.mx/'}>
                        Poyecto para la venta de Textiles con un enfoque en las 
                        fabricas, tanto para el trabajador de planta como para 
                        los de niveles superiores. Esta version es la primera 
                        creada para Magic pop Textiles.
                </Tarjeta>
                <Tarjeta
                    Imag={General.Impresos}
                    Alt={'Impresos'}
                    Titulo={'Magic Pop Impresos'}
                    UrlGit={'https://github.com/zeuqzavleugim/Impresos'}
                    UrlPag={'https://magicpop-impresos.mx/'}>
                        Este proyecto tiene la finalidad de dar solo servicios 
                        a un area en espesifico de la Ciudad de Mexico.
                </Tarjeta>
                <Tarjeta
                    Imag={General.RandB}
                    Alt={'R&B'}
                    Titulo={'Romo & Becerril ip atelier'}
                    UrlGit={'https://github.com/zeuqzavleugim/RandB'}
                    UrlPag={'https://www.rbip.com.mx/'}>
                        Pagina para un bufet de abogados R&B Vip, en la cual 
                        se posiciono en las ciudades mas importantes de E.U.
                </Tarjeta>
                <Tarjeta
                    Imag={General.Uridec}
                    Alt={'Sistema URIDEC'}
                    Titulo={'Sistema URIDEC'}
                    UrlGit={'https://github.com/zeuqzavleugim/sistemaUridec'}
                    UrlPag={'https://github.com/zeuqzavleugim/sistemaUridec'}>
                        Aplicacion de escritorio realizado en kotlin Compose 
                        dedicado a la automatización de pruebas de estres y 
                        unitarias para el sistema de Digitalizador de 
                        expedientes llamado 'Sistema URIDEC' al finalizar se 
                        genera un reporte y envia por Email.
                </Tarjeta>
            </div>
        </main>
        <Footer/>
        </>
    );
}