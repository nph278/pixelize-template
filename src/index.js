import setUpGame from "pixelize-engine";
import "./sprites";

const game = setUpGame();

game.update = () => {
  // Put the code to update your game here.
};

game.draw = () => {
  // Put the code to draw you game board here.
  game.sprite("mark", 46, 46);
};
