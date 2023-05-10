// import * as styles  from './Navbar.module.scss'

const Navbar = (props) => {
  return (<>

    <nav className="bg-white">
        <button>
            <i class="fa-solid fa-bars"></i>
        </button>
        <button>
            <i class="fa-solid fa-bell"></i>
        </button>
    </nav>
    <div>
        <ul>
            <li>
            <i class="fa-solid fa-house"></i>
            </li>
        </ul>
    </div>

</>);
};

export default Navbar;
