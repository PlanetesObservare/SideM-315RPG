var Imported = Imported || {};
var PO_Manager = PO_Manager || {};

/*:
 * @plugindesc Center the Message v0.0.1
 * @author Planetes Observare
 *
 * @help
 *
 *     Whatever Resolution Changes, the Message Window will still set width in 816px.
 *     With plugin command "messageWindowWidthFull", it can make message fullscreen width.
 */

(function(){
    var ori_Window_Width = 816;
    var ori_Window_Height = 624;

    //-----------------------------------------------------------------------------
    // Game_Temp
    //
    var _Game_Temp_prototype_initialize = Game_Temp.prototype.initialize;
    Game_Temp.prototype.initialize = function() {
        _Game_Temp_prototype_initialize.call(this);
        this._windowMessageWidthFull = false;
    }

    Game_Temp.prototype.setWindowMessageWidthFull = function(flag) {
        this._windowMessageWidthFull = flag;
    }

    Game_Temp.prototype.isWindowMessageWidthFull = function() {
        return this._windowMessageWidthFull;
    }

    //-----------------------------------------------------------------------------
    // Game_Interpreter
    //
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function (command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'messageWindowWidthFull') {
            $gameTemp.setWindowMessageWidthFull(true);
        }
    };

    //-----------------------------------------------------------------------------
    // Window_Message
    //
    /*
    var _Window_Message_Prototype_windowWidth = Window_Message.prototype.windowWidth;
    Window_Message.prototype.windowWidth = function() {
        console.log($gameTemp.isWindowMessageWidthFull());
        if ($gameTemp.isWindowMessageWidthFull()) {
            _Window_Message_Prototype_windowWidth.call(this);
        } else {
            return ori_Window_Width;
        }
    };
    */

    Window_Message.prototype.startMessage = function() {
        this._textState = {};
        this._textState.index = 0;
        this._textState.text = this.convertEscapeCharacters($gameMessage.allText());
        this.newPage(this._textState);
        this.updatePlacement();
        this.updateBackground();
        console.log($gameTemp.isWindowMessageWidthFull());
        if (!$gameTemp.isWindowMessageWidthFull()) {
            this.x = (Graphics.width - ori_Window_Width) / 2;
            this.width = ori_Window_Width;
            this.y = this._positionType * (ori_Window_Height - this.height) / 2 + (Graphics.boxHeight - ori_Window_Height) / 2;
            // this._goldWindow.y = this.y > 0 ? 0 : Graphics.boxHeight - this._goldWindow.height;
        }
        this.open();
    };

    var _Window_Message_Prototype_terminateMessage = Window_Message.prototype.terminateMessage;
    Window_Message.prototype.terminateMessage = function() {
        _Window_Message_Prototype_terminateMessage.call(this);
        $gameTemp.setWindowMessageWidthFull(false);
    };

    //-----------------------------------------------------------------------------
    // Window_ChoiceList
    //
    var _Window_ChoiceList_Prototype_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
    Window_ChoiceList.prototype.updatePlacement = function() {
        console.log($gameTemp.isWindowMessageWidthFull());
        if ($gameTemp.isWindowMessageWidthFull()) {
            _Window_ChoiceList_Prototype_updatePlacement.call(this);
        } else {
            var positionType = $gameMessage.choicePositionType();
            var messageY = this._messageWindow.y;
            this.width = this.windowWidth();
            this.height = this.windowHeight();
            switch (positionType) {
                case 0:
                    this.x = 0;
                    break;
                case 1:
                    this.x = (ori_Window_Width - this.width) / 2 + (Graphics.width - ori_Window_Width) / 2;
                    break;
                case 2:
                    this.x = ori_Window_Width - this.width + (Graphics.width - ori_Window_Width) / 2;
                    break;
            }
            if (messageY >= ori_Window_Height / 2 + (Graphics.height - ori_Window_Height) / 2) {
                this.y = messageY - this.height;
            } else {
                this.y = messageY + this._messageWindow.height;
            }
        }
    };
})();