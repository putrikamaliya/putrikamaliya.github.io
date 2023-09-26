var arr = ['apple', 'banana', 'cherry', 'date'];

// Menggunakan for loop untuk mengakses elemen-elemen array
for (var i = 0; i < arr.length; i++) {
  var elem = arr[i];
  console.log(`Elemen ke-${i + 1}: ${elem}`);
}

// Menggunakan forEach() untuk melakukan iterasi pada array
arr.forEach(function (elem, index) {
  console.log(`Elemen ke-${index + 1}: ${elem}`);
});

// Menggunakan for...of (hanya berlaku untuk var dalam konteks tertentu)
var counter = 1;
for (var elem of arr) {
  console.log(`Elemen ke-${counter}: ${elem}`);
  counter++;
}

// Menggunakan for...in (lebih cocok untuk objek, hindari untuk array)
for (var index in arr) {
  var elem = arr[index];
  console.log(`Elemen ke-${parseInt(index) + 1}: ${elem}`);
}
