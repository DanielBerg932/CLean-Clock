let hoursid = document.getElementById('hours');
let minutesid = document.getElementById('minutes');
let secondsid = document.getElementById('seconds');
let miliid=document.getElementById('mili')


setInterval(function()
{
    var today= new Date;
    var hours=today.getHours(); 
    var minutes=today.getMinutes();
    var seconds= today.getSeconds();
    var mili=today.getMilliseconds();
    if (hours<10)
        {
            hours='0'+today.getHours();
        } 
        if (minutes<10)
        {
            minutes='0'+today.getMinutes();
        } 
        if (seconds<10)
        {
            seconds='0'+today.getSeconds();
        }  
        if (mili<100)
        {
            mili='0'+today.getSeconds();
        }
		if (mili<10)
		{
            mili='00'+today.getSeconds();
        }
			
    hoursid.textContent=hours;
    minutesid.textContent=minutes
    secondsid.textContent=seconds;
    miliid.textContent=mili;

},1);
