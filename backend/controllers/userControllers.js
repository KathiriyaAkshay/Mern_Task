const User = require('../models/userModel')
const generateToken = require('../utils/generateToken')

const registerUser = async (req, res, next) => {
  console.log('Inside register.')
  try {
    const { firstname, lastname, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('user already exist.')
    }

    const user = await User.create({
      firstname,
      lastname,
      email,
      password
    })

    console.log(user);
    if (user) {
      res.status(201).json({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        token: generateToken(user._id)
      })
    } else {
      res.status(400)
      throw new Error('Error Occured!')
    }
  } catch (err) {

    next(err)
  }
}

const loginUser = async (req, res, next) => {
    try{
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid Email or Password.')
  }}catch(err){
    next(err);
  }
}

module.exports = { registerUser, loginUser }
