import './style.css'
var hand = $( "#hand2" )
const handELement = document.getElementById("hand2");
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