class achievement {
	/**
	 * @param {number} year
	 * @param {string} description
	 */
	constructor(year, description) {
	  this.year = year;
	  this.description = description;
	}
  }
  
let achievements_unsorted = [
	new achievement(2019, 'Distinction Award at SYF.'),
	new achievement(2019, 'Gold Diploma at 11 th International Choral Festival Orientale Concentus, Singapore.'),
	new achievement(2017, 'Sanda City Choral Festival and performance tour, Osaka, Japan.'),
	new achievement(2016, 'Performance tour to Melbourne, Australia'),
	new achievement(2015, 'Grand Prix winner at the 8th International Choral Festival Orientale Concentus, Singapore.'),
	new achievement(2014, 'Performance tour to Seoul, Korea.'),
	new achievement(2013, 'Distinction Award at SYF.'),
	new achievement(2012, 'Double Gold Awards in Youth and Chamber categories and attaining the 2nd highest score.'),
	new achievement(2012, '3rd Krakow Advent & Christmas Choir Festival, Poland.'),
	new achievement(2012, 'Grand Prix Winner, Audience Prize, Jury Prize for the Most Expressive Choir.'),
	new achievement(2012, '20th International Choir Festival of Sacred, Advent and Christmas Music, Kaunas, Lithuania.'),
	new achievement(2011, 'Gold (with Honours) Award at SYF Central Judging For Choirs.'),
	new achievement(2010, 'A Cappella Championships - High School category - Champion'),
	new achievement(2009, 'Gold Award at SYF Central Judging For Choirs.'),
	new achievement(2008, '43rd International Festival Of Choral Song Miedzyzdroje, Poland.'),
	new achievement(2008, '2 Gold awards (Children\'s 1st Prize and Sacred 2nd Prize), Conductor\'s Prize, and Special Ministry of Education Prize.'),
	new achievement(2007, 'Gold Award at SYF Central Judging For Choirs.'),
	new achievement(2006, 'Prague International Choral Festival for Advent and Christmas Music, Gold Diploma.'),
	new achievement(2006, 'Bratislava International Choral Festival for Advent and Christmas Music, Gold Diploma.'),
	new achievement(2006, 'Jury Prize for Dramaturgy and 2 nd highest score.'),
	new achievement(2005, '4th International Johannes Brahms. Choir Competition & Festival, Wernigerode, Germany.'),
	new achievement(2005, 'Gold, Category Champion, Grand Prix finalist.'),
	new achievement(2005, 'Gold (with honours) at SYF.'),
	new achievement(2003, 'Gold Award at SYF.'),
];

let achievements = achievements_unsorted;

export {achievements};