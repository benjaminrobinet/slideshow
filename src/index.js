export default class Slideshow {
    constructor(container, items) {
        this.container = container;
        this.items = items;

        console.log(container);
        console.log(items);
        // setup = setup.bind(this);
        // this.slideshow = setup(container, items);
    }
}

// let setup = function(){
//     console.log(this.container);
//     console.log(this.items);
//     // return
// };
