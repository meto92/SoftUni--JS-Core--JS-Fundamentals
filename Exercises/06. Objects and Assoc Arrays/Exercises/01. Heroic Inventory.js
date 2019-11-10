function printHeroes(strings) {
    let heroes = [];

    strings.forEach(str => {
       let [heroName, heroLevel, heroItems] = str.split(" / ");

       let hero = {
           name: heroName,
           level: +heroLevel,
           items: heroItems
               ? heroItems.split(", ").filter(p => !!p)
               : []
       };

       heroes.push(hero);
    });

    console.log(JSON.stringify(heroes));
}