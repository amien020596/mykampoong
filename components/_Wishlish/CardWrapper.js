import { useEffect, useState } from 'react'

import Button from 'antd/lib/button';
import Card from './Card'
import Empty from 'antd/lib/empty';
import Modal from 'antd/lib/modal/Modal';
import Pagination from "components/common/Pagination";
import { deleteFolderWishlist } from 'modules/wishlist/delete-wishlist';
import { map } from 'lodash';
import message from 'antd/lib/message';
import { useGlobalContext } from 'libs/hooks/global';
import { useTranslation } from 'next-i18next';

export default function CardWrapper() {
  const { t } = useTranslation('common');
  const { dataWishlist, setReloadDataWishlist } = useGlobalContext.useContainer();
  const [visibleModalWishlist, setVisibleModalWishlist] = useState(false);
  const [wishlistSlug, setWishlistSlug] = useState('');

  const handleDeleteWishlist = (slug) => {
    setVisibleModalWishlist(true)
    setWishlistSlug(slug)
  }

  const onCancelModal = () => {
    setVisibleModalWishlist(false)
  }

  const handleRemoveWishlist = () => {
    deleteFolderWishlist(wishlistSlug)
      .then(response => {
        if (response) {
          message.info(response.message)
          setReloadDataWishlist(true);
        } else {
          message.info("no wishlist item found")
        }
        setVisibleModalWishlist(false);
      }).catch(error => {
        console.log("error", error)
      })
  }

  const datamap = dataWishlist.map(f => {
    return Object.assign(f, { service: 'wishlist' })
  })
  const data = datamap;
  return (
    <div>
      {data.length == 0 &&
        <div
          className="f f-w f-ctr"
          style={{ width: "calc(100% + 20px)", marginTop: 40 }}
        >
          <Empty />
        </div>
      }
      {data.length > 0 && data.map((i) => (
        <div
          className="f f-w"
          style={{ width: "calc(100% + 20px)", marginTop: 40 }}
        >
          <Card key={i.id} data={i} light square handleDelete={(slug) => handleDeleteWishlist(slug)} />
        </div>
      ))}
      <div className="f f-ctr mdl" style={{ marginTop: 40 }}>
        {/* <Pagination meta={meta} /> */}
      </div>
      <Modal
        title="Remove item"
        visible={visibleModalWishlist}
        onCancel={onCancelModal}
        footer={[
          <Button key="back" onClick={onCancelModal}>
            {t("cancel")}
          </Button>,
          <Button key="submit" type="primary" onClick={handleRemoveWishlist}>
            {t("Remove")}
          </Button>
        ]}
      >
        <p>{t("Are you sure want to remove this item from your cart?")}</p>
      </Modal>
    </div>
  )
}