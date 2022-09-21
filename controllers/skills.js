import { Skill } from '../models/skill.js'

// function index(req, res) {
//   res.render('skills/index', {
//     skills: skills
//   })
// }
//! replaced by the below:

function index(req, res) {
  Skill.find({})
  .then(skills => { // the skill represents the result of the query, in this case ALL skills
    res.render('skills/index', {
      skills: skills,
    })
  })
  .catch(error => { // If there's an error, console.log it and redirect back home!
    console.log(error)
    res.redirect('/')
  })
}

export {
  index
}
