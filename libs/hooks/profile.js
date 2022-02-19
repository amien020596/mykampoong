import { useState } from 'react';
import { createContainer } from 'unstated-next';
import { TABS } from 'components/_Profile/consts/index'

function useProfile() {
    const [tabFocus, setTabFocus] = useState(TABS.TOGGLE_PROFILE)

    return {
        tabFocus,
        setTabFocus,
    }
}

const ProfileContext = createContainer(useProfile)

export default ProfileContext