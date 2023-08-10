const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const makeObject = (keys, values) => {
    const obj = {};

    keys.forEach((key, i) => {
        obj[key] = values[i];
    });

    return obj;
}

const newObject = makeObject(en, ru);

console.log(newObject);