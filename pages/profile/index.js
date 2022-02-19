import Head from 'next/head'
import Layout from 'components/Layout/Public'
import MetaHead from 'components/_Meta/MetaHead'
import Profile from 'components/_Profile'
import ProfileContext from 'libs/hooks/profile'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common']))
        },
    }
}
export default function ProfilePage() {
    return (
        <ProfileContext.Provider>
            <MetaHead description="Profile" title={"Profile | MyKampoong"} />
            <Layout>
                <Profile />
            </Layout>
        </ProfileContext.Provider>
    )
}