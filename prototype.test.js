describe('Prototype', () => {
  it('Should use Function constructor without prototype', () => {
    // TODO: implement
    function User(name) {
      this.name = name;
      this.sayHello = function sayHello(){ return `Hello, ${name}`}
    }

    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello !== user2.sayHello).toBe(true);
  });

  it('Should use prototype', () => {
    // TODO: implement
    function User(name) {
      this.name = name;
    }
    User.prototype.sayHello = function () {
      return `Hello, ${this.name}`
    }
    const user1 = new User('user1');
    const user2 = new User('user2');

    expect(user1.name).toBe('user1');
    expect(user2.name).toBe('user2');
    expect(user1.sayHello()).toBe('Hello, user1');
    expect(user2.sayHello()).toBe('Hello, user2');
    expect(user1.sayHello === user2.sayHello).toBe(true);
  });

  it('Create class ArticleList with 2 methods add and articleCount', () => {
    // TODO: implement
    function ArticleList() {
      this.list = [];
      }
      ArticleList.prototype.add = function (context) {
        return this.list.push(context);
      };

    const list1 = new ArticleList();
    const list2 = new ArticleList();
    list1.add('aaaa');
    list2.add('bbb');
    expect(list1.list.length).toBe(1);
  });

  it('Extend using prototype', () => {
    /*
      Component should has following methods:
      render -  returns empty string
      getData - return data
      constructor - accept object width property data, that should be returned from getData
    */

    // TODO: implement
    function Component({data: {name, msg}}) {
      this.name = name;
      this.msg = msg;
    }
    Component.prototype.setData = function({name = this.name, msg = this.msg}) {
      this.name = name;
      this.msg = msg;
    }

    Component.prototype.getData = function() {
      return {
        name: this.name,
        msg: this.msg
      }
    }
    Component.prototype.render = function() {
      return '';
    }
    /*
       UserComponent should extends Component
       override render method
       add 2 following methods:
       login - set data.name
       logout - set data.name undefined
     */


    // TODO: implement
    function UserComponent({data: {name, msg}}) {
      this.name = name;
      this.msg = msg;
    }

    UserComponent.prototype = Object.create(Component.prototype);

    UserComponent.prototype.render = function() {
      return `${this.msg}, ${this.name || 'guest'}!`;
    }
    UserComponent.prototype.login = function(name) {
      this.name = name;
    }
    UserComponent.prototype.logout = function() {
      this.name = undefined;
    }
    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should extend Child class from Parent ', () => {
    // Component and  UserComponent has requirement from previous test

    // TODO: implement
    function extend(Child, Parent) {
      Child.prototype = Object.create(Parent.prototype);
    }
    // TODO: implement
    function Component({data: {name, msg}}) {
      this.name = name;
      this.msg = msg;
    }
    Component.prototype.setData = function({name = this.name, msg = this.msg}){
      this.name = name;
      this.msg = msg;
    };
    Component.prototype.getData = function(){
      return {
        name: this.name,
        msg: this.msg
      }
    };
    Component.prototype.render = function(){
      return '';
    };
    function UserComponent({data: {name, msg}}) {
      this.name = name;
      this.msg = msg;
    }

    extend(UserComponent, Component);

    UserComponent.prototype.render = function() {
      return `${this.msg}, ${this.name || 'guest'}!`;
    };
    UserComponent.prototype.login = function(name) {
      this.name = name;
    };
    UserComponent.prototype.logout = function() {
      this.name = undefined;
    };
    const component = new Component({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Tom',
      msg: 'Hello'
    });
    component.setData({
      name: 'Bob'
    });
    expect(component.render()).toBe('');
    expect(component.getData()).toEqual({
      name: 'Bob',
      msg: 'Hello'
    });

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Class declaration for Component and UserComponent', () => {
    // TODO implement Component and UserComponent from previous tasks using Class declaration
    class Component{
      constructor({data: {name, msg}}) {
        this.name = name;
        this.msg = msg;
      }
      setData({name = this.name, msg = this.msg}) {
        this.name = name;
        this.msg = msg;
      }
      getData() {
        return {
          name: this.name,
          msg: this.msg
        }
      }
      render() {
        return '';
      }
    }

    class UserComponent extends Component {
      constructor({data: {name, msg}}){
        super({data: {name, msg}});
        this.name = name;
        this.msg = msg;
      }
      render() {
        return `${this.msg}, ${this.name || 'guest'}!`;
      }
      login(name) {
        this.name = name;
      }
      logout() {
        this.name = undefined;
      }
    }

    const userComponent = new UserComponent({
      data: {
        name: 'Tom',
        msg: 'Hello'
      }
    });

    // TODO: write own test, see previous task as example
    expect(userComponent.render()).toBe('Hello, Tom!');
    userComponent.logout();
    expect(userComponent.render()).toBe('Hello, guest!');
    userComponent.login('Tom');
    userComponent.setData({ msg: 'Greetings' });
    expect(userComponent.render()).toBe('Greetings, Tom!');
  });

  it('Should use Object.create for extending one object from another', () => {
    // DON'T CHANGE
    const greetings = {
      msg: 'Hello',
      name: 'guest',

      greetings: function() {
        return `${this.msg}, ${this.name}!`;
      }
    };

    let helloTom = Object.create(greetings);
    helloTom.name = 'Tom';
    let greetingsBob = Object.create(greetings);
    greetingsBob.name = 'Bob';
    greetingsBob.msg = 'Greetings';

    expect(helloTom.greetings()).toBe('Hello, Tom!');
    expect(greetingsBob.greetings() ).toBe('Greetings, Bob!');
    expect(greetings.greetings()).toBe('Hello, guest!');
  });
});
