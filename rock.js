class Rock{
	constructor(x,y)
	{

	var options={
		restitution:0.8,
		friction:0.9,
		density:12,
	}
		this.x=x;
		this.y=y;
		this.width = 75
        this.height = 75
		this.body=Bodies.rectangle(this.x, this.y,75,75,options)
		World.add(world, this.body);

	}
	display()
	{
			var rockpos=this.body.position;		
			push()
			translate(rockpos.x, rockpos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0,0,this.width,this.height)
			
			pop()
	}

}