import CartWidget from "../CartWidget/CartWidget";
import Categories from "./Categories/Categories";

const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Lobo Negro</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-between bg-black rounded-1 py-3" id="navbarSupportedContent">
        <Categories/>
        <CartWidget/>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;
