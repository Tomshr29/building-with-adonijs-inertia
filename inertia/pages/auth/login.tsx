import { Link } from '@inertiajs/react'
import AppHead from '~/components/AppHead'
import UtilityService from '#services/utility_service'

export default function Login() {
  return (
    <>
      <AppHead title="Login" description="Login to your PlotMyCourse account" />

      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login - {UtilityService.someMethod()}
        </h1>
        <p className="text-sm">
          <Link href="/register">Need an account? Register</Link>
        </p>
      </div>
    </>
  )
}
