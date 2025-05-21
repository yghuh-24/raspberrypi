function ledOn() {
  console.log("led 켜짐~");
  var ref = database.ref("led");
  ref.update({ led: 1 })
}

function ledOff() {
  console.log("led 꺼짐~");
  var ref = database.ref("led");
  ref.update({ led: 0 })
}

var config = {
    apiKey: "AIzaSyD4F7m6gjCQZzBr2-92sb0RydXcA-ZEeM8",
    authDomain: "myweb-4614f.firebaseapp.com",
    databaseURL: "https://myweb-4614f-default-rtdb.firebaseio.com",
    projectId: "myweb-4614f",
    storageBucket: "myweb-4614f.firebasestorage.app",
    messagingSenderId: "1094920917640",
    appId: "1:1094920917640:web:547159711c8b389767c53d"
}

//firebase 데이터베이스 정보 가져오기
firebase.initializeApp(config);
database = firebase.database();

var ref = database.ref("led");
ref.on("value", gotData);

function gotData(data) {
  var val = data.val();

  if (val.led == 0) {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 꺼짐";
    document.getElementById("img").src = "ledoff.png";
  }
  else {
    //document.getElementById("ledstatus").innerHTML = "led가 현재 켜짐";
    document.getElementById("img").src = "ledon.png";
  }

  console.log(val)
}