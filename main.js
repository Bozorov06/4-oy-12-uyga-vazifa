// 1-10:
//  Obyektlarni tanlash va chiqarish



// 1-Masala: Massivda 3 ta obyekt bor. Har bir obyekt name va age maydoniga ega. Massivdagi birinchi obyektning name qiymatini ekranga chiqaring.
//  Massiv holati:

//  let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];

// console.log(people[0].name);

// Natija: "Ali"






// 2-Masala: Massivda 5 ta obyekt bor. Har bir obyekt id maydoniga ega. Oxirgi obyektning id qiymatini ekranga chiqaring.
//  Massiv holati:

//  let items = [
//   { id: 101 },
//   { id: 102 },
//   { id: 103 },
//   { id: 104 },
//   { id: 105 }
// ];
// console.log(items [items.length - 1].id);

// // Natija: 105


// 3-Masala: 4 ta obyektli massivdagi barcha obyektlarning age qiymatini ekranga chiqaring.
//  Massiv holati:

//  let people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 },
//   { name: "Karim", age: 35 }
// ];

// for (let i = 0; i < people.length; i++) {
//       console.log(people[i].age);
// }




// // Natija: 25, 30, 20, 35


// 4-Masala: 3 ta obyektli massivning 2-obyektidagi city maydonini konsolga chiqaring.
//  Massiv holati:

//  let users = [
//   { name: "Ali", city: "Toshkent" },
//   { name: "Vali", city: "Samarqand" },
//   { name: "Sami", city: "Buxoro" }
// ];

// console.log(users[1].city);

// Natija: "Samarqand"


// 5-Masala: Bir massivda obyektlarning job maydonlari bor. Massivdagi barcha obyektlarning job qiymatlarini chiqaring.
//  Massiv holati:

//  let workers = [
//   { name: "Ali", job: "Dasturchi" },
//   { name: "Vali", job: "O'qituvchi" },
//   { name: "Sami", job: "Haydovchi" }
// ];
// for (let i = 0; i < workers.length; i++) {
//      console.log(workers[i].job);
// }


// // Natija: "Dasturchi", "O'qituvchi", "Haydovchi"


// 6-Masala: 5 ta obyektli massivning 3-obyektidagi salary qiymatini ekranga chiqaring.
//  Massiv holati:

//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 },
//   { name: "Karim", salary: 1500 },
//   { name: "Asad", salary: 1100 }
// ];
// console.log(employees[2].salary);


// // Natija: 900


// 7-Masala: 4 ta obyektli massivning birinchi obyektidagi country qiymatini chiqaring.
//  Massiv holati:

//  let countries = [
//   { country: "Uzbekistan" },
//   { country: "Russia" },
//   { country: "USA" },
//   { country: "China" }
// ];
// console.log(countries[0].country);

// // Natija: "Uzbekistan"


// 8-Masala: 6 ta obyektli massivdagi 5-obyektning status qiymatini ekranga chiqaring.
//  Massiv holati:

//  let orders = [
//   { id: 1, status: "New" },
//   { id: 2, status: "Pending" },
//   { id: 3, status: "Shipped" },
//   { id: 4, status: "Delivered" },
//   { id: 5, status: "Cancelled" },
//   { id: 6, status: "Returned" }
// ];
// console.log(orders[4].status);


// // Natija: "Cancelled"


// 9-Masala: 3 ta obyektli massivning oxirgi obyektidagi phone qiymatini konsolga chiqaring.
//  Massiv holati:

//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" }
// ];
// console.log(contacts[contacts.length-1].phone);

// // Natija: "998903456789"


// 10-Masala: 4 ta obyektli massivdagi barcha obyektlarning email qiymatlarini ekranga chiqaring.
//  Massiv holati:

//  let users = [
//   { name: "Ali", email: "ali@gmail.com" },
//   { name: "Vali", email: "vali@yahoo.com" },
//   { name: "Sami", email: "sami@hotmail.com" },
//   { name: "Karim", email: "karim@outlook.com" }
// ];

// for(let i = 0; i < users.length; i++){
//   console.log(users[i].email);
// }
// // Natija: "ali@gmail.com", "vali@yahoo.com", "sami@hotmail.com", "karim@outlook.com"



// 
//  Obyektlar qiymatini o'zgartirish


// 11-Masala: Massivning birinchi obyektidagi name qiymatini "Alisher" qilib o'zgartiring.
//  Massiv holati:

//  let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];

// users[0].name = 'Alisher'
// console.log(users[0]);

// // O'zgartirilgandan keyin: users[0].name = "Alisher"


// 12-Masala: Oxirgi obyektning status qiymatini "Updated" qilib o'zgartiring.
//  Massiv holati:

//  let tasks = [
//   { id: 1, status: "New" },
//   { id: 2, status: "In Progress" },
//   { id: 3, status: "Pending" }
// ];
// tasks[tasks.length -1].status = 'Uptated'
// console.log(tasks[2]);

// // O'zgartirilgandan keyin: tasks[2].status = "Updated"


// 13-Masala: 3-obyektning salary qiymatini 2000 ga tenglashtiring.
//  Massiv holati:

//  let employees = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 1500 }
// ];
// employees[employees.length -1].salary = 2000
// console.log(employees[2]);
// // O'zgartirilgandan keyin: employees[2].salary = 2000


// 14-Masala: Massivning ikkinchi obyektidagi city qiymatini "Farg'ona" qilib o'zgartiring.
//  Massiv holati:

//  let cities = [
//   { id: 1, city: "Toshkent" },
//   { id: 2, city: "Namangan" },
//   { id: 3, city: "Samarqand" }
// ];
// cities[1].city = "Farg'ona"
// console.log(cities[1]);

// // O'zgartirilgandan keyin: cities[1].city = "Farg'ona"


//15-Masala: 4-obyektning email qiymatini yangi qiymat bilan almashtiring.
//  Massiv holati:

//  let clients = [
//   { name: "Ali", email: "ali@mail.com" },
//   { name: "Vali", email: "vali@mail.com" },
//   { name: "Sami", email: "sami@mail.com" },
//   { name: "Karim", email: "karim@mail.com" }
// ];
// clients[3].email = 'karimjon_yoldashev@mail.com'
// console.log(clients[3]);
 
// // O'zgartirilgandan keyin: clients[3].email = "karim_new@mail.com"




// Albatta, davom ettiraman. Quyida massivlar ichida obyektlar bilan ishlash uchun masalalar sekin-asta qiyinlashib boradigan tarzda tuzilgan.

// 21-30:
// Yangi maydon qo'shish va qiymatni yangilash


// 21-Masala: Massivning birinchi obyektiga yangi status maydonini qo'shing va qiymatini "active" deb belgilang.
//  Massiv holati:

//  let users = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Sami", age: 20 }
// ];
// users[0].status = "active"
// console.log(users[0]);


// users[0].status = "active"


// 22-Masala: Oxirgi obyektga yangi role maydonini qo'shing va qiymatini "admin" qilib belgilang.
//  Massiv holati:

//  let people = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// people[2].role = 'admin'
// console.log(people[2]);


// // people[2].role = "admin"


// 23-Masala: Massivdagi barcha obyektlarga yangi isVerified maydonini qo'shing va qiymatini false qilib belgilang.
//  Massiv holati:

//  let users = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];

// for (let i = 0; i < users.length; i++) {
//   users[i].isverified = false
// }
// console.log(users);


// // Har bir obyekt uchun: users[i].isVerified = false


// 24-Masala: 2-obyektning salary qiymatini 500 ga oshiring.
//  Massiv holati:

//  let workers = [
//   { name: "Ali", salary: 1000 },
//   { name: "Vali", salary: 1200 },
//   { name: "Sami", salary: 900 }
// ];
// workers[1].salary += 500;
// console.log(workers[1]);


// // workers[1].salary += 500


// 25-Masala: 4-obyektning phone qiymatining oxiriga " (updated)" qatorini qo'shing.
//  Massiv holati:

//  let contacts = [
//   { name: "Ali", phone: "998901234567" },
//   { name: "Vali", phone: "998902345678" },
//   { name: "Sami", phone: "998903456789" },
//   { name: "Karim", phone: "998904567890" }
// ];
// contacts[3].phone += " (updated)";
// console.log(contacts[3]);



// // contacts[3].phone += " (updated)"


// 26-Masala: Massivning ikkinchi obyektidagi age qiymatini ikki barobar oshiring.
//  Massiv holati:

//  let people = [
//   { name: "Ali", age: 20 },
//   { name: "Vali", age: 25 },
//   { name: "Sami", age: 30 }
// ];
// people[1].age *= 2;
// console.log(people[1]);


// // people[1].age *= 2


//27- Masala: Oxirgi obyektga yangi joinedAt maydonini qo'shing va qiymatini "2024-07-01" qilib belgilang.
//  Massiv holati:

//  let employees = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// employees[2].joinedAt = "2024-07-01"
// console.log(employees[2]);



// 28-Masala: Massivdagi 1-obyektning name qiymatiga " (CEO)" qo'shimchasini qo'shing.
//  Massiv holati:

//  let team = [
//   { name: "Ali" },
//   { name: "Vali" },
//   { name: "Sami" }
// ];
// team[0].name += " (CEO)"
// console.log(team[0]);



// 29-Masala: 3-obyektning price qiymatini 10% kamaytiring.
//  Massiv holati:

//  let products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// products[2].price *= 0.9
// console.log(products[2]);



// 30-Masala: Barcha obyektlarning isActive qiymatini true qilib o'zgartiring.
//  Massiv holati:

//  let users = [
//   { name: "Ali", isActive: false },
//   { name: "Vali", isActive: false },
//   { name: "Sami", isActive: false }
// ];
// for (let i = 0; i < users.length; i++) {
//   users[i].isActive = true; 
// }
// console.log(users);





// 31-40: 

// Shartli tekshirish va qiymatlar o'zgarishi



// 31. Shartli tekshirish va qiymatlar o'zgarishi
// Masala: Agar 2-obyektning status qiymati "Pending" bo'lsa, uni "Completed" qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", status: "Completed" },
//   { id: 2, name: "Vali", status: "Pending" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];
//   if(data[1].status== "Pending"){
//     data[1].status ='Completed'
//   }
//   console.log(data);
  


// 32. Masala: 1-obyektning age qiymati 30 dan katta bo'lsa, "Senior" degan yangi maydon qo'shing va qiymatini true qiling.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", age: 35 },
//   { id: 2, name: "Vali", age: 25 },
//   { id: 3, name: "Sami", age: 28 }
// ];

// if (data[0].age>30) {
//   data[0].Senior = true
// }
// console.log(data);


// 33. Masala: Oxirgi obyektning price qiymati 100 dan kichik bo'lsa, uni 100 ga tenglashtiring.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", price: 150 },
//   { id: 2, name: "Product2", price: 80 },
//   { id: 3, name: "Product3", price: 60 }
// ];
// if(data[data.length - 1].price<100) {
//   data[data.length-1].price = 100;
// }
// console.log(data);


// 34. Masala: Barcha obyektlarning role qiymatini "user" qilib yangilang, lekin oxirgi obyektning role qiymatini "admin" qilib qo'ying.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", role: "manager" },
//   { id: 2, name: "Vali", role: "guest" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];
// data.map(value=>{
//   return value.role = "user"
// })
// data[2].role = "admin"
// console.log(data);


// 35. Masala: 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Samarqand" qilib o'zgartiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", city: "Buxoro" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];

// let res = data[2]
// if(res.city=='Toshkent'){
//   res.city = 'Samarqand'

// }
// console.log(data);

// 36. Masala: Massivdagi obyektlarning salary qiymati 1000 dan kichik bo'lgan obyektlarga "low" degan yangi maydon qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1200 },
//   { id: 3, name: "Sami", salary: 800 }
// ];

// for (let i = 0; i < data.length; i++) {
//   if (data[i].salary<1000) {
//      data[i].Low = true
//   }
  
// }
// console.log(data);

// 37. Masala: 2-obyektning email qiymati "@gmail.com" bilan tugasa, " (verified)" qo'shimchasini kiriting.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", email: "ali@yahoo.com" },
//   { id: 2, name: "Vali", email: "vali@gmail.com" },
//   { id: 3, name: "Sami", email: "sami@mail.com" }
// ];

// let dataa = data[1]
// if (dataa.email.endsWith("@gmail.com")) {
//   dataa.email += " (verified)"; 
// }
// console.log(data);


// 38. Masala: Oxirgi obyektga yangi lastLogin maydonini qo'shing va qiymatini hozirgi sanaga tenglashtiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].lastLogin = "17.12.2024"
// console.log(data);


// 39. Masala: Agar 1-obyektning stock qiymati 0 bo'lsa, "isAvailable" maydonini false qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", stock: 0 },
//   { id: 2, name: "Product2", stock: 5 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// if(data[0].stock == 0){
//   data[0].isAvailable = false
// }
// console.log(data);


// 40. Masala: Massivdagi har bir obyektning status qiymatini "Inactive" qilib yangilang, lekin birinchi obyektni "Active" qoldiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Active" },
//   { id: 3, name: "Sami", status: "Completed" }
// ];
// data.forEach(value =>{
//   return value.status = "Inactive"
// })
// data[1].status  = "Active"
// console.log(data);


// 41-50:

// Obyektni saralash, tanlash va qiymatlarni tekshirish



// 41. Masala: Massivdagi obyektlarning price qiymati 500 dan katta bo'lgan obyektlarning isExpensive qiymatini true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", price: 600 },
//   { id: 2, name: "Product2", price: 400 },
//   { id: 3, name: "Product3", price: 800 }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].price > 500) {
//      data[i].isExpensive = true
//   }else{
//     data[i].isExpensive = false;
//   }
// }
// console.log(data);



// 42. Masala: 2-obyektning salary qiymati >= 1000 bo'lsa, "High salary" degan yangi maydon qo'shing va qiymatini true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", salary: 900 },
//   { id: 2, name: "Vali", salary: 1000 },
//   { id: 3, name: "Sami", salary: 800 }
// ];
// if (data[1].salary >= 1000) {
//   data[1].highsalary = true;
// }
// console.log(data);



// 43. Masala: Agar 3-obyektning name qiymati "Ali" bo'lsa, "isManager" degan maydon qo'shib, true deb belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Vali", role: "user" },
//   { id: 2, name: "Sami", role: "user" },
//   { id: 3, name: "Ali", role: "guest" }
// ];
// if (data[2].name == 'Ali') {
//   data[2].isManager = true
// }
// console.log(data);



// 44. Masala: Massivda age maydoni 18 dan kichik bo'lgan obyektlar uchun "isUnderage" qiymatini true qilib qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", age: 17 },
//   { id: 2, name: "Vali", age: 20 },
//   { id: 3, name: "Sami", age: 16 }
// ];
// for (let i = 0; i <data.length; i++) {
//   if (data[i].age < 18) {
//     data[i].isUnderage = true
//   }else{
//     data[i].isUnderage = false;
//   }
  
// }
// console.log(data);


// 45. Masala: Massivdagi obyektlar ichidan stock qiymati < 10 bo'lgan obyektlarni aniqlab, "lowStock" qiymatini true qilib qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 15 },
//   { id: 3, name: "Product3", stock: 8 }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].stock <10) {
//     data[i].LowStock = true
//   }else{
//     data[i].LowStock = false;
//   }
  
// }

// console.log(data);

// 46. Masala: 1-obyekt va oxirgi obyektning role qiymatini "guest" qilib o'zgartiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Vali", role: "user" },
//   { id: 3, name: "Sami", role: "supervisor" }
// ];
// data.map(dataa=>{
//   return dataa.role = "guest"
// })
// data[0].role = "admin"
// console.log(data);


// 47. Masala: Agar biror obyektning status qiymati "Pending" bo'lsa, "isPending" degan maydon qo'shib, true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", status: "Pending" },
//   { id: 2, name: "Vali", status: "Completed" },
//   { id: 3, name: "Sami", status: "Pending" }
// ];

// for (let i = 0; i < data.length; i++) {
//   if (data[i].status=="Pending") {
//     data[i].isPending = true
//   }else{
//     data[i].isPending = false;
//   }
// }
// console.log(data);



// 48. Masala: Massivdagi 3-obyektning city qiymati "Toshkent" bo'lsa, uni "Buxoro" qilib almashtiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", city: "Samarqand" },
//   { id: 2, name: "Vali", city: "Namangan" },
//   { id: 3, name: "Sami", city: "Toshkent" }
// ];
// if (data[2].city == "Toshkent") {
//   data[2].city = "Buxoro"
// }
// console.log(data);

// 49. Masala: Oxirgi obyektning score qiymati < 50 bo'lsa, "failed" maydonini qo'shib, qiymatini true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", score: 70 },
//   { id: 2, name: "Vali", score: 90 },
//   { id: 3, name: "Sami", score: 40 }
// ];
// if (data[2].score <50) {
//   data[2].failed = true
// }
// console.log(data);


// 50. Masala: Barcha obyektlarning discount qiymatini 0 qilib belgilang, lekin price qiymati > 1000 bo'lgan obyektlarda "discount" qiymatini 20 qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1500 }
// ];
// for (let i = 0; i < data.length; i++) {
//  if(data[i].price < 1000){
//   data[i].discount = 0;
// }else{
//   data[i].discount = 20;
// }
// }
// console.log(data);


// 51-60:
//  Obyektlarni o'zgartirish va murakkabroq amallar



// 51. Masala: Massivdagi obyektlarning salary qiymatini 10% ga oshiring.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", salary: 1000 },
//   { id: 2, name: "Vali", salary: 1500 },
//   { id: 3, name: "Sami", salary: 2000 }
// ];
// let res = data.map(value=>({...value,salary:value.salary*1.1

// }))
// console.log(res);



// 52. Masala: 2-obyektning name qiymatiga " - employee" qo'shimchasini qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[1].name += "-employee"
// console.log(data);


// 53. Masala: Massivdagi obyektlarning isAvailable maydonini o'zgartirib, stock qiymati > 0 bo'lganlarga true, qolganlarga false qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", stock: 5 },
//   { id: 2, name: "Product2", stock: 0 },
//   { id: 3, name: "Product3", stock: 10 }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].stock > 0) {
//     data[i].isAvailable = true
//   }else{
//      data[i].isAvailable = false;
//   }
  
// }
// console.log(data);


// 54. Masala: Agar birinchi obyektning price qiymati 1000 dan katta bo'lsa, uni 900 ga tushiring.
// Massiv:
// let data = [
//   { id: 1, name: "Product1", price: 1200 },
//   { id: 2, name: "Product2", price: 800 },
//   { id: 3, name: "Product3", price: 1000 }
// ];
// if (data[0].price > 1000) {
//   data[0].price += 900;
// }
// console.log(data);


// 55. Masala: Oxirgi obyektga yangi updatedAt maydonini qo'shing va qiymatini "2024-07-10" qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];

// data[2].updatedAt = "2024-07-10"
// console.log(data);



// 56. Masala: 3-obyektning level qiymatini "Intermediate" deb o'zgartiring, agar mavjud bo'lmasa, qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", level: "Beginner" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].level = "Intermediate";
// console.log(data);


// 57. Masala: Agar biror obyektning score qiymati 80 dan katta bo'lsa, "isTop" qiymatini true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", score: 75 },
//   { id: 2, name: "Vali", score: 85 },
//   { id: 3, name: "Sami", score: 90 }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].score > 80) {
//     data[i].isTop = true
//   }else{
//     data[i].isTop = false
//   }
  
// }
// console.log(data);



// 58. Masala: Massivdagi obyektlardan role qiymati "admin" bo'lgan obyektlarni topib, ularning privileges qiymatini "full" qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", role: "admin" },
//   { id: 2, name: "Vali", role: "user" },
//   { id: 3, name: "Sami", role: "admin" }
// ];
// for (let i = 0; i < data.length; i++) {
//   if (data[i].role == "admin") {
//     data[i].role = "full"
//   }
  
// }
// console.log(data);

// 59. Masala: Oxirgi obyektning name qiymatiga " (completed)" qo'shimchasini qo'shing.
// Massiv:
// let data = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sami" }
// ];
// data[2].name += "(completed)"
// console.log(data);


// 60. Masala: Agar birinchi obyektning isVerified qiymati false bo'lsa, uni true qilib belgilang.
// Massiv:
// let data = [
//   { id: 1, name: "Ali", isVerified: false },
//   { id: 2, name: "Vali", isVerified: true },
//   { id: 3, name: "Sami", isVerified: false }
// ];
// if (data[0].isVerified == false) {
//   data[0].isVerified = true;
// }

// console.log(data);
