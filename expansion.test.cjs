const {test}=require('node:test');const assert=require('node:assert/strict');const {searchCases}=require('./engine.js');
const rows=[{id:'employees',title:'员工被歧视',company:'Example',category:'epl',roles:['CEO'],region:'美国',keywords:['职场歧视','员工投诉'],summary:'雇佣争议',insurance:['epl','do'],date:'2022-01-01'}, {id:'cargo',title:'货物在海上损坏',company:'Carrier',category:'marine',roles:['CFO'],region:'英国',keywords:['货物损坏'],summary:'运输事故',insurance:['marine'],date:'2021-01-01'}];
test('按相关险种筛选可包含次要关联险种',()=>assert.deepEqual(searchCases(rows,{insurance:'do'}).map(x=>x.id),['employees']));
test('员工告我能找到雇佣责任案例',()=>assert.equal(searchCases(rows,{query:'员工告我'})[0]?.id,'employees'));
test('海运险简称能找到对应运输案例',()=>assert.equal(searchCases(rows,{query:'货运险'})[0]?.id,'cargo'));
test('简繁体新增常用风险词可检索',()=>assert.equal(searchCases(rows,{query:'貨物損壞'})[0]?.id,'cargo'));
test('跨险种和地区筛选无匹配时返回空',()=>assert.equal(searchCases(rows,{insurance:'marine',region:'美国'}).length,0));
