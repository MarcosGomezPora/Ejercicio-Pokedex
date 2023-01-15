// Iteration1
const suma = (a = 10, b = 5) => {
    console.log(a + b);
};
  
suma();
suma(5);
suma(5, 1);


//Iteraion2
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
let {title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);


const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);


const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name, race} = animalFunction();
console.log(name);
console.log(race);


const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] };
const {name1, itv} = car;
const [year1, year2, year3] = itv
console.log(name1);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);



//Iteration3
const pointsList = [32, 54, 21, 64, 75, 43];
let pointsListCopy = [...pointsList];
console.log(pointsListCopy);


const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
let toyCopy = {...toy};
console.log(toyCopy);


const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
let pointsListSum = [...pointsList1, ...pointsLis2];
console.log(pointsListSum);


const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
let toySum = {...toy1, ...toyUpdate};
console.log(toySum);


const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
let colorsCopy = [...colors];
colorsCopy.splice(2,1);
console.log(colorsCopy);



//Iteration4
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map((user) => user.name);
console.log(names);


const persons = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names1 = persons.map((person) => {
    if (person.name[0].includes('A')) {
        person.name = 'Anacleto';
    }
    return person.name;
});
console.log(names1);


const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const citiesMap = cities.map((city) => {
	if (city.isVisited === true) {
		city.name += ' (Visitado)';
	}
	return city.name;
})
console.log(citiesMap);



//Iteration5
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const agesFiltered = ages.filter((age) => age > 18);
console.log(agesFiltered);


const numbers = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const numbersFiltered = numbers.filter((number) => {
	return number % 2 === 0;
})
console.log(numbersFiltered);


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const streamersLol = streamers.filter((streamer) => {
	return streamer.gameMorePlayed === 'League of Legends';
})
console.log(streamersLol);


const streamersUName = streamers.filter((streamer) => {
	return streamer.name.includes('u');
})
console.log(streamersUName);


const streamers35 = streamers.filter((streamer) => {
	if (streamer.gameMorePlayed.includes('Legends')) {
		if (streamer.age > 35) {
			streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
		}
		return streamer;
	}
})
console.log(streamers35);


const searchbar$$ = document.getElementById('inputFilter');
const button$$ = document.querySelector('button') //Iteration 5.7
const buscar = () => {
	const streamersNameFilter = streamers.filter((streamer) => {
		return streamer.name.toLowerCase().includes(searchbar$$.value.toLowerCase());
		
	});
	console.log(streamersNameFilter);
}
searchbar$$.addEventListener("input", buscar);
button$$.addEventListener("click", buscar); //Iteration5.7



//Iteration6
const numbers1 = [32, 21, 63, 95, 100, 67, 43];
const number10 = numbers1.find((element) => {
	return element === 100
});
console.log(number10);


const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const movies2010 = movies.find((movie) => {
	return movie.date === 2010
});
console.log(movies2010);


const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];
const alienCucu = aliens.find((alien) => {
	return alien.name === 'Cucushumushu'
});
const mutationPorom = mutations.find((mutation) => {
	return mutation.name === 'Porompompero'
});
const fusion = {...alienCucu, mutación: { ...mutationPorom}};
console.log(fusion);



//Iteration7
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const reduce = exams.reduce((suma, exam) => {
	return suma + exam.score;
}, 0);
console.log(reduce);


const sumAprobado = exams.reduce((acc, exam) => {
	if (exam.score >= 5) {
		return acc + exam.score;
	} else {
		return acc;
	}
}, 0);
console.log(sumAprobado);


const sumaMedia = exams.reduce((suma, exam) => {
	return suma + exam.score;
}, 0);
const media = sumaMedia / exams.length
console.log(media);



//Iteration8
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]
const rpgGames = videogames.filter((videogame) => 
	videogame.genders.find((gender) => gender == 'RPG')
);
console.log(rpgGames);
const rpgScores = rpgGames.reduce((suma, videogame) => {
	return suma + videogame.score;
}, 0);
const rpgScoresMedia = rpgScores / rpgGames.length
console.log(rpgScoresMedia);