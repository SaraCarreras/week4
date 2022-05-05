export function strictEquals(a, b) {
    if (
        (Object.is(0, b) && Object.is(a, -0)) ||
        (Object.is(a, 0) && Object.is(-0, b))
    ) {
        return true;
    } else if (
        (Object.is(NaN, b) && Object.is(a, NaN)) ||
        (Object.is(a, NaN) && Object.is(NaN, b))
    ) {
        return false;
    } else {
        return Object.is(a, b);
    }
}
