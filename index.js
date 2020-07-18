document.getElementById("calculateBtn").addEventListener("click", function(){
    let submissions = parseInt(document.getElementById("submissions").value);
    let totalComments = parseInt(document.getElementById("totalComments").value);
    let ownPostComments = parseInt(document.getElementById("ownPostComments").value);
    let selfPromoItems = parseInt(document.getElementById("selfPromoItems").value);

    //calculate result
    let result = submissions + (totalComments - ownPostComments);
    result = selfPromoItems / result;
    //round the result
    result*= 100;
    result = result.toFixed(2);
    //calculate how many items till within ratio
    let itemsLeft = (selfPromoItems * 10) - (submissions + totalComments - ownPostComments);

    //print out result
    document.getElementById("result").innerHTML = "Result: " + result + "%";
    if(result > 10) {
      document.getElementById("result").style.color = "red";
    } else {
      document.getElementById("result").style.color = "green";
    }

    //print out items left
    if(itemsLeft > 0) {
      document.getElementById("itemsLeft").innerHTML = "Posts/Comments left to be within the ratio: " + itemsLeft;
    } else {
      document.getElementById("itemsLeft").innerHTML = "Posts/Comments left to be within the ratio: " + '0';
    }
    
  });

  document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("submissions").value = "";
    document.getElementById("totalComments").value = "";
    document.getElementById("ownPostComments").value = "";
    document.getElementById("selfPromoItems").value = "";
  });
