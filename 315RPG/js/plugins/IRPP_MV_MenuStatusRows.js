//=============================================================================
// IRPP_MV_MenuStatusRows.js
//=============================================================================

/*:
 * @plugindesc (※最上部)メニュー画面のアクターの表示人数を調整します。
 * @author イロスマRPG制作委員会
 *
 * @param MenuStatusRows
 * @desc アクターウィンドウに表示する人数を指定します。
 * 通常: 4
 * @default 4
 * @type number
 * @min 1
 * @max 8
 *
 * @help MenuStatusRowsを5に設定すると
 * アクターウィンドウにアクターが5人表示されます。
 * Yanfly様のYEP_PartySystem等、戦闘メンバーを5人以上にする
 * プラグインと併用するのが望ましいです。
 */

var Imported = Imported || {};
Imported.IRPP_MV_MenuStatusRows = true;
(function() {
var Parameters = PluginManager.parameters('IRPP_MV_MenuStatusRows');
var menuStatusRows = Number(Parameters['MenuStatusRows'] || 4);

Window_MenuStatus.prototype.numVisibleRows = function() {
    return menuStatusRows;
};

Window_MenuStatus.prototype.drawItemImage = function(index) {
    var actor = $gameParty.members()[index];
    var rect = this.itemRect(index);
    this.changePaintOpacity(actor.isBattleMember());
    this.drawActorFace(actor, rect.x + 1, rect.y + 1, Window_Base._faceWidth, rect.height - 2);
    this.changePaintOpacity(true);
};
})();