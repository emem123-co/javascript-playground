const songs = [
	//each song is an 'object'
	{
		songID: 1,
		title: "Levitating",
		artist: "Dua Lipa",
		album: "Future Nostalgia",
		year: 2020,
		genre: "Pop",
		durationInSeconds: 203,
	},
	{
		songID: 2,
		title: "Blinding Lights",
		artist: "The Weeknd",
		album: "After Hours",
		year: 2019,
		genre: "Synthpop",
		durationInSeconds: 200,
	},
	{
		songID: 3,
		title: "Good 4 U",
		artist: "Olivia Rodrigo",
		album: "SOUR",
		year: 2021,
		genre: "Pop Punk",
		durationInSeconds: 178,
	},
	{
		songID: 4,
		title: "Stay",
		artist: "The Kid LAROI, Justin Bieber",
		album: "F*ck Love 3: Over You",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 141,
	},
	{
		songID: 5,
		title: "Montero (Call Me By Your Name)",
		artist: "Lil Nas X",
		album: "Montero",
		year: 2021,
		genre: "Pop Rap",
		durationInSeconds: 137,
	},
	{
		songID: 6,
		title: "Peaches",
		artist: "Justin Bieber",
		album: "Justice",
		year: 2021,
		genre: "R&B",
		durationInSeconds: 198,
	},
	{
		songID: 7,
		title: "Drivers License",
		artist: "Olivia Rodrigo",
		album: "SOUR",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 242,
	},
	{
		songID: 8,
		title: "Save Your Tears",
		artist: "The Weeknd",
		album: "After Hours",
		year: 2020,
		genre: "Synthpop",
		durationInSeconds: 215,
	},
	{
		songID: 9,
		title: "Kiss Me More",
		artist: "Doja Cat feat. SZA",
		album: "Planet Her",
		year: 2021,
		genre: "R&B",
		durationInSeconds: 208,
	},
	{
		songID: 10,
		title: "Industry Baby",
		artist: "Lil Nas X, Jack Harlow",
		album: "Montero",
		year: 2021,
		genre: "Hip Hop",
		durationInSeconds: 212,
	},
	{
		songID: 11,
		title: "Butter",
		artist: "BTS",
		album: "Butter",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 165,
	},
	{
		songID: 12,
		title: "Deja Vu",
		artist: "Olivia Rodrigo",
		album: "SOUR",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 224,
	},
	{
		songID: 13,
		title: "Bad Habits",
		artist: "Ed Sheeran",
		album: "=",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 231,
	},
	{
		songID: 14,
		title: "Heat Waves",
		artist: "Glass Animals",
		album: "Dreamland",
		year: 2020,
		genre: "Indie Pop",
		durationInSeconds: 238,
	},
	{
		songID: 15,
		title: "Levitating (feat. DaBaby)",
		artist: "Dua Lipa",
		album: "Future Nostalgia",
		year: 2020,
		genre: "Pop",
		durationInSeconds: 203,
	},
	{
		songID: 16,
		title: "Shivers",
		artist: "Ed Sheeran",
		album: "=",
		year: 2021,
		genre: "Pop",
		durationInSeconds: 207,
	},
	{
		songID: 17,
		title: "Cold Heart (PNAU Remix)",
		artist: "Elton John, Dua Lipa",
		album: "The Lockdown Sessions",
		year: 2021,
		genre: "Dance",
		durationInSeconds: 204,
	},
	{
		songID: 18,
		title: "You Right",
		artist: "Doja Cat, The Weeknd",
		album: "Planet Her",
		year: 2021,
		genre: "R&B",
		durationInSeconds: 185,
	},
	{
		songID: 19,
		title: "Happier Than Ever",
		artist: "Billie Eilish",
		album: "Happier Than Ever",
		year: 2021,
		genre: "Alternative",
		durationInSeconds: 298,
	},
	{
		songID: 20,
		title: "My Universe",
		artist: "Coldplay, BTS",
		album: "Music of the Spheres",
		year: 2021,
		genre: "Pop Rock",
		durationInSeconds: 228,
	},
];

// Here are some array methods like `find`, `filter`, `map`, and `reduce` on the `songs` array:

// 1. **Find a specific song**:
     //- Use the `find` method to find the song with the `songID` of 10. What is the title of this song?

//LONG WAY TO DO IT
function hasID10(song) {
     let result = song.songID === 10;
     return result;
}
     
for (const song of songs) { //for of = one piece of the collection, preform {}.
     if(hasID10(song))
          console.log(songs.songID)
     return;   
}

// //USING array functions
let chosenSong = songs.find((song) => song.songID === 10);
console.log(chosenSong.title);

//2. **Filter songs by genre**:
          //- Use the `filter` method to create a new array of all songs in the "Pop" genre. How many songs are in this genre?
let popSongs = songs.filter((songs) => songs.genre === "Pop");
console.log(popSongs); //there are 8 pop songs

// 3. **Map to create a new array of titles**:
          //- Use the `map` method to create a new array that contains only the titles of all the songs. What are the titles?
let popSongs = songs.filter((songs) => songs.genre.toLowerCase() === "pop");
console.log(popSongs); //there are 8 pop songs
console.log(popSongs.length); //there are 8 pop songs

let popSongTitles = popSongs.map((popSongs) => popSongs.title);
console.log(popSongTitles);
[
     'Levitating',
     'Stay',
     'Drivers License',
     'Butter',
     'Deja Vu',
     'Bad Habits',
     'Levitating (feat. DaBaby)',
     'Shivers'
]

//4. **Calculate the total duration**:
          //- Use the `reduce` method to calculate the total duration of all songs in seconds. What is the total duration?

          let totalDuration = 0;
          for (const song of songs) {
               totalDuration =+ song.totalDuration;
          }
          console.log(totalDuration);





//5. **Find songs by a specific artist**:
          - Use the `filter` method to find all songs by Olivia Rodrigo. What are the titles of these songs?

     let oRodSongs = songs.filter((songs) => songs.artist === "Olivia Rodrigo");
     console.log(oRodSongs);
     let oRodSongTitles = oRodSongs.map((oRodSongs) => oRodSongs.title);
     console.log(oRodSongTitles); //Good 4 U, Driver's License, Deja Vu

//6. **Find the longest song**:
          //- Use the `reduce` method to find the song with the longest duration. What is the title of this song and its duration in seconds?






// 7. **Map to create an array of song information strings**:
   let titlesByArtist = songs.map((songs) => `${songs.title} by ${songs.artist}`);
   console.log(titlesByArtist);

// 8. **Calculate the average duration**:
          //- Use the `reduce` method to calculate the average duration of the songs in seconds. What is the average duration?





// 9. **Filter songs released in a specific year**:
          //- Use the `filter` method to create a new array of songs released in 2021. How many songs were released in this year?
let songs2021 = songs.filter((songs) => songs.year === 2021);
console.log(songs2021);

let songs2021Titles = songs2021.map((songs2021) => ` ${songs2021.title}`);
console.log(`The following songs came out in 2021: \n ${songs2021Titles} `);

// 10. **Find the first song of a specific genre**:
          //- Use the `find` method to find the first song in the "R&B" genre. What is the title of this song?
let firstRB = songs.find((songs) => songs.genre === "R&B");
let forstRBArt = songs.map((firstRB) => `${firstRB.title} by ${firstRB.artist}`);
console.log(`The first R&B song in the collection is: ${forstRBArt}`);