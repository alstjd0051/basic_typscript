function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

/* 
    never 특징
- any조자도 never에게 할당 할수 없다.
- 잘못된 타입을넣는 실수를 막고자 사용
 */

declare const a: string | number;

if (typeof a !== "string") {
  a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;

type ObjectIndexable = Indexable<{}>;

// const b: Indexable<{}> = "";
