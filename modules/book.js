export default class Book {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    this.id = Math.random();
  }
}