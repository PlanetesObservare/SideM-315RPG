var Imported = Imported || {};
var PO_Manager = PO_Manager || {};

/*:
 * @plugindesc Party Max Members Size Changes v0.0.1
 * @author Planetes Observare
 * 
 * @param Max Battle Members Size
 * @desc 最大戦闘メンバー人数です。
 * 3人以下や、5人以上にも設定できます。
 * @default 4
 *
 * @help
 *
 *     Change Max Member Size of Party
 */

 var parameters = PluginManager.parameters('PO_PartyMaxMembers');

(function() {
  'use strict';

  var maxBattleMembersSize = Number(parameters['Max Battle Members Size'] || 4);

  Game_Party.prototype.maxBattleMembers = function () {
    return this._maxBattleMembersSize || maxBattleMembersSize;
  };
})()