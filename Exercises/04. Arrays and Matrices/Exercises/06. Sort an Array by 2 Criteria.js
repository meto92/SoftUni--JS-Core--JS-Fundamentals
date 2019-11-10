function sortAndPrint(strArray) {
    let stringComparer = (str1, str2) => {
		let result = str1.length - str2.length || str1.toUpperCase().localeCompare(str2.toUpperCase());

        return result;
    };

    console.log(strArray
        .sort(stringComparer)
        .join('\n'));
}