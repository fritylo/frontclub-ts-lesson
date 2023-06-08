export const obj = {
    a: {
        b: {
            c: true
        }
    },
    d: true
};

type TObj = typeof obj

type B = TObj['a']['b']['c']

type Key = keyof TObj

function getValue(obj: object, key: string) {
    return obj[key as keyof typeof obj];
}

getValue(obj, 'hello');

type TStartsWithDollar = `$${string}`;
const dollarBot: Record<TStartsWithDollar, string> = {
    $hello: 'asdasd',
    $world: 'asdasdas',
    //asdasd: 'adasda',
};

