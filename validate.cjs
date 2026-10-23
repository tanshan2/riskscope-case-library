const assert=require('node:assert/strict');const {cases,guides,categories}=require('./expanded-data.js');const {searchCases}=require('./engine.js');
assert.equal(cases.length,50);assert.equal(Object.keys(guides).length,16);assert.equal(new Set(cases.map(c=>c.id)).size,cases.length);
for(const c of cases){for(const key of ['title','summary','period','region','amountLabel','outcome','insuranceNote','mapping','boundary','action'])assert.ok(c[key]?.length,`${c.id}.${key}`);assert.ok(guides[c.category]);assert.ok(c.sources.length);assert.ok(c.insurance.every(id=>guides[id]));assert.ok(['risk','arrangement','recovery','coverage'].includes(c.evidence));for(const [,url] of c.sources)assert.equal(new URL(url).protocol,'https:');}
assert.equal(searchCases(cases,{query:'财报出错',role:'CFO'}).length,3);
assert.ok(searchCases(cases,{query:'假冒老板转账'}).some(c=>c.id==='arup-deepfake'));
assert.ok(searchCases(cases,{query:'資料洩露'}).length>=4);
assert.ok(searchCases(cases,{region:'中国香港'}).length>=5);
assert.equal(searchCases(cases,{evidence:'arrangement'}).length,3);
assert.equal(searchCases(cases,{query:'AI出错'})[0].id,'mata-ai');
assert.match(cases.find(c=>c.id==='target-breach').amountLabel,/预期/);
assert.match(cases.find(c=>c.id==='merck-notpetya').facts.join(' '),/财产一切险/);
assert.match(cases.find(c=>c.id==='burgess').outcome,/实体/);
for(const id of Object.keys(categories))assert.ok(cases.some(c=>c.category===id),`Category without a real case: ${id}`);
for(const id of Object.keys(guides))assert.ok(searchCases(cases,{insurance:id}).length,`Guide without related cases: ${id}`);
assert.equal(cases.filter(c=>c.addedIn==='2.0').length,30);
assert.equal(cases.find(c=>c.id==='credit-suisse-greensill-2023').evidence,'risk');
assert.match(cases.find(c=>c.id==='dali-baltimore-2024-2026').insuranceNote,/不同事项/);
assert.equal(searchCases(cases,{insurance:'recall',region:'中国内地'})[0].id,'recall-samsung-note7-china');
console.log('Verified 50 unique source-linked records, 30 additions, 16 populated insurance guides, real-data queries and evidence boundaries.');
