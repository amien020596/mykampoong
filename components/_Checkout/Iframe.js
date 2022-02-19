import { useEffect, useState } from 'react'

import Modal from 'antd/lib/modal'

export default function Iframe({ ...props }) {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (props?.link.length > 0) {
      setVisible(true)
    } else {
      setVisible(false)
    }

  }, [props?.link.length])

  return (

    <Modal
      title="Modal 1000px width"
      centered
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
      width={1000}
    >
      <div style={{ height: 540 }} dangerouslySetInnerHTML={{ __html: `<iframe class="iframe" src=${props?.link} />` }} />
      {/* <div style={{ height: 540 }} dangerouslySetInnerHTML={{ __html: `<iframe class="iframe" src=${'https://www.youtube.com/embed/cWDJoK8zw58'} />` }} /> */}
    </Modal>

  )
  // return (<div dangerouslySetInnerHTML={{ __html: `<iframe src=${'https://www.youtube.com/c/WrongAkram/videos'} />` }} />)
}