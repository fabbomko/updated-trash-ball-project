class Ground{
//options is a mandatory variable that is a NEEDED parameter, so we use it even when isStatic is true
    constructor(x,y, w, h){
        this.xposition = x;
        this.yposition = y;
        this.width = w;
        this.height = h;
        let options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        World.add(world, this.body);
    }
    display(){
        fill("yellow");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}