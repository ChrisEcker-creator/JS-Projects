// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1
    // Some data we can work with
   
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
      const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
       let fifteen= inventors.filter((item)=> item.year>=1500 && item.year<1600)
       console.log(fifteen);
      // 1. Filter the list of inventors for those who were born in the 1500's
      let firstlast= inventors.map((item)=>{
          return item.first + ' '+ item.last ;
      } )
      console.log(firstlast);
      // 2. Give us an array of the inventors' first and last names
      let birthdays= inventors.map((item)=> item.year);
      birthdays.sort(function(a, b){return a-b});
      console.log(birthdays);
      // 3. Sort the inventors by birthdate, oldest to youngest

      let sum = inventors.reduce((zero, item)=> {return (item.passed - item.year)+ zero}, 0);
      console.log(sum);
      // 4. How many years did all the inventors live?

        let lived = inventors.map((item)=>{
            return (item.passed- item.year);
        })
        lived.sort(function(a,b){return a-b});
        console.log(lived);
      // 5. Sort the inventors by years lived

      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
      // 7. sort Exercise
      // Sort the people alphabetically by last name
      let peoples= people.sort();
      console.log(peoples);
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

      let x= 0;
      for(let i =0; i <= data.length; i++){
          if(data[i]== "car"){
            x++;
        }
        
      }
      
 

    console.log(`there are ${x} cars in the array`);