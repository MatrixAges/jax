class App {
  constructor() {
    this.test = 1;
  }
  a() {
    const number = 1;
    return number;
  }
  b() {
    return this.a();
  }
}
