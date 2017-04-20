$(document).ready(function() {
 function showText(target, message, index, interval) {
  if (index < message.length) {
      $(target).append(message[index++]);
      setTimeout(function () { showText(target, message, index, interval); }, interval);
    }
  }
  function displaydata() {
    $(".factdata").removeClass("hidden");
  }

  $(".btn-analysis").click(function(){
  lettergenerator();
  showText("#data1", "....................................", 0, 50),
  showText("#data2", "....................................", 0, 50),
  showText("#data3", "..................................................................", 0, 50),
  showText("#data4", "....................................", 0, 50),
  showText("#data5", "....................................", 0, 50),
  showText("#data6", "...................................................", 0, 50),
  showText("#data7", "....................................", 0, 50),
  showText("#data8", "....................................", 0, 50),
  showText("#data9", ".........................", 0, 50),
  showText("#data10", "....................................", 0, 50),
  showText("#data11", ".........................", 0, 50),
  showText("#data12", "....................................", 0, 50),
  showText("#data13", "....................................", 0, 50),
  setTimeout(displaydata, 2000);
  });

  // Chinese letters generator for loading
  function chineseletter1(){
    $(".datafinder").html("甸畃")
  }
  function chineseletter2(){
    $(".datafinder").html("ЩЮ")
  }
  function chineseletter3(){
    $(".datafinder").html("学校")
  }
  function chineseletter4(){
    $(".datafinder").html("ΦΨ")
  }

  function chineseletter5(){
    $(".datafinder").html("يمِا")
  }
  function lettergenerator(){
    var counter = 0,
        loopCount = 10 //10 times in a  second * 5 seconds
        ;
    function chineseengine() {
        if (++counter >= loopCount) {
            clearInterval(interval);
            $(".datafinder").addClass("hidden");
        }
          setTimeout(function() {
          setTimeout(chineseletter1, 100);
          setTimeout(chineseletter2, 200);
          setTimeout(chineseletter3, 300);
          setTimeout(chineseletter4, 400);
          setTimeout(chineseletter5, 500);
          });
    }
    var interval = setInterval(chineseengine, 200);
  };
});

