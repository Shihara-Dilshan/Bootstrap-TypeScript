import mine from "./interface";

class implementor implements mine {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    console.log("mine class insatiated");
    this.name = name;
    this.age = age;
  }

  public setName = (name: string): void => {
    this.name = name;
  };

  public setAge = (age: number): void => {
    this.age = age;
  };

  public getName = (): string => {
    return this.name;
  };

  public getAge = (): number => {
    return this.age;
  };

  public run = (): void => {
    console.log("Running");
  };

  public getInt = (): number => {
    return 12;
  };
}

export default implementor;
