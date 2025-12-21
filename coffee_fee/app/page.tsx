'use client';

import ItemProduct from '@/components/item/ItemProduct';
import Carousel from '@/components/slide/Carousel';
import TitleSection from '@/components/title/TitleSection';
import KColors from '@/constants/colors';
import KButtons from '@/lib/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ModeStandbyOutlinedIcon from '@mui/icons-material/ModeStandbyOutlined';
// import { useAppDispatch, useAppSelector } from '@/hooks/redux-toolkit';
import KContainer from '@/lib/Container';
// import KInput from '@/lib/Input';
// import KText from '@/lib/Text';
// import { increase } from '@/stores/redux-toolkit/counter/slice';
// import { showToast } from '@/utils/common';
// import PortalHandle from '@/utils/portal';
// import { Grid2 } from '@mui/material';
import Grid from '@mui/material/Grid2';
import KText from '@/lib/Text';
import ItemPromotionNews from '@/components/item/ItemPromotionNews';
import KInput from '@/lib/Input';
import KImage from '@/lib/Image';
import ItemShop from '@/components/item/ItemShop';
// import useTranslationServer from '@/hooks/lib-next/useTranslationServer';

// import Image from 'next/image';
// import { useTranslation } from 'react-i18next';
// export const dynamic = 'force-static'; // như getStaticProps

export default function Home() {
  // const trans = await useTranslationServer();

  return (
    <div className="font-sans text-black">
      {/* Hero Grid */}
      <section
        className="mx-auto
  grid grid-cols-2 pb-12"
      >
        {[
          {
            label: 'Gifts for her',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwb9910594/home/2025/w51/ss26-woman-d.jpg',
          },
          {
            label: 'Shop Woman',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw2875e774/home/2025/w51/ss26-man-d.jpg',
          },
          {
            label: 'Shop Man',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwfd0aacf5/home/2025/w51/gift-w-d.jpg',
          },
          {
            label: 'FW25 Sale',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwb974d745/home/2025/w51/gift-m-d.jpg',
          },
          {
            label: 'Women’s jeans',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw2454f2a5/home/2025/w51/shop-woman-d.jpg',
          },
          {
            label: 'Men’s jeans',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw03c0f216/home/2025/w51/shop-man-d.jpg',
          },
          {
            label: 'Men’s jeans',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dw4025efdb/home/2025/w51/shirt-w-d.jpg',
          },
          {
            label: 'Men’s jeans',
            img: 'https://www.acnestudios.com/on/demandware.static/-/Library-Sites-acne/default/dwd6871b85/home/2025/w51/shirt-m-d.jpg',
          },
        ].map((block, idx) => (
          <div
            key={idx}
            className="relative aspect-[2.5/4] overflow-hidden group"
          >
            <img
              src={block.img}
              alt={block.label}
              className="
         w-full h-full object-cover transition-transform duration-700 group-hover:scale-105
        "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Text */}
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xl font-medium">{block.label}</p>
              <span className="text-sm underline underline-offset-4">
                Shop now
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Services & Highlight */}
      <section className="px-8 space-y-8">
        <div className="grid grid-cols-3 gap-4">
          {[
            {
              title: 'Shipping & Returns',
              desc: 'Fast delivery and easy returns',
            },
            { title: 'Gift Card', desc: 'Instant digital delivery' },
            { title: 'SS26 Runway', desc: "Women's Spring/Summer 2026" },
          ].map((item, idx) => (
            <div key={idx} className="border p-6 text-center">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-8 py-10 mt-12">
        <div className="text-center mb-6">Sign up for updates</div>
        <div className="flex justify-center">
          <input
            className="border p-2"
            type="email"
            placeholder="Email address"
          />
          <button className="bg-black text-white px-4">Subscribe</button>
        </div>
        <div className="mt-8 text-sm text-gray-700 flex justify-center space-x-4">
          <a href="#">About</a>
          <a href="#">Help</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  );
}
