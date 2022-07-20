import * as S from "./styles";
import Logo from "../../molecules/Logo";
import Menu from "../Menu";
import Button from "../../atoms/botão";

const Header = () => {
    return (<S.Box>
        <Logo/>
        <Menu/>
        <Button/>
        </S.Box>)
}

export default Header;