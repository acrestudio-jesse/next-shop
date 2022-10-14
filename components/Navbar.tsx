import Link from "next/link";
import style from "../styles/componentStyles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>Acre Shop</div>
      <ul className={style.navList}>
        <Link href="/user/login">
          <li className={style.navLink}>Login</li>
        </Link>
        <Link href="/user/signup">
          <li className={style.navLink}>Sign Up</li>
        </Link>
        <Link href="/shop">
          <li className={style.navLink}>Shop</li>
        </Link>
        <Link href="/portfolio">
          <li className={style.navLink}>Portfolio</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
