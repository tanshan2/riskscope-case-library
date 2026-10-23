const {test}=require('node:test');
const assert=require('node:assert/strict');
let search=()=>[];
try { search=require('./engine.js').searchCases; } catch {}
const rows=[
 {id:'finance',title:'财务披露',company:'Diamond Foods',category:'do',roles:['CFO','CEO'],region:'美国',keywords:['财报','会计','财务造假'],summary:'成本延迟确认',insurance:['do'],evidence:'risk',date:'2014-01-09'},
 {id:'fraud',title:'视频会议里的假高管',company:'Arup 奥雅纳',category:'crime',roles:['CFO','财务负责人'],region:'中国香港',keywords:['深度伪造','假冒老板','转账被骗'],summary:'员工受骗转账',insurance:['crime'],evidence:'risk',date:'2024-05-17'},
 {id:'board',title:'董事监督责任',company:'Boeing 波音',category:'do',roles:['董事'],region:'美国',keywords:['股东起诉','监督失职'],summary:'保险人承担和解款的安排',insurance:['do'],evidence:'arrangement',date:'2021-11-05'}
];
test('老板用财报出错找到 CFO 案例',()=>assert.equal(search(rows,{query:'财报出错'})[0]?.id,'finance'));
test('假老板视频能找到转账诈骗',()=>assert.equal(search(rows,{query:'假老板视频'})[0]?.id,'fraud'));
test('英文角色不区分大小写',()=>assert.equal(search(rows,{query:'cfo',category:'crime'})[0]?.id,'fraud'));
test('多个关键词同时满足',()=>assert.deepEqual(search(rows,{query:'CFO 美国'}).map(x=>x.id),['finance']));
test('董责险别名找到对应分类',()=>assert.equal(search(rows,{query:'D&O'}).length,2));
test('地区与证据同时筛选',()=>assert.deepEqual(search(rows,{region:'美国',evidence:'arrangement'}).map(x=>x.id),['board']));
test('空白查询列出全部，未知词返回空',()=>{assert.equal(search(rows,{query:'  '}).length,3);assert.equal(search(rows,{query:'不存在的关键词XYZ'}).length,0)});
test('筛选不修改原始记录',()=>{const before=JSON.stringify(rows);search(rows,{sort:'newest'});assert.equal(JSON.stringify(rows),before)});
