const Navbar = ({ data }) => {
  // console.log(data);
  let { loggedIn, SetisLoggedIn } = data;

                                          //! taking two component
  const IsAnonymousUser = () => {
    return (
      <>
        <li>
          <button>Login</button>
        </li>
        <li>
          <a href="">Register</a>
        </li>
      </>
    );
  };

  const IsAuthenticated = () => {
    return (
      <>
        <li> 
          <button>Logout</button>
        </li>
      </>
    );
  };

  return (
    <section id="navbar">
      <article className="container">
        <div className="logoBlock">LOGO</div>
        <div className="menuBlock">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            {loggedIn ? <IsAuthenticated /> : <IsAnonymousUser />}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Navbar;
