document.getElementById("calculateBtn").addEventListener("click", function(){
    let submissions = parseInt(document.getElementById("submissions").value);
    let totalComments = parseInt(document.getElementById("totalComments").value);
    let ownPostComments = parseInt(document.getElementById("ownPostComments").value);
    let selfPromoItems = parseInt(document.getElementById("selfPromoItems").value);
    
    let result = submissions + totalComments;
    result = result - ownPostComments - selfPromoItems;
    result = selfPromoItems / result;

    result = Math.round((result + Number.EPSILON) * 100);
    document.getElementById("result").innerHTML = "Result: " + result + "%";
  });

  document.getElementById("clearBtn").addEventListener("click", function(){
    document.getElementById("submissions").value = "";
    document.getElementById("totalComments").value = "";
    document.getElementById("ownPostComments").value = "";
    document.getElementById("selfPromoItems").value = "";
  });