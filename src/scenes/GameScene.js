import Phaser from 'phaser';
import Map from "../classes/Map";
import Player from "../classes/Player";

export default class GameScene extends Phaser.Scene{
  constructor() {
    super('GameScene')
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.map = new Map(this);
    this.player = new Player(this);


    // настрокий камеры
    this.cameras.main.setBounds(0,0, this.map.tilemap.widthInPixels, this.map.tilemap.heightInPixels);
    this.cameras.main.startFollow(this.player.sprite);
  }

  update(time, delta) {
    this.player.actions();
  }

}
