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

import { useTranslationServer } from '@/hooks/lib-next/useTranslationServer';

// import Image from 'next/image';
// import { useTranslation } from 'react-i18next';
export const dynamic = 'force-static'; // như getStaticProps

export default async function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const trans = await useTranslationServer();

  return (
    <>
      {trans('greeting')}
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
            color={KColors.primary.severe}
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
            color={KColors.primary.severe}
            title={
              <KContainer.Stack direction={'row'}>
                <KText.Base mrR="0.25rem">Xem thêm 5 sản phẩm</KText.Base>
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

      <KContainer.View className="xl:container">
        <Grid container spacing={3}>
          <Grid size={{ xs: 3 }}>
            <ItemPromotionNews />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <ItemPromotionNews />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <ItemPromotionNews />
          </Grid>
          <Grid size={{ xs: 3 }}>
            <ItemPromotionNews />
          </Grid>
        </Grid>
      </KContainer.View>

      <TitleSection
        title={'Danh sách cửa hàng'}
        color={KColors.primary.severe}
        description="Danh sách cửa hàng của phúc long"
      />

      <KContainer.View className="xl:container">
        <Grid container spacing={6}>
          <Grid size={{ xs: 6 }}></Grid>
          <Grid size={{ xs: 6 }}>
            <KContainer.View>
              <KInput.Base
                fullWidth
                label="Tìm kiếm cửa hàng"
                sx={{ borderRadius: '50px' }}
              />
            </KContainer.View>

            <KContainer.View>
              <KText.Base color={KColors.primary.severe} mrY="1rem">
                Tìm kiếm theo khu vực
              </KText.Base>

              <Grid container spacing={2}>
                <Grid size={{ xs: 4 }}>
                  <KInput.Base
                    label="Tỉnh thành"
                    inputLabel={{ shrink: true }}
                  />
                </Grid>

                <Grid size={{ xs: 4 }}>
                  <KInput.Base
                    label="Quận huyện"
                    inputLabel={{ shrink: true }}
                  />
                </Grid>

                <Grid size={{ xs: 4 }}>
                  <KInput.Base
                    label="Phường xã"
                    inputLabel={{ shrink: true }}
                  />
                </Grid>
              </Grid>

              <KContainer.View
                dp="flex"
                row
                color={KColors.primary.severe}
                mrY="1rem"
              >
                <KImage.ICon icon={ModeStandbyOutlinedIcon} mrR="0.5rem" />
                <KText.Base>Vị trí hiện tại của quý khách</KText.Base>
              </KContainer.View>
            </KContainer.View>

            <KContainer.View>
              <KText.Base color={KColors.primary.severe}>
                Danh sách cửa hàng
              </KText.Base>
              <KContainer.View mrT="0.75rem">
                <ItemShop />
                <ItemShop />
                <ItemShop />
              </KContainer.View>
            </KContainer.View>
          </Grid>
        </Grid>
      </KContainer.View>
    </>
  );
}
