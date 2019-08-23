class NewCuboiMaker{
    constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length*this.width + this.length*this.height + this.width*this.height);
    }
}

class CubeMaker extends NewCuboiMaker{
    constructor(attr) {
        super(attr);
    }
    cubeVolume(){
        return this.length*this.length*this.length; 
    }
    cubeSurfaceArea(){
        return 6 * (this.length*this.length);
    }
}

const newCuboid = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Refactored: "+newCuboid.volume()); // 100
console.log("Refactored: "+newCuboid.surfaceArea()); // 130
console.log("Cube's volume: "+newCuboid.cubeVolume());
console.log("Cube's surface area: "+newCuboid.cubeSurfaceArea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.