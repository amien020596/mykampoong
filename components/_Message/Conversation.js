import Avatar from 'antd/lib/avatar'
import Comment from 'antd/lib/comment';

function Conversation() {
  return (
    <>
      <style jsx>
        {`
        .comment-box-left{
          height:auto;
          border: 1px solid #cccccc;
          width: auto;
          margin-top:10px;
          margin-bottom:10px;
          margin-right:45px;
          margin-left:10px;
          padding: 10px;
          border-radius: 10px;
          background-color: #cccccc;
          position:relative;
        }
        .comment-box-right{
          height:auto;
          border: 1px solid #cccccc;
          width: auto;
          margin-top:10px;
          margin-bottom:10px;
          margin-right:10px;
          margin-left:45px;
          padding: 10px;
          border-radius: 10px;
          background-color: #ffffff;
          position:relative;
        }
      `}
      </style>
      <div style={{ marginLeft: 10 }} className="f">
        <div style={{ width: 50 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
        <div className="comment-box-left">
          <span style={{
            position: "absolute"
            , left: "-8px",
            top: 4, color: "#cccccc"
          }}>
            <svg viewBox="0 0 8 13" width="8" height="13"><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
          </span>
          <Comment
            // actions={actions}
            // author={<a>Han Solo</a>}
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>

              </>
            }
          // datetime={
          //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //     <span>{moment().fromNow()}</span>
          //   </Tooltip>
          // }
          />
        </div>
      </div>
      <div style={{ marginLeft: 10 }} className="f">
        <div style={{ width: 50 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
        <div className="comment-box-left">
          <span style={{
            position: "absolute"
            , left: "-8px",
            top: 4, color: "#cccccc"
          }}>
            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path></svg>
          </span>
          <Comment
            // actions={actions}
            // author={<a>Han Solo</a>}
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>

              </>
            }
          // datetime={
          //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //     <span>{moment().fromNow()}</span>
          //   </Tooltip>
          // }
          />
        </div>
      </div>
      <div style={{ marginRight: 10 }} className="f">

        <div className="comment-box-right">
          <span style={{
            position: "absolute"
            , right: "-8px",
            top: 4, color: "#cccccc"
          }}>
            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg></span>

          <Comment
            // actions={actions}
            // author={<a>Han Solo</a>}
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>

              </>
            }
          // datetime={
          //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //     <span>{moment().fromNow()}</span>
          //   </Tooltip>
          // }
          />
        </div>
        <div style={{ width: 50 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
      </div>
      <div style={{ marginRight: 10 }} className="f">

        <div className="comment-box-right">
          <span style={{
            position: "absolute"
            , right: "-8px",
            top: 4, color: "#cccccc"
          }}>
            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg></span>

          <Comment
            // actions={actions}
            // author={<a>Han Solo</a>}
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>

              </>
            }
          // datetime={
          //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //     <span>{moment().fromNow()}</span>
          //   </Tooltip>
          // }
          />
        </div>
        <div style={{ width: 50 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
      </div>
      <div style={{ marginRight: 10 }} className="f">

        <div className="comment-box-right">
          <span style={{
            position: "absolute"
            , right: "-8px",
            top: 4, color: "#cccccc"
          }}>
            <svg viewBox="0 0 8 13" width="8" height="13" class=""><path opacity=".13" d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"></path><path fill="currentColor" d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"></path></svg></span>

          <Comment
            // actions={actions}
            // author={<a>Han Solo</a>}
            // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
            content={
              <>
                <p>
                  We supply a series of design principles, practical patterns and high quality design
                  resources (Sketch and Axure), to help people create their product prototypes beautifully
                  and efficiently.
                </p>

              </>
            }
          // datetime={
          //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
          //     <span>{moment().fromNow()}</span>
          //   </Tooltip>
          // }
          />
        </div>
        <div style={{ width: 50 }}>
          <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
        </div>
      </div>
    </>
  )
}

export default Conversation;