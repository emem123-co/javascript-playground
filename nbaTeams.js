const nbaTeams = [
     {
       name: "Los Angeles Lakers",
       division: "Pacific",
       arena: {
         name: "Crypto.com Arena",
         address: {
           street: "1111 S Figueroa St",
           city: "Los Angeles",
           state: "CA",
           zip: "90015",
         },
       },
       players: [
         {
           firstName: "LeBron",
           lastName: "James",
           stats: {
             pointsPerGame: 27.0,
             reboundsPerGame: 7.4,
             assistsPerGame: 7.4,
           },
         },
         {
           firstName: "Anthony",
           lastName: "Davis",
           stats: {
             pointsPerGame: 23.2,
             reboundsPerGame: 9.9,
             assistsPerGame: 3.1,
           },
         },
       ],
     },
     {
       name: "Golden State Warriors",
       division: "Pacific",
       arena: {
         name: "Chase Center",
         address: {
           street: "1 Warriors Way",
           city: "San Francisco",
           state: "CA",
           zip: "94158",
         },
       },
       players: [
         {
           firstName: "Stephen",
           lastName: "Curry",
           stats: {
             pointsPerGame: 24.3,
             reboundsPerGame: 4.6,
             assistsPerGame: 6.5,
           },
         },
         {
           firstName: "Klay",
           lastName: "Thompson",
           stats: {
             pointsPerGame: 19.5,
             reboundsPerGame: 3.5,
             assistsPerGame: 2.3,
           },
         },
       ],
     },
     {
       name: "Chicago Bulls",
       division: "Central",
       arena: {
         name: "United Center",
         address: {
           street: "1901 W Madison St",
           city: "Chicago",
           state: "IL",
           zip: "60612",
         },
       },
       players: [
         {
           firstName: "Zach",
           lastName: "LaVine",
           stats: {
             pointsPerGame: 23.7,
             reboundsPerGame: 4.7,
             assistsPerGame: 4.5,
           },
         },
         {
           firstName: "DeMar",
           lastName: "DeRozan",
           stats: {
             pointsPerGame: 21.6,
             reboundsPerGame: 4.4,
             assistsPerGame: 3.9,
           },
         },
       ],
     },
     {
       name: "Miami Heat",
       division: "Southeast",
       arena: {
         name: "Kaseya Center",
         address: {
           street: "601 Biscayne Blvd",
           city: "Miami",
           state: "FL",
           zip: "33132",
         },
       },
       players: [
         {
           firstName: "Jimmy",
           lastName: "Butler",
           stats: {
             pointsPerGame: 19.8,
             reboundsPerGame: 6.7,
             assistsPerGame: 6.0,
           },
         },
         {
           firstName: "Bam",
           lastName: "Adebayo",
           stats: {
             pointsPerGame: 16.5,
             reboundsPerGame: 10.0,
             assistsPerGame: 3.3,
           },
         },
       ],
     },
     {
       name: "Dallas Mavericks",
       division: "Southwest",
       arena: {
         name: "American Airlines Center",
         address: {
           street: "2500 Victory Ave",
           city: "Dallas",
           state: "TX",
           zip: "75219",
         },
       },
       players: [
         {
           firstName: "Luka",
           lastName: "Dončić",
           stats: {
             pointsPerGame: 25.7,
             reboundsPerGame: 8.4,
             assistsPerGame: 7.7,
           },
         },
         {
           firstName: "Kristaps",
           lastName: "Porziņģis",
           stats: {
             pointsPerGame: 18.6,
             reboundsPerGame: 7.9,
             assistsPerGame: 1.5,
           },
         },
       ],
     },
   ];
   
   // for (const team of nbaTeams) {
   //   if (team.name === "Golden State Warriors") {
   //     console.log(`${team.name} Players:`);
   
   //     for (const player of team.players) {
   //       console.log(`${player.firstName} ${player.lastName} averages ${player.stats.pointsPerGame} points per game`);
   //     }
   //   }
   //   console.log();
   // }
   
   //writing the original function as an arrow function. 
   let team = nbaTeams.find( (team) => (team.name === "Golden State Warriors"))
   
   console.log(team);
   
