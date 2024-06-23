let people = document.getElementById("people");
let people_less = document.getElementById("people_less");
let people_more = document.getElementById("people_more");

let people_index = 4;

//  less and more functions

people_less.addEventListener("click", () => {
  people_index -= 1;

  if (people_index <= 0) {
    people_index = 1;
    people.value = people_index + " People";
  } else {
    people.value = people_index + " People";
  }
});

people_more.addEventListener("click", () => {
  people_index += 1;

  if (people_index >= 4) {
    people_index = 4;
    people.value = people_index + " People";
  } else {
    people.value = people_index + " People";
  }
});

// CHECKIN / CHECKOUT

let checkIn = document.getElementById("checkIn");
let checkOut = document.getElementById("checkOut");
let checkInData = document.getElementById("checkInData");
let checkOut_Data = document.getElementById("checkOut_Data");



// CHECK IN 
checkIn.addEventListener("change", () => {
  let checkIn_Value = checkIn.value;

  let Dates = new Date(checkIn_Value);
  let Dates2 = new Date();
  const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = Week[Dates.getDay()];
  let date = checkIn_Value.slice(8, 10);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[Dates.getMonth()];
  if (Dates < Dates2) {
    alert("cannot take the previous date");
  } else {
    checkInData.innerText = day + "," + date + "," + month;
  }
});



// CHECKOUT


checkOut.addEventListener("change", () => {
    let checkOut_Value = checkOut.value;
    let checkIn_Value = checkIn.value;
  
    let dates = new Date(checkOut_Value);
    let dates2 = new Date(checkIn_Value);
    const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = Week[dates.getDay()];
    let date = dates.getDate();
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let month = months[dates.getMonth()];
    if (dates < dates2) {
      alert("cannot take the previous date");
    } else {
        console.log( day + "," + date + "," + month);
       checkOut_Data.innerText  = day + ', ' + date + ' ' + month;
    } 
  });
 


//   checking 


let checkin_less = document.getElementById('checkin_less');
let checkin_more =document.getElementById('checkin_more');
let out_less = document.getElementById('out_less');
let out_more = document.getElementById('out_more');


//  check ing less

checkin_more.addEventListener('click',()=>{
    const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let today = new Date();
      let tomorrow = new Date(today);

      tomorrow.setDate(tomorrow.getDate()+1);

      let day = Week[tomorrow.getDay()];
      let date = tomorrow.getDate();
      let month= months[tomorrow.getMonth()];

      checkInData.innerText = day + "," + date + "," + month;

});

// check ing less


checkin_less.addEventListener('click',()=>{
    const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let today = new Date();
      let day = Week[today.getDay()];
      let date = today.getDate();
      let month= months[today.getMonth()];
      checkInData.innerText = day + "," + date + "," + month;
});




// checkout

out_more.addEventListener('click',()=>{
    const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let today = new Date();
      let tomorrow = new Date(today);
       tomorrow.setDate(tomorrow.getDate()+2);
      let day = Week[tomorrow.getDay()];
      let date = tomorrow.getDate();
      let month= months[tomorrow.getMonth()];
      checkOut_Data.innerText = day + "," + date + "," + month;
});






out_less.addEventListener('click',()=>{
    const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      let today = new Date();
      let tomorrow = new Date(today);


      tomorrow.setDate(tomorrow.getDate()+1);
      let day = Week[tomorrow.getDay()];
      let date = tomorrow.getDate();
      let month= months[tomorrow.getMonth()];
      checkOut_Data.innerText = day + "," + date + "," + month;
});



//  slider 


const image = [
    'url(img/point.jpg) no-repeat center/cover',
    'url(img/another.jpg) no-repeat center/cover',
     'url(img/liver.jpg) no-repeat center/cover',
     'url(img/person.jpg) no-repeat center/cover',
     'url(img/sasha.jpg) no-repeat center/cover'
];

let index =1;

let h6= document.getElementById('H6');
h6.innerText = '+' + image.length;


let btnleft = document.getElementById('btn-left');
let btnright = document.getElementById('btn-right');
let style = document.getElementsByClassName('content')[0].style;


btnleft.addEventListener('click',()=>{
    index-=1;
    if(index < 0){
      index = (image.length) -1;

    }

    style.setProperty('--background',image[index])

});


btnright.addEventListener('click',()=>{
  index ++;

  if(index > (image.length)-1) {
    index = 0;

  }

  style.setProperty('--background',image[index])

})



