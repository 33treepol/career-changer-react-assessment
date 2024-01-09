import './style/navbar.css'

function NavBar()
{
    return (
        <nav className="Container-header">
            <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/owner'}>Owner</a></li>
            </ul>
            <hr />
        </nav>
    );
}

export default NavBar;