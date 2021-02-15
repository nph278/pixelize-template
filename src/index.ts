import { createGame } from "pixelize-engine";
import * as Sprites from "./sprites";

const game = createGame({});

game.update = () => {
  // Put the code to update your game here.
};

game.draw = () => {
  // Put the code to draw you game board here.
  game.sprite(Sprites.questionMark, 46, 46);
  game.sprite(Sprites.questionMark, 60, 60);
};

game.mount(document.body);
