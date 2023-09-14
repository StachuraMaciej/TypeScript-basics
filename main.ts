// Typowanie stalej, Junier - Mid itp..
enum jobLevel {
  Junior = "Junior",
  Mid = "Mid",
  Senior = "Senior",
}

// Tworzenie intreface
interface Person {
  firstName: string;
  lastName: string;
  age: number;
  isWomen: boolean;
  level: jobLevel; // Typowanie stalej
  hobby: Array<string>;
}

// Przypisanie wartości
const User: Person = {
  firstName: "Konrad",
  lastName: "Wesołowski",
  age: 23,
  isWomen: false,
  level: jobLevel.Junior, //Junior - Mid - Senior // STALA
  hobby: ["Jazda na rowerze", "Oglądanie seriali", "Gra w piłkę"],
};

// zamiast instrukcji warunkowej Walidator Płci !!!
interface validator {
  isWomen: boolean;
  isValidate(): void;
}

class validatorHumanType implements validator {
  isWomen: boolean;
  constructor(isWoman: boolean) {
    this.isWomen = isWoman;
  }

  isValidate(): string {
    return this.isWomen === false ? "Mężczyzna" : "Kobieta";
  }
}

// !!!

function createNewUser(User: Person): void {
  // void zwracja zawsze console.log - string
  // zamiast instrukcji warunkowej ZROBIONA class i interface wyżej !!!
  /*let humanType = "";
  if (!User.isWomen) {
    humanType = "Kobieta";
  } else {
    humanType = "Mężczyzna";
  }*/
  // !!!

  const validatorHuman = new validatorHumanType(User.isWomen);

  function generateID(): number {
    // void zwracja zawsze - number
    return Math.floor(Math.random() * (1000 - 1)) + 1; //Randomowe liczby
  }

  return console.log(`Stworzyłem nowe konto ${User.firstName} ${
    User.lastName
  } \n Przypisałem mu odpowiedni wiek: ${User.age}, poziom: ${
    User.level
  } oraz hobby: ${User.hobby}, oraz płeć: ${validatorHuman.isValidate()}. \n
    Przypisałem ID: ${generateID()}
    `);
}

createNewUser(User);
