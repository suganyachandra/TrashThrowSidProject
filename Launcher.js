class Launcher {
    // Object A and B are Bodies in World
    constructor(objectA, pointObjectB) {
        // Options for our Constraint Chain
        var constraint_options = {
            bodyA: objectA,
            pointB: pointObjectB,
            stiffness: 0.02,
            length: 20
        }
        this.pointB = pointObjectB;
        // Creates Constraint Chain
        this.launch = Constraint.create(constraint_options);

        // Adds Chain to World
        World.add(world, this.launch);
    }

    // Displays Line Between Both Objects
    display() {
        if (this.launch.bodyA) {
            var bodyAPos = this.launch.bodyA.position;
            var pointBPos = this.pointB;
            strokeWeight(5);
            stroke(225)
            line(bodyAPos.x, bodyAPos.y, pointBPos.x, pointBPos.y);
        }  
    }

    fly() {
        this.launch.bodyA = null;
    }
}