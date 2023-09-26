const obj1 = { Nama: 'Putri Kamaliya', NIM: 'F1D22310007' };
const obj2 = { Prodi: 'Teknik Informatika', Semester: '5' };
const obj3 = { Universitas Mataram };
const obj4 = { ...obj1, ...obj2, ...obj3 };

console.log(obj1, obj2, obj3);
console.log(obj2);
console.log(obj3);
console.log(obj4);