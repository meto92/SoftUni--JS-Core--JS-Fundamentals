function generateSequence(length, k) {
    let sequence = [1];

    while (sequence.length < length) {
        let nextElement = sequence[sequence.length - 1];

        for (let i = sequence.length - 2; i >= sequence.length - k && i >= 0; i--) {
            nextElement += sequence[i];
        }

        sequence.push(nextElement);
    }

    console.log(sequence.join(" "));
}