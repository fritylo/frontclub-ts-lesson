type Kebab<
  Keys extends string,
  Accumulator extends string = ""
> = Keys extends `${infer First}${infer Rest}`
  ? Kebab<Rest, `${Accumulator}${First extends Lowercase<First> ? "" : "-"}${Lowercase<First>}`>
  : Accumulator;

export type IProps = {
    className: string;
    variationName: number;
};

type FromCamelToKebab<T> = {
    [Key in keyof T as Kebab<Key & string>]: T[Key];
}

type IPropsKebab = Record<Kebab<keyof IProps>, string>;
type IPropsKebab2 = FromCamelToKebab<IProps>;
