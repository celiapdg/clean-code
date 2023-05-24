type Size = '' | 'S' | 'M' | 'L' | 'XL';

class Product {
    constructor(
        public price: number,
        public size: Size,
        public name?: string,
    ) { }

    toString() {
        // if (!this.name) throw Error('name is empty');
        // if (this.price < 0) throw Error('invalid price');
        // if (this.size.length <= 0) throw Error('size is empty');

        this.isProductReady();


        return `${this.name} (${this.price}), ${this.size}`;
    }

    private isProductReady(): boolean {
        console.log("hola");
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) {
                        throw Error(`${key} is empty`);
                    }
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) {
                        throw Error(`invalid ${key}`);
                    }
                    break;
                default:
                    throw Error(`${typeof this[key]} is not supported`);
            }
        }

        return true;
    }
}


(() => {

    const bluePants = new Product(-1, 'S', 'Blue large pants');
    console.log(bluePants.toString());

}


)();