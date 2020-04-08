function func() {
  let t = [5,4,3,2,1,0]
  for(let i=0; i<=3; i++) {
    for(let j=1; j<=4-i; j++) {
      if(t[j-1] > t[j] && t[j] > t[j+1]) {
        [t[j-1], t[j+1]] = [t[j+1], t[j-1]]
      }
    }
    console.log(t)
  }
}

func()