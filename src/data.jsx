import getRandomDirection from "./utils/helpers";

export const bots = [
  {
    id: 1,
    booleanValue: 0,
    xPosition: 300,
    yPosition: 300,
    radius: 23,
    color: "#232020",
    text: "Optimus Prime",
    speed: 5,
    // speed and direction of the object motion
    // 1 * speed
    dx: 5,
    dy: 5,
    // end of speed and direction of the object motion
    direction: "north",
    invincible: false,

    draw(context) {
      context.beginPath();

      // Fonts and text
      context.fillStyle = this.color;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "20px 'Bai Jamjuree', sans-serif";
      context.fillText(this.text, this.xPosition, this.yPosition);
      // end of Fonts and text

      // draw circle
      context.strokeStyle = this.color;
      context.lineWidth = 2;
      context.arc(
        this.xPosition,
        this.yPosition,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      context.stroke();
      // end of draw circle
      context.closePath();
    },
    update(context, canvas_width, canvas_height) {
      this.draw(context);
      // bots direction
      switch (this.direction) {
        case "north":
          this.dy = 0;
          this.dx = -this.speed;
          break;
        case "north-west":
          this.dy = -this.speed;
          this.dx = -this.speed;
          break;
        case "north-east":
          this.dy = this.speed;
          this.dx = -this.speed;
          break;
        case "south":
          this.dy = 0;
          this.dx = this.speed;
          break;
        case "south-west":
          this.dy = -this.speed;
          this.dx = this.speed;
          break;
        case "south-east":
          this.dy = -this.speed;
          this.dx = this.speed;
          break;
        case "west":
          this.dy = -this.speed;
          this.dx = 0;
          break;
        case "east":
          this.dy = this.speed;
          this.dx = this.speed;
          break;
        default:
          break;
      }
      // end of bots direction

      // when circle hit the right side of the canvas dx is set to negative to move the circle to the left
      if (this.xPosition + this.radius > canvas_width) {
        this.dx = -this.dx;
        this.direction = getRandomDirection();
      }
      // when circle hit the left side of the canvas dx is set to positive value to move the circle to the right
      if (this.xPosition - this.radius < 0) {
        this.dx = -this.dx;
        this.direction = getRandomDirection();
      }
      // when circle hit the bottom side of the canvas dy is set to negative value to move the circle upwards
      if (this.yPosition + this.radius > canvas_height) {
        this.dy = -this.dy;
        this.direction = getRandomDirection();
      }
      // when circle hit the top side of the canvas dy is set to positive value to move the circle downwards
      if (this.yPosition - this.radius < 0) {
        this.dy = -this.dy;
        this.direction = getRandomDirection();
      }

      this.xPosition += this.dx;
      this.yPosition += this.dy;
    },
  },
  {
    id: 2,
    booleanValue: 1,
    xPosition: 120,
    yPosition: 120,
    radius: 23,
    color: "#232020",
    text: "Megatron",
    speed: 5,
    // speed and direction of the object motion
    // 1 * speed
    dx: 5,
    dy: 5,
    // end of speed and direction of the object motion
    direction: "north",
    invincible: false,

    draw(context) {
      context.beginPath();

      // Fonts and text
      context.fillStyle = this.color;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.font = "20px 'Bai Jamjuree', sans-serif";
      context.fillText(this.text, this.xPosition, this.yPosition);
      // end of Fonts and text

      // draw circle
      context.strokeStyle = this.color;
      context.lineWidth = 2;
      context.arc(
        this.xPosition,
        this.yPosition,
        this.radius,
        0,
        Math.PI * 2,
        false
      );
      context.stroke();
      // end of draw circle
      context.closePath();
    },
    update(context, canvas_width, canvas_height) {
      this.draw(context);
      // bots direction
      switch (this.direction) {
        case "north":
          this.dy = 0;
          this.dx = -this.speed;
          break;
        case "north-west":
          this.dy = -this.speed;
          this.dx = -this.speed;
          break;
        case "north-east":
          this.dy = this.speed;
          this.dx = -this.speed;
          break;
        case "south":
          this.dy = 0;
          this.dx = this.speed;
          break;
        case "south-west":
          this.dy = -this.speed;
          this.dx = this.speed;
          break;
        case "south-east":
          this.dy = -this.speed;
          this.dx = this.speed;
          break;
        case "west":
          this.dy = -this.speed;
          this.dx = 0;
          break;
        case "east":
          this.dy = this.speed;
          this.dx = this.speed;
          break;
        default:
          break;
      }
      // end of bots direction

      // when circle hit the right side of the canvas dx is set to negative to move the circle to the left
      if (this.xPosition + this.radius > canvas_width) {
        this.dx = -this.dx;
        this.direction = getRandomDirection();
      }
      // when circle hit the left side of the canvas dx is set to positive value to move the circle to the right
      if (this.xPosition - this.radius < 0) {
        this.dx = -this.dx;
        this.direction = getRandomDirection();
      }
      // when circle hit the bottom side of the canvas dy is set to negative value to move the circle upwards
      if (this.yPosition + this.radius > canvas_height) {
        this.dy = -this.dy;
        this.direction = getRandomDirection();
      }
      // when circle hit the top side of the canvas dy is set to positive value to move the circle downwards
      if (this.yPosition - this.radius < 0) {
        this.dy = -this.dy;
        this.direction = getRandomDirection();
      }

      this.xPosition += this.dx;
      this.yPosition += this.dy;
    },
  },
];
