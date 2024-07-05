const entities_city = [
   {city: 'Rostov-on-Don LCD admiral'},
   {city: 'Sochi Thieves'},
   {city: 'Rostov-on-Don Patriotic'}
]

const entities_area = [
   {area: '81 m2'},
   {area: '105 m2'},
   {area: '93 m2'}
]

const entities_time = [
   {time: '3,5 mounths'},
   {time: '4 mounths'},
   {time: '3 mounths'}

]

const city = document.querySelector('.city');
const area = document.querySelector('.area');
const time = document.querySelector('.time');

const setEntity = (index) => {
   city.innerText = entities_city[index].city
   area.innerText = entities_area[index].area
   time.innerText = entities_time[index].time
 }

 let currentIndex = 0


window.addEventListener("load", function()
{
document.getElementById("nz").addEventListener("click", nz);
document.getElementById("vp").addEventListener("click", vp);

document.getElementById("slide1").addEventListener("click", slide1);
document.getElementById("slide2").addEventListener("click", slide2);
document.getElementById("slide3").addEventListener("click", slide3);
});

let i=1;

function slide1 () {
   document.getElementById("slide").src="img/slide1.png";
   city.innerText = entities_city[1].city
   area.innerText = entities_area[1].area
   time.innerText = entities_time[1].time
}
function slide2 () {
   document.getElementById("slide").src="img/slide2.png";
   city.innerText = entities_city[2].city
   area.innerText = entities_area[2].area
   time.innerText = entities_time[2].time
}
function slide3 () {
   document.getElementById("slide").src="img/slide3.png";
   city.innerText = entities_city[3].city
   area.innerText = entities_area[3].area
   time.innerText = entities_time[3].time
}

function nz()
{
if(i>1)
   {
   i--;
   document.getElementById("slide").src="img/slide"+i+".png";
   }
else
   {
   i=3;
   document.getElementById("slide").src="img/slide"+i+".png";
   }

   setEntity(currentIndex - 1);
   currentIndex -= 1;
}

function vp()
{
if(i<3)
   {
   i++;
   document.getElementById("slide").src="img/slide"+i+".png";
   }
else
   {
   i=1;
   document.getElementById("slide").src="img/slide"+i+".png";
   }
   setEntity(currentIndex + 1);
   currentIndex += 1;
}