import Phaser from 'phaser';
import Map from "../classes/Map";
import Player from "../classes/Player";

export default class GameScene extends Phaser.Scene{
  constructor() {
    super('GameScene')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();

    this.cursors = this.input.keyboard.addKeys(
      {up:Phaser.Input.Keyboard.KeyCodes.W,
        down:Phaser.Input.Keyboard.KeyCodes.S,
        left:Phaser.Input.Keyboard.KeyCodes.A,
        right:Phaser.Input.Keyboard.KeyCodes.D});

    console.log(this.cursors)
  }

  create() {
    this.map = new Map(this);
    this.player = new Player(this);


    // настрокий камеры
    this.cameras.main.setBounds(0,0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels);
    this.cameras.main.startFollow(this.player.sprite, true, 0.1, 0.1);
  }

  update(time, delta) {
    this.player.actions();
  }

}
