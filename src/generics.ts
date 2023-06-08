const example = {
  a: "asdasd",
  b: 123,
  c: false,
  d: {
    hello: {
      world: {},
    },
  },
};

function getValue<TObj extends object, TKey extends keyof TObj>(
  obj: TObj,
  key: TKey
): TObj[TKey] {
  return obj[key];
}

const res = getValue(example, "d");

const arrowFunc = <T>() => null;

interface IProps<T extends object> {
    config: T
}
