const express=require('express');
const app = express()
let foodData = 
[
  {
    "id": 1,
    "foodname": "Apple",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.3,
    "cab": 25
  },
  {
    "id": 2,
    "foodname": "Banana",
    "calorie": 105,
    "category": "Fruit",
    "protiens": 1.3,
    "cab": 27
  },
  {
    "id": 3,
    "foodname": "Orange",
    "calorie": 62,
    "category": "Fruit",
    "protiens": 1.2,
    "cab": 15
  },
  {
    "id": 4,
    "foodname": "Pear",
    "calorie": 95,
    "category": "Fruit",
    "protiens": 0.5,
    "cab": 25
  },
  {
    "id": 5,
    "foodname": "Grapefruit",
    "calorie": 42,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 11
  },
  {
    "id": 6,
    "foodname": "Strawberry",
    "calorie": 46,
    "category": "Fruit",
    "protiens": 1.5,
    "cab": 10
  },
  {
    "id": 7,
    "foodname": "Blueberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.1,
    "cab": 14
  },
  {
    "id": 8,
    "foodname": "Raspberry",
    "calorie": 52,
    "category": "Fruit",
    "protiens": 1.4,
    "cab": 15
  },
  {
    "id": 9,
    "foodname": "Broccoli",
    "calorie": 34,
    "category": "Vegetable",
    "protiens": 3.3,
    "cab": 5
  },
  {
    "id": 10,
    "foodname": "Cauliflower",
    "calorie": 25,
    "category": "Vegetable",
    "protiens": 2.6,
    "cab": 5
  },
  {
    "id": 11,
    "foodname": "Green Beans",
    "calorie": 31,
    "category": "Vegetable",
    "protiens": 2.4,
    "cab": 4
  },
  {
    "id": 12,
    "foodname": "Asparagus",
    "calorie": 20,
    "category": "Vegetable",
    "protiens": 2.2,
    "cab": 2
  },
  {
    "id": 13,
    "foodname": "Spinach",
    "calorie": 23,
    "category": "Vegetable",
    "protiens": 3.5,
    "cab": 4
  },
  {
    "id": 14,
    "foodname": "Kale",
    "calorie": 33,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 7
  },
  {
    "id": 15,
    "foodname": "Sweet Potato",
    "calorie": 103,
    "category": "Vegetable",
    "protiens": 2,
    "cab": 27
  },
  {
    "id": 16,
    "foodname": "Potato",
    "calorie": 161,
    "category": "Vegetable",
    "protiens": 4.3,
    "cab": 37
  },
  {"id": 17,
    "foodname": "Carrot",
    "calorie": 41,
    "category": "Vegetable",
    "protiens": 0.9,
    "cab": 9
  },
  {
    "id": 18,
    "foodname": "Onion",
    "calorie": 40,
    "category": "Vegetable",
    "protiens": 1.4,
    "cab": 9
  },
  {
    "id": 19,
    "foodname": "Egg",
    "calorie": 77,
    "category": "Protein",
    "protiens": 6.3,
    "cab": 0.5
  },
  {
    "id": 20,
    "foodname": "Chicken Breast",
    "calorie": 165,
    "category": "Protein",
    "protiens": 31,
    "cab": 0
  }
]
let time=10;
function timenotation(num)
{
    return num<10? `0${num}`:num;
}
function gettime()
{
    let today=new Date();
    console.log(today);
let hours=timenotation(today.getHours())
let minutes=timenotation(today.getMinutes())
let seconds=timenotation(today.getSeconds())
time=`${hours}:${minutes}:${seconds}`
return time;
}
let veges=[];
for(let i=0; i<foodData.length; i++)
{
    if(foodData[i].category==="Vegetable")
    {
        veges.push(foodData[i]);
    }
}
let fruits=[]
for(let i=0; i<foodData.length; i++)
{
    if(foodData[i].category==="Fruit")
    {
        fruits.push(foodData[i]);
    }
}
let proteinfood=[]
for(let i=0; i<foodData.length; i++)
{
    if(foodData[i].category==="Protein")
    {
        proteinfood.push(foodData[i]);
    }
}
let calabove100=[]
for(let i=0; i<foodData.length; i++)
{
    if(foodData[i].calorie>100)
    {
        calabove100.push(foodData[i]);
    }
}
let calbelow100=[]
for(let i=0; i<foodData.length; i++)
{
    if(foodData[i].calorie<100)
    {
        calbelow100.push(foodData[i]);
    }
}
app.get('/', (req, res)=>{res.send('This is the root route')})
app.get('/health-api', (req, res)=>{res.send( { time: gettime(), app: "express-server", status: 'active' })})
app.get('/all', (req, res)=>{res.json(foodData)})
app.get('/vegetable', (req, res)=>{res.json(veges)})
app.get('/fruit',(req, res)=>{res.json(fruits)})
app.get('/protein',(req, res)=>{res.json(proteinfood)})
app.get('/calorie-above-100',(req, res)=>{res.json(calabove100)})
app.get('/calorie-below-100',(req, res)=>{res.json(calbelow100)})
app.listen(5500, ()=> {})