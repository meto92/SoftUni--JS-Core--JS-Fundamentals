function printPrice([movieTitle, dayOfWeek]) {
    movieTitle = movieTitle.toUpperCase();
    dayOfWeek = dayOfWeek.toUpperCase();

    let movies = ['The Godfather', 'Schindler\'s List', 'Casablanca', 'The Wizard of Oz']
        .map(movie => movie.toUpperCase());
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        .map(day => day.toUpperCase());

    if (movies.indexOf(movieTitle) === -1 || days.indexOf(dayOfWeek) === -1) {
        console.log('error');

        return;
    }

    let price = -1;

    switch (movieTitle) {
        case movies[0]:
            switch (dayOfWeek) {
                case days[0]:
                    price = 12;
                    break;
                case days[1]:
                    price = 10;
                    break;
                case days[2]:
                case days[4]:
                    price = 15;
                    break;
                case days[3]:
                    price = 12.5;
                    break;
                case days[5]:
                    price = 25;
                    break;
                case days[6]:
                    price = 30;
                    break;
            }
            break;
        case movies[1]:
            switch (dayOfWeek) {
                case days[5]:
                case days[6]:
                    price = 15;
                    break;
                default:
                    price = 8.5;
                    break;
            }
            break;
        case movies[2]:
            switch (dayOfWeek) {
                case days[5]:
                case days[6]:
                    price = 10;
                    break;
                default:
                    price = 8;
                    break;
            }
            break;
        case movies[3]:
            switch (dayOfWeek) {
                case days[5]:
                case days[6]:
                    price = 15;
                    break;
                default:
                    price = 10;
                    break;
            }
            break;
    }

    console.log(Number.isInteger(price) ? price : price.toFixed(2));
}