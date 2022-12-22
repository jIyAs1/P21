class Ground{
    constructor(x, y, w, h){
        let options = {
            isStatic:false
        };

        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        stroke("pink");
        fill("blue");
        rect(pos.x, pos.y, this.w, thix.h);
        pop();
    }
}