import Parent from './parent';

class Child1 extends Parent {
  constructor( name ) {
    super(name);
    this.name = `child1_${name}`;
    console.log(this.getName(), 'cccchild1=>', super.get())
  }

}

export default Child1;