import { GameJson } from "./game-json";

export class Game {

    static newInstance(): Game {
        return new Game();
    }

    static load(json: GameJson): Game {
        return new Game();
    }

    save(): GameJson {
        return {
            version: 1
        };
    }

    startArena(arena: number) {

    }
    
    startMapAnimation(svg: SVGSVGElement, onStartLevel: (level: number) => void) {
        svg.onclick = () => {
            onStartLevel(0);
        };
    }

    stopMapAnimation() {

    }
}