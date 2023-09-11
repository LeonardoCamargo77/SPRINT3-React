import { Link } from "react-router-dom"

export default function Menu(){


    return(
        <nav className="menu">
            <Link to='/Home'>GuinchoSeguro</Link>
            <span> | </span>
            <Link to='/Home'>Home</Link>
            <span> | </span>
            <Link to='/ChatBot'>ChatBot</Link>
            <span> | </span>   
            <Link to='/QuemSomos'>Quem Somos</Link>
            <span> | </span>          



        </nav>
        
    )

}