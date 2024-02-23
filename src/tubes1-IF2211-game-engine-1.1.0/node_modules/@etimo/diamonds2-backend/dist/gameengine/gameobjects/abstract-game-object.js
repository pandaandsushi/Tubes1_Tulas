"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractGameObject = void 0;
class AbstractGameObject {
    positions = [];
    static nextId = 1;
    _id = AbstractGameObject.nextId++;
    constructor(startPosition) {
        this.position = startPosition;
    }
    get x() {
        return this.position.x;
    }
    get y() {
        return this.position.y;
    }
    get id() {
        return this._id;
    }
    get position() {
        return { ...this.positions[this.positions.length - 1] };
    }
    set position(newPosition) {
        this.positions.push(newPosition);
    }
    get previousPosition() {
        return this.positions.length > 1
            ? { ...this.positions[this.positions.length - 2] }
            : null;
    }
    get properties() {
        return {};
    }
    clearPositions() {
        this.positions = [this.position];
    }
    canGameObjectEnter(gameObject, board) {
        return true;
    }
    onGameObjectEntered(gameObject, board) { }
    canGameObjectLeave(gameObject, board) {
        return true;
    }
    onGameObjectLeft(gameObject, board) { }
    onGameObjectCallbackNotified(board, intervalMs) { }
    onGameObjectRemoved(board) { }
    onEvent(board, sender, message, payload) { }
    toLogString() {
        return `${this.constructor.name}(${this.position.x},${this.position.y})`;
    }
}
exports.AbstractGameObject = AbstractGameObject;
//# sourceMappingURL=abstract-game-object.js.map