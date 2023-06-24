var {oneWayHash} = require('./hash.js')

test('som',()=>{
    expect(oneWayHash("")).not.toBeNull()
})