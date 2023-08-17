var xmlHttp;

function srvTime() {
    try {
        // FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    } catch (err1) {
        // IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        } catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            } catch (eerr3) {
                // AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD', window.location.href.toString(), false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

function logServerTime() {
    var st = srvTime();
    var date = new Date(st);
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    // 시간, 분, 초, 밀리세컨드가 한 자리수일 경우 앞에 0을 추가합니다.
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;

    // console.log(date.parse())
    console.log(`서버 타임: ${hours}시 ${minutes}분 ${seconds}초 ${milliseconds}밀리세컨드`);
}

// Run logServerTime every 0.01 seconds
setInterval(logServerTime, 10);