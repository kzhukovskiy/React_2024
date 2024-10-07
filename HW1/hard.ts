//Task 9:
//Status: Done
type Camelize<T> = T extends object
    ? T extends any[]
        ? {[K in keyof T]: Camelize<T[K]>;}
        : {
            [K in keyof T as K extends string
                ? K extends `${infer P1}_${infer P2}`
                    ? `${P1}${CamelizeString<P2>}`
                    : K
                : K]: Camelize<T[K]>
        }
    : T;


type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
? `${Uppercase<First>}${Rest}`
: T;

type CamelizeString<S extends string> =
    S extends `${infer P1}_${infer P2}`
        ? `${MyCapitalize<P1>}${CamelizeString<P2>}`
        : MyCapitalize<S>;

type SnakeKing = {
    first_name: string;
    king_heirs: {
        heir_sons: string[];
    };
};

const king: Camelize<SnakeKing> = {
    firstName: "Ivan",
    kingHeirs: {
        heirSons: ["Ivan the second", 
            "Ivan the third", 
            "Ivan the bastard"]
    }
};

console.log(king)
//Task 10:
//Status: Done
type DeepPick<T, Path extends string> =
    Path extends `${infer Key}.${infer Rest}`
        ? Key extends keyof T
            ? T[Key] extends Array<infer U>
                ? { [K in Key]: DeepPick<U, Rest>[] }
                : { [K in Key]: DeepPick<T[Key], Rest> }
            : never
        : Path extends keyof T
            ? { [K in Path]: T[Path] }
            : never;

type King = {
    name: string,
    heirs: {
        sons: string[]
    },
    surname: string
}
type PKing = DeepPick<King, 'name' | 'heirs.sons'>

let anyKing : PKing = {
    name: "Ivan",
    heirs: {
        sons: ["Ivan the second", 
          "Ivan the third", 
          "Ivan the bastard"],
    }
}
console.log(anyKing)