'use client';
import KColors from '@/constants/colors';
import KContainer from '@/lib/Container';
import KText from '@/lib/Text';
import Grid from '@mui/material/Grid2';
import React, { memo } from 'react';

const Content = () => {
  return (
    <KContainer.View
      className="xl:container"
      pdY="1.5rem"
      color={KColors.white}
      fontSize="0.875rem"
    >
      <Grid container spacing={3}>
        <Grid size={{ xs: 5.2 }}>
          <KText.Base textTransform={'uppercase'} fontWeight="bold">
            Địa chỉ
          </KText.Base>

          <Info
            title="Trụ sở chính"
            description="Công ty Cổ Phần Phúc Long Heritage - ĐKKD: 0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021"
          />

          <Info
            title="Nhà máy"
            description="D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam."
          />

          <Info
            title="Địa chỉ"
            description="Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17 Lê Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh."
          />

          <Info title="Hotline Đặt hàng" description="1800 6779" />

          <Info
            title="Hotline Công ty"
            description="1900 2345 18 (Bấm phím 0: Lễ Tân | phím 1: CSKH)"
          />

          <Info
            title="Email"
            description="sales@phuclong.masangroup.com, info2@phuclong.masangroup.com"
          />
        </Grid>
        <Grid size={{ xs: 1.7 }}>
          <KText.Base textTransform={'uppercase'} fontWeight="bold">
            Công ty
          </KText.Base>
        </Grid>
        <Grid size={{ xs: 1.7 }}>
          <KText.Base textTransform={'uppercase'} fontWeight="bold">
            Tuyển dụng
          </KText.Base>
        </Grid>
        <Grid size={{ xs: 1.7 }}>
          <KText.Base textTransform={'uppercase'} fontWeight="bold">
            Hội viên
          </KText.Base>
        </Grid>
        <Grid size={{ xs: 1.7 }}>
          <KText.Base textTransform={'uppercase'} fontWeight="bold">
            Liên hệ
          </KText.Base>
        </Grid>
      </Grid>
    </KContainer.View>
  );
};

export default memo(Content);

export const Info = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <KContainer.View fontSize="0.875rem" lineHeight="1.75rem">
      <KText.Base type="span" fontWeight="bold">
        {title}:
      </KText.Base>{' '}
      {description}
    </KContainer.View>
  );
};
