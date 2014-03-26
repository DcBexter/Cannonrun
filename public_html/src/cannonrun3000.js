/* 
 * Copyright: Milan Burgmann
 */

Game = {
    // This defines our grid's size and the size of each of its tiles
    map_grid: {
        width: 100,
        height: 70,
        tile: {
            width: 10,
            height: 10
        }
    },
    // The total width of the game screen. Since our grid takes up the entire screen
    //  this is just the width of a tile times the width of the grid
    width: function() {
        return this.map_grid.width * this.map_grid.tile.width;
    },
    // The total height of the game screen. Since our grid takes up the entire screen
    //  this is just the height of a tile times the height of the grid
    height: function() {
        return this.map_grid.height * this.map_grid.tile.height;
    },
    addTen: function(x) {
        return x + 10;
    },
    // Initialize and start our game
    start: function() {
        // Start crafty and set a background color so that we can see it's working
        Crafty.init(Game.width(), Game.height(), document.getElementById('game'));
        Crafty.background('rgb(249, 223, 125)');
//        Crafty.background('url(img/backgrounds/map.jpg)');

        // Place a tree at every edge square on our grid of 16x16 tiles
        for (var x = 0; x < Game.map_grid.width; x++) {

            for (var y = 0; y < Game.map_grid.height; y++) {

                var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

                if (at_edge) {
                    // Place a tree entity at the current tile
                    Crafty.e('Wall, 2D, Canvas, Color, Collision')
                            .attr({
                                x: x * Game.map_grid.tile.width,
                                y: y * Game.map_grid.tile.height,
                                w: 10,
                                h: 10
                            })
                            .color('grey')
                            .collision([x, y], [x + 10, y], [x + 10, y + 10], [x, y + 10])
                            .onHit("Player", function() {
                                Player.color("yellow");
                            }, function() {
                                Player.color("blue")
                            });
                }
            }
        }
        // Add our Player
        var Player = Crafty.e('Player, 2D, Canvas, Color, Fourway')
                .attr({x: 10, y: 10, w: 10, h: 10})
                .color('#F00')
                .fourway(10);
        // Set a Viewport
        Crafty.viewport.init(500, 500, document.getElementById('game'));
        //Follow Player
        Crafty.viewport.follow(Player, 0, 0);
    }
};