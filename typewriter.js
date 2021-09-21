const sentence = "hello there from lighthouse labs";
  
  for (const char of sentence) {
    let counter = 0
    setTimeout(() => {
      process.stdout.write(char);
      counter+= 500
  }, (1000+counter))
  }
