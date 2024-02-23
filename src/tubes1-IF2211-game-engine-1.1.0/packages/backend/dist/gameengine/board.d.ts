import { Position } from "@etimo/diamonds2-types";
import { IBoardConfig, IBot } from "../types";
import { AbstractGameObject } from "./gameobjects/abstract-game-object";
import { AbstractGameObjectProvider } from "./gameobjects/abstract-game-object-providers";
import { BotGameObject } from "./gameobjects/bot/bot";
export type SessionFinishedCallbackFunction = (bot: BotGameObject) => void;
export declare class Board {
    readonly config: IBoardConfig;
    readonly gameObjectProviders: AbstractGameObjectProvider[];
    protected logger: any;
    private readonly _id;
    private bots;
    /** List of game objects on the board. */
    private gameObjects;
    /** Set of registered timer callbacks. */
    private callbackLoopsRegistered;
    private callbackLoopsId;
    /** List of callbacks that are triggerred whenever a session is finished. */
    private sessionFinishedCallbacks;
    private botMoves;
    private botRateLimitViolations;
    constructor(id: number, config: IBoardConfig, gameObjectProviders: AbstractGameObjectProvider[], logger: any);
    /**
     * Return id of the board.
     */
    getId(): number;
    /**
     * Register a new callback that will be triggered whenever a game session is finished.
     *
     * @param callback
     */
    registerSessionFinishedCallback(callback: SessionFinishedCallbackFunction): void;
    /**
     * Remove a registered callback.
     *
     * @param callback
     */
    unregisterSessionFinishedCallback(callback: SessionFinishedCallbackFunction): void;
    /**
     * Add a new bot to the board and start a new game session.
     *
     * @param bot The bot to add to the board.
     */
    join(bot: IBot): Promise<boolean>;
    /**
     * Remove a bot from the board after a specific time
     *
     * @param bot The bot to remove to the board.
     * @param time Remove bot after time.
     */
    removeBot(bot: IBot, time: number): Promise<void>;
    /**
     * Return a bot on the board matching the given id.
     *
     * @param id The id of the bot to find.
     */
    getBotById(id: string): IBot | undefined;
    /**
     * Return all bots on board
     * @returns All bots
     */
    getBots(): Record<string, IBot>;
    getBotsCount(): number;
    /**
     * Try to perform a move for a bot on the board.
     *
     * @param bot The bot to move.
     * @param delta The change in position to perform.
     * @returns True if the move succeeds, false otherwise.
     */
    move(bot: IBot, delta: Position): Promise<boolean>;
    /**
     * Create a new timer that will clear out a bot from the board when their session finishes.
     * @param bot
     */
    private createNewExpirationTimer;
    /**
     * Check if a position on the board is empty (contains no game objects) or not.
     *
     * @param x
     * @param y
     * @returns True if the cell is empty, false otherwise.
     */
    isCellEmpty(x: number, y: number): boolean;
    registerGameObjectForCallbackLoop(gameObject: AbstractGameObject, interval: number): void;
    unregisterGameObjectFromCallbackLoop(gameObject: AbstractGameObject, interval: number): void;
    /**
     * Returns a random position on the board that is considered empty. By empty, it means that there are
     * no game objects on the cell.
     *
     * @returns Position
     */
    getEmptyPosition(): Position;
    /**
     * Returns a random position on the board.
     */
    getRandomPosition(): Position;
    getConfig(): IBoardConfig;
    /**
     * Width of board.
     */
    get width(): number;
    /**
     * Height of board.
     */
    get height(): number;
    /**
     * Returns a list of all game objects currently on the board.
     */
    getAllGameObjects(): AbstractGameObject[];
    /**
     * Add new game objects to the board and notify game object providers.
     *
     * @param gameObjects The game objects to add.
     */
    addGameObjects(gameObjects: AbstractGameObject[]): void;
    /**
     * Returns a list of game objects currently located on a given position on the board.
     *
     * @param p The position
     */
    getGameObjectsOnPosition(p: Position): AbstractGameObject[];
    trySetGameObjectPosition(gameObject: AbstractGameObject, dest: Position, skipLeaveCheck?: boolean, skipEnterCheck?: boolean): boolean;
    canGameObjectEnter(gameObject: AbstractGameObject, dest: Position): boolean;
    canGameObjectLeave(gameObject: AbstractGameObject, dest: Position): boolean;
    /**
     * Get an array of all game objects matching the given type T.
     *
     * @returns T[] Array of game objects.
     */
    getGameObjectsByType<T extends AbstractGameObject>(t: new (...args: any[]) => T): T[];
    /**
     * Remove a specific game object from the board.
     *
     * @param gameObject The game object to remove.
     */
    removeGameObject(gameObject: AbstractGameObject): void;
    /**
     * Remove all game objects of type T from the board.
     */
    removeGameObjectsByType<T extends AbstractGameObject>(t: new (...args: any[]) => T): void;
    private notifyProvidersGameObjectsRemoved;
    getLogString(gameObjects: AbstractGameObject[]): string;
    private notifyProvidersGameObjectsAdded;
    private notifyProvidersBoardInitialized;
    private notifyProvidersBoardBotJoined;
    private destinationIsOutOfBounds;
    getLastMove(bot: IBot): any;
    updateLastMove(bot: IBot): void;
    getRateLimitViolations(bot: IBot): number;
    updateRateLimitViolations(bot: IBot): void;
    notifyGameObjectEvent(sender: AbstractGameObject, message: string, payload?: Object): void;
}
//# sourceMappingURL=board.d.ts.map