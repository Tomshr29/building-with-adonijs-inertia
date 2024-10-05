/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RegisterController = () => import('#controllers/register_controller')
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', { version: 6 })

router.get('/register', [RegisterController, 'render'])
router.post('/register', [RegisterController, 'execute'])

router.get('/login', async (ctx) => {
  return ctx.inertia.render('auth/login')
})
