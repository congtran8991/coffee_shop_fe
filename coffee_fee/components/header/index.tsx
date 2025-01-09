import TopHeader from './TopHeader';
import Nav from './Nav';
import NavResponsive from './Nav.Mobile';

const Header = () => {
  return (
    <header className="bg-white">
      <div className="mn:hidden sm: hidden xl:block">
        <TopHeader />
        <Nav />
      </div>
      <NavResponsive />
    </header>
  );
};

export default Header;
