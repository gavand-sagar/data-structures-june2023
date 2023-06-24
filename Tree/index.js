class Point {
    value;
    childrens = [];

    constructor(v) {
        this.value = v;
    }

    addChildren(point) {
        this.childrens.push(point)
    }
}


class Tree {
    root; // point class instance  

    addChildren(parentValue, childValue) {
        this.addChildrenHelper(this.root, parentValue, childValue)
    }

    addChildrenHelper(point, parentValue, childValue) {
        if (point.value == parentValue) {
            point.addChildren(new Point(childValue))
        } else {
            for (const child of point.childrens) {
                this.addChildrenHelper(child, parentValue, childValue)
            }
        }
    }


    showAll() {
        this.showPoint(this.root, 0)
    }

    showPoint(point, n) {
        console.log("    ".repeat(n), "-" + point.value)
        for (const child of point.childrens) {
            this.showPoint(child, n + 1)
        }
    }

}


let t = new Tree();
t.root = new Point("data-structures");

t.addChildren("data-structures", "linear")
t.addChildren("data-structures", "non-linear");

t.addChildren("linear", "array")
t.addChildren("linear", "linked-list")
t.addChildren("linear", "stack")
t.addChildren("linear", "queue")


t.addChildren("non-linear", "tree")
t.addChildren("non-linear", "graph")


t.addChildren("linked-list", "Singly")
t.addChildren("linked-list", "Doubly")


t.showAll();

