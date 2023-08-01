import logo from '../../assets/images/logo.png'

function LogoIcon(props) {
    return (
        <img src={logo} alt='logo' width={props.width}></img>
    )
}

export default LogoIcon;