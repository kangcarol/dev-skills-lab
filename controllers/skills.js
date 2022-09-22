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

function newSkill(req,res){
  res.render("skills/new")
}

function create(req,res){
  Skill.create(req.body)
  .then(skill => {
    console.log(skill)
    res.redirect('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function show(req, res){
  Skill.findById(req.params.id)
  .then(skill =>{
    res.render('skills/show',{
      skill: skill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

function deleteSkill(req, res){
  Skill.findById(req.params.id)
  .then(skill =>{
    res.render('/skills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/skills')
  })
}

export {
  index,
  newSkill as new,
  create,
  show,
  deleteSkill as delete,
}
