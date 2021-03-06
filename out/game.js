import { RNG } from "./lib/ROT/index.js";
export class Game {
    constructor(display, screens) {
        this.display = display;
        this.screens = screens;
        this.msgs = [];
        this.madness = 0;
        window.addEventListener("keydown", e => {
            this.activeScreen.handle(e.keyCode);
            this.render();
        });
    }
    get activeScreen() {
        return this.screens[this.screens.length - 1];
    }
    push(screen) {
        this.screens.push(screen);
        screen.game = this;
        screen.enter();
        this.render();
    }
    pop() {
        this.activeScreen.exit();
        this.screens.pop();
        this.render();
    }
    render() {
        this.display.clear();
        this.activeScreen.render(this.display);
        let p = this.display.getOptions().height - 1;
        let colors = ['%c{#fff}', '%c{#ddd}', '%c{#bbb}', '%c{#999}', '%c{#777}'];
        this.msgs.forEach((m, i) => {
            this.display.drawText(0, p - i, colors[i] + m + '%c{}');
        });
        if (this.activeScreen.animate) {
            setTimeout(() => this.render(), RNG.getItem(this.activeScreen.animate));
        }
    }
    log(msg) {
        this.msgs.unshift(msg);
        if (this.msgs.length > 5) {
            this.msgs.pop();
        }
    }
}
//# sourceMappingURL=game.js.map