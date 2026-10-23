const fs=require('node:fs');const path=require('node:path');
const read=name=>JSON.parse(fs.readFileSync(path.resolve(__dirname,name),'utf8').replace(/^\uFEFF/,''));
const guides=read('guides.json');
const cases=[...read('operations.json'),...read('employment-product.json'),...read('transaction-person.json')];
const byId=id=>cases.find(c=>c.id===id);
byId('finsbury-ultrapharm-wi-2023').amount='约 319 万英镑';
byId('dali-baltimore-2024-2026').amount='1.0198 亿美元';
byId('credit-suisse-greensill-2023').amount='约 100 亿美元';
// Existing insurance, insurer participation and a promised payment are distinct evidence.
byId('credit-suisse-greensill-2023').evidence='risk';
byId('ever-given-suez-2021').evidence='risk';
for(const c of cases){c.region=c.region.replace('中国大陆','中国内地');c.keywords=[...new Set([...c.keywords,c.region])];c.addedIn='2.0';}
const categories={do:{name:'高管与董事责任',label:'高管责任'},cyber:{name:'网络与数据安全',label:'网络安全'},pi:{name:'AI 与专业失误',label:'专业失误'},crime:{name:'资金与欺诈风险',label:'资金欺诈'},epl:{name:'用工与雇佣争议',label:'雇佣责任'},product:{name:'产品与食品安全',label:'产品责任'},recall:{name:'产品召回与污染',label:'产品召回'},property:{name:'企业财产与灾害',label:'财产损失'},bi:{name:'停业与收入中断',label:'营业中断'},marine:{name:'运输与海事事故',label:'货运海事'},construction:{name:'工程与施工风险',label:'工程施工'},pollution:{name:'污染与环境责任',label:'环境污染'},wi:{name:'并购与交易保证',label:'并购保证'},keyperson:{name:'关键人物与接班',label:'关键人物'},credit:{name:'赊销与客户违约',label:'贸易信用'},publicliability:{name:'公众与场所责任',label:'公众责任'}};
if(cases.length!==30)throw Error('Expected 30 additions');
const content=`/* Curated expansion; factual nodes and policy analysis remain separate. */\n(function(root){\nconst data=typeof module!=='undefined'&&module.exports?require('./data.js'):root.RiskData;\nconst extra=${JSON.stringify({guides,cases,categories},null,2)};\nObject.assign(data.guides,extra.guides);\nfor(const c of extra.cases)if(!data.cases.some(x=>x.id===c.id))data.cases.push(c);\nconst featured=['boeing-board','epl-activision','recall-samsung-note7-china','carillion-credit-2018','apple-jobs-leave-2009','bi-corbin-king','finsbury-ultrapharm-wi-2023','property-hynix-fire','crime-ubiquiti'];const rank=id=>featured.includes(id)?featured.indexOf(id):100;data.cases.sort((a,b)=>rank(a.id)-rank(b.id));data.categories=extra.categories;data.version='2.0';data.verifiedAt='2026-10-22';\nif(typeof module!=='undefined'&&module.exports)module.exports=data;\n})(typeof window!=='undefined'?window:globalThis);\n`;
fs.writeFileSync(path.join(__dirname,'expanded-data.js'),content,'utf8');
console.log('Prepared 30 additional records, 12 new guides and 16 risk categories.');
