function task4() {
  var arr = new Array();
  arr[0] = "Shefkay"
  arr[1] = "Sir System"
  helloSpeaker(arr);
  byeSpeaker(arr)
}

function helloSpeaker(data) {
  for (var i = 0; i <= data.length - 1; i++) {
    if (!(data[i].charAt(0) == "J" || data[i].charAt(0) == "j")) {
      console.log("Hello " + data[i])
    }
  }
}
function byeSpeaker(data) {
  for (var i = 0; i <= data.length - 1; i++) {
    if (data[i].charAt(0) === 'J' || data[i].charAt(0) === "j") {
      console.log("Good Bye " + data[i])
    }
  }
}
task4();