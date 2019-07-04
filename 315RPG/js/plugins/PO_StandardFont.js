var Imported = Imported || {};
var PO_Manager = PO_Manager || {};

/*:
 * @plugindesc Always Use GameFont for StandardFont v0.0.1
 * @author Planetes Observare
 *
 * @help
 *
 *     Always use GameFont Style in Game
 */

Window_Base.prototype.standardFontFace = function() {
    return 'GameFont';
};