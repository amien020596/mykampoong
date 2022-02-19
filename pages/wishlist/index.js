import Button from 'antd/lib/button';
import CardWrapper from 'components/_Wishlish/CardWrapper';
import Layout from 'components/Layout/Public';
import MetaHead from 'components/_Meta/MetaHead';
import Title from 'antd/lib/typography/Title';
import { isloginUser } from 'libs/helpers/auth';
import { useEffect } from 'react';
import { useGetWishlist } from 'modules/wishlist/get-wishlist';
import { useGlobalContext } from 'libs/hooks/global';
import { useTranslation } from 'next-i18next';

const Wishlist = () => {
  const { t } = useTranslation('common')
  const { reloadDataWishlist, setModalCreateWishlist, setDataWishlist, setReloadDataWishlist } = useGlobalContext.useContainer();

  useEffect(() => {
    if (isloginUser()) {
      useGetWishlist()
        .then(response => {
          if (response?.wish_list) {
            setDataWishlist(response.wish_list)
          }
          setReloadDataWishlist(false)
        }).catch(error => {
          console.log("error", error)
        })
    }
    return () => {
      setDataWishlist([])
    }
  }, [reloadDataWishlist])

  const handleClickModal = () => setModalCreateWishlist(true)

  return (
    <>
      <MetaHead description="Wishlist" title={"Wishlist | MyKampoong"} />
      <Layout>
        <div className="container">
          <div className="f mdl f-btw" style={{ marginTop: 100 }}>
            <Title>{t('Wishlist')}</Title>
            <Button onClick={() => handleClickModal()}>{t("Create new wishlist")}</Button>
          </div>
          <CardWrapper />
        </div>
      </Layout>
    </>
  )
}

export default Wishlist;