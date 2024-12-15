"use strict";
const newAdmin = {
    name: "Mike",
    permission: ["create", "delete"],
    email: "example@gmail.com",
};
function showCar(car) {
    const year = car.year ? car.year : "";
    console.log(`${car.make} ${car.model} ${car.engine.type} ${car.engine.horsepower} ${year}`);
}
const myCar = {
    make: "BMW",
    model: "X5",
    engine: {
        type: "automatic",
        horsepower: 300,
    },
};
showCar(myCar);
const calculateDiscount = (product, discount) => {
    const priceWithDiscount = product.price - (product.price * discount) / 100;
    return priceWithDiscount;
};
console.log(calculateDiscount({ name: "Laptop", price: 1000 }, 10));
function allSalary(employees) {
    return employees.map((employee) => employee.salary);
}
const employees = [
    {
        name: "Yana",
        salary: 1000,
    },
    {
        name: "Mike",
        salary: 2000,
    },
];
console.log(allSalary(employees));
function printStudentInfo(student) {
    return `${student.firstName} ${student.lastName} ${student.grade}`;
}
const newStudent = {
    firstName: "Kostya",
    lastName: "Ivanov",
    grade: 10,
};
console.log(printStudentInfo(newStudent));
const concatStrings = (str1, str2) => {
    return str1.concat(str2);
};
console.log(concatStrings("hello,", " World"));
