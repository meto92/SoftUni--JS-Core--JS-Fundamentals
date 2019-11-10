function solve(str) {
    let regexes = [
        /<svg>.+?<\/svg>/,
        /<cat>(?<cat1>.+?)<\/cat>\s*<cat>(?<cat2>.+?)<\/cat>/,
        /^<text>.*?\[(.+?)\].*?<\/text>$/,
        /<g><val>([1-9]|10)<\/val>(\d+)<\/g>/g,
    ];

    let svgMatch = str.match(regexes[0]);

    if (!svgMatch) {
        console.log(`No survey found`);

        return;
    }
    
    if (!svgMatch[0].match(regexes[1])) {
        console.log('Invalid format');
        
        return;
    }

    let [firstCatMatch, secondCatMatch] = [
        regexes[1].exec(svgMatch[0]).groups["cat1"],
        regexes[1].exec(svgMatch[0]).groups["cat2"]
    ];
    
    let textMatch = regexes[2].exec(firstCatMatch);

    if (!textMatch) {
        console.log('Invalid format');

        return;
    }

    let surveyLabel = textMatch[1];

    let totalRating = 0;
    let totalVotes = 0;

    let ratingMatch;

    while (ratingMatch = regexes[3].exec(secondCatMatch)) {
        let value = +ratingMatch[1];
        let votes = +ratingMatch[2];

        totalRating += value * votes;
        totalVotes += votes;
    }

    let averageRating = totalVotes
        ? totalRating / totalVotes
        : 0;

    console.log(`${surveyLabel}: ${+averageRating.toFixed(2)}`);
}