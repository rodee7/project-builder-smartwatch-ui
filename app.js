var smallClock = document.getElementById("smallclock")
var largeClock = document.getElementById("largeclock")
var watchDay =  document.getElementById("day")

function smartWatch()
{
    var watchDate = new Date()
    var smartClock = watchDate.getHours()+":"+watchDate.getMinutes()
    var day = watchDate.getDay()
    var weekday;

    smallClock.innerText = smartClock
    largeClock.innerText = smartClock
    watchDay.innerText = weekday

    switch(day)
    {
        case 0:
            weekday = "Sunday"
            break;
        case 1:
            weekday = "Monday"    
            break;
        case 2:
            weekday = "Tuesday"
            break;
        case 3:
            weekday = "Wednesday"    
            break;
        case 4:
            weekday = "Thursday"    
            break;
        case 5:
            weekday = "Friday"
            break;
        case 6:
            weekday = "Saturday"    
            break;        
        default:
            weekday = ""
    }        
    watchDay.innerText = weekday   
    }

window.onload = function () {
    smartWatch();
  };