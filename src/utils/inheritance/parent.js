class Parent {
  constructor( name ) {
    console.log(name, 'ppppp=》》》')
    this.name = name;

  }
  static getName() {
    console.log('Parent - static getName', this.name)
    return this.name;
  }
  // getName() {
  //   return `public => ${this.name}`;
  // }
  // static get() {
  //   return 122;
  // }
}

export default Parent;