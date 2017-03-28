$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    var counter=0;

    $("input:checkbox[name=stress-type]:checked").each(function(){
      counter+=1;
    });

    $("input:checkbox[name=health-symptom]:checked").each(function(){
      counter+=1;
    });

    if (counter<=2) {
      $("#warning-light").show();
    }
     else if (counter === 3 || counter === 4) {
      $("#warning-medium").show();
    }
    else {
      $("#warning-heavy").show();
    }

  });
});
