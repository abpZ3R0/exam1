var person = {
  "_id": "61196afdc65576690447a906",
  "index": 108,
  "isActive": true,
  "balance": 8675.11,
  "age": 44,
  "eyeColor": "blue",
  "name": "Cruz Harrell",
  "gender": "male",
  "email": "cruzharrell@isonus.com",
  "tags": ["quis", "sunt", "veniam"],
  "location": {
    "longitude": 95.78477386810204,
    "latitude": 137.7368897364291
  },
  "subordinates": [
    {
      "_id": "61196afd27b4d98a282b3a46",
      "index": 14,
      "isActive": false,
      "balance": 6931.6,
      "age": 51,
      "eyeColor": "brown",
      "name": "Katherine Cohen",
      "gender": "female",
      "email": "katherinecohen@ecraze.com",
      "tags": ["labore", "laboris", "esse", "veniam"],
      "location": {
        "longitude": 98.3622884926526,
        "latitude": 124.73887209781748
      },
      "subordinates": []
    },
    {
      "_id": "61196afd27b4d98a282b3a46",
      "index": 14,
      "isActive": false,
      "balance": 6931.6,
      "age": 51,
      "eyeColor": "brown",
      "name": "natsu dragneel",
      "gender": "male",
      "email": "natsu@dragneel.com",
      "tags": ["labore", "laboris", "esse", "veniam"],
      "location": {
        "longitude": 98.3622884926526,
        "latitude": 124.73887209781748
      },
      "subordinates": [
        {
          name: 'pritom'
        }
      ]
    },
    {
      "_id": "61196afd27b4d98a282b3a46h",
      "index": 14,
      "isActive": false,
      "balance": 6931.6,
      "age": 51,
      "eyeColor": "brown",
      "name": "roronowa soro",
      "gender": "male",
      "email": "roronowa@soro.com",


    }
  ]
}

// return names of all subordinates of person
var example1 = (person) => {
  if(person.subordinates){
    var a = person.subordinates.map(subordinate => {
      return subordinate.name
    })
  }
};
// example1(person);


// return company name from email address
var exercise11 = (email) => {
  // for (var property in person) {
  //   var email1 = person.subordinates[0].email;
  //   var email2 =  person.subordinates[1].email;
  //   var companyName1 = email1.slice((email1.indexOf("@")+1),email1.indexOf("."));
  //   var companyName2 = email2.slice((email2.indexOf("@")+1),email2.indexOf("."));
  //   console.log(companyName1)
  //   console.log(companyName2)
  // }
  var result = '';
  var a = splitter(email, "@");
  if(a.length > 0) {
    var name = a[1];
    var b = splitter(name, ".");
    email = b[0] 
  }
  return result;
};

function splitter(email, seperator){
  var abc =  email.split(seperator);
  return abc;
}

exercise11("cruzharrell@isonus.com")

// given a person, return list of companies of her subordinates
var exercise12 = (person) => {
};
exercise12(person)


// given a person and gender, return number of subordinates of person of given gender
var example2 = (person, gender) => {
  
};
example2(person , "male")

// given a person, return the names of subordinates who themselves have subordinates
var exercise22 = (person) => {

};
exercise22(person)
var a = [5, 4, 3, 2, 1]; // Make it backwords
