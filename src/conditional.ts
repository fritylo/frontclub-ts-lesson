type NonNull<T> = T extends null ? never : T;

export type A = NonNull<null>;

export type B = NonNull<string>;

type HasATrueKey<T> = T extends { a: { b: infer TypeOfB } }
    ? T extends { d: false }
        ? TypeOfB
        : never
    : never;

type TSomeObj = {
    a: {
        b: true
    },
    d: false,
}

export type C = HasATrueKey<TSomeObj>;