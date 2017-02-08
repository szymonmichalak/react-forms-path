function isEmailValid(email) {
  // very basic regex, just as an example:
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}

export default isEmailValid
