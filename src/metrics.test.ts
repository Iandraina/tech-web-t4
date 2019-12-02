import 'chai'
import { expect } from 'chai'
import { Metric, MetricsHandler } from './metrics'
import { LevelDB } from "./leveldb"

const dbPath: string = './db/test'
var dbMet: MetricsHandler

describe('Metrics', function () {
  before(function () {
    LevelDB.clear(dbPath)
    dbMet = new MetricsHandler(dbPath)
    console.log('Data base opened')
  })

  after(function () {
    dbMet.closeDB()
    console.log('Data base closed')
  })

  describe('#get', function () {
    it('should get empty array on non existing group', function () {
      dbMet.get("0", function (err: Error | null, result?: Metric[]) {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.empty
      })
    })
  })

})