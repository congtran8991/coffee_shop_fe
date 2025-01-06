import TopHeader from './TopHeader';
import Nav from './Nav';

const Header = () => {
  return (
    <div>
      <header className="bg-white">
        <TopHeader />

        <Nav />
      </header>
    </div>
  );
};

export default Header;
