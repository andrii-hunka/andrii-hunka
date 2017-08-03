function assign() {
    for(var i = 1 ; i < arguments.length; i++) {
        for(var prop in arguments[i]) {
            if (arguments[i].hasOwnProperty(prop)) {
                arguments[0][prop] = arguments[i][prop];
            }   
        }
    }
    return arguments[0];
}

var Character = function(object) {
    this.name = object.name;
    this.attack = object.attack;
    this.totalHitpoints = object.hitpoints;
    this.hitpoints = object.hitpoints;
}
Character.prototype.getHitpoints = function() {
    return this.hitpoints;
}
Character.prototype.getTotalHitPoints = function() {
    return this.totalHitpoints;
}
Character.prototype.getAttack = function () {
    return this.attack;
}
Character.prototype.setAttack = function (attack) {
    this.attack = attack;
}   
Character.prototype.setHitPoints = function(currentHitPoints) {
    if(isNaN(currentHitPoints) || currentHitPoints === undefined) {
        return "Wrong value";
    }
    if (currentHitPoints < this.getTotalHitPoints() && currentHitPoints > 0) {
        this.hitpoints = currentHitPoints;
        return;
    } else {
        if (currentHitPoints >= this.getTotalHitPoints()) {
            this.hitpoints = this.getTotalHitPoints()
        } else {
            this.hitpoints = 0;
        }
    }  
}
Character.prototype.setTotalHitpoints = function(totalHitpoints) {
    this.totalHitpoints = totalHitpoints;
}
Character.prototype.isAlive = function () {
    return this.getHitpoints() > 0 ? true : false;
}


var Champion = function(object) {
    Character.call(this, object);
    var _blocked = false;
    this.defence = function() {
        this.setBlock(true);
    }
    this.rest = function() {
        this.setHitPoints(this.getHitpoints() + 5);
    }
    this.isBlocked = function () {
        return _blocked;
    }
    this.setBlock = function (state) {
        _blocked = state;
    }
    this.train = function () {
        this.setAttack(this.getAttack() + 1);
    }

}
var Monster = function (object) {
    Character.call(this, object);
    var _enraged = false;
    var _enrageDuration = 0;
    this.enrage = function () {
        if (!(this.isEnraged())) {
            _enraged = true;
            this.setEnrageDuration(2);
            this.setAttack(this.getAttack() * 2);
        }
    }
    this.isEnraged = function() {
        return _enraged;
    }
    this.setEnrageDuration = function (turns) {
        if(turns === 0) {
            _enraged = false;
        }
        _enrageDuration = turns;
    }
    this.getEnrageDuration = function() {
        return _enrageDuration;
    }
    this.feast = function(hitpoints) {
        this.setTotalHitpoints(this.getTotalHitPoints() + Math.floor(hitpoints * 0.1));
        this.setHitPoints(this.getHitpoints() + Math.floor(hitpoints * 0.25));
    }
}
function inherit(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child ;
}
inherit(Champion, Character);
inherit(Monster, Character);
Champion.prototype.fight = function(character) {
    if(!(character.isAlive())) {
        return "He's already dead";
    }
    character.setHitPoints(character.getHitpoints() - this.getAttack());
    if (!(character.isAlive())) {
        this.train();
    }
}
Monster.prototype.fight = function(character) {
    if(!(character.isAlive())) {
        return "He's already dead";
    }
    if (character.hasOwnProperty("isBlocked") && character.isBlocked()) {
        character.setBlock(false);
    } else {
        character.setHitPoints(character.getHitpoints() - this.getAttack());
    }
    if (!(character.isAlive())) {
        this.feast(character.getTotalHitPoints());
    }
    if (this.isEnraged()) {
        this.setEnrageDuration(this.getEnrageDuration() - 1);
    }
} 

module.exports = {
  Champion: Champion,
  Monster: Monster,
  extend: extend
}