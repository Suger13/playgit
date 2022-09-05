let colors = ["red", "green", "blue", "khaki", "orange"];

// Start coding here

//ex1
let blueColor = colors[2];
let fourthColor = colors[3];
let fifthColor = colors[4];
let tenthColor = colors[9];

//ex2
const employees = [
	{
		name: "James",
		age: 40,
		hobbies: ["Football", "Social media"]
	},
	{
		name: "Alex",
		age: 25,
		hobbies: ["Cryptocurrency", "Social media"]
	}
];
// Start coding here
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;
const updateEmployees = [
    {
        name : "Alicia",
        age : 29,
        hobbies : "Shopping, Reading novels"
    },
    {
        name : "Kody",
        age : 19,
        hobbies : "Computer games, Wakeboard"
    }
]

console.log(updateEmployees)


//ex3
let orders = [
    {
      id: 1,
      customerName: "Brenn Hugk",
      productName: "Chocolate - Milk, Callets",
      productPrice: 94690,
      productQuantity: 35,
      creditCardType: "solo",
    },
    {
      id: 2,
      customerName: "Celia Dary",
      productName: "Bread - Pumpernickle, Rounds",
      productPrice: 10746,
      productQuantity: 87,
      creditCardType: "jcb",
    },
    {
      id: 3,
      customerName: "Toinette Blindermann",
      productName: "Bar - Granola Trail Mix Fruit Nut",
      productPrice: 94191,
      productQuantity: 31,
      creditCardType: "switch",
    },
    {
      id: 4,
      customerName: "Anjela Joannet",
      productName: "Cheese - Parmesan Cubes",
      productPrice: 5131,
      productQuantity: 96,
      creditCardType: "diners-club-carte-blanche",
    },
    {
      id: 5,
      customerName: "Kennith Bussons",
      productName: "Wine - White, Pinot Grigio",
      productPrice: 94432,
      productQuantity: 75,
      creditCardType: "jcb",
    },
  ];
  // Start coding here
  let isArray = Array.isArray(orders);
  let creditCardTypeOfBlindermann = orders[2].creditCardType;
  let totalPurchaseOfJoannet = orders[3].productQuantity;
  let totalPurchaseOfDary = orders[1].productPrice * orders[1].productQuantity;

  orders.shift();