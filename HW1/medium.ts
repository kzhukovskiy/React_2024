//Task 5:
//Status: Done
type DeepPartial<T> = T extends object
    ? T extends Function
        ? T
        : T extends Array<infer U>
            ? Array<DeepPartial<U>>
            : {
                [P in keyof T]?: DeepPartial<T[P]>;
            }
    : T;

type Ierarchy = {
    king: {
        prince: {
            peasant: {
                cow: {
                  name: string;
                }
                name: string;
            }
            name: string;
        }
        name: string;
    };
};

let partialIerarchy : DeepPartial<Ierarchy> = {
    king: {
        prince: {
            peasant: {
              name: "Ivan the Villager"
            },
            name: "Ivan the Third"
        },
        name: "Ivan the Forth"
    }
}
console.log(partialIerarchy)

//Task 6:
//Status: Done
type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : T;

type Name6 = MyCapitalize<"john">;
const firstname : Name6 = "John";
console.log(firstname);

//Task 7:
//Status: Done
type DeepMutable<T> = {
    -readonly [K in keyof T]: T[K] extends ReadonlyArray<infer U>
        ? DeepMutable<U>[]
        : T[K] extends object
            ? DeepMutable<T[K]>
            : T[K];
};

type King = {
    readonly name: string;
    readonly heirs: {
        readonly sons: string[];
        readonly daughters: string[];
    };
};

type MutKing = DeepMutable<King>;

let king : MutKing = {
    name: "Ivan",
    heirs: {
        sons: ["Ivan the second", 
          "Ivan the third", 
          "Ivan the bastard"],
        daughters: ["Vasilisa"]
    }
};
king.heirs.daughters = ["Women were not heirs before Ivan the Terrible"];
console.log(king);

//Task 8:
//Status: Done
type ParseURLParams<StringElem extends string> =
    StringElem extends `${infer _Start}:${infer Param}/${infer Rest}`
        ? Param | ParseURLParams<Rest>
        : StringElem extends `${infer _Start}:${infer Param}`
            ? Param
            : never;

type Params = ParseURLParams<'posts/:id/:user'>;
const id : Params = "id";
console.log(id);