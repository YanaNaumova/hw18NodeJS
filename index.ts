type Admin = {
  name: string;
  permission: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const newAdmin: AdminUser = {
  name: "Mike",
  permission: ["create", "delete"],
  email: "example@gmail.com",
};

interface IEngine {
  type: string;
  horsepower: number;
}

interface ICar {
  make: string;
  model: string;
  engine: IEngine;
  year?: number;
}

function showCar(car: ICar): void {
  const year = car.year ? car.year : "";
  console.log(
    `${car.make} ${car.model} ${car.engine.type} ${car.engine.horsepower} ${year}`
  );
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

interface IProduct {
  name: string;
  price: number;
}

interface ICalculateDiscount {
  (product: IProduct, discount: number): number;
}

const calculateDiscount: ICalculateDiscount = (product, discount) => {
  const priceWithDiscount = product.price - (product.price * discount) / 100;
  return priceWithDiscount;
};

console.log(calculateDiscount({ name: "Laptop", price: 1000 }, 10));

interface IEmployee {
  name: string;
  salary: number;
}

function allSalary(employees: IEmployee[]): number[] {
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

interface IPerson {
  firstName: string;
  lastName: string;
}

interface IStudent extends IPerson {
  grade: number;
}

function printStudentInfo(student: IStudent): string {
  return `${student.firstName} ${student.lastName} ${student.grade}`;
}

const newStudent = {
  firstName: "Kostya",
  lastName: "Ivanov",
  grade: 10,
};

console.log(printStudentInfo(newStudent));

interface IConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: IConcatStrings = (str1, str2) => {
  return str1.concat(str2);
};

console.log(concatStrings("hello,", " World"));
