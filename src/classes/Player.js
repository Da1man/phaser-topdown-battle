const DIRECTIONS = Object.freeze({
  BACKWARD: -1,
  NONE: 0,
  FORWARD: 1,
});
const SPEED = 5;
const ACCELERATION = 0.5;

export default class Player {
  constructor(scene) {
    this.scene = scene;
    this.sprite = this.scene.matter.add.sprite(200, 200, 'playerWalk', 'tile000', {angle: 1});
    this.sprite.setFixedRotation(true);
    this._velocity = 10;

    console.log(this.sprite)
  }

  actions(){
    this.setAngle();
    this.move();
  }


  setAngle() {
    let angle = Phaser.Math.Angle.Between(this.sprite.x, this.sprite.y, this.scene.game.input.mousePointer.x, this.scene.game.input.mousePointer.y);
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
  }

  moveForward() {
    console.log('moveForward');
    const velocity = this.getVelocityFromAngle()
    this.sprite.setVelocity(velocity.x, velocity.y)
  }

  moveBackward() {
    console.log('moveDownwart')
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

  getVelocityFromAngle() {
    const vec2 = new Phaser.Math.Vector2();
    return vec2.setToPolar(this.sprite.rotation);
  }

}
