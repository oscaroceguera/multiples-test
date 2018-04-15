function multiplesEasySoluction () {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('Linianos')
    } else if (i % 3 === 0) {
      console.log('Linio')
    } else if (i % 5 === 0) {
      console.log('IT')
    } else {
      console.log(i)
    }
  }
}

module.exports = multiplesEasySoluction
