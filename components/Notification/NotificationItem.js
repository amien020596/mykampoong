import Avatar from 'antd/lib/avatar'
import Typography from 'antd/lib/typography'

const { Text } = Typography
function NotificationItem() {
  return (
    <div className="card-notification" >
      <style jsx>{`
      .card-notification{
        cursor: pointer;
        padding-bottom:10px;
        padding-top:10px; 
        display: flex;
      }
      .card-notification:hover{
        background-color:#D4D4D8;
      }
      `}
      </style>
      <div style={{ margin: "0px 10px" }}>
        <Avatar src="https://joeschmoe.io/api/v1/random" />
      </div>
      <div >
        <Text strong>Alexander Miguel</Text>
        <p>AWS Amplify is a set of products and tools that enable mobile and front-end web developers to build and deploy secure, scalable full-stack applications, powered by AWS.</p>
      </div>
    </div>
  )
}
export default NotificationItem;