


export default class Map {
  constructor(scene){
    this.scene = scene;
    this.init();
    this.create();
  }

  init() {
    this.tilemap = this.scene.make.tilemap({key: 'tileMap'});
    this.tileset = this.tilemap.addTilesetImage('test_tileset', 'tileset', 256,256);
  }

  create() {
    this.createLayers();
  }

  createLayers() {
    this.tilemap.createStaticLayer('Grass', this.tileset);
    this.tilemap.createStaticLayer('Borders', this.tileset);
  }

}
