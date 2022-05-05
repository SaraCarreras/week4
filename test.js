import { strictEquals } from './strictEquals.js';

//TESTING FUNCTION
console.log(`El resultado de strictEquals(1, 1) es --> ${strictEquals(1, 1)}`);
console.log(
    `El resultado de strictEquals(NaN, NaN) es --> ${strictEquals(NaN, NaN)}`
);
console.log(
    `El resultado de strictEquals( 0, -0 ) es --> ${strictEquals(0, -0)}`
);
console.log(
    `El resultado de strictEquals( -0, 0 ) es --> ${strictEquals(-0, 0)}`
);
console.log(
    `El resultado de strictEquals( 1, '1' ) es --> ${strictEquals(1, '1')}`
);
console.log(
    `El resultado de strictEquals( true, false ) es --> ${strictEquals(
        true,
        false
    )}`
);
console.log(
    `El resultado de strictEquals(false, false) es --> ${strictEquals(
        false,
        false
    )}`
);
console.log(
    `El resultado de strictEquals('water', 'oil') es --> ${strictEquals(
        'water',
        'oil'
    )}`
);

document.body.innerHTML = strictEquals(1, 1);
