
let musicians = [
    {
        name: "The Beatles",
        genre: "Rock",
        activeSince: 1960,
        recentAlbums: [
            "Let It Be (1970)",
            "Abbey Road (1969)",
            "Yellow Submarine (1969)",
            "The Beatles (White Album) (1968)",
            "Magical Mystery Tour (1967)"
        ],
        numOfBandMembers: 4,
        members: [
            { name: "John Lennon", age: 40 },
            { name: "Paul McCartney", age: 81 },
            { name: "George Harrison", age: 58 },
            { name: "Ringo Starr", age: 83 }
        ]
    },
    {
        name: "Taylor Swift",
        genre: "Pop",
        activeSince: 2006,
        recentAlbums: [
            "Midnights (2022)",
            "Red (Taylor's Version) (2021)",
            "Fearless (Taylor's Version) (2021)",
            "Evermore (2020)",
            "Folklore (2020)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Taylor Swift", age: 33 }
        ]
    },
    {
        name: "Beyoncé",
        genre: "R&B",
        activeSince: 1997,
        recentAlbums: [
            "Renaissance (2022)",
            "The Lion King: The Gift (2019)",
            "Homecoming: The Live Album (2019)",
            "Lemonade (2016)",
            "Beyoncé (2013)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Beyoncé Knowles-Carter", age: 42 }
        ]
    },
    {
        name: "Drake",
        genre: "Hip-Hop",
        activeSince: 2001,
        recentAlbums: [
            "For All the Dogs (2023)",
            "Honestly, Nevermind (2022)",
            "Certified Lover Boy (2021)",
            "Scary Hours 2 (2021)",
            "Dark Lane Demo Tapes (2020)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Drake", age: 37 }
        ]
    },
    {
        name: "Coldplay",
        genre: "Alternative Rock",
        activeSince: 1996,
        recentAlbums: [
            "Music of the Spheres (2021)",
            "Everyday Life (2019)",
            "A Head Full of Dreams (2015)",
            "Ghost Stories (2014)",
            "Mylo Xyloto (2011)"
        ],
        numOfBandMembers: 4,
        members: [
            { name: "Chris Martin", age: 46 },
            { name: "Jonny Buckland", age: 46 },
            { name: "Guy Berryman", age: 45 },
            { name: "Will Champion", age: 45 }
        ]
    },
    {
        name: "Adele",
        genre: "Pop",
        activeSince: 2006,
        recentAlbums: [
            "30 (2021)",
            "25 (2015)",
            "21 (2011)",
            "19 (2008)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Adele", age: 35 }
        ]
    },
    {
        name: "Kendrick Lamar",
        genre: "Hip-Hop",
        activeSince: 2004,
        recentAlbums: [
            "Mr. Morale & the Big Steppers (2022)",
            "DAMN. (2017)",
            "To Pimp a Butterfly (2015)",
            "good kid, m.A.A.d city (2012)",
            "Section.80 (2011)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Kendrick Lamar", age: 36 }
        ]
    },
    {
        name: "Foo Fighters",
        genre: "Rock",
        activeSince: 1994,
        recentAlbums: [
            "But Here We Are (2023)",
            "Medicine at Midnight (2021)",
            "Concrete and Gold (2017)",
            "Sonic Highways (2014)",
            "Wasting Light (2011)"
        ],
        numOfBandMembers: 6,
        members: [
            { name: "Dave Grohl", age: 55 },
            { name: "Nate Mendel", age: 54 },
            { name: "Pat Smear", age: 64 },
            { name: "Chris Shiflett", age: 52 },
            { name: "Rami Jaffee", age: 54 },
            { name: "Josh Freese", age: 51 }
        ]
    },
    {
        name: "Billie Eilish",
        genre: "Pop",
        activeSince: 2015,
        recentAlbums: [
            "Happier Than Ever (2021)",
            "When We All Fall Asleep, Where Do We Go? (2019)",
            "Don't Smile at Me (2017)"
        ],
        numOfBandMembers: 1,
        members: [
            { name: "Billie Eilish", age: 21 }
        ]
    },
    {
        name: "Metallica",
        genre: "Heavy Metal",
        activeSince: 1981,
        recentAlbums: [
            "72 Seasons (2023)",
            "Hardwired... to Self-Destruct (2016)",
            "Death Magnetic (2008)",
            "St. Anger (2003)",
            "Reload (1997)"
        ],
        numOfBandMembers: 4,
        members: [
            { name: "James Hetfield", age: 60 },
            { name: "Lars Ulrich", age: 60 },
            { name: "Kirk Hammett", age: 61 },
            { name: "Robert Trujillo", age: 59 }
        ]
    }
];

// for (var index = 0; index < musicians.length; index++) {
//      const musician = musicians[index];
//      yearsActive = (2024 - musician.activeSince);
//      console.log(`
//           Name: ${musician.name}
//           Years Active: ${yearsActive}
//           `);
//           totalYrs =+ yearsActive;
          
//           var averageActiveYears = totalYrs / index
//      };
     
//      console.log("Average years active for this group: " + averageActiveYears);
     
     for (const musician of musicians) {
          
           var yearsActive = (2024 - musician.activeSince);
          console.log(`${musician.name}: ${yearsActive}`);
          
          for (const musician of musicians) {
               var totalActiveYears =+ yearsActive;
               return totalActiveYears
          }
          
               for(index=0; index < musicians.length; index++) 
                    totalMusician =+ index;
                    totalYearsActive =+ 
             

          
          // let averageYearsActive = avg(totalActiveYears / index)
          // ;
          
     }

     console.log();