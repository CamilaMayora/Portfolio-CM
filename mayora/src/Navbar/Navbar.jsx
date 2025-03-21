import style from "./Navbar.module.css"
import 'bootstrap-icons/font/bootstrap-icons.css'


const Barra = ()=> {
    return(
        <div className={style.Navbar} >
            <ul>
                <li> <i class="bi bi-laptop"></i> PROYECTOS</li>
                <li> <i class="bi bi-person-fill"></i> SOBRE MI</li>
                <li><i class="bi bi-lightning-charge"></i> SKILLS</li>
                <li><i class="bi bi-code-square"></i> EDUCACIóN</li>
            </ul>
        </div>
    )
}

export default Barra