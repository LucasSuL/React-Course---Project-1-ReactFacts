import logo from '../images/logo512.png'

function Main() {
    return (
        <div className="main-container">
            <h1>Fun facts about React</h1>
            <div className='ul-big_logo'>
                <ul>
                    <li>Was originally released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src={logo} className="back-logo" alt='background-logo' ></img>
            </div>


        </div>
    )
}

export default Main