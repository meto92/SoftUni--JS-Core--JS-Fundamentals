function printFlightsWithGivenStatus(input) {
    let flights = {};

    input[0].forEach(str => {
        let args = str.split(' ');

        let sector = args.shift();
        let destination = args.join(' ');

        flights[sector] = {
            Destination: destination,
            Status: 'Ready to fly'
        };
    });

    input[1].forEach(str => {
       let [sector, status] = str.split(' ');

       if (flights.hasOwnProperty(sector)) {
           flights[sector].Status = status;
       }
    });

    let status = input[2][0];

    for (let sector in flights) {
        if (flights[sector].Status === status) {
            console.log(flights[sector])
        }
    }
}