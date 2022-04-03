import { Auth, Button, IconLogOut } from '@supabase/ui'
import { ReactNode } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { client } from '../libs/supabase'
import { LayoutErrorBoundary } from './LayoutErrorBoundary'

type Props = {
  children: ReactNode
}

export const AuthLayout = ({ children }: Props) => {
  const { user } = Auth.useUser()

  return (
    <div className={'bg-gray-300'}>
      <div
        className={
          'container mx-auto grid grid-rows-[auto,1fr,auto] min-h-screen'
        }
      >
        <Header />
        <main className={'px-4 text-gray-600 bg-gray-100'}>
          <LayoutErrorBoundary>
            {user ? (
              <div>
                <div>{children}</div>
                <div className={'flex justify-end mx-2 my-4'}>
                  <Button
                    size={'medium'}
                    icon={<IconLogOut />}
                    onClick={() => client.auth.signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            ) : (
              <div className={'flex justify-center pt-8'}>
                <div className={'w-full sm:w-96'}>
                  <Auth
                    supabaseClient={client}
                    providers={['github']}
                    socialColors={true}
                  />
                </div>
              </div>
            )}
          </LayoutErrorBoundary>
        </main>
        <Footer />
      </div>
    </div>
  )
}
