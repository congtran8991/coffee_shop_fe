import TopHeader from './TopHeader';
import Nav from './Nav';
import NavResponsive from './Nav.Mobile';
import KContainer from '@/lib/Container';

const Header = () => {
  return (
    <header className="bg-white">
      <KContainer.View className="mn:hidden sm: hidden xl:block">
        <TopHeader />
        <Nav />
      </KContainer.View>
      <NavResponsive />
    </header>
  );
};

export default Header;
