import ItemProduct from '@/components/item/ItemProduct';
import Carousel from '@/components/slide/Carousel';
import TitleSection from '@/components/title/TitleSection';
import KColors from '@/constants/colors';
import KButtons from '@/lib/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
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

// import Image from 'next/image';
// import { useTranslation } from 'react-i18next';
export default function Home() {
  // const count = useAppSelector((state) => state.abc.count);
  // const { t, i18n } = useTranslation();
  // const dispatch = useAppDispatch();

  return (
    <>
      <Carousel />
      <TitleSection
        title={'BST Tea Latte - Bánh Banaberry mới!'}
        color={KColors.primary.severe}
      />

      <KContainer.View className="container">
        <Grid container spacing={3}>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
        </Grid>

        <KContainer.View textAlign="center" mrT="1rem">
          <KButtons.ICon
            variant="outlined"
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            title={
              <KContainer.Stack direction={'row'}>
                <KText.Base textTransform={'initial'} mrR="0.25rem">
                  Xem thêm 5 sản phẩm
                </KText.Base>
                <KText.Base fontWeight="bold">
                  BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG
                </KText.Base>
              </KContainer.Stack>
            }
          />
        </KContainer.View>
      </KContainer.View>

      <TitleSection
        title={'BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG'}
        color={KColors.primary.severe}
      />

      <KContainer.View className="container">
        <Grid container spacing={3}>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
          <Grid size={{ xs: 2.4 }}>
            <ItemProduct />
          </Grid>
        </Grid>

        <KContainer.View textAlign="center" mrT="1rem">
          <KButtons.ICon
            variant="outlined"
            endIcon={<KeyboardArrowDownOutlinedIcon />}
            title={
              <KContainer.Stack direction={'row'}>
                <KText.Base textTransform={'initial'} mrR="0.25rem">
                  Xem thêm 5 sản phẩm
                </KText.Base>
                <KText.Base fontWeight="bold">
                  BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG
                </KText.Base>
              </KContainer.Stack>
            }
          />
        </KContainer.View>
      </KContainer.View>

      <TitleSection
        title={'Tin tức & Khuyến mãi'}
        color={KColors.primary.severe}
        description="Tin tức & Khuyến mãi của Phúc Long"
      />
    </>
  );
}
