import Logo from "../../assets/logo2.png"
import {Img} from "../Header/style"

function Header() {

    function Alert() {
        alert("oi sou goku")
    }



    return (
        <>

            <Img src={Logo} alt="logo-site" onClick={Alert} />



        </>
    )


}

export default Header