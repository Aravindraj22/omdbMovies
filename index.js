


// console.log(ip1);
// console.log(ip2);
// console.log(email);

function fetchrecord() {
    let ip1=document.getElementById('ip1').value;
let ip2=document.getElementById('ip2').value;
let email=document.getElementById('email').value;
// let submit=document.getElementById('submit');
//     let users =[
//      {
//         firstname:`${ip1}`,
//         Secondname:`${ip2}`,
//         email:`${email}`
//     } 
// ]

console.log(ip1);
console.log(ip2);
console.log(email);


    let tbody = document.getElementById('tbody');
    tbody.innerHTML= 
                `
            <tr>
                <td>${ip1}</td>
                <td>${ip2}</td>
                <td>${email}</td>
            </tr>
            `




    // console.log(users[0].firstname);
    // console.log(users); 
    // for (let user of users) {
    //     tbody.innerHTML+= 
    //         `
    //     <tr>
    //         <td>${user.firstname}</td>
    //         <td>${user.Secondname}</td>
    //         <td>${user.email}</td>
    //     </tr>
    //     `
   // }
}