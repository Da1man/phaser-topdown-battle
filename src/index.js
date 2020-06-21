import Phaser from "phaser";
import BootScene from "./scenes/BootScene";
import GameScene from "./scenes/GameScene";

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  scene: [BootScene, GameScene],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'matter',
    matter: {
      debug: true,
      gravity: {x: 0, y: 0},
    }
  }
};

const game = new Phaser.Game(config);
