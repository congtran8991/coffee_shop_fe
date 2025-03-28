import KColors from '@/constants/colors';
import KButtons from '@/lib/Button';
import KContainer from '@/lib/Container';
import KText from '@/lib/Text';
import React, { memo } from 'react';
import TurnRightOutlinedIcon from '@mui/icons-material/TurnRightOutlined';
import { Divider } from '@mui/material';
import KImage from '@/lib/Image';

const ItemShop = () => {
  return (
    <>
      <KContainer.View dp="flex" row>
        <KContainer.View mrR="0.75rem">
          <KImage.Avatar
            alt="Remy Sharp"
            src="https://imagedelivery.net/ZeGtsGSjuQe1P3UP_zk3fQ/ede24b65-497e-4940-ea90-06cc2757a200/storedata"
            size={56}
          />
        </KContainer.View>
        <KContainer.View>
          <KText.Base fontSize="0.75rem" color={KColors.customGray.moderate}>
            Đang cập nhật
          </KText.Base>
          <KText.Base color={KColors.primary.severe}>
            BDG-CH 44 Nguyen Dinh Chieu P.PC
          </KText.Base>

          <KContainer.View dp="flex" row>
            <KText.Base style={{ textDecoration: 'underline' }} mrR="0.5rem">
              Địa chỉ:
            </KText.Base>
            <KText.Base>
              44 Nguyễn Đình Chiểu P. Phú Cường TP. Thủ Dầu Một T. Bình Dương
            </KText.Base>
          </KContainer.View>

          <KContainer.View dp="flex" row>
            <KText.Base style={{ textDecoration: 'underline' }} mrR="0.5rem">
              Số điện thoại:
            </KText.Base>
            <KText.Base>(028) 7100 1968 (Ext.20028)</KText.Base>
          </KContainer.View>

          <KContainer.View dp="flex" row>
            <KText.Base style={{ textDecoration: 'underline' }} mrR="0.5rem">
              Giờ hoạt động:
            </KText.Base>
            <KText.Base>07:00 - 22:30</KText.Base>
          </KContainer.View>

          <KContainer.View dp="flex" row>
            <KText.Base style={{ textDecoration: 'underline' }} mrR="0.5rem">
              Trạng thái hoạt động:
            </KText.Base>
            <KText.Base>Mở cửa</KText.Base>
          </KContainer.View>

          <KContainer.View mrT={'0.5rem'}>
            <KButtons.ICon
              pdX={'1rem'}
              title={'Chỉ đường'}
              color={KColors.white}
              startIcon={<TurnRightOutlinedIcon />}
              bgC={KColors.primary.severe}
            />
          </KContainer.View>
        </KContainer.View>
      </KContainer.View>
      <Divider sx={{ marginY: '1rem' }} />
    </>
  );
};

export default memo(ItemShop);
