import { Link, useForm } from '@inertiajs/react'
import type { FormEvent } from 'react'
import AppHead from '~/components/AppHead'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Register() {
  const { data, setData, post, errors } = useForm({
    fullName: '',
    email: '',
    password: '',
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    post('/register')
  }

  return (
    <>
      <AppHead
        title="Register"
        description="Start plotting and planning your courses with ease by creating your PlotMyCourse account today"
      />

      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Register</h1>
        <p className="text-sm text-muted-foreground">
          <Link href="/login">Have an account? Login</Link>
        </p>
      </div>

      <form className="grid gap-3" onSubmit={submit}>
        <div className="grid gap-1">
          <Label className="grid gap-1">
            <span>Full Name</span>
            <Input
              type="text"
              value={data.fullName}
              onChange={(e) => setData('fullName', e.target.value)}
            />
          </Label>
          {errors.fullName && <div className="text-red-500 text-sm">{errors.fullName}</div>}
        </div>

        <div className="grid gap-1">
          <Label className="grid gap-1">
            <span>Email</span>
            <Input
              type="email"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
            />
          </Label>
          {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
        </div>

        <div className="grid gap-1">
          <Label className="grid gap-1">
            <span>Password</span>
            <Input
              type="password"
              value={data.password}
              onChange={(e) => setData('password', e.target.value)}
            />
          </Label>
          {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
        </div>

        <Button type="submit">Register</Button>
      </form>
    </>
  )
}
