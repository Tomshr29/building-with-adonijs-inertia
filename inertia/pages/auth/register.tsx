import { Link, router } from '@inertiajs/react'
import { useState } from 'react'
import AppHead from '~/components/AppHead'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

export default function Register() {
  const [values] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  function handleSubmit() {
    console.log(values)
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

      <form className="grid gap-3" onSubmit={handleSubmit}>
        <Label className="grid gap-1">
          <span>Full Name</span>
          <Input type="text" name="form.fullName" />
        </Label>

        <Label className="grid gap-1">
          <span>Email</span>
          <Input type="email" name="form.email" />
        </Label>

        <Label className="grid gap-1">
          <span>Password</span>
          <Input type="password" name="form.password" />
        </Label>

        <Button type="submit">Register</Button>
      </form>
    </>
  )
}
