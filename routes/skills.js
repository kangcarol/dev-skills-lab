import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

// EVERY route in this file implictly starts with /skills

/* GET skills listing. */
// localhost:3000/skills
router.get('/', skillsCtrl.index)
// router.get('/', function(req, res) {
//   res.send('respond with a resource')
// })

// POST - localhost:3000/skills/new
router.get('/new', skillsCtrl.new)

router.get('/:id', skillsCtrl.show)

router.post('/', skillsCtrl.create)

export {
  router
}
