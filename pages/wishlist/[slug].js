import { useEffect, useState } from 'react';

import { Button } from 'antd';
import CardWrapper from 'components/_Stay/CardWrapper';
import Layout from 'components/Layout/Public';
import { LeftOutlined } from '@ant-design/icons';
import MetaHead from 'components/_Meta/MetaHead';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useGetWishlistDetail } from 'modules/wishlist/get-detail-wishlist';
import { useGlobalContext } from 'libs/hooks/global';
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export async function getServerSideProps({ locale }) {

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}
export default function Wishlist() {
  const [data, setDataWishlist] = useState({})
  const { t } = useTranslation('common')
  const router = useRouter();
  const { query } = useRouter();
  const { reloadDataWishlist, setReloadDataWishlist } = useGlobalContext.useContainer();

  useEffect(() => {

    useGetWishlistDetail(query.slug)
      .then(response => {
        setDataWishlist(response.detail_wish_list)
      }).catch(() => { })
    return () => {
      setReloadDataWishlist(false)
    }
  }, [reloadDataWishlist])

  const wishlist = data?.travel_object || [];
  const handleBack = () => {
    router.back();
  }
  return (
    <>
      <MetaHead description="Wishlist" title={"Wishlist | MyKampoong"} />
      <Layout>
        <div className="container">
          <div style={{ marginTop: 100 }}></div>
          <Button
            type="text"
            style={{ padding: "0", marginBottom: 20 }}
            onClick={() => handleBack()}
          >
            <LeftOutlined /> {t("Back")}
          </Button>
          <CardWrapper data={wishlist} meta={wishlist.pagination} />
        </div>
      </Layout>
    </>
  )
}