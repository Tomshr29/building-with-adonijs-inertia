import { registerValidator } from '#validators/auth'
import type { HttpContext } from '@adonisjs/core/http'

export default class RegisterController {
  render({ inertia }: HttpContext) {
    return inertia.render('auth/register')
  }

  async execute({ request, response }: HttpContext) {
    const data = await request.validateUsing(registerValidator)
    console.log(data)
    response.redirect().back()
  }
}
