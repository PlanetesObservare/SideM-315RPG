//=============================================================================
// IRPP_MV_ParamMaxEX.js
//=============================================================================

/*:
 * @plugindesc 能力値の最大値を指定します。
 * @author イロスマRPG制作委員会
 *
 * @param Page1
 * @text アクターの最大能力値
 *
 * @param Max MHP Actor
 * @desc アクターの最大HPの最大値です。
 * 通常: 9999
 * @default 9999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max MMP Actor
 * @desc アクターの最大MPの最大値です。
 * 通常: 9999
 * @default 9999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max ATK Actor
 * @desc アクターの攻撃力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max DEF Actor
 * @desc アクターの防御力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max MAT Actor
 * @desc アクターの魔法力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max MDF Actor
 * @desc アクターの魔法防御の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max AGI Actor
 * @desc アクターの敏捷性の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Max LUK Actor
 * @desc アクターの運の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page1
 *
 * @param Page2
 * @text エネミーの最大能力値
 *
 * @param Max MHP Enemy
 * @desc エネミーの最大HPの最大値です。
 * 通常: 999999
 * @default 999999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max MMP Enemy
 * @desc エネミーの最大MPの最大値です。
 * 通常: 9999
 * @default 9999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max ATK Enemy
 * @desc エネミーの攻撃力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max DEF Enemy
 * @desc エネミーの防御力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max MAT Enemy
 * @desc エネミーの魔法力の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max MDF Enemy
 * @desc エネミーの魔法防御の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max AGI Enemy
 * @desc エネミーの敏捷性の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @param Max LUK Enemy
 * @desc エネミーの運の最大値です。
 * 通常: 999
 * @default 999
 * @type number
 * @min 1
 * @max 9999999999
 * @parent Page2
 *
 * @help このプラグインにはプラグインコマンドがありません。
 * 
 * エネミーのメモ欄に以下を記述してください。
 * データベースの限界を無視して能力値を指定できます。
 * <EnemyMHP:1000000>
 * <EnemyMMP:10000>
 * <EnemyATK:1000>
 * <EnemyDEF:1000>
 * <EnemyMAT:1000>
 * <EnemyMDF:1000>
 * <EnemyAGI:1000>
 * <EnemyLUK:1000>
 * 
 * また、アクター、エネミーのメモ欄に以下を書いて
 * 個別に最大能力値を指定する事ができます。
 * <MaxMHP:9999999>
 * <MaxMMP:99999>
 * <MaxATK:9999>
 * <MaxDEF:9999>
 * <MaxMAT:9999>
 * <MaxMDF:9999>
 * <MaxAGI:9999>
 * <MaxLUK:9999>
 */

var Imported = Imported || {};
Imported.IRPP_MV_ParamMaxEX = true;
(function() {
var Parameters = PluginManager.parameters('IRPP_MV_ParamMaxEX');
var maxMHPActor = Number(Parameters['Max MHP Actor'] || 9999);
var maxMMPActor = Number(Parameters['Max MMP Actor'] || 9999);
var maxATKActor = Number(Parameters['Max ATK Actor'] || 999);
var maxDEFActor = Number(Parameters['Max DEF Actor'] || 999);
var maxMATActor = Number(Parameters['Max MAT Actor'] || 999);
var maxMDFActor = Number(Parameters['Max MDF Actor'] || 999);
var maxAGIActor = Number(Parameters['Max AGI Actor'] || 999);
var maxLUKActor = Number(Parameters['Max LUK Actor'] || 999);
var maxMHPEnemy = Number(Parameters['Max MHP Enemy'] || 999999);
var maxMMPEnemy = Number(Parameters['Max MMP Enemy'] || 9999);
var maxATKEnemy = Number(Parameters['Max ATK Enemy'] || 999);
var maxDEFEnemy = Number(Parameters['Max DEF Enemy'] || 999);
var maxMATEnemy = Number(Parameters['Max MAT Enemy'] || 999);
var maxMDFEnemy = Number(Parameters['Max MDF Enemy'] || 999);
var maxAGIEnemy = Number(Parameters['Max AGI Enemy'] || 999);
var maxLUKEnemy = Number(Parameters['Max LUK Enemy'] || 999);

var _Scene_Boot_start = Scene_Boot.prototype.start;
Scene_Boot.prototype.start = function() {
  DataManager.processEnemyMHP();
  DataManager.processEnemyMMP();
  DataManager.processEnemyATK();
  DataManager.processEnemyDEF();
  DataManager.processEnemyMAT();
  DataManager.processEnemyMDF();
  DataManager.processEnemyAGI();
  DataManager.processEnemyLUK();
  DataManager.processMaxMHP();
  DataManager.processMaxMMP();
  DataManager.processMaxATK();
  DataManager.processMaxDEF();
  DataManager.processMaxMAT();
  DataManager.processMaxMDF();
  DataManager.processMaxAGI();
  DataManager.processMaxLUK();
  _Scene_Boot_start.call(this);
};

DataManager.processEnemyMHP = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyMHP;
    if (result){
      Enemys.enemyMHP = Number(result);
    } else {
      Enemys.enemyMHP = 0;
    }
  }
};

DataManager.processEnemyMMP = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyMMP;
    if (result){
      Enemys.enemyMMP = Number(result);
    } else {
      Enemys.enemyMMP = 0;
    }
  }
};

DataManager.processEnemyATK = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyATK;
    if (result){
      Enemys.enemyATK = Number(result);
    } else {
      Enemys.enemyATK = 0;
    }
  }
};

DataManager.processEnemyDEF = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyDEF;
    if (result){
      Enemys.enemyDEF = Number(result);
    } else {
      Enemys.enemyDEF = 0;
    }
  }
};

DataManager.processEnemyMAT = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyMAT;
    if (result){
      Enemys.enemyMAT = Number(result);
    } else {
      Enemys.enemyMAT = 0;
    }
  }
};

DataManager.processEnemyMDF = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyMDF;
    if (result){
      Enemys.enemyMDF = Number(result);
    } else {
      Enemys.enemyMDF = 0;
    }
  }
};

DataManager.processEnemyAGI = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyAGI;
    if (result){
      Enemys.enemyAGI = Number(result);
    } else {
      Enemys.enemyAGI = 0;
    }
  }
};

DataManager.processEnemyLUK = function() {
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.EnemyLUK;
    if (result){
      Enemys.enemyLUK = Number(result);
    } else {
      Enemys.enemyLUK = 0;
    }
  }
};

DataManager.processMaxMHP = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxMHP;
    if (result){
      Actors.MaxMHP = Number(result);
    } else {
      Actors.MaxMHP = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxMHP;
    if (result){
      Classes.MaxMHP = Number(result);
    } else {
      Classes.MaxMHP = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxMHP;
    if (result){
      Enemys.MaxMHP = Number(result);
    } else {
      Enemys.MaxMHP = 0;
    }
  }
};

DataManager.processMaxMMP = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxMMP;
    if (result){
      Actors.MaxMMP = Number(result);
    } else {
      Actors.MaxMMP = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxMMP;
    if (result){
      Classes.MaxMMP = Number(result);
    } else {
      Classes.MaxMMP = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxMMP;
    if (result){
      Enemys.MaxMMP = Number(result);
    } else {
      Enemys.MaxMMP = 0;
    }
  }
};

DataManager.processMaxATK = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxATK;
    if (result){
      Actors.MaxATK = Number(result);
    } else {
      Actors.MaxATK = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxATK;
    if (result){
      Classes.MaxATK = Number(result);
    } else {
      Classes.MaxATK = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxATK;
    if (result){
      Enemys.MaxATK = Number(result);
    } else {
      Enemys.MaxATK = 0;
    }
  }
};

DataManager.processMaxDEF = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxDEF;
    if (result){
      Actors.MaxDEF = Number(result);
    } else {
      Actors.MaxDEF = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxDEF;
    if (result){
      Classes.MaxDEF = Number(result);
    } else {
      Classes.MaxDEF = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxDEF;
    if (result){
      Enemys.MaxDEF = Number(result);
    } else {
      Enemys.MaxDEF = 0;
    }
  }
};

DataManager.processMaxMAT = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxMAT;
    if (result){
      Actors.MaxMAT = Number(result);
    } else {
      Actors.MaxMAT = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxMAT;
    if (result){
      Classes.MaxMAT = Number(result);
    } else {
      Classes.MaxMAT = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxMAT;
    if (result){
      Enemys.MaxMAT = Number(result);
    } else {
      Enemys.MaxMAT = 0;
    }
  }
};

DataManager.processMaxMDF = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxMDF;
    if (result){
      Actors.MaxMDF = Number(result);
    } else {
      Actors.MaxMDF = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxMDF;
    if (result){
      Classes.MaxMDF = Number(result);
    } else {
      Classes.MaxMDF = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxMDF;
    if (result){
      Enemys.MaxMDF = Number(result);
    } else {
      Enemys.MaxMDF = 0;
    }
  }
};

DataManager.processMaxAGI = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxAGI;
    if (result){
      Actors.MaxAGI = Number(result);
    } else {
      Actors.MaxAGI = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxAGI;
    if (result){
      Classes.MaxAGI = Number(result);
    } else {
      Classes.MaxAGI = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxAGI;
    if (result){
      Enemys.MaxAGI = Number(result);
    } else {
      Enemys.MaxAGI = 0;
    }
  }
};

DataManager.processMaxLUK = function() {
  for (var i = 1; i < $dataActors.length; i++) {
    var Actors = $dataActors[i];
    var result = Actors.meta.MaxLUK;
    if (result){
      Actors.MaxLUK = Number(result);
    } else {
      Actors.MaxLUK = 0;
    }
  }
  for (var i = 1; i < $dataClasses.length; i++) {
    var Classes = $dataClasses[i];
    var result = Classes.meta.MaxLUK;
    if (result){
      Classes.MaxLUK = Number(result);
    } else {
      Classes.MaxLUK = 0;
    }
  }
  for (var i = 1; i < $dataEnemies.length; i++) {
    var Enemys = $dataEnemies[i];
    var result = Enemys.meta.MaxLUK;
    if (result){
      Enemys.MaxLUK = Number(result);
    } else {
      Enemys.MaxLUK = 0;
    }
  }
};

var _Game_Actor_paramMax = Game_Actor.prototype.paramMax;
Game_Actor.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
    if (this.actor().MaxMHP > 0) {
      return this.actor().MaxMHP;
    } else if (this.currentClass().MaxMHP > 0) {
      return this.currentClass().MaxMHP;
    } else {
      return maxMHPActor;
    }
  } else if (paramId === 1) {
    if (this.actor().MaxMMP > 0) {
      return this.actor().MaxMMP;
    } else if (this.currentClass().MaxMMP > 0) {
      return this.currentClass().MaxMMP;
    } else {
      return maxMMPActor;
    }
  } else if (paramId === 2) {
    if (this.actor().MaxATK > 0) {
      return this.actor().MaxATK;
    } else if (this.currentClass().MaxATK > 0) {
      return this.currentClass().MaxATK;
    } else {
      return maxATKActor;
    }
  } else if (paramId === 3) {
    if (this.actor().MaxDEF > 0) {
      return this.actor().MaxDEF;
    } else if (this.currentClass().MaxDEF > 0) {
      return this.currentClass().MaxDEF;
    } else {
      return maxDEFActor;
    }
  } else if (paramId === 4) {
    if (this.actor().MaxMAT > 0) {
      return this.actor().MaxMAT;
    } else if (this.currentClass().MaxMAT > 0) {
      return this.currentClass().MaxMAT;
    } else {
      return maxMATActor;
    }
  } else if (paramId === 5) {
    if (this.actor().MaxMDF > 0) {
      return this.actor().MaxMDF;
    } else if (this.currentClass().MaxMDF > 0) {
      return this.currentClass().MaxMDF;
    } else {
      return maxMDFActor;
    }
  } else if (paramId === 6) {
    if (this.actor().MaxAGI > 0) {
      return this.actor().MaxAGI;
    } else if (this.currentClass().MaxAGI > 0) {
      return this.currentClass().MaxAGI;
    } else {
      return maxAGIActor;
    }
  } else if (paramId === 7) {
    if (this.actor().MaxLUK > 0) {
      return this.actor().MaxLUK;
    } else if (this.currentClass().MaxLUK > 0) {
      return this.currentClass().MaxLUK;
    } else {
      return maxLUKActor;
    }
  }
  return _Game_Actor_paramMax.call(this, paramId);
};

var _Game_Enemy_paramMax = Game_Enemy.prototype.paramMax;
Game_Enemy.prototype.paramMax = function(paramId) {
  if (paramId === 0) {
    if (this.enemy().MaxMHP > 0) {
      return this.enemy().MaxMHP;
    } else {
      return maxMHPEnemy;
    }
  } else if (paramId === 1) {
    if (this.enemy().MaxMMP > 0) {
      return this.enemy().MaxMMP;
    } else {
      return maxMMPEnemy;
    }
  } else if (paramId === 2) {
    if (this.enemy().MaxATK > 0) {
      return this.enemy().MaxATK;
    } else {
      return maxATKEnemy;
    }
  } else if (paramId === 3) {
    if (this.enemy().MaxDEF > 0) {
      return this.enemy().MaxDEF;
    } else {
      return maxDEFEnemy;
    }
  } else if (paramId === 4) {
    if (this.enemy().MaxMAT > 0) {
      return this.enemy().MaxMAT;
    } else {
      return maxMATEnemy;
    }
  } else if (paramId === 5) {
    if (this.enemy().MaxMDF > 0) {
      return this.enemy().MaxMDF;
    } else {
      return maxMDFEnemy;
    }
  } else if (paramId === 6) {
    if (this.enemy().MaxAGI > 0) {
      return this.enemy().MaxAGI;
    } else {
      return maxAGIEnemy;
    }
  } else if (paramId === 7) {
    if (this.enemy().MaxLUK > 0) {
      return this.enemy().MaxLUK;
    } else {
      return maxLUKEnemy;
    }
  }
  return _Game_Enemy_paramMax.call(this, paramId);
};

var _Game_Enemy_paramBase = Game_Enemy.prototype.paramBase;
Game_Enemy.prototype.paramBase = function(paramId) {
  if (paramId === 0 && this.enemy().enemyMHP > 0) {
    return this.enemy().enemyMHP;
  } else if (paramId === 1 && this.enemy().enemyMMP > 0) {
    return this.enemy().enemyMMP;
  } else if (paramId === 2 && this.enemy().enemyATK > 0) {
    return this.enemy().enemyATK;
  } else if (paramId === 3 && this.enemy().enemyDEF > 0) {
    return this.enemy().enemyDEF;
  } else if (paramId === 4 && this.enemy().enemyMAT > 0) {
    return this.enemy().enemyMAT;
  } else if (paramId === 5 && this.enemy().enemyMDF > 0) {
    return this.enemy().enemyMDF;
  } else if (paramId === 6 && this.enemy().enemyAGI > 0) {
    return this.enemy().enemyAGI;
  } else if (paramId === 7 && this.enemy().enemyLUK > 0) {
    return this.enemy().enemyLUK;
  }
  return _Game_Enemy_paramBase.call(this, paramId);
};
})();