import { TotoDomain } from "@monorepo/domain";

interface TotoInfra {
    one: string,
    two: string
}

const bla: TotoInfra = {
    one: "a",
    two: "b"
}

const test3: TotoDomain = {
    one: "gbb",
    two: "aaa"
}

console.log(bla.one)
console.log(test3)