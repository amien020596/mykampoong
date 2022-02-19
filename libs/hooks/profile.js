import { TABS } from 'components/_Profile/consts/index'
import { createContainer } from 'unstated-next';
import { getAuthData } from 'libs/helpers/auth';
import { useState } from 'react';

function useProfile() {
    const [tabFocus, setTabFocus] = useState(TABS.TOGGLE_PROFILE);
    const [userData, setUserData] = useState(getAuthData() ? getAuthData() : {});
    return {
        tabFocus,
        setTabFocus,
        userData,
        setUserData
    }
}

const ProfileContext = createContainer(useProfile)

export default ProfileContext