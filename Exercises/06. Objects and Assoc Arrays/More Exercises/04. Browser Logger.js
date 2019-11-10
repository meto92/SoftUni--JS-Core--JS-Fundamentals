function printBrowserInfo(object, array) {
    let props = ['Open Tabs', 'Recently Closed', 'Browser Logs'];

    array.forEach(str => {
        let args =  str.split(' ');
        let command = args.shift();
        let paramName = args.join(' ');

        switch (command) {
            case 'Open':
                object[props[0]].push(paramName);
                object[props[2]].push(`Open ${paramName}`);
                break;
            case 'Close':
                if (object[props[0]].includes(paramName)) {
                    let index = object[props[0]].indexOf(paramName);

                    object[props[0]].splice(index, 1);
                    object[props[1]].push(paramName);
                    object[props[2]].push(`Close ${paramName}`);
                }
                break;
            case 'Clear':
                object[props[0]] = [];
                object[props[1]] = [];
                object[props[2]] = [];
                break;
        }
    });

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object[props[0]].join(', ')}`);
    console.log(`Recently Closed: ${object[props[1]].join(', ')}`);
    console.log(`Browser Logs: ${object[props[2]].join(', ')}`);
}