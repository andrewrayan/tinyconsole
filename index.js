exports.Error = function (message) {
    console.log(`Error : ${message}`);
    console.log('Logged at ' + new Date());
}

exports.Warning = function (message) {
    console.log(`Warning : ${message}`);
    console.log('Logged at ' + new Date());
}

exports.Info = function (message) {
    console.log(`Info : ${message}`);
    console.log('Logged at ' + new Date());
}
