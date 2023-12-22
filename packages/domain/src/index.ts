export interface TotoDomain {
    one: string,
    two: string
}

const blabla: TotoDomain = {
    one: "a",
    two: "b"
}

console.log(blabla)

export function isEven(n: number): boolean {
    return n % 2 === 0
  }