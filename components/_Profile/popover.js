import { destroyToken, isloginUser } from 'libs/helpers/auth';

import AccountContext from 'libs/hooks/account';
import Badge from 'antd/lib/badge';
import Button from "antd/lib/button";
import ContentPopOver from './consts/ContentPopOver';
import Divider from 'antd/lib/divider';
import Popover from "antd/lib/popover";
import Text from "antd/lib/typography/Text";
import { map } from 'lodash';
import { useGlobalContext } from 'libs/hooks/global';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';

export default function PopOverUser(props) {
  return (
    <div >
      <Popover
        getPopupContainer={(triggerNode) => triggerNode.parentNode}
        overlayClassName="custom"
        content={<ContentPopOver />}
        placement="bottom"
        trigger="hover"
      >
        {props.children}
      </Popover>
    </div>
  )
}