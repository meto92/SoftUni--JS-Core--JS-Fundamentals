function convertTownsToJSON(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let townObj = {};

        let [town, latitude, longitude] = arr[i].split(/\s*\|\s*/).filter(p => !!p);

        townObj.Town = town;
        townObj.Latitude = Number(latitude);
        townObj.Longitude = Number(longitude);

        result.push(townObj);
    }

    console.log(JSON.stringify(result));
}