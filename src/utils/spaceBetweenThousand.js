export const spaceBetweenThousand = (num) => {
    const left = String(num).slice(0, -3);
    const right = String(num).slice(-3);
    const res = left + ' ' + right;
    return res;
}
