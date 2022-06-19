const obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
}

const arr = [1, 2, [22], 23]

function cloneFn(obj) {
  if (typeof obj !== 'object' && typeof obj != null) return obj
  const temp = Array.isArray(obj) ? [] : {}
  if (Array.isArray(temp)) {
    obj.forEach(item => { 
      if (Array.isArray(item)) {
        cloneFn(item)
      } else {
        temp.push(item)
      }
    })
  }
  return temp
}