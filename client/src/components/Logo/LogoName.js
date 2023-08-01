import logo_name from '../../assets/images/logo_name.png'

function LogoName(props) {
    return (
        <img src={logo_name} alt='logo_name' width={props.width}></img>
    )

}

export default LogoName;