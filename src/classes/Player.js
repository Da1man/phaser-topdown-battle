const DIRECTIONS = Object.freeze({
  BACKWARD: -1,
  NONE: 0,
  FORWARD: 1,
});
const SPEED = 5;
const ACCELERATION = 0.5;

const SPEED_FORWARD = 3;
const SPEED_BACKWARD = -1;
const SPEED_TURN = 2;

export default class Player {
  constructor(scene) {
    this.scene = scene;
    this.sprite = this.scene.matter.add.sprite(200, 200, 'playerWalk', 'tile000', {angle: 1});
    this.sprite.setFixedRotation(true);
    this.sprite.setScale(0.5);
    this._velocity = 5;
  }

  actions(){
    this.setAngle();
    this.move();
  }


  setAngle() {
    let angle = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, this.scene.game.input.mousePointer.x + this.scene.cameras.main.scrollX, this.scene.game.input.mousePointer.y + this.scene.cameras.main.scrollY);
    angle = angle * (180 / Math.PI );
    this.sprite.setAngle(angle);
  }


  move() {

    if (this.scene.cursors.up.isDown) {
      this.moveForward();
    } else if (this.scene.cursors.down.isDown) {
      this.moveBackward();
    } else {
      this.stay();
    }
    if (this.scene.cursors.left.isDown) {
      this.moveLeft()
    } else if (this.scene.cursors.right.isDown) {
      this.moveRight()
    }

  }

  moveForward() {
    console.log('moveForward');
    const vec2 = new Phaser.Math.Vector2();
    const velocity =  vec2.setToPolar(this.sprite.rotation, SPEED_FORWARD);
    this.sprite.setVelocity(velocity.x, velocity.y)
  }

  moveBackward() {
    console.log('moveBackward');
    const vec2 = new Phaser.Math.Vector2();
    const velocity =  vec2.setToPolar(this.sprite.rotation, SPEED_BACKWARD);
    this.sprite.setVelocity(velocity.x, velocity.y)
  }

  moveLeft() {
    console.log('moveLeft');
    const vec2 = new Phaser.Math.Vector2();
    const velocity =  vec2.setToPolar(this.sprite.rotation - Math.PI / 2, SPEED_TURN);
    this.sprite.setVelocity(velocity.x, velocity.y)
  }

  moveRight() {
    console.log('moveRight');
    const vec2 = new Phaser.Math.Vector2();
    const velocity =  vec2.setToPolar(this.sprite.rotation + Math.PI / 2, SPEED_TURN);
    this.sprite.setVelocity(velocity.x, velocity.y)
  }

  stay() {
    this.sprite.setVelocity(0)
  }

  get direction() {
    let direction = DIRECTIONS.NONE;

    if (this.scene.cursors.up.isDown) {
      direction = DIRECTIONS.FORWARD;
    } else if (this.scene.cursors.down.isDown) {
      direction = DIRECTIONS.BACKWARD
    }

    return direction
  }

  get velocity() {
    this._velocity = this._velocity * this.direction;
    return this._velocity
  }

  getVelocityFromAngle() {
    const vec2 = new Phaser.Math.Vector2();
    return vec2.setToPolar(this.sprite.rotation, this.velocity);
  }

}
