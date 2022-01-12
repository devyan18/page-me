import Head from 'next/head'
import GoogleIcon from 'components/layout/icons/GoogleIcon'
import GithubIcon from 'components/layout/icons/GitHubIcon'
import useUser, { USER_STATES } from 'hooks/useUser'
import { useEffect } from 'react'
import { loginWithGitHub, loginWithGoogle } from 'firebase_client/client'
import { useRouter } from 'next/router'


export default function Home() {

  const user = useUser()
  const router = useRouter()

  const handleClickOnGitHub = () => {
    loginWithGitHub()
      .catch(e => console.error(e))
  }

  const handleClickOnGoogle = () => {
    loginWithGoogle()
      .catch(e => console.error(e))
  }

  useEffect(() => { 
    user && router.replace('/screens')
  }, [user, router])


  return (
    <div className='screen-layout'>
      <Head>
        <title>PM - Home</title>
        <meta name="description" content="This is the home page for the application Pages me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='w-screen h-screen overflow-hidden'>
        <div className='grid h-screen place-items-center'>
          <div className='container-auth'>
            <div className='text-center'>
              <h1 className='text-2xl'>Welcome to <span className='text-blue-500'>Pages - me</span></h1>
              <h2 className='text-1xl'>Please login to use the application</h2>
            </div>
            <div>
              {
                user === USER_STATES.NOT_LOGGED &&
                <>
                  <button
                    className="login-with-github-btn"
                    onClick={handleClickOnGitHub}
                    >
                    <GithubIcon fill='#fff' width={24} height={24} /> Login with GitHub
                  </button>
                  <button
                    className="login-with-google-btn"
                    onClick={handleClickOnGoogle}
                    >
                    <GoogleIcon width={32} height={32}/> Login with Google
                  </button>
                </>
              }
              {
                user === USER_STATES.NOT_KNOW && <div className='spinner'></div>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
