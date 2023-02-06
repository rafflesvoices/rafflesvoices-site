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
	new achievement(2006, 'Prague International Choral Festival for Advent and Christmas Music, Gold Diploma.'),
	new achievement(2006, 'Bratislava International Choral Festival for Advent and Christmas Music, Gold Diploma, Jury Prize for Dramaturgy and 2 nd highest score.'),
	new achievement(2005, '4th International Johannes Brahms. Choir Competition & Festival, Wernigerode, Germany.'),
	new achievement(2005, 'Gold, Category Champion, Grand Prix finalist.'),
	new achievement(2005, 'Gold (with honours) at SYF.'),
	new achievement(2003, 'Gold Award at SYF.'),
	
];

let achievements = achievements_unsorted;

export {achievements};