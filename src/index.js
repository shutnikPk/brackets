module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    let tempStr = '';
    for (let i = 0; i < bracketsConfig.length; i++) {
        for (let k = 0; k < bracketsConfig[i].length; k++) {
            tempStr += bracketsConfig[i][k]
        }
    }

    function stepIt() {
        for (let k = 0; k <= tempStr.length; k += 2) {
            for (let i = 0; i < arr.length; i++) {
                if ((arr[i] == tempStr[k] && arr[i + 1] == tempStr[k + 1])) {
                    delete arr[i];
                    delete arr[i + 1];
                    arr = arr.filter(function (el) {
                        return el != undefined;
                    });

                }
            }
        }
    }

    for (let i = 0; i <= str.length / 2; i++) {
        stepIt();
    }
    return arr.length === 0;
}
