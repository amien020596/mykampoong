import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from "react-copy-to-clipboard";
import Input from 'antd/lib/input'
import Modal from "antd/lib/modal/Modal";
import Text from "antd/lib/typography/Text";
import message from 'antd/lib/message';

export default function ModalShare(props) {
  const { vacation } = props.data
  const bodyEmail = props.email

  const copied = () => {
    message.success('copied link');
  }

  let currentURL = ''
  if (typeof window !== 'undefined') {
    currentURL = window.location.href
  }

  const pathFacebook = `http://www.facebook.com/share.php?u=${currentURL}`;
  const pathTwitter = `http://twitter.com/share?url=${currentURL}`;
  const pathEmail = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=${bodyEmail}&body=${currentURL}`;
  const pathWhatsapp = `https://api.whatsapp.com/send?text=${currentURL}`;
  const pathMessager = `https://www.facebook.com/dialog/send?app_id=553158979390341&link=https%3A%2F%2Fmykampoong.com&redirect_uri=https%3A%2F%2Fmykampoong.com`; // amien app id
  // `https://www.facebook.com/dialog/send?app_id=553158979390341&link=https%3A%2F%2F192.168.100.9:3000&redirect_uri=https%3A%2F%2F192.168.100.9:3000&href=https%3A%2F%2F192.168.100.9:3000`

  return (

    <Modal
      visible={props.visible}
      title="share"
      onCancel={props.onClose}
      footer={false}
    >
      <style jsx>
        {`
          .image-share {
           display:flex;
           border-bottom:1px solid #E4E4E7;
          }
          .image-share img{
            width:84px;
            height:84px;
            border-radius:.5rem;
            object-fit:cover;
          }
          .text-share{
            padding-left:25px;
          }
          p {
            margin-top:8px;
          }
          .social-share{
            margin-top:10px;
          }
         .social-media{
           display:flex;
           flex-wrap: wrap;
         }
         .social-media-icon{
          margin-right:6rem;
          margin-left: 0;
          margin-top: 1rem;
          margin-bottom:1rem;
          width:7rem;
          display:inline-block;
          
          cursor:pointer;
         }
         .social-icon{
           margin-right:10px;
         }
         .button-copy-shared-link:hover{
          cursor:pointer;
         }
        `}
      </style>
      <div className="wrapper">
        <div className="image-share">
          <div>
            <img alt="" src={vacation ? vacation.featured_image : ''} />
          </div>
          <div className="text-share">
            <h2>{vacation ? vacation.name : ''}</h2>
            <p>{currentURL}</p>
          </div>
        </div>
        <div className="social-share">
          <h3>Social Media</h3>
          <div className="social-media" style={{ marginBottom: "10px" }}>
            <div className="social-media-icon" >
              <a target="_blank" href={pathFacebook}>
                <img src="/images/icon/fb.svg" className="social-icon" alt="" />
                <Text strong>Facebook</Text>
              </a>
            </div>
            <div className="social-media-icon">
              <a target="_blank" href={pathTwitter}>
                <img src="/images/icon/twitter.svg" className="social-icon" alt="" />
                <Text strong>Twitter</Text>
              </a>
            </div>
          </div>
          <h3>messaging and email</h3>
          <div className="social-media">
            <div className="social-media-icon">
              <a target="_blank" href={pathEmail}>
                <img src="/images/icon/envelope-alt.svg" className="social-icon" alt="" />
                <Text strong>Email</Text>
              </a>
            </div>
            <div className="social-media-icon">
              <a target="_blank" href={pathWhatsapp}>
                <img src="/images/icon/whatsaap.svg" className="social-icon" alt="" />
                <Text strong>Whatsapp</Text>
              </a>
            </div>
            <div className="social-media-icon">
              <a target="_blank" href={pathMessager}>
                <img src="/images/icon/messager.svg" className="social-icon" alt="" />
                <Text strong>messager</Text>
              </a>
            </div>
          </div>
          <h3>Copy Link</h3>
          <Input
            addonAfter={
              <CopyToClipboard text={currentURL} onCopy={copied}>
                <div className="button-copy-shared-link"><CopyOutlined /> Copy</div>
              </CopyToClipboard>}
            value={currentURL} />
        </div>
      </div>
    </Modal >
  )
}
