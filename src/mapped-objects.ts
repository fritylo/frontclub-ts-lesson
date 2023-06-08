export const obj = {
    a: {
        b: {
            c: true
        }
    },
    d: true
};

type TObj1 = {
    [Key in 'a' | 'b' | 'c']?: string
}

const obj1: TObj1 = {
    a: 'asdas',
    b: 'asdasd',
}

obj1.a = 'asdasd';

type TObj = {
    [Key in keyof typeof obj]?: (typeof obj)[Key];
}

let objMapped: TObj = {
    a: {
        b: {
            c: true
        }
    },
    //d: 'asdas'
};