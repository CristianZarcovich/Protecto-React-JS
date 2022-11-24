const CartWidget = () => {
  return (
  <ul className="navbar-nav">
    <li className="nav-link d-flex me-lg-5">
      <button className="btn bg-beige">Carrito</button>
      <p className="my-auto ms-2 p-2 rounded-1 bg-beige">0</p>
    </li>
  </ul>
  );
}

export default CartWidget;
