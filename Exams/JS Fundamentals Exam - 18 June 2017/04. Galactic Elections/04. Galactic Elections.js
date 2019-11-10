function summarizeElectionResults(ballots) {
    let systems = new Map();

    ballots.forEach(ballot => {
        let system = ballot.system;
        let candidate = ballot.candidate;
        let votes = ballot.votes;

        if (!systems.has(system)) {
            systems.set(system, new Map());
        }

        systems.get(system).set(candidate, systems.get(system).get(candidate) + votes || votes);
    });

    let summarizedVotes = {};
    let eventualWinner = null;

    [...systems]
        .forEach(([system, votesByCandidate]) => {
            let bestSystemCandidate = [...votesByCandidate]
                .sort((a, b) => b[1] - a[1])[0][0];

            let totalSystemVotes = [...votesByCandidate].map(c => c[1])
                .reduce((a, b) => a + b);

            if (!summarizedVotes.hasOwnProperty(bestSystemCandidate)) {
                summarizedVotes[bestSystemCandidate] = {
                    name: bestSystemCandidate,
                    votes: 0,
                    wonSystemsVote: []
                }
            }

            summarizedVotes[bestSystemCandidate].votes += totalSystemVotes;
            summarizedVotes[bestSystemCandidate].wonSystemsVote.push({
                system,
                systemVotes: totalSystemVotes
            });

            if (!eventualWinner || eventualWinner.votes < summarizedVotes[bestSystemCandidate].votes) {
                eventualWinner = summarizedVotes[bestSystemCandidate];
            }
        });

    let totalVotes = Object.keys(summarizedVotes)
        .map(c => summarizedVotes[c].votes)
        .reduce((a, b) => a + b);

    if (eventualWinner.votes > totalVotes / 2) {
        console.log(`${eventualWinner.name} wins with ${eventualWinner.votes} votes`);

        if (Object.keys(summarizedVotes).length === 1) {
            console.log(`${eventualWinner.name} wins unopposed!`)
        } else {
            let secondPlace = Object.keys(summarizedVotes)
                .sort((a, b) => summarizedVotes[b].votes - summarizedVotes[a].votes)[1];

            console.log(`Runner up: ${secondPlace}`);

            summarizedVotes[secondPlace].wonSystemsVote.sort((a, b) => b.systemVotes - a.systemVotes)
                .forEach(sv => console.log(`${sv.system}: ${sv.systemVotes}`));
        }
    } else {
        let firstPercent = Math.floor(eventualWinner.votes / totalVotes * 100);

        let second = Object.keys(summarizedVotes)
            .sort((a, b) => summarizedVotes[b].votes - summarizedVotes[a].votes)[1];
        let secondPercent = Math.floor(summarizedVotes[second].votes / totalVotes * 100);

        console.log(`Runoff between ${eventualWinner.name} with ${firstPercent}% and ${second} with ${secondPercent}%`);
    }
}