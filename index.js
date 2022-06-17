$(".portrait").hide().fadeIn(4000);
$(".about").hide().fadeIn(4000);

function cloud(element){

  $(element).animate({ marginLeft:"+=50px",marginTop:"-=15px"
}, 20000);
  $(element).animate({ marginTop:"+=15px"}, 5000);

  $(element).animate({ marginLeft:"-=50px"}, 20000);

  $(element).animate({ marginLeft:"-=45px",marginTop:"+=15px"
}, 20000);

  $(element).animate({ marginTop:"-=15px"}, 5000);

  $(element).animate({ marginLeft:"+=45px"}, 20000);
}


cloud(".cloud");
cloud("h1");
