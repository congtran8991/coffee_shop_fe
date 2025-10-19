import React from 'react';
// import { Badge } from '../../components/ui/badge';
// import { Button } from '../../components/ui/button';
// import { Card, CardContent } from '../../components/ui/card';
// import { Input } from '../../components/ui/input';

const navigationItems = [
  { label: 'SPORTS', active: false },
  { label: 'LIVE', active: false },
  { label: 'CASINO', active: true },
  { label: 'SLOTS', active: false },
  { label: 'POKER', active: false },
  { label: 'BINGO', active: false },
  { label: 'VIRTUAL', active: false },
  { label: 'PROMOTIONS', active: false },
];

const modelImages = [
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/model-1.jpg',
    name: 'Sophia',
    isLive: true,
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/model-2.jpg',
    name: 'Emma',
    isLive: false,
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/model-3.jpg',
    name: 'Isabella',
    isLive: false,
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/model-4.jpg',
    name: 'Olivia',
    isLive: false,
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/model-5.jpg',
    name: 'Ava',
    isLive: false,
  },
];

const gameImages = [
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-pharaoh.jpg',
    title: 'Book of Ra',
    category: 'Slots',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-panda.jpg',
    title: 'Lucky Panda',
    category: 'Slots',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-blackjack.jpg',
    title: 'Blackjack',
    category: 'Table Games',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-roulette.jpg',
    title: 'Roulette',
    category: 'Table Games',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-poker.jpg',
    title: "Texas Hold'em",
    category: 'Poker',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-baccarat.jpg',
    title: 'Baccarat',
    category: 'Table Games',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-treasure.jpg',
    title: 'Treasure Hunt',
    category: 'Slots',
  },
  {
    src: 'https://c.animaapp.com/mfva240hZqDlmf/img/game-fire.jpg',
    title: 'Fire Joker',
    category: 'Slots',
  },
];

const Main = () => {
  return (
    <>
      <div className="bg-[#262626] min-h-screen w-full">
        <header className="bg-black px-4 py-2">
          <div className="flex items-center justify-between w-full mx-auto">
            <div className="flex items-center space-x-8">
              <div className="bg-red-600 px-4 py-2 rounded">
                <span className="text-white font-bold text-xl">BET MART</span>
              </div>
              {/* <nav className="hidden md:flex space-x-6">
       
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            SPORTS
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            LIVE
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-900 text-white shadow-sm hover:bg-red-950 focus:outline-none focus:ring-1 focus:ring-white">
            CASINO
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            SLOTS
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            POKER
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            BINGO
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            VIRTUAL
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-xs font-medium h-8 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
            PROMOTIONS
          </button>
        </nav> */}
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center justify-center gap-2 rounded-full text-xs font-bold h-6 w-20 px-3 bg-gray-400 text-white shadow-sm focus:outline-none focus:ring-1 focus:ring-white">
                로그인
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full text-xs font-bold h-6 w-20 px-3 bg-red-700 text-white shadow-sm hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-white">
                회원가입
              </button>
            </div>
          </div>
        </header>
        <section className="bg-red-600">
          <div className="mx-[100px] px-4 py-2 flex justify-end gap-1">
            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2 flex items-center">
              <img
                className="mb-[20px] h-[10px]"
                src="image/girl-04.png"
                alt="girl"
              />
              <div>라이브 카지노</div>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>

            <div className="bg-red-800 rounded-full font-bold text-sm text-white w-28 px-3 py-2">
              <span>라이브 카지노</span>
            </div>
          </div>
        </section>

        <section>
          <div className="w-full">
            <img
              className="w-full h-[800px] object-cover"
              src="https://cdn-media.sforum.vn/storage/app/media/anh-dep-83.jpg"
              alt="slide"
            />
          </div>
        </section>

        <section className="px-4 py-4 max-w-7xl mx-auto">
          <div className="rounded-full border-3 border-gray-700 bg-gray-800 text-white shadow h-[120px] flex items-center">
            <div className="rounded-full border border-gray-700 bg-red-500 text-white shadow h-[100px] w-full mx-[10px] flex items-center">
              <div
                style={{ borderWidth: 4 }}
                className="gap-6 flex justify-center items-center rounded-full border border-black bg-red-800 text-white shadow h-[80px] w-full mx-[10px]"
              >
                <div className="text-[40px] font-bold">실시간 잭팟금액</div>
                <div className="text-[40px] font-bold">21,365,751,300</div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden h-[190px] flex flex-col justify-end">
              <div
                style={{
                  borderRadius: '100px 15px 15px 100px',
                }}
                className="relative h-[160px] border border-gray-700 bg-red-600 text-white shadow"
              >
                <div className="relative flex items-center w-full gap-6 px-[30px] top-0 h-[160px]">
                  <div className="absolute w-full flex">
                    <div className="flex justify-between w-[80%]">
                      <div className="w-[80px] h-[80px] bg-red-800 rounded-full"></div>
                      <div>
                        <div className="text-[35px] font-bold">
                          라이브 카지노
                        </div>
                        <div className="text-lg text-white">LIVE CASINO</div>
                      </div>
                    </div>
                    <div className="w-[20%]"></div>
                  </div>

                  <div className="absolute relative h-full w-full">
                    <img
                      style={{ top: -26, left: 90 }}
                      className="w-[180px] h-auto mb-[20px] absolute z-10 object-contain"
                      src="image/girl-04.png"
                      alt="girl"
                    />

                    <img
                      className="h-[160px] mb-[20px] absolute z-0 bottom-[-110px] left-[50px]"
                      src="image/background-22.png"
                      alt="girl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden h-[190px] flex flex-col justify-end">
              <div
                style={{
                  borderRadius: '15px 100px 100px 15px',
                }}
                className="relative h-[160px] border border-gray-700 bg-red-600 text-white shadow"
              >
                <div className="relative flex items-center w-full gap-6 px-[30px] top-0 h-[160px]">
                 <div className='absolute w-full flex'>
                    <div className='w-[10%]'>cs</div>
                     <div
                    style={{ direction: 'rtl' }}
                    className="flex justify-between w-[80%]"
                  >
                    <div className="w-[80px] h-[80px] bg-red-800 rounded-full"></div>
                    <div>
                      <div className="text-[35px] font-bold">슬롯게임</div>
                      <div className="text-lg text-white">SLOT GAME</div>
                    </div>
                  </div>

                 </div>

                  <div className="absolute relative h-full w-full">
                    <img
                      style={{ top: -26, right: 130 }}
                      className="w-[180px] h-auto mb-[20px] absolute z-10 object-contain"
                      src="image/girl-04.png"
                      alt="girl"
                    />

                    <img
                      className="h-[160px] mb-[20px] absolute z-0 bottom-[-110px] right-[50px]"
                      src="image/background-22.png"
                      alt="girl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center mb-4 space-x-4">
              <h2 className="text-white text-2xl font-bold">라이브 카지노</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="relative rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden h-[270px] w-full">
                <img
                  src="image/background-18.png"
                  alt="Background"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <img
                  src="image/girl-20.png"
                  alt="Girl"
                  className="absolute inset-0 w-full h-full object-contain z-10"
                />

                <img
                  src="image/pragmatic.png"
                  alt="Logo"
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[10rem] h-auto z-20"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white text-2xl font-bold mb-4">슬롯게임</h2>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-1.jpg"
                  alt="Football"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Football
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-2.jpg"
                  alt="Tennis"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Tennis
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-3.jpg"
                  alt="Chess"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Chess
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-4.jpg"
                  alt="Poker"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Poker
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              {/* ///////// */}
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-1.jpg"
                  alt="Football"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Football
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-2.jpg"
                  alt="Tennis"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Tennis
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-3.jpg"
                  alt="Chess"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Chess
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-4.jpg"
                  alt="Poker"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Poker
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
              <div className="rounded-xl border border-gray-700 bg-gray-800 text-white shadow overflow-hidden">
                <img
                  src="https://c.animaapp.com/mfva240hZqDlmf/img/game-5.jpg"
                  alt="Blackjack"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold leading-none tracking-tight text-lg">
                    Blackjack
                  </div>
                  <div className="text-sm text-gray-400">Game description</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8">
          <div className="max-w-7xl mx-auto">
           <div className="grid grid-cols-3 h-[300px] rounded-xl border bg-gray-800 text-white shadow relative">
              <div className="bg-gradient-gray1 px-6 py-6">
                <div className="flex-between h-[50px] bg-gray-900 rounded-xl px-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[35px] h-[35px] bg-[#B10000] rounded-full flex-center">
                      <img
                        src="/assets/images/icons/fi-sr-cherry.svg"
                        alt="fi-sr-cherry"
                      ></img>
                    </div>
                    <div className="font-bold text-md">더보기</div>
                  </div>
                  <div className="text-xs">더보기</div>
                </div>
                <ul className="mt-5 font-bold text-md list-none flex flex-col gap-4">
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                </ul>
              </div>
              <div className="bg-gradient-gray1 px-6 py-6">
                <div className="flex-between h-[50px] bg-gray-900 rounded-xl px-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[35px] h-[35px] bg-[#B10000] rounded-full flex-center">
                      <img
                        src="/assets/images/icons/fi-sr-cherry.svg"
                        alt="fi-sr-cherry"
                      ></img>
                    </div>
                    <div className="font-bold text-md">이벤트</div>
                  </div>
                  <div className="text-xs">더보기</div>
                </div>
                <ul className="mt-5 font-bold text-md list-none flex flex-col gap-4">
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                  <li>입금 플러스 이벤트</li>
                </ul>
              </div>
              <div className="bg-gray-800">
                <div className="h-full flex flex-col justify-center gap-4 px-6 relative">
                  <div
                    style={{ borderWidth: "3px" }}
                    className="flex items-center h-[70px] bg-gradient-primary1 rounded-xl px-4 border-orange-600 gap-4"
                  >
                    <div className="relative h-[50px] w-[50px] bg-gradient-primary rounded-full overflow-hidden">
                      <img
                        className="absolute h-[45px]"
                        src="/assets/images/other/other3.png"
                      />
                    </div>

                    <div className="text-2xl font-bold">바로가기</div>
                  </div>

                  <div
                    style={{ borderWidth: "3px" }}
                    className="flex items-center h-[70px] bg-gradient-primary1 rounded-xl px-4 border-orange-600 gap-4"
                  >
                    <div className="relative h-[50px] w-[50px] bg-gradient-primary rounded-full overflow-hidden">
                      <img
                        className="absolute h-[45px]"
                        src="/assets/images/other/other4.png"
                      />
                    </div>

                    <div className="text-2xl font-bold">
                      파트너 문의 바로가기
                    </div>
                  </div>

                  <div
                    style={{ borderWidth: "3px" }}
                    className="flex items-center h-[70px] bg-gradient-gray rounded-xl px-4 border-white gap-4"
                  >
                    <div className="relative h-[50px] w-[50px] bg-gradient-primary1 rounded-full overflow-hidden">
                      <img
                        className="absolute h-[45px]"
                        src="/assets/images/other/other5.png"
                      />
                    </div>

                    <div>
                      <div className="text-md">평생 도메인 안내</div>
                      <div className="text-lg font-bold">BETMART.COM</div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{ top: -60, right: -30 }}
                className="absolute"
                src="/assets/images/other/other6.png"
              />
              <img
                style={{ bottom: -60, left: -30 }}
                className="absolute"
                src="/assets/images/other/other7.png"
              />
            </div>

            
          </div>
        </section>

        <div className="max-w-7xl mx-auto">
          <section className="flex items-center h-[50px] rounded-[15px] bg-black/25 border border-gray-600">
            <div className="font-bold text-md text-white px-4">충전신청</div>
          </section>

          <section className="mt-3 bg-[#373b3f] opacity-50 h-[258px] rounded-[15px] px-4 py-4">
            <div className="bg-black w-[258px] h-[40px] rounded-[20px] flex items-center px-4">
              <span className="text-white font-bold">
                입금 및 충전 시 주의사항!
              </span>
            </div>

            <div className="mt-2">
              <div className="text-[#999999] font-bold text-md">
                1. 등록된 예금주명과 다른 이름으로 입금 시 입금확인 및 충전처리
                일체 불가합니다.
              </div>

              <div className="text-[#999999] font-bold text-md">
                2. 충전신청 후 5분 이내에 실제 입금이 되지 않는 경우에는
                신청하신 내용이 자동삭제(취소)됩니다.
              </div>

              <div className="text-[#999999] font-bold text-md">
                3. 입금자명 / 충전신청금액 / 입금액 이 일치하면 입금완료 후
                1분이내에 충전이 처리됩니다.
              </div>

              <div className="text-[#999999] font-bold text-md">
                4. 각 은행별 점검시간대에는 입금 및 입금확인, 충전처리 불가할 수
                있습니다.
              </div>

              <div className="text-white font-bold text-md">
                카지노 - 카지노/슬롯만 이용가능
              </div>

              <div className="text-white font-bold text-md">
                일반 - 카지노/슬롯 제외한 모든 종목 가능
              </div>

              <div className="text-white font-bold text-md">
                라이브전용- 일반에서 스포츠/인플레이 제외한 종목 이용가능
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6 mt-8">
            <div className="flex gap-10">
              <div className="w-[70px] text-[#999999]">입금계좌 :</div>
              <div className="text-white">고객센터로 문의 바랍니다.</div>
            </div>

            <div className="flex gap-10">
              <div className="w-[70px] text-[#999999]">충전유형 :</div>
              <div className="text-white">
                <span className="mr-4">일반(첫충10%,매충5%)</span>
                <span>라이브전용(첫충25%,매충20%)</span>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-[70px] text-[#999999]">충전금액 :</div>
              <div className="w-full flex flex-col gap-3">
                <input className="px-4 bg-[rgba(73,77,82,0.149)] w-full h-[50px] rounded-full border border-gray-600 text-white focus:outline-none focus:ring-0" />
                <div className="flex justify-between">
                  {[
                    { value: 10000, text: '만원', key: 'one' },
                    { value: 30000, text: '삼만원', key: 'three' },
                    { value: 50000, text: '오만원', key: 'five' },
                    { value: 100000, text: '십만원', key: 'ten' },
                    { value: 500000, text: '오십만원', key: 'fifty' },
                    { value: 1000000, text: '백만원', key: 'reset' },
                  ].map((_x, index) => {
                    return (
                      <button
                        className="text-white font-bold w-[151px] h-[40px] rounded-[20px] bg-gradient-to-t from-[#575757] to-[#767676] 
  shadow-[inset_0_-1px_0_#797979] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                        key={index}
                      >
                        {_x?.text}
                      </button>
                    );
                  })}
                  <button
                    className="font-bold text-white w-[151px] h-[40px] rounded-[20px] bg-gradient-to-t from-[#af0005] to-[#dd0000] 
  shadow-[inset_0_-1px_0_#797979] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                  >
                    정정하기
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              <div className="w-[70px] text-[#999999]">입금자명 :</div>
              <div className="text-white">김두루미.</div>
            </div>

            <div className="flex justify-center">
              <button
                className="font-bold text-white w-[200px] h-[50px] rounded-[20px] bg-gradient-to-t from-[#af0005] to-[#dd0000] 
  shadow-[inset_0_-1px_0_#797979] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
              >
                정정하기
              </button>
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center px-4 h-[50px] rounded-[15px] bg-black/25 border border-gray-600">
              <div className="font-bold text-md text-white">충전내역</div>
              <div className="flex gap-2">
                <button
                  className="text-white font-bold w-[130px] h-[30px] rounded-[20px] bg-gradient-to-t from-[#575757] to-[#767676] 
  shadow-[inset_0_-1px_0_#797979] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                >
                  새로고침
                </button>

                <button
                  className="font-bold text-white w-[130px] h-[30px] rounded-[20px] bg-gradient-to-t from-[#af0005] to-[#dd0000] 
  shadow-[inset_0_-1px_0_#797979] shadow-[inset_0_1px_0_rgba(255,255,255,0.48)]"
                >
                  선택삭제
                </button>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-white flex justify-between items-center px-4 h-[50px] rounded-md bg-black/25 border border-gray-600">
                <div className="w-[20%] text-left">
                  <input
                    className="focus:outline-none focus:ring-0"
                    type="checkbox"
                  />
                </div>
                <div className="w-[20%] text-center">충전내역</div>
                <div className="w-[20%] text-center">입금자명</div>
                <div className="w-[20%] text-center">신청일시</div>
                <div className="w-[20%] text-center">상태</div>
              </div>

              <div className="text-white flex justify-between items-center px-4 h-[50px] border-b border-b-gray-700">
                <div className="w-[20%] text-left">
                  <input
                    className="focus:outline-none focus:ring-0"
                    type="checkbox"
                  />
                </div>
                <div className="w-[20%] text-center">일반/500,000원</div>
                <div className="w-[20%] text-center">김두루미</div>
                <div className="w-[20%] text-center">2025-09-11 16:50</div>
                <div className="w-[20%] text-center">상태</div>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-gray-900 px-4 py-8 mt-12">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-gray-600 px-4 py-1 rounded inline-block mb-4">
              <span className="text-gray-800 font-bold text-4xl">BET MART</span>
            </div>
            <p className="text-gray-400 text-md font-bold">
              © 2024 BET MART. All rights reserved. Play responsibly.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Main;
