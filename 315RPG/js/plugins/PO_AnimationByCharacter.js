/*:
 * @plugindesc Play Attack Animation 1.0.1
 *
 * @author Planetes Observare
 * 
 * @help
 * 
 * 
 */


(function() {

    // Actor
    var game_actor_prototype_attackAnimationId1 = Game_Actor.prototype.attackAnimationId1;
    Game_Actor.prototype.attackAnimationId1 = function() {
        var actorAnimationId = this.meta.attackAnimationId;
        var classAnimationId = this.currentClass().meta.attackAnimationId;

        // 優先順位角色>職業設定
        if (actorAnimationId) {
            return actorAnimationId;
        } else if (classAnimationId) {
            return classAnimationId;
        } else {
            game_actor_prototype_attackAnimationId1.call(this);
        }
    };

    /*
    Window_BattleLog.prototype.showActorAttackAnimation = function(subject, targets) {
        this.showNormalAnimation(targets, subject.attackAnimationId1(), false);
        this.showNormalAnimation(targets, subject.attackAnimationId2(), true);
    };
    Game_Enemy.prototype.attackAnimationId = function() {
        var attackAnimationid = this.meta.attackAnimationId;
        return attackAnimationid ? attackAnimationid : 0;
    }

    // Enemy
    Window_BattleLog.prototype.showEnemyAttackAnimation = function(subject, targets) {
        var enemyAttackAnimation = subject.attackAnimationId();
        if (enemyAttackAnimation) {
            this.showNormalAnimation(targets, enemyAttackAnimation, false);
        } else {
            SoundManager.playEnemyAttack();
        }
    };
    */
})();