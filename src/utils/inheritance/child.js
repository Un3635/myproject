import Parent from './parent';

class Child extends Parent {
  constructor( name ) {
    super( name );
    this.childName = name;
    // this.name = `parent_${name}`;
    // console.log('12222', super.getName())
  }
  static getName() {
   return super.getName();
  }
}

export default Child;