import logo from '../images/logo.svg'

function Navbar() {
    return (
        <div className="nav-bar">
            <div className='nav-bar-left'>
                <img src={logo} alt="logo" className='App-logo'></img>
                <h2>ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
        </div>
    )
}

export default Navbar