//=============================================================================
// IRPP_MV_EquipSlotEX.js
//=============================================================================

/*:
 * @plugindesc (※上部)装備スロットを簡易的に変更します。
 * @author イロスマRPG制作委員会
 *
 * @param Equip Slot
 * @desc アクター全員共通の装備スロットを指定します。
 * ,で区切って装備スロットの番号で指定します。
 * @default 1,2,3,4,5
 *
 * @help このプラグインにはプラグインコマンドがありません。
 */

var Imported = Imported || {};
Imported.IRPP_MV_EquipSlotEX = true;
(function() {
var Parameters = PluginManager.parameters('IRPP_MV_EquipSlotEX');
var newEquipSlot = String(Parameters['Equip Slot'] || '1,2,3,4,5');

Game_Actor.prototype.equipSlots = function() {
  var slots = [];
  var newSlot = newEquipSlot.split(",");
  for (var i = 0; i < newSlot.length; i++) {
    slots.push(Number(newSlot[i]));
  }
  if (slots.length >= 2 && this.isDualWield()) {
    slots[1] = 1;
  }
  return slots;
};

var _Game_Actor_isEquipChangeOk = Game_Actor.prototype.isEquipChangeOk;
Game_Actor.prototype.isEquipChangeOk = function(slotId) {
  return (_Game_Actor_isEquipChangeOk.call(this, slotId) && !this.isSealedSlot(slotId));
};

var _Game_Actor_releaseUnequippableItems = Game_Actor.prototype.releaseUnequippableItems;
Game_Actor.prototype.releaseUnequippableItems = function(forcing) {
  _Game_Actor_releaseUnequippableItems.call(this, forcing);
  for (;;) {
    var equips = this.equips();
    var changed = false;
    for (var i = 0; i < equips.length; i++) {
      var item = equips[i];
      if (item && this.isSealedSlot(i)) {
        if (!forcing) {
          this.tradeItemWithParty(null, item);
        }
        this._equips[i].setObject(null);
        changed = true;
      }
    }
    if (!changed) {
      break;
    }
  }
};

Game_Actor.prototype.isSealedSlot = function(slotId) {
  return (slotId === 1 && this.isEquipTypeSealed(2));
};
})();