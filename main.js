// Typowanie stalej, Junier - Mid itp..
var jobLevel;
(function (jobLevel) {
    jobLevel["Junior"] = "Junior";
    jobLevel["Mid"] = "Mid";
    jobLevel["Senior"] = "Senior";
})(jobLevel || (jobLevel = {}));
// UDEMY 13:35
var User = {
    firstName: "Konrad",
    lastName: "Wesołowski",
    age: 23,
    isWomen: false,
    level: jobLevel.Junior,
    hobby: ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"],
};
var validatorHumanType = /** @class */ (function () {
    function validatorHumanType(isWoman) {
        this.isWomen = isWoman;
    }
    validatorHumanType.prototype.isValidate = function () {
        return this.isWomen === false ? "Mężczyzna" : "Kobieta";
    };
    return validatorHumanType;
}());
// !!!
function createNewUser(User) {
    // void zwracja zawsze console.log - string
    // zamiast instrukcji warunkowej ZROBIONA class i interface wyżej !!!
    /*let humanType = "";
    if (!User.isWomen) {
      humanType = "Kobieta";
    } else {
      humanType = "Mężczyzna";
    }*/
    // !!!
    var validatorHuman = new validatorHumanType(User.isWomen);
    function generateID() {
        // void zwracja zawsze - number
        return Math.floor(Math.random() * (1000 - 1)) + 1; //Randomowe liczby
    }
    return console.log("Stworzy\u0142em nowe konto ".concat(User.firstName, " ").concat(User.lastName, " \n Przypisa\u0142em mu odpowiedni wiek: ").concat(User.age, ", poziom: ").concat(User.level, " oraz hobby: ").concat(User.hobby, ", oraz p\u0142e\u0107: ").concat(validatorHuman.isValidate(), ". \n\n    Przypisa\u0142em ID: ").concat(generateID(), "\n    "));
}
createNewUser(User);
