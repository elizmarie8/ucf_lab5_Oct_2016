var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                   o            ",
   "                                                   o              xxx d         ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx        d        o x!!!x         ",
   "                                                      xxx       xxxx!xx         ",
   "                                   xxxxx                          xxx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx   p   o                                                   x  ",
   "  x  @       x  x                                               xxxxxxx  d  x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x   x                  x     x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                        xxxxxxx                                    xxx  ",
   "                                      x!!x                     xxxx     xxxx                                 xxx  ",
   "                                      x!!x                  x  xx         xx  x                              xxx  ",
   "                                      xx!!!!!!!!!!!x        xxxx           xxxx                              xxx  ",
   "                                      xxxxxxxxxxx!!x                                              o   o   o  xxx  ",
   "                                           xxxxxxx!x                                                        xxxx  ",
   "                                             xxxxx!x                                          xxxxxxxxxxxxxxxxxx  ",
   "                                                xxvxx        o      x   x    o               d                    ",
   "                                                            xxx  p   p   p  xxx          xxxxxxx                  ",
   "                                                            x xx!!!!!!!!!!!xx x                                   ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx    p    xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                                     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                               x     x      o  o     x             x         x                    ",
   "                               xxx                                   x             x         x                    ",
   "              xx     xx        x               x     x     xxxxxx    x       xxxxxxxxx       x                    ",
   "             xx       xx       x  o            x    xx               x       x               x                    ",
   "     @       x    d    x       xx    x         xx    x               x       x               x                    ",
   "    xxx      x   xxxx  x            xx         x                         xxxxx   xxxxxx      x                    ",
   "    x x                           o                  x                          x x         x                    ",
   "xxxxx x!!!!!!!!       !!!!!!!!!xx     xx!!!!!!!!xx   x!!!!!!!!!!           o     x x          x                    ",
   "xxxxx x!!!!!!x!       !x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "xxxxx x!!!!!!x!       !x!!!!!x    o                 xx!!!!!!xx !                    xx  d   xx                     ",
   "xxxxx x!!!!!!x!       !x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "xxxxx x!!!!!!x!       !x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "xxxxx x!!!!!!x!       !x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "xxxxx x!!!!!!x!       !x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                     !!!  xxx                                 ",
   "                                                          xxx         !x!!                                    ",
   "                                      x o x                 x          x!!                                    ",
   "                                      x x x                 x   oooo   xvv     x x                            ",
   "                                      x   x              xxxx          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                    xxx   xx      x   x      x               o                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                   xxxx   xx          x                                                       ",
   "                                      x   xd d d d    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    d d   dx            xxx       xxx                              ",
   "                                  xxxxx   xx          x                     x!!!x        o                    ",
   "                              o   o   x   x           x                      xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                  xxx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx  x     x  xx                                         xxx                      ",
   "                              x    xxx    x                                         x!!!x                xxx  ",
   "                              x    xxx    x                                          xxx                   x  ",
   "                              x           xxxxxxx                        xxxxxxx                           x  ",
   "                              x   xxxxx   x                              x     x                           x  ",
   "                              xx          x                              x   xbx                           x  ",
   "                                          x       pxxxxp    pxxxxp     xxx   xxx    o                      x ",
   "                                   o o    x                              x         xxx                     x  ",
   "                              xxx         x                             xxx       x!!!x                    x  ",
   "               xxx o xxx o x  x    xxx    x                             x x        xxx                     x  ",
   "                 xxxxx xxxxx  xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                               x  ",
   "         @                    x           x!!x    x!!!!x    x!!!!x    xx   xx                              x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "          x        x   xxxxxxx   x      x                                                                     ",
   "           x      x    x     x   x      x                                                                     ",
   "            x   x      x     x   x      x                                                                     ",
   "              x        x     x   x      x                                                                     ",
   "              x        x     x   x      x                                                                     ",
   "              x        xxxxxxx   xxxxxxxx                                                                     ",
   "                                                                                                              ",
   "                                                                                                              ",
   "  x            x         x   xxxxxxx  xx      x                                                               ",
   "  x            x    x    x   x     x  x  x    x                                                               ",
   "  x  @         x    x    x   x     x  x    x  x                                                               ",
   "  xxxxxxx      xxxxxxxxxxx   xxxxxxx  x     xxx                                                               ",
   "        x                                                                                                     ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                               ",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
