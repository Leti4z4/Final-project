
function Logo({setSelectedTab}) {

  const handleLogoClick = () => {
    setSelectedTab(0)
  }

  return (
      <img
        src="https://www.svgrepo.com/show/304699/diagram.svg"
        alt="site logo"
        width={"75px"}
        height={"auto"}
        onClick={handleLogoClick}
        className="logo"
      />
  );
}

export default Logo;
