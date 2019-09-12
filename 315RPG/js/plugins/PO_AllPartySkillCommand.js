/*:
 * @plugindesc PO_AllPartySkillCommand v0.0.1
 * @author Planetes Observare
 * 
 * @param switchID
 * @text 使用開關
 * @desc 當該開關打開時可以在戰鬥中使用全體技能指令
 * @type number
 * @min 1
 * @default 1
 * 
 * @param characterID
 * @text 使用角色
 * @desc 使用全體技能指令的角色(不用讓他入隊)
 * @type number
 * @min 1
 * @default 1
 * 
 * @param characterSkillTypeID
 * @text 使用技能分類
 * @desc 使用全體技能指令的角色技能分類
 * @type number
 * @min 1
 * @default 1
 * 
 * @param command_text
 * @text 指令名字
 * @default 全體技能
 * 
 * @param command_skillRemainText
 * @default 剩餘
 * 
 * @param command_skillPerMP
 * @text 指令技能MP基數
 * @desc 顯示於指令列表上的技能次數，計算方式為=角色的MP/基數
 * @type number
 * @min 1
 * @default 10
 */

(function() {
    'use strict';

    var parameters = PluginManager.parameters('PO_AllPartySkillCommand');
    var param_switchID = Number(parameters['switchID'] || 1);
    var param_characterID = Number(parameters['characterID'] || 1);
    var param_characterSkillTypeID = Number(parameters['characterSkillTypeID'] || 1)
    var param_commandText = parameters['command_text'] || '全體技能';
    var param_command_skillRemainText = parameters['command_skillRemainText'] || '剩餘';
    var param_command_skillPerMP = Number(parameters['command_skillPerMP'] || 10);

    var PO_AllPartySkillCommand = {
        isOnPartySkillCommand: false,
        isPartyActorInitialized: false
    };

    Window_PartyCommand.prototype.makeCommandList = function() {
        this.addCommand(TextManager.fight,  'fight');
        if ($gameSwitches.value(param_switchID)) {
            // 剩餘指令使用次數
            var remainskills = ($gameActors.actor(param_characterID)).mp / param_command_skillPerMP;
            this.addCommand(`${param_commandText} (${param_command_skillRemainText}: ${remainskills})`, 'partySkill')
        }
        this.addCommand(TextManager.escape, 'escape', BattleManager.canEscape());
    };

    //var _scene_batle_prototype_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
    Scene_Battle.prototype.createPartyCommandWindow = function() {
        //_scene_batle_prototype_createPartyCommandWindow.call(this);
        this._partyCommandWindow = new Window_PartyCommand();
        this._partyCommandWindow.setHandler('fight',  this.commandFight.bind(this));

        if($gameSwitches.value(param_switchID)) {
            this._partyCommandWindow.setHandler('partySkill', this.commandAllPartySkill.bind(this));
        }

        this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this));
        this._partyCommandWindow.deselect();
        this.addWindow(this._partyCommandWindow);
    };

    Scene_Battle.prototype.commandAllPartySkill = function() {
        PO_AllPartySkillCommand.isOnPartySkillCommand = true;
        BattleManager.changeActor(param_characterID, '');
        this._skillWindow.setActor($gameActors.actor(param_characterID));
        this._skillWindow.setStypeId(param_characterSkillTypeID);
        this._skillWindow.refresh();
        this._skillWindow.show();
        this._skillWindow.activate();
    }

    var _scene_battle_prototype_onSkillCancel = Scene_Battle.prototype.onSkillCancel;
    Scene_Battle.prototype.onSkillCancel = function() {
        if (PO_AllPartySkillCommand.isOnPartySkillCommand) {
            this._skillWindow.hide();
            this._partyCommandWindow.activate();
            PO_AllPartySkillCommand.isOnPartySkillCommand = false;
        } else {
            _scene_battle_prototype_onSkillCancel.call(this);
        }
    };

    var _battleManager_actor = BattleManager.actor;
    BattleManager.actor = function() {
        if (PO_AllPartySkillCommand.isOnPartySkillCommand) {
           if (!PO_AllPartySkillCommand.isPartyActorInitialized) {
            $gameActors.actor(param_characterID).setAction(0, new Game_Action($gameActors.actor(param_characterID)));
            PO_AllPartySkillCommand.isPartyActorInitialized = true;
           }
           return $gameActors.actor(param_characterID);
        } else {
           return _battleManager_actor.call(this);
        }
    };

    var _battleManager_endAction = BattleManager.endAction;
    BattleManager.endAction = function() {
        _battleManager_endAction.apply(this);

        if (PO_AllPartySkillCommand.isOnPartySkillCommand) {
            PO_AllPartySkillCommand.isOnPartySkillCommand = false;
            PO_AllPartySkillCommand.isPartyActorInitialized = false;
            this.clearActor();
        }
    }

    /*
    var _scene_battle_prototype_onSkillOk = Scene_Battle.prototype.onSkillOk;
    Scene_Battle.prototype.onSkillOk = function() {
        if (PO_AllPartySkillCommand.isOnPartySkillCommand) {
            var skill = this._skillWindow.item();
            var action = new Game_Action();
            action.setSubject($gameActors.actor(param_characterID));
            action.setSkill(skill.id);
            //BattleManager.actor().setLastBattleSkill(skill);
            PO_AllPartySkillCommand.executingAction = action;
            this.onSelectAction();
        } else {
            _scene_battle_prototype_onSkillOk.call(this)
        }
    };

    var _scene_battle_prototype_onSelectAction = Scene_Battle.prototype.onSelectAction;
    Scene_Battle.prototype.onSelectAction = function() {
        if (PO_AllPartySkillCommand.isOnPartySkillCommand) {
            var action = PO_AllPartySkillCommand.executingAction;
            this._skillWindow.hide();
            this._itemWindow.hide();
            if (!action.needsSelection()) {
                this.selectNextCommand();
            } else if (action.isForOpponent()) {
                this.selectEnemySelection();
            } else {
                this.selectActorSelection();
            }
        } else {
            _scene_battle_prototype_onSelectAction.call(this)
        }
    }
    */
})()