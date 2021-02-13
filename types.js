function getBoolean () {
  return true
}


function getString () {
  return ''
}

function getNull () {
  return null
}

function getNumber () {
  return 2
}

function getObject () {
  return {}
}

function getFunction () {
  return  function() {

  }
}

module.exports = {
  getBoolean,
  getString,
  getNull,
  getNumber,
  getObject,
  getFunction
}