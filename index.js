function clock() { 
  var mo = moment(),
      s = mo.second() * 6,
      m = mo.minutes() * 6,
      h = mo.hours() % 12 / 12 * 360 + (m / 12);
  
  $(".hour").css("transform", "rotate(" + h + "deg)");
  $(".minute").css("transform", "rotate(" + m + "deg)");
  $(".second").css("transform", "rotate(" + s + "deg)");
}
function refreshClock() {
  clock(), setTimeout(refreshClock, 100)
}

refreshClock();