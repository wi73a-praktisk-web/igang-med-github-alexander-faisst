//not my own implementation, found it on the interwebs
//copied it several days before we got handed out the actual assignment, so decided to skip the exercise 
//alltogether after having studied this implementation beforehand (for that matter, i've used it for 
//exercise purposes several times already, back in university)

function* fibonacci() { // a generator function
    let [prev, curr] = [0, 1];
    while (true) {
      [prev, curr] = [curr, prev + curr];
      yield curr;
    }
  }

  for (let n of fibonacci()) {
    console.log(n);
    // truncate the sequence at 1000
    if (n >= 1000) {
      break;
    }
  }