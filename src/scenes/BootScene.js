import Phaser from 'phaser';
import tileSetPng from '../assets/test_tileset.png';
import tileSetJson from '../assets/test_tileset'
import tileMapJson from '../assets/testmap2';
import objectsPng from '../assets/test_objects.png';
import objectsJson from '../assets/test_objects';

import playerWalkPng from '../assets/player_walk.png';
import playerWalkJson from '../assets/player_walk';

export default class BootScene extends Phaser.Scene{
  constructor() {
    super('BootScene')
  }

  preload() {

    // load map files
    this.load.spritesheet('tileset', tileSetPng, {frameWidth: 256, frameHeight: 256});
    this.load.tilemapTiledJSON('tileMap', tileMapJson);
    this.load.atlas('objects', objectsPng, objectsJson)

    // load player files
    this.load.atlas('playerWalk', playerWalkPng, playerWalkJson);
  }

  create() {
    this.scene.start('GameScene');
  }


}
