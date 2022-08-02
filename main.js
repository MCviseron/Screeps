var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleCreatupgcreep = require('role.creatupgcreep');
var roleBuild = require('role.build');
var roleCreatbuicreep = require('role.creatbuicreep');
var mainLoop2 = require('main.loop.2');
var roleAttack = require('role.attack');
var roleCreatnewcreep = require('role.creatnewcreep');
var roleOccupy = require('role.occupy');
var rolePicker = require('role.picker');
//update 2
var roleWorker = require('role.worker');
var roleCarryer = require('role.carryer');
var roleCreatworkcreep = require('role.creatworkcreep');
var roleCreatcarrycreep = require('role.creatcarrycreep');
var roleCreatpickcreep = require('role.creatpickcreep');
var roleTower = require('role.tower');
var ophar = 0;
var opbui = 1;
var opupg = 1;
module.exports.loop = function () {
    for(var name in Game.rooms) {
        console.log("MY " + name +" room's energy " + Game.rooms[name].energyAvailable);
    }
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'Harvester' && ophar == 1) {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'Upgrader'&& opupg == 1) {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'Builder'&& opbui == 1) {
            roleBuild.run(creep);
        }
        //updata
        if(creep.memory.role == 'Worker') {
            roleWorker.run(creep);
        }
        if(creep.memory.role == 'Carryer') {
            roleCarryer.run(creep);
        }
        if(creep.memory.role == 'Picker') {
            rolePicker.run(creep);
        }
        //loop
        for(var name in Memory.creeps) {
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
            }
        }
        //tower
        var tower = Game.getObjectById('62e24d850b3e0b87a5715d88');
        roleTower.run(tower);
        ///tower
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'Harvester');
        var upgraders = _.filter(Game.creeps,(creep)=> creep.memory.role == 'Upgrader');
        var builders = _.filter(Game.creeps,(creep)=> creep.memory.role == 'Builder');
        //updata
        var workers = _.filter(Game.creeps,(creep)=>creep.memory.role == 'Worker');
        var carryers = _.filter(Game.creeps,(creep)=>creep.memory.role == 'Carryer');
        var pickers = _.filter(Game.creeps,(creep)=>creep.memory.role == 'Picker');
        var texter ='spawning is not a enough energy!';
        //auto spawning
        //enabled / disabled
        var harcvesterlt = false;
        var upgraderslt = true;
        var builderslt = true;
        var workerslt = true;
        var carryerslt = true;
        var pickerslt = true;
        //vaule
        const harvesterl = 1;
        const upgradersl = 2;
        const buildersl = 1;
        const workersl = 2;
        const carryersl = 2;
        const pickersl = 1;
        if(upgraders.length < upgradersl && upgraderslt) {
            roleCreatupgcreep.run(creep);
        }
        if(builders.length < buildersl && builderslt) {
            roleCreatbuicreep.run(creep);
        }
        //updata
        if(workers.length < workersl && workerslt) {
            roleCreatworkcreep.run(creep);
        }
        if(carryers.length < carryersl && carryerslt) {
            roleCreatcarrycreep.run(creep);
        }
        if(pickers.length < pickersl && pickerslt) {
            roleCreatpickcreep.run(creep);
        }
        if(Game.spawns['Spawn1'].spawning) {
            var spawningCreep = Game.creeps[Game.spawns['Spawn1'].spawning.name];
            Game.spawns['Spawn1'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['Spawn1'].pos.x - 2, 
            Game.spawns['Spawn1'].pos.y - 1, 
            {align: 'left', opacity: 0.8});
        }
    }
}
