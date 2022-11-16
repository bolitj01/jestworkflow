class Stack{
    constructor() {
        this.data = [];

        this.peek = () => {
            if (this.data.length == 0){
                return "Empty";
            }
            else {
                return this.data[0];
            }
        }

        this.pop = () => {
            let value = this.data[0];
            this.data = this.data.slice(1);
            return value;
        }

        this.push = (value) => {
            this.data = [value, ...this.data]
        }
    }
}

describe("My Stack", () => {
    
    //Satisfy these tests in order
    it("is initially empty", () => {
        const stack = new Stack();
        expect(stack.peek()).toBe("Empty");
    });

    it("pushes to the top", () => {
        const stack = new Stack();
        stack.push(10);
        expect(stack.peek()).toBe(10);
    });

    it("pops from the top", () => {
        const stack = new Stack();
        stack.push(10);
        stack.push(5);
        expect(stack.pop()).toBe(5);
    });


})