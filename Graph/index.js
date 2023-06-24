class Graph {
    points = [];
    edges = {};

    addPoint(pointName) {
        if (this.points.includes(pointName) == false) {
            this.points.push(pointName)
            this.edges[pointName] = {}
        }
    }

    addPath(from, to) {
        this.edges[from][to] = 1
    }

    removePath(from, to) {
        this.edges[from][to] = 0
    }

    checkDirectPath(from, to) {
        return this.edges[from][to] == 1
    }

    visited = []

    checkIndirectPath(from, to) {
        this.visited = []
        return this.checkPathHelper(from, to);
    }

    checkPathHelper(from, to) {
        if (this.visited.includes(from)) {
            return false
        }
        this.visited.push(from)

        if (this.checkDirectPath(from, to)) {
            return true;
        } else {
            let flag = false;
            for (const possiblePoint in this.edges[from]) {
                if (this.checkPathHelper(possiblePoint, to)) {
                    flag = true;
                    break;
                }
            }
            return flag
        }
    }
}


let g = new Graph();

g.addPoint("A");
g.addPoint("B")
g.addPoint("C")
g.addPoint("D")
g.addPoint("E")


g.addPath("A", "B")
g.addPath("A", "C")
g.addPath("C", "E")


console.log("direct path from A to E")
console.log(g.checkDirectPath("A", "E"))


console.log("in-direct path from A to E")
console.log(g.checkIndirectPath("A", "E"))