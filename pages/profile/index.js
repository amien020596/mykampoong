import Head from 'next/head'
import Layout from 'components/Layout/Public'
import Profile from 'components/_Profile'
import ProfileContext from 'libs/hooks/profile'

export default function ProfilePage() {
    return (
        <ProfileContext.Provider>
            <Head>
                <title>
                    Profile | MyKampoong
                </title>
            </Head>

            <Layout>
                <Profile/>
            </Layout>
        </ProfileContext.Provider>
    )
}