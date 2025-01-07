'use client';
import { useTheme } from 'next-themes';
const TopHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="border-b-2 text-customGray-normal border-bord">
      <div className="container flex justify-between items-center h-16 ">
        <div className="flex">
          <div>Logo</div>
          <div>Search</div>
        </div>
        <div className="flex">
          <div
            onClick={() => {
              setTheme((v) => {
                if (v === 'dark') {
                  return 'light';
                }
                return 'dark';
              });
            }}
          >
            Theme: {theme}
          </div>
          <div>chọn phương thức nhận hàng</div>
          <div>hộp thư</div>
          <div>account</div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
