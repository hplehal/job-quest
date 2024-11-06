import { emailLogin, signup } from './actions'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function SigninPage({
  searchParams,
}: {
  searchParams: { message: string }
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    return redirect('/user')
  }

  return (
    <div className="h-[calc(100vh-57px)] flex justify-center items-center">
      <div>
        <h3 className="text-5xl font-bold leading-none tracking-tight text-green-teal text-center mb-10">
          Job Quest
        </h3>
        <div className="rounded-lg border border-green-teal bg-card bg-clicked-black text-card-foreground shadow-sm mx-auto max-w-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight text-green-teal">
              Login
            </h3>
            <p className="text-sm text-gray-500">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="flex flex-col gap-4 p-6 pt-0">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <input
                  className="w-full h-8 rounded-md p-2 text-dark-text"
                  id="email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password">Password</label>
                <input
                  className="w-full h-8 rounded-md p-2"
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
              {searchParams.message && (
                <div className="text-sm font-medium text-destructive text-red-300">
                  {searchParams.message}
                </div>
              )}
              <button
                formAction={emailLogin}
                className=" mt-3 w-full h-9 rounded-md text-xl px-8 text-dark-text font-semibold bg-green-teal text-clicked-black hover:bg-green-teal/90"
              >
                Log in
              </button>
              {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
            </form>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <button formAction={signup} className="underline">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
