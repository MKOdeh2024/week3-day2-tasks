interface ReturnObj {
  x: string;
  y: number;
}

type PromisesArray = [Promise<string>, Promise<boolean>, Promise<ReturnObj>];

const sayHelloWorld = new Promise<string>((resolve, reject) => {
  resolve("Hello world!");
});

const checkBoolean = (boolean: boolean) =>
  new Promise<boolean>((resolve, reject) => {
    if (boolean) {
      resolve(boolean);
    } else {
      reject(`Input is false :(`);
    }
  });

const returnObj = new Promise<ReturnObj>((resolve, reject) => {
  resolve({
    x: "meow",
    y: 45,
  });
});

const promisesArray: PromisesArray = [
  sayHelloWorld,
  checkBoolean(true),
  returnObj,
];

interface ConvertedObj {
  sayHelloWorld: string;
  checkBoolean: boolean;
  returnObj: ReturnObj;
}

const convertToObj = async (array: PromisesArray): Promise<ConvertedObj> => {
  const [sayHelloWorld, checkBoolean, returnObj] = await Promise.all(array);
  return { sayHelloWorld, checkBoolean, returnObj };
};

convertToObj(promisesArray).then(console.log);

