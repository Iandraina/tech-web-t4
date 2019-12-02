"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("chai");
var chai_1 = require("chai");
var metrics_1 = require("./metrics");
var leveldb_1 = require("./leveldb");
var dbPath = './db/test';
var dbMet;
describe('Metrics', function () {
    before(function () {
        leveldb_1.LevelDB.clear(dbPath);
        dbMet = new metrics_1.MetricsHandler(dbPath);
        console.log('Data base opened');
    });
    after(function () {
        dbMet.closeDB();
        console.log('Data base closed');
    });
    describe('#get', function () {
        it('should get empty array on non existing group', function () {
            dbMet.get("0", function (err, result) {
                chai_1.expect(err).to.be.null;
                chai_1.expect(result).to.not.be.undefined;
                chai_1.expect(result).to.be.empty;
            });
        });
    });
    //implémenter la fonction delete
    //à continuer 
    // describe('#save', function(){
    //   it('should save data', function(){
    //       dbMet.save("0",[new Metric("1234567891234","21")],function(err: Error | null, result?: any))
    //     }
    //   })
    // })
});
