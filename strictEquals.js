function strictEquals(a, b) {
    if (Object.is(a, -0) || Object.is(-0, b)) {
        return true;
    } else if (Object.is(NaN, NaN)) {
        return false;
    }
    return Object.is(a, b);
}
