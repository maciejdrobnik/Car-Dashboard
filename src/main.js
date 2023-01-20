import './style.css'
var hand = $( "#hand2" )
var handobroty = $( "#hand" )
var handoFuel = $( "#handFuel" )
const handELement = document.getElementById("hand2");
const handELementObroty = document.getElementById("hand");
const handELementFuel = document.getElementById("handFuel");

$( "#accelerate" ).click(function() {
  const angle = getCurrentRotation(handELement);
  console.log(angle);
  if (angle < 0 || angle > 18){
      $({deg:angle}).animate(
          {deg:angle+18},
          {
            duration: 500,
            step:function(now) {
                $(hand).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }
      )
  } else {
    $({deg:angle}).animate(
      {deg:18},
      {
        duration: 500,
        step:function(now) {
            $(hand).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  }
});


$( "#brake" ).click(function() {
  const angle = getCurrentRotation(handELement);
  console.log(angle);
  if (angle < 162 || angle > 180){
      $({deg:angle}).animate(
          {deg:angle-18},
          {
            duration: 500,
            step:function(now) {
                $(hand).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }
      )
  } else {
    $({deg:angle}).animate(
      {deg:162},
      {
        duration: 500,
        step:function(now) {
            $(hand).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  }
});


  $( "#accelerateobroty" ).click(function() {
    const angle = getCurrentRotation(handELementObroty);
    if (angle < 0 || angle > 18){
        $({deg:angle}).animate(
            {deg:angle+18},
            {
              duration: 500,
              step:function(now) {
                  $(handobroty).css({ transform: 'rotate(' + now + 'deg)' });
              }
            }
        )
    } else {
      $({deg:angle}).animate(
        {deg:18},
        {
          duration: 500,
          step:function(now) {
              $(handobroty).css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
    )
    }
  });


$( "#brakeobroty" ).click(function() {
  const angle = getCurrentRotation(handELementObroty);
  console.log(angle);
  if (angle < 162 || angle > 180){
      $({deg:angle}).animate(
          {deg:angle-18},
          {
            duration: 500,
            step:function(now) {
                $(handobroty).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }
      )
  } else {
    $({deg:angle}).animate(
      {deg:162},
      {
        duration: 500,
        step:function(now) {
            $(handobroty).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  }
});


$( "#fuelUp" ).click(function() {
  const angle = getCurrentRotation(handELementFuel);
  if (angle <= 0  || angle > 290){
      $({deg:angle}).animate(
          {deg:angle-18},
          {
            duration: 500,
            step:function(now) {
                $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });
            }
          }
      )
      checkFuel(angle-18);
  } else {
    $({deg:angle}).animate(
      {deg:270},
      {
        duration: 500,
        step:function(now) {
            $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  checkFuel(270)
  }
});

$( "#fuelDown" ).click(function() {
  const angle = getCurrentRotation(handELementFuel);
  if (angle >= 270 && angle < 340) {
      $({deg:angle}).animate(
          {deg:angle+18},
          {
            duration: 500,
            step:function(now) {
                $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });         
            }
          }
      )
      checkFuel(angle+18);
  } else if(angle !== 0){
    $({deg:angle}).animate(
      {deg:360},
      {
        duration: 500,
        step:function(now) {
            $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });
            checkFuel(now);
        }
      }
  )
  checkFuel(360);
  }
});

$( "#fuelFull" ).click(function() {
  const angle = getCurrentRotation(handELementFuel);
  if(angle === 0){
    $({deg:angle}).animate(
      {deg:-90},
      {
        duration: 500,
        step:function(now) {
            $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  checkFuel(270);
  }
  else if(angle !== -90 && angle !== 270){
    $({deg:angle}).animate(
      {deg:270},
      {
        duration: 500,
        step:function(now) {
            $(handFuel).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
  )
  }
});
$( "#lightsOnOff" ).click(function() {
  if($("#lights").css('opacity') == 1){
    $("#lights").css('opacity', '0.3');
  }
  else{
    $("#lights").css('opacity', '1'); 
  }
  
})

$( "#boxOnOff" ).click(function() {
  if($("#box").css('opacity') == 1){
    $("#box").css('opacity', '0.3');
  }
  else{
    $("#box").css('opacity', '1');
  }
})

$( "#oilOnOff" ).click(function() {
  if($("#oil").css('opacity') == 1){
    $("#oil").css('opacity', '0.3');
  }
  else{
    $("#oil").css('opacity', '1');
  }
})

$( "#pasyOnOff" ).click(function() {
  if($("#pasy").css('opacity') == 1){
    $("#pasy").css('opacity', '0.3');
  }
  else{
    $("#pasy").css('opacity', '1');
  }
})

let leftInterval;
let rightInterval;

$( "#turnLeft" ).click(function() {
  if(rightInterval){
    clearInterval(rightInterval);
    $("#rightTurn").css('opacity', '0.3');
    rightInterval = undefined;
  }
  if(leftInterval){
    clearInterval(leftInterval);
    leftInterval = undefined;
    $("#leftTurn").css('opacity', '0.3');
  }
  else leftInterval = setInterval(turnLeft, 1000);
})

$( "#turnRight" ).click(function() {
  if(leftInterval){
    clearInterval(leftInterval);
    leftInterval = undefined;
    $("#leftTurn").css('opacity', '0.3');
  }
  if(rightInterval){
    clearInterval(rightInterval);
    rightInterval = undefined;
    $("#rightTurn").css('opacity', '0.3');
  }
  else rightInterval = setInterval(turnRight, 1000);
})

$( "#emergencySwitch" ).click(function() {
  if(leftInterval && rightInterval){
    clearInterval(rightInterval);
    rightInterval = undefined;
    $("#rightTurn").css('opacity', '0.3');
    clearInterval(leftInterval);
    leftInterval = undefined;
    $("#leftTurn").css('opacity', '0.3');
  }
  else{
    if(!leftInterval){
      leftInterval = setInterval(turnLeft, 1000);
    }
    if(!rightInterval){
      rightInterval = setInterval(turnRight, 1000);
    }
  }
});

function turnLeft(){
  if($("#leftTurn").css('opacity') == 1){
    $("#leftTurn").css('opacity', '0.3');
  }
  else{
    $("#leftTurn").css('opacity', '1');
  }
}

function turnRight(){
  if($("#rightTurn").css('opacity') == 1){
    $("#rightTurn").css('opacity', '0.3');
  }
  else{
    $("#rightTurn").css('opacity', '1');
  }
}

function checkFuel(angle) {
  if(angle === 0 || angle >= 330){
    if($("#iconFuel").css('opacity') !== "1"){
      $("#iconFuel").css('opacity', '1');
    }
  }
  else if(angle <= 330 && angle > 0) {
    console.log(angle);
    if($("#iconFuel").css('opacity') === "1"){
      $("#iconFuel").css('opacity', '0.3');
    }
  }

}

function getCurrentRotation(el){
  var st = window.getComputedStyle(el, null);
  var tm = st.getPropertyValue("-webkit-transform") ||
           st.getPropertyValue("-moz-transform") ||
           st.getPropertyValue("-ms-transform") ||
           st.getPropertyValue("-o-transform") ||
           st.getPropertyValue("transform") ||
           "none";
  if (tm != "none") {
    var values = tm.split('(')[1].split(')')[0].split(',');
    var angle = Math.round(Math.atan2(values[1],values[0]) * (180/Math.PI));
    return (angle < 0 ? angle + 360 : angle); //adding 360 degrees here when angle < 0 is equivalent to adding (2 * Math.PI) radians before
  }
  return 0;
}