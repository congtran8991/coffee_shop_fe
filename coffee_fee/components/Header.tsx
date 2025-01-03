'use client';

const Header = () => {
  return (
    <div>
      <header className="bg-white">
        <div className="border-b-2 border-gray-300">
          <div className="container flex justify-between items-center h-16 ">
            <div className="flex">
              <div>Logo</div>
              <div>Search</div>
            </div>
            <div className="flex">
              <div>chọn phương thức nhận hàng</div>
              <div>hộp thư</div>
              <div>account</div>
            </div>
          </div>
        </div>

        <div className="shadow-lg shadow-gray-200">
          <ul className="container flex justify-center">
            <li className="px-8 py-2 hover:text-gray-600 focus:outline-none focus:text-white">
              <div className="relative group">
                {/* Menu chính */}
                <button className="text-green-700 hover:text-green-900">
                  MENU
                </button>

                {/* Menu con */}
                <div className="absolute left-0 mt-4 w-64 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {/* Tam giác nhọn */}
                  <div className="absolute top-[-8px] left-6 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>

                  <div className="p-4 grid grid-cols-2 gap-4">
                    {/* Cột 1 */}
                    <div>
                      <h4 className="font-bold text-green-700 mb-2">
                        THỨC UỐNG
                      </h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-700 hover:text-green-600"
                          >
                            Bst mới{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Cột 2 */}
                    <div>
                      <h4 className="font-bold text-green-700 mb-2">BÁNH</h4>
                      <ul className="space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-gray-700 hover:text-green-600"
                          >
                            Bánh lạnh
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="px-8 py-2 hover:text-gray-600 focus:outline-none focus:text-white">
              Menu
            </li>
            <li className="px-8 py-2">Sản phẩm đóng gói</li>
            <li className="px-8 py-2">Về chúng tôi</li>
            <li className="px-8 py-2">Khuyến mãi</li>
            <li className="px-8 py-2">Hội viên</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
