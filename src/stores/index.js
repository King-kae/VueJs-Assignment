export const range = (start, end, step = 1) => {

    if (typeof end === "undefined") {
        end = start;
        start = 0;
    }
    const length = Math.floor(( end - start ) / step + 1)
    const output = Array.from({ length },(v, i) => start + i * step)

    return output;
}
range(10)
// console.log(range(10))

