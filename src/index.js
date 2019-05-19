import { EventEmitter } from 'tiny-events';

const _config = {
    threshold: 1,
    nextEl: '.next',
    previousEl: '.next',
};

export default class Slideshow extends EventEmitter {
    constructor(container, items, config) {
        super();

        this.container = container;
        this.items = items;

        this.config = Object.assign({}, _config, config);

        console.log(this.config, _config);

        this.container.addEventListener('drag', onDrag);
        this.container.addEventListener('dragend', onDragEnd);
    }
}

function onDrag(event){
    // console.log('drag', event);
}

function onDragEnd(event){
    // console.log('dragEnd', event);
}