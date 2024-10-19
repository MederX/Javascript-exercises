document.getElementById('showDateTimeButton').addEventListener('click', function() {
    const currentDate = new Date();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1; 
    var day = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var formattedDate = day + "/" + month + "/" + year;
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById('result').textContent = "Current Date and Time: " + formattedDate+", "+formattedTime;
});



