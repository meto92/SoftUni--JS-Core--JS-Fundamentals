function printRoomsInfo(inputRooms, guests) {
    const doubleBeddedRoomType = 'double-bedded';
    const tripleBedRoomType = 'triple';

    let rooms = JSON.parse(JSON.stringify(inputRooms));

    rooms.forEach(room => room.guests = []);

    let guestsMovedInTheTeaHouse = 0;

    guests.forEach(couple => {
        let firstPerson = couple.first;
        let secondPerson = couple.second;

        if (firstPerson.gender !== secondPerson.gender) {
            let coupleHasRoom = false;

            for (let room of rooms) {
                if (!room.guests.length && room.type === doubleBeddedRoomType) {
                    room.guests.push(firstPerson, secondPerson);
                    coupleHasRoom = true;

                    break;
                }
            }

            if (!coupleHasRoom) {
                guestsMovedInTheTeaHouse += 2;
            }
        } else {
            let tripleRoomsWithOneFreeBed = rooms.filter(room => room.type === tripleBedRoomType && room.guests.length === 2 && room.guests[0].gender === firstPerson.gender);
            let emptyTripleRooms = rooms.filter(room => room.type === tripleBedRoomType && (room.guests.length === 0 || room.guests.length === 1 && room.guests[0].gender === firstPerson.gender));

            if (tripleRoomsWithOneFreeBed.length >= 2) {
                tripleRoomsWithOneFreeBed[0].guests.push(firstPerson);
                tripleRoomsWithOneFreeBed[1].guests.push(secondPerson);
            } else if (tripleRoomsWithOneFreeBed.length === 1) {
                tripleRoomsWithOneFreeBed[0].guests.push(firstPerson);

                if (emptyTripleRooms.length) {
                    emptyTripleRooms[0].guests.push(secondPerson);
                } else {
                    guestsMovedInTheTeaHouse++;
                }
            } else if (emptyTripleRooms.length){
                emptyTripleRooms[0].guests.push(firstPerson, secondPerson);
            } else {
                guestsMovedInTheTeaHouse += 2;
            }
        }
    });

    rooms.sort((a, b) => a.number.localeCompare(b.number))
        .forEach(room => {
        console.log(`Room number: ${room.number}`);

        room.guests
            .sort((a, b) => a.name.localeCompare(b.name))
            .forEach(guest => {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            });

            let emptyBeds = room.type === doubleBeddedRoomType
                ? 2 - room.guests.length
                : 3 - room.guests.length;

            console.log(`Empty beds in the room: ${emptyBeds}`);
    });

    console.log(`Guests moved to the tea house: ${guestsMovedInTheTeaHouse}`);
}