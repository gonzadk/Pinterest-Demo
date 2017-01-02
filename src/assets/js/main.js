/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
durstenfeldAlgoritm = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

shuffleArray = function (array) {
    var premiums = []; //for premiums items.. This items must be first
    var shuffleable = []; //for regular items.. This items need be shuffled
    var categories = {
        'uncategorized': []
    };
    /*
     * Checking Premiums
     */
    for (var i = 0; i < array.length; i++) {
        if (array[i].premium && array[i].premium === true) {
            premiums.push(array[i]);
        } else shuffleable.push(array[i]);
    }

    durstenfeldAlgoritm(shuffleable);

    /*
     * Group by category
     */
    var uncategorizedCount = 0;
    for (var i in shuffleable) {
        var value = shuffleable[i];
        if (value.hasOwnProperty('category')) {
            if (!categories.hasOwnProperty(value.category)) {
                categories[value.category] = [];
            }
            categories[value.category].push(value);
        } else {
            uncategorizedCount++;
            categories['category'+uncategorizedCount] = [];
            categories['category'+uncategorizedCount].push(value);
        }
    }

    /*
     * merge groups with premiums
     */
    
    for (var i in categories) {
        for (var index in categories[i]) {
            premiums.push(categories[i][index]);
        }
    }

    return premiums;
}