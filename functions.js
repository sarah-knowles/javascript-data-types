//filter, find, map

function find (arr, func) {
  for(let item of arr) {
    if(func(item)) {
      return item
    }
  }
}

function filter (arr, func) {
  let newArr = []
  for(let item of arr) {
    if(func(item)) {
     newArr.push(item)
    }
  }
  return newArr
}


function map (arr, func) {
  let newArr = []
  for(let item of arr) {
    newArr.push(func(item))
  }
  return newArr
}

module.exports = {
  find,
  filter,
  map
}