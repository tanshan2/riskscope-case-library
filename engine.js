(function(root){
const groups=[
 ['财报出错','报表出错','财务造假','会计','财报','财务报表'],
 ['假老板视频','假冒老板','假冒老板转账','深度伪造','假cfo','转账被骗'],
 ['董责险','d&o','d＆o','董事责任险','高管责任险','do'],
 ['网络险','网络安全险','cyber','数据泄露'],
 ['专业责任险','职业责任险','pi','e&o','专业失误'],
 ['商业犯罪险','犯罪险','crime','转账诈骗'],
 ['股东起诉','股东索赔','衍生诉讼'],
 ['勒索病毒','勒索软件','notpetya'],
 ['ceo','首席执行官','总裁','老板','企业主'],['cfo','首席财务官','财务总监'],
 ['独董','独立董事'],['ai出错','ai幻觉','虚假判例'],
 ['老板被告','董事失职','高管被诉','个人责任'],
 ['客户信息泄露','客户资料泄露','资料泄露','数据泄露'],
 ['雇佣责任险','雇佣行为责任险','雇佣责任保险','雇佣责任','epl','epli','员工告我','员工起诉公司','被员工告了','员工投诉','职场歧视','裁员争议','裁员','解雇争议'],
 ['产品责任险','产品责任保险','product','产品伤人','产品伤害'],
 ['产品召回险','召回险','recall','产品召回'],
 ['财产险','财产保险','企业财产险','property','工厂火灾','工厂着火','厂房着火','仓库着火'],
 ['营业中断险','营业中断保险','停业险','bi','营业中断','被迫停业'],
 ['货运险','海运险','货物运输保险','marine','货物损坏'],
 ['工程险','工程一切险','建筑工程险','construction','工程受损'],
 ['环境责任险','环境污染责任保险','污染险','pollution','污染事故'],
 ['并购保险','并购保证保险','保证与赔偿保险','w&i','wi','收购踩雷','并购踩雷'],
 ['关键人物保险','关键人物险','keyperson','核心人物离岗','老板生病','老板去世','创始人去世','接班安排'],
 ['贸易信用险','信用险','trade credit','credit','客户倒闭','客户不付款'],
 ['公众责任险','公共责任险','publicliability','顾客受伤']
];
const traditional={'財':'财','務':'务','報':'报','錯':'错','險':'险','責':'责','網':'网','絡':'络','專':'专','業':'业','轉':'转','帳':'账','賬':'账','詐':'诈','騙':'骗','資':'资','訊':'讯','洩':'泄','獨':'独','員':'员','東':'东','訴':'诉','償':'偿','偽':'伪','師':'师','數':'数','據':'据','監':'监','總':'总','長':'长','問':'问','題':'题','會':'会','計':'计','股':'股'};
Object.assign(traditional,{'貨':'货','損':'损','壞':'坏','產':'产','運':'运','營':'营','斷':'断','僱':'雇','傭':'佣','環':'环','境':'境','賠':'赔','購':'购','鍵':'键','員':'员','體':'体','風':'风','險':'险','義':'义','賴':'赖','醫':'医','傷':'伤'});
const normalize=s=>String(s||'').toLowerCase().replace(/[\u3400-\u9fff]/g,c=>traditional[c]||c).replace(/\s+/g,' ').trim();
function alternatives(token){const t=normalize(token);return groups.find(g=>g.includes(t))||[t]}
function includes(text,term){return /^[a-z0-9&/]+$/.test(term)?new RegExp('(?:^|[^a-z0-9])'+term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'(?:$|[^a-z0-9])').test(text):text.includes(term)}
function searchCases(rows,opts={}){
 const terms=normalize(opts.query).split(/[\s，,、]+/).filter(Boolean);
 return rows.map((c,index)=>{
  if(opts.category&&opts.category!=='all'&&c.category!==opts.category)return null;
  if(opts.insurance&&!c.insurance.includes(opts.insurance))return null;
  if(opts.role&&!c.roles.includes(opts.role))return null;
  if(opts.region&&c.region!==opts.region)return null;
  if(opts.evidence&&c.evidence!==opts.evidence)return null;
  if(opts.ids&&!opts.ids.includes(c.id))return null;
  const text=normalize([c.title,c.company,c.summary,c.region,c.industry,...c.roles,...c.keywords,...c.insurance,c.mapping||''].join(' '));
  let score=0;
  for(const term of terms){const aliases=alternatives(term);const hits=aliases.filter(a=>includes(text,a));if(!hits.length)return null;score+=includes(text,term)?5:2;if(includes(normalize(c.title+' '+c.company),term))score+=5;}
  return {c,index,score};
 }).filter(Boolean).sort((a,b)=>opts.sort==='newest'?b.c.date.localeCompare(a.c.date):b.score-a.score||a.index-b.index).map(x=>x.c);
}
const api={searchCases,normalize};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.RiskEngine=api;
})(typeof window!=='undefined'?window:globalThis);
