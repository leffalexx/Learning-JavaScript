const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

let cutOff = 3;

const trimObject = (cutOff, object) => {
    for (const key in object) {
        if (object[key] >= cutOff) {
            console.log(object[key]);
        }
    }
}

trimObject(cutOff, numbers);