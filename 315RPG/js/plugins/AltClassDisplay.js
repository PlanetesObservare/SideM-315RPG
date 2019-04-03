//=============================================================================
// AltMenuScreen.js
//=============================================================================

/*:
 * @plugindesc Alternative Display of Class Name.
 * @author WildDagger
 *
 * @help This plugin does not provide plugin commands.
 */

/*:ja
 * @plugindesc クラスのディスプレイを切り替え。
 * @author WildDagger
 *
 * @help このプラグインには、プラグインコマンドはありません。
 */

 (function() {
    var _Window_Base_create = Window_Base.prototype.create;
    Window_Base.prototype.drawActorClass = function(actor, x, y, width) {
        // width = width || 168;
        // this.resetTextColor();
        // this.drawText(actor.currentClass().name, x, y, width);
    };
 })();