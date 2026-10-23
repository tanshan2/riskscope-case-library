/* Curated expansion; factual nodes and policy analysis remain separate. */
(function(root){
const data=typeof module!=='undefined'&&module.exports?require('./data.js'):root.RiskData;
const extra={
  "guides": {
    "epl": {
      "name": "雇佣行为责任保险",
      "short": "雇佣行为责任险 EPLI",
      "en": "EMPLOYMENT PRACTICES LIABILITY",
      "lead": "担心的是：招聘、解雇、歧视或骚扰，引发员工索赔。",
      "who": "有招聘、绩效、裁员和员工申诉流程的企业及其管理人员。",
      "scope": [
        "核对因被指歧视、骚扰、报复或不当解雇而产生的抗辩及可保民事责任。",
        "确认公司实体、管理人员及适用的第三方骚扰保障范围。"
      ],
      "limits": [
        "这是雇佣行为责任，不是员工工伤或雇员补偿保险。",
        "工资、离职法定补偿、罚款、故意行为及特定劳动争议可能被排除。"
      ],
      "questions": [
        "公司、董事与 HR 是否都受保，谁负责抗辩？",
        "已有投诉、集体争议和裁员计划如何申报？",
        "何时通知，未经同意与员工和解会有什么影响？"
      ],
      "source": "https://www.aig.com/home/risk-solutions/business/management-and-professional-liability/directors-and-officers-liability"
    },
    "product": {
      "name": "产品责任保险",
      "short": "产品责任险",
      "en": "PRODUCT LIABILITY",
      "lead": "担心的是：卖出去的产品，让客户受伤或损坏了财物。",
      "who": "制造商、品牌商、进口商、批发商及零售企业，尤其是食品、消费品与出口企业。",
      "scope": [
        "评估产品缺陷引发的第三方人身伤害、财产损坏及相关法律抗辩。",
        "核对产品、销售地区、司法管辖及供应链各方的受保身份。"
      ],
      "limits": [
        "召回自身产品、维修更换或纯品质不达标的成本通常须另查。",
        "监管或刑事罚款不能当作产品责任险赔偿；北美等市场可能需单独申报。"
      ],
      "questions": [
        "实际产品和出口国家是否全部申报？",
        "OEM、品牌商与进口商的责任如何衔接？",
        "同一缺陷引起多宗索赔时，限额如何计算？"
      ],
      "source": "https://www.aig.com.hk/business/products/casualty/products-liability"
    },
    "recall": {
      "name": "产品召回及污染产品保险",
      "short": "产品召回险",
      "en": "PRODUCT RECALL",
      "lead": "担心的是：发现安全问题后，要把整批产品收回来。",
      "who": "食品、药品、医疗器械、电子产品及其他消费品的生产商、品牌商与分销商。",
      "scope": [
        "按保单核对召回、运输、销毁、替换、顾问及危机管理费用。",
        "部分方案可评估产品污染、营业损失及品牌恢复费用，分别看定义与限额。"
      ],
      "limits": [
        "普通产品责任险不自动承担自身召回成本；普通品质退货也未必触发召回险。",
        "已知缺陷、故意违法、召回前已有问题及监管罚款存在限制。"
      ],
      "questions": [
        "什么程度的安全危险或污染会触发保障？",
        "自愿召回、监管召回及供应商导致的召回是否包括？",
        "销毁、更换、客户通知及收入损失分别有多少限额？"
      ],
      "source": "https://www.aig.com.hk/business/products/casualty/product-recall-and-contaminated-product-insurance"
    },
    "property": {
      "name": "企业财产保险",
      "short": "企业财产险",
      "en": "COMMERCIAL PROPERTY",
      "lead": "担心的是：厂房、设备、存货被火灾或灾害损坏。",
      "who": "持有或租用厂房、办公室、仓库、商业楼宇及生产设备的企业。",
      "scope": [
        "按列明风险或一切险措辞评估建筑、机器、存货及约定附加费用。",
        "设备故障、自然灾害、清理费用及重置成本要按实际需求分别核对。"
      ],
      "limits": [
        "一切险仍有除外责任；磨损、既有缺陷及未披露情况可能影响索赔。",
        "停产后的利润损失、货物运输或工程在建风险未必属于同一保障。"
      ],
      "questions": [
        "价值按重置成本还是折旧价值，是否存在不足额投保？",
        "台风、洪水、地震及设备故障是否包括？",
        "租赁责任、他人寄存货物和清理费用如何处理？"
      ],
      "source": "https://www.allianz.co.uk/insurance/business/business-insurance/building-and-contents.html"
    },
    "bi": {
      "name": "营业中断保险",
      "short": "营业中断险 BI",
      "en": "BUSINESS INTERRUPTION",
      "lead": "担心的是：设备修好了，停业期间的收入却补不回来。",
      "who": "依赖固定场所、关键设备或重要供应商维持收入的企业。",
      "scope": [
        "评估约定事故导致的毛利、固定费用及合理额外营业费用损失。",
        "核对物质损失前提；供应商、公共事业中断或限制进入扩展须单独确认。"
      ],
      "limits": [
        "常规保障通常有约定物质损失触发；疫情、纯需求下降和网络事件未必承保。",
        "等待期、赔偿期、趋势条款与利润计算口径会影响金额。"
      ],
      "questions": [
        "需要什么事故触发，是否必须先有受保财产损坏？",
        "设备订货与恢复客流的时间是否落在赔偿期内？",
        "供应商或公用事业停摆有无扩展及分项限额？"
      ],
      "source": "https://www.allianz.co.uk/insurance/business/business-insurance/business-interruption.html"
    },
    "marine": {
      "name": "货物运输与海事责任保险",
      "short": "货运与海事保险",
      "en": "CARGO & MARINE LIABILITY",
      "lead": "担心的是：货在途中出事，或船舶事故让多方损失。",
      "who": "进出口商、货主、物流企业及船东；各方所需保单并不相同。",
      "scope": [
        "货主评估运输途中受保货损、共同海损及救助等约定费用。",
        "船东责任与保赔 P&I、船体损失属于不同安排，须分清投保身份。"
      ],
      "limits": [
        "延迟交货、货物固有缺陷、包装不足和纯价格下跌可能不保。",
        "战争、罢工、航线及共同海损担保要求须核对；船东保赔并非货主的货运险。"
      ],
      "questions": [
        "贸易术语下谁承担运输风险，何时起止？",
        "是否涵盖仓至仓、多式联运与共同海损费用？",
        "航线变更、危险品或特殊货物需要怎样申报？"
      ],
      "source": "https://www.allianz.co.uk/insurance/business/business-insurance/cargo.html"
    },
    "construction": {
      "name": "建筑及安装工程保险",
      "short": "工程一切险",
      "en": "CONSTRUCTION ALL RISKS",
      "lead": "担心的是：项目还没交付，在建工程先受损。",
      "who": "业主、承包商、安装商及参与大型建设项目的联合体。",
      "scope": [
        "评估施工期工程实体损坏、材料及约定施工设备风险。",
        "另查第三方责任、设计缺陷后果、延迟完工损失和测试调试阶段保障。"
      ],
      "limits": [
        "设计缺陷本身、返工改善与缺陷导致的其他损坏可能被不同处理。",
        "交付、占用、维护期、免赔额及通知时间会改变保障。"
      ],
      "questions": [
        "业主、总包和分包是否同为被保险人？",
        "设计缺陷相关条款排除的是哪些成本？",
        "何时开始和结束保险，调试及交付后发现损坏怎么处理？"
      ],
      "source": "https://www.allianz.co.uk/content/dam/onemarketing/azuk/allianzcouk/broker/docs/products/construction-project-all-risks/policy-wordings-and-product-information/construction-project-all-risks-product-information-ace2394-3.pdf"
    },
    "pollution": {
      "name": "环境污染责任保险",
      "short": "环境污染责任险",
      "en": "ENVIRONMENTAL LIABILITY",
      "lead": "担心的是：污染不止要清理，还要面对邻居和监管。",
      "who": "工厂、危化品、能源、物流、物业持有及涉及历史污染场地的企业。",
      "scope": [
        "按约定评估污染清理、第三方伤害、财产损失及相关法律费用。",
        "场内、场外、运输和生态修复是否涵盖，须分别列明。"
      ],
      "limits": [
        "一般公众责任可能排除污染，环境险也未必涵盖历史或已知污染。",
        "罚款、故意违法及不符合约定的渐进污染不能默认可赔。"
      ],
      "questions": [
        "保障仅限突发污染，还是也包括渐进污染？",
        "场内场外、运输及自然资源修复范围是什么？",
        "是否需要投保前环境评估和基线记录？"
      ],
      "source": "https://www.aig.com.hk/business/products/casualty/environmental-impairment-liability"
    },
    "wi": {
      "name": "并购保证与赔偿保险",
      "short": "并购保证保险 W&I",
      "en": "WARRANTY & INDEMNITY",
      "lead": "担心的是：公司买下来，才发现卖方保证有问题。",
      "who": "企业收购的买方、卖方及私募基金，按交易结构选择买方或卖方保障。",
      "scope": [
        "核对买卖协议中被承保的陈述、保证和特定赔偿事项。",
        "财务、税务及商业保证的承保范围，以尽调、披露和保险附件为准。"
      ],
      "limits": [
        "已知或已披露事项通常不按未知保证违约处理。",
        "价格下跌、经营不如预期、已知诉讼与特定税务风险可能需另行安排。"
      ],
      "questions": [
        "协议保证与保险附件是否逐条对应？",
        "尽调和披露资料影响哪些除外责任？",
        "通知、损失计算、自负额及追偿权如何约定？"
      ],
      "source": "https://www.aig.com.au/home/risk-solutions/mergers-acquisitions/warranty-and-indemnity-insurance"
    },
    "keyperson": {
      "name": "关键人物寿险及失能保障",
      "short": "关键人物保险",
      "en": "KEY PERSON PROTECTION",
      "lead": "担心的是：核心创始人突然离岗，企业经营和融资受影响。",
      "who": "依赖创始人、核心销售、技术骨干或关键管理人员的企业。",
      "scope": [
        "按合同评估关键人物身故或约定失能后的企业现金流与替代成本需求。",
        "核对投保人、被保险人、受益人、保险利益及适用的知情同意要求。"
      ],
      "limits": [
        "董责险保的是被追责风险，不能替代关键人物的身故或失能保障。",
        "辞职、普通病假、声誉损失和接班人不足未必是给付触发；税务处理依地区而异。"
      ],
      "questions": [
        "企业真正依赖谁，替代和过渡需要多长时间？",
        "合同的身故、失能或疾病定义能覆盖何种情况？",
        "受益、保额、公司贷款和股权承继安排如何衔接？"
      ],
      "source": "https://www.aia.com.hk/content/dam/hk/en/pdf/Thought_Leadership_20200618_final_EN.pdf"
    },
    "credit": {
      "name": "贸易信用保险",
      "short": "贸易信用险",
      "en": "TRADE CREDIT",
      "lead": "担心的是：货和服务都交了，客户却倒闭或不付款。",
      "who": "以赊销方式向企业客户供货、提供服务或开展出口贸易的企业。",
      "scope": [
        "核对合格应收账款因客户破产或约定长期拖欠造成的损失。",
        "买方信用额度、追收服务及适用的政治风险扩展可分别评估。"
      ],
      "limits": [
        "不是所有坏账都保：争议债权、超额度销售及未申报逾期可能影响索赔。",
        "融资结构中的保险权益不等于普通货主账款保障，受益和债权真实性须核对。"
      ],
      "questions": [
        "每个客户批准多少信用额度，何时可调整？",
        "逾期通知、停止供货、追收及等待期要求是什么？",
        "争议发票、预付款和关联方交易是否排除？"
      ],
      "source": "https://www.allianz-trade.com/en_GB/trade-credit-insurance.html"
    },
    "publicliability": {
      "name": "公众责任保险",
      "short": "公众责任险",
      "en": "PUBLIC LIABILITY",
      "lead": "担心的是：经营场所或业务活动，让顾客和第三方受伤。",
      "who": "酒店、餐厅、商场、场馆、活动主办方及其他面对公众或第三方财产的企业。",
      "scope": [
        "评估经营活动引起的第三方人身伤害、财物损坏和相关法律抗辩。",
        "核对租赁场地、承包商、活动、安保及超额责任层的衔接。"
      ],
      "limits": [
        "员工工伤、专业错误、污染、网络和产品风险可能须另查专门保障。",
        "暴力、恐怖行为、保管财物和合同额外承诺可能有除外或分项条件。"
      ],
      "questions": [
        "实际经营、场所和活动是否都已申报？",
        "主办方、场地方与安保承包商如何分担责任？",
        "一次事故涉及多人时，限额及事件定义是什么？"
      ],
      "source": "https://www.aig.com.hk/business/products/casualty/general-liability"
    }
  },
  "cases": [
    {
      "id": "bi-fca-arch",
      "company": "英国 FCA / Arch 等保险人",
      "mark": "BI",
      "title": "政府限制营业，停业损失是否属于保险保障？",
      "category": "bi",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "英国",
      "industry": "多行业",
      "date": "2021-01-15",
      "period": "2021 年最高法院测试案判决",
      "keywords": [
        "停业",
        "营业中断",
        "疫情",
        "政府限制",
        "被迫停业",
        "现金流",
        "停工",
        "英国"
      ],
      "insurance": [
        "bi",
        "property"
      ],
      "evidence": "coverage",
      "amount": "承保条款判决",
      "amountLabel": "不代表每份保单均可赔",
      "summary": "英国监管机构通过测试案，就疫情期间营业中断条款寻求法院解释。最高法院判决涉及疾病、限制进入及因果关系等问题。",
      "facts": [
        "争议覆盖多家保险人的多种营业中断保单措辞。",
        "最高法院于 2021 年 1 月 15 日作出判决。",
        "法院实质支持 FCA 的上诉并驳回保险人的上诉，但具体索赔仍须核对条款及事实。"
      ],
      "outcome": "记录测试案裁判节点，不把测试案的整体结果写成所有企业自动获赔。",
      "insuranceNote": "有公开承保解释判决；本条未列出某家企业实际到账的赔款。",
      "mapping": "营业中断险用于审查停业后的财务损失。通常需有约定物质损失触发，非损坏停业保障依赖明确扩展。",
      "boundary": "普通营业中断保单不自动承保疫情、行政关闭或需求下降。等待期、赔偿期和因果关系仍需证明。",
      "action": "列出不能营业的原因、持续时间和收入变化，再逐条核对触发条件与赔偿期。",
      "sources": [
        [
          "英国最高法院 · FCA v Arch 等测试案",
          "https://www.supremecourt.uk/cases/uksc-2020-0177",
          "2021-01-15"
        ],
        [
          "英国 FCA · 测试案最高法院判决说明",
          "https://www.fca.org.uk/news/press-releases/supreme-court-judgment-business-interruption-insurance-test-case",
          "2021-01-15"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "bi-corbin-king",
      "company": "Corbin & King 餐饮集团",
      "mark": "CK",
      "title": "餐厅不能接待客人，“限制进入”条款能否响应？",
      "category": "bi",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "英国",
      "industry": "餐饮",
      "date": "2022-02-25",
      "period": "2022 年商业法院判决",
      "keywords": [
        "餐厅停业",
        "营业中断",
        "限制进入",
        "疫情",
        "政府限制",
        "多门店",
        "停业",
        "英国"
      ],
      "insurance": [
        "bi"
      ],
      "evidence": "coverage",
      "amount": "承保争议",
      "amountLabel": "非披露的最终到账赔款",
      "summary": "餐饮集团与 AXA 就疫情限制下的营业中断索赔争议。该案针对特定的非损坏限制进入条款，而非所有餐饮保险。",
      "facts": [
        "餐饮集团主张政府措施限制其场所经营。",
        "2022 年 2 月商业法院作出 [2022] EWHC 409 (Comm) 判决。",
        "AXA 的公开说明确认，该措辞在特定情况下可对疫情限制产生的损失提供保障。"
      ],
      "outcome": "仅记录 2022 年裁判与保险人说明，不推定个别门店最终赔偿计算或已收款金额。",
      "insuranceNote": "有法院判决及保险人对承保范围的说明；无本条确认的最终付款金额。",
      "mapping": "多门店企业应核对限制进入扩展、场所定义及限额是每处适用还是共享。",
      "boundary": "不能把这份措辞的结果套用到其他保单；纯营业额下跌和被限制进入是不同触发。",
      "action": "保留各门店营业限制日期、主管机关文件及分店损失账目。",
      "sources": [
        [
          "英国司法机构 · Corbin & King v AXA",
          "https://www.judiciary.uk/judgments/corbin-king-limited-v-axa-insurance/",
          "2022-02-25"
        ],
        [
          "AXA UK · 该案营业中断索赔说明",
          "https://www.axa.co.uk/coronavirus/corbin-and-king-v-axa-business-interruption-claims/",
          "2022"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "property-hynix-fire",
      "company": "SK hynix 无锡工厂",
      "mark": "SK",
      "title": "工厂火灾不只损坏设备，还会影响季度产能",
      "category": "property",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人",
        "工程负责人"
      ],
      "region": "中国内地",
      "industry": "半导体制造",
      "date": "2014-01-28",
      "period": "2013 年火灾 / 2013 财年业绩披露",
      "keywords": [
        "工厂火灾",
        "设备损坏",
        "财产损失",
        "产能下降",
        "停产",
        "工厂停工",
        "供应链",
        "中国内地"
      ],
      "insurance": [
        "property",
        "bi"
      ],
      "evidence": "risk",
      "amount": "工厂火灾与减产",
      "amountLabel": "未以本条确认具体赔款",
      "summary": "SK hynix 在业绩公告中说明，无锡工厂火灾影响生产并拖累季度收入。制造企业的设备修复与停产财务损失需要分开评估。",
      "facts": [
        "无锡晶圆工厂于 2013 年发生火灾。",
        "公司 2013 财年业绩公告将第四季度收入下降部分归因于火灾造成的减产。",
        "事件显示生产设施事故会影响后续经营，不只产生现场维修问题。"
      ],
      "outcome": "依据公司 2013 财年公告记载的生产影响，不推算保险赔款或将整个季度收入变化归因于火灾。",
      "insuranceNote": "本条采用的公司业绩公告未给出可确认的保险到账金额。",
      "mapping": "设备及存货损坏可评估企业财产险，相关停产毛利损失另查营业中断扩展及赔偿期。",
      "boundary": "财产修复金额不等于利润损失；设备故障、污染、清理及供应商中断是否涵盖须另查。",
      "action": "盘点关键设备重置价值、交货周期和替代产能，据此设置财产与营业中断限额。",
      "sources": [
        [
          "SK hynix · 2013 财年与第四季度业绩公告",
          "https://news.skhynix.com/en/sk-hynix-inc-reports-fiscal-year-2013-and-fourth-quarter-results/",
          "2014-01-28"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "property-delor-vue",
      "company": "Delor Vue / Allianz Australia",
      "mark": "DV",
      "title": "楼宇原有缺陷没披露，风灾后出现拒赔争议",
      "category": "property",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "澳大利亚",
      "industry": "物业管理",
      "date": "2022-12-14",
      "period": "2017 年风灾 / 2022 年高院判决",
      "keywords": [
        "台风",
        "风灾",
        "楼宇损坏",
        "投保告知",
        "原有缺陷",
        "拒赔",
        "财产险",
        "澳大利亚"
      ],
      "insurance": [
        "property"
      ],
      "evidence": "coverage",
      "amount": "保险人上诉获准",
      "amountLabel": "2022 年高院裁判节点",
      "summary": "公寓业主法人投保前未披露已知建筑缺陷。风灾索赔后，即使保险人曾表示愿意赔偿，双方仍就承保与修复范围发生争议。",
      "facts": [
        "2017 年气旋 Debbie 损坏楼宇并暴露既有缺陷。",
        "Allianz 曾表示会响应索赔，随后因范围及修复费用争议主张法定抗辩。",
        "2022 年澳大利亚高等法院以多数意见允许保险人上诉。"
      ],
      "outcome": "案件涉及特定的未告知、权利放弃及禁止反言问题；不把最初邮件写成不可撤回的完整承保确认。",
      "insuranceNote": "有公开承保争议裁判，且结果并非被保险人胜诉的通用先例。",
      "mapping": "商业物业和楼宇保险需核对投保告知义务、已知缺陷及灾害造成的新增损坏。",
      "boundary": "未披露的既有缺陷与风灾损坏可能被不同处理；一封初步响应邮件不一定解决所有承保条件。",
      "action": "投保前完整提供楼宇检查、缺陷和维修记录，并书面澄清保险人响应的范围及条件。",
      "sources": [
        [
          "澳大利亚高院 · [2022] HCA 38 官方判决摘要",
          "https://www.hcourt.gov.au/sites/default/files/assets/publications/judgment-summaries/2022/hca-38-2022-12-14.pdf",
          "2022-12-14"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "pollution-bp",
      "company": "BP 深水地平线事故",
      "mark": "BP",
      "title": "污染事故之后，清理、生态修复与罚款分开计算",
      "category": "pollution",
      "roles": [
        "CEO",
        "CFO",
        "董事",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "能源",
      "date": "2015-10-05",
      "period": "2010 年事故 / 2015 年民事和解公告",
      "keywords": [
        "污染事故",
        "漏油",
        "环境修复",
        "清理费用",
        "生态损害",
        "海洋污染",
        "环境责任",
        "美国"
      ],
      "insurance": [
        "pollution",
        "publicliability"
      ],
      "evidence": "risk",
      "amount": "超过 200 亿美元",
      "amountLabel": "公告所述整体民事和解价值",
      "summary": "深水地平线漏油事件后，美国政府与沿海州宣布重大民事和解。环境事故可能同时带来清理、自然资源损害和罚款。",
      "facts": [
        "事故源于 2010 年 Macondo 井喷及随后漏油。",
        "2015 年公告列出的整体和解价值超过 200 亿美元。",
        "安排包括环境损害、相关政府请求及罚款等不同项目。"
      ],
      "outcome": "金额采用 2015 年整体协议公告口径，不是单一受害者赔款，也不是事故所有成本的汇总。",
      "insuranceNote": "该公告并未确认这些款项由环境责任保险支付。",
      "mapping": "评估环境污染责任险时，应把紧急处置、场地清理、第三方损害与生态修复分别列明。",
      "boundary": "普通公众责任险可能有污染除外，环境罚款和故意违法也不能假设可保。",
      "action": "建立污染应急与环境基线记录，并按作业地点和历史污染情况核对承保。",
      "sources": [
        [
          "美国司法部 · BP 与政府及五州民事和解公告",
          "https://www.justice.gov/archives/opa/pr/us-and-five-gulf-states-reach-historic-settlement-bp-resolve-civil-lawsuit-over-deepwater",
          "2015-10-05"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "pollution-norfolk",
      "company": "Norfolk Southern 诺福克南方铁路",
      "mark": "NS",
      "title": "危险品泄漏后，责任可能延伸到长期环境监测",
      "category": "pollution",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "铁路物流",
      "date": "2024-05-23",
      "period": "2023 年脱轨 / 2024 年拟议和解",
      "keywords": [
        "危险品",
        "污染事故",
        "化学品泄漏",
        "脱轨",
        "环境监测",
        "清理费用",
        "供应链",
        "美国"
      ],
      "insurance": [
        "pollution",
        "marine",
        "publicliability"
      ],
      "evidence": "risk",
      "amount": "超过 3.1 亿美元",
      "amountLabel": "2024 年政府拟议和解价值",
      "summary": "East Palestine 列车脱轨污染事件后，政府宣布拟议和解，涵盖清理、健康及环境监测、铁路安全和罚款等项目。",
      "facts": [
        "事故于 2023 年 2 月发生在俄亥俄州 East Palestine。",
        "2024 年 EPA 公告的拟议和解价值超过 3.1 亿美元。",
        "当时协议仍须法院批准，且与其他应急支出和民事索赔并非同一口径。"
      ],
      "outcome": "保持 2024 年公告的拟议阶段，不将协议价值写成已全部支付或全部保险回收。",
      "insuranceNote": "本条 EPA 来源未披露该协议的保险赔付；不同诉讼金额不合并。",
      "mapping": "危险品经营和运输企业可分别评估污染责任、运输责任及公众责任安排。",
      "boundary": "监测义务和罚款不一定属于赔偿性损失，场所、运输及渐进污染条款也可能不同。",
      "action": "将危化品运输路线、应急处置能力、长期监测和第三方暴露纳入风险申报。",
      "sources": [
        [
          "美国 EPA · East Palestine 政府和解公告",
          "https://www.epa.gov/newsreleases/united-states-reaches-over-310-million-settlement-norfolk-southern-address-harms",
          "2024-05-23"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "cyber-colonial",
      "company": "Colonial Pipeline",
      "mark": "CP",
      "title": "勒索软件让管道停运，追回赎金不等于保险理赔",
      "category": "cyber",
      "roles": [
        "CEO",
        "CFO",
        "信息安全负责人",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "能源基础设施",
      "date": "2021-06-07",
      "period": "2021 年勒索事件与司法扣押",
      "keywords": [
        "勒索软件",
        "赎金",
        "系统停摆",
        "关键基础设施",
        "网络攻击",
        "业务中断",
        "停运",
        "美国"
      ],
      "insurance": [
        "cyber",
        "bi"
      ],
      "evidence": "risk",
      "amount": "约 230 万美元",
      "amountLabel": "司法部扣押的加密货币价值",
      "summary": "Colonial Pipeline 遭勒索软件攻击并出现运营中断。司法部后来扣押与赎金有关的加密货币，这与保险赔款是两回事。",
      "facts": [
        "司法部公告将事件与 DarkSide 勒索软件攻击及关键基础设施停运联系起来。",
        "2021 年 6 月公告扣押约 230 万美元加密货币。",
        "扣押依据刑事调查及扣押令，而非保险理赔程序。"
      ],
      "outcome": "金额是扣押时的价值，不代表企业全部赎金、全部损失或保险回收。",
      "insuranceNote": "本条司法部来源没有确认具体保险赔款。",
      "mapping": "网络险需审查响应、恢复、网络勒索及网络营业中断模块；传统停业险不一定响应网络事件。",
      "boundary": "赎金支付还受法律、制裁及保险人同意限制；拥有备份也不保证迅速恢复业务。",
      "action": "演练技术隔离与安全停运，出事后迅速通知响应团队、经纪人及有关执法机关。",
      "sources": [
        [
          "美国司法部 · Colonial Pipeline 赎金相关扣押公告",
          "https://www.justice.gov/archives/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside",
          "2021-06-07"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "cyber-home-depot",
      "company": "Home Depot 家得宝",
      "mark": "HD",
      "title": "支付卡资料泄露，信用监测和诉讼费用持续增加",
      "category": "cyber",
      "roles": [
        "CEO",
        "CFO",
        "信息安全负责人"
      ],
      "region": "美国",
      "industry": "零售",
      "date": "2016-03-24",
      "period": "2014 年事件 / 2015 财年年报",
      "keywords": [
        "数据泄露",
        "客户资料",
        "支付卡",
        "信用监测",
        "网络安全",
        "零售",
        "取证",
        "美国"
      ],
      "insurance": [
        "cyber"
      ],
      "evidence": "recovery",
      "amount": "1 亿美元",
      "amountLabel": "年报披露的累计预期保险回收",
      "summary": "2014 年支付卡数据泄露后，家得宝持续发生调查、客户保护与法律费用。年报将预期保险回收与总费用分开列示。",
      "facts": [
        "2015 财年年报披露事件累计税前总费用 2.61 亿美元。",
        "其中累计预期保险回收为 1 亿美元，净费用 1.61 亿美元。",
        "相关费用涉及调查、客户身份保护、客服及法律服务等项目。"
      ],
      "outcome": "使用截至 2016 年 1 月 31 日财年的会计口径，不作为事件全部最终损失或实际到账证明。",
      "insuranceNote": "存在保险回收披露，但其口径是预期回收，不是全部已收到的赔款。",
      "mapping": "网络险方案应把客户通知、身份保护、调查与法律费用的分项限额一起评估。",
      "boundary": "总费用、预期回收和实际付款分别核对；免赔额及未保项目仍会留在企业账上。",
      "action": "按数据类别和潜在客户数量估算响应成本，而不只依据服务器的价值设置限额。",
      "sources": [
        [
          "Home Depot · 2015 财年 10-K 数据泄露附注",
          "https://www.sec.gov/Archives/edgar/data/354950/000035495016000060/hd-1312016x10xk.htm",
          "2016"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "crime-ubiquiti",
      "company": "Ubiquiti Networks",
      "mark": "U",
      "title": "邮件假冒内部人员，财务部门被诱导跨境汇款",
      "category": "crime",
      "roles": [
        "CFO",
        "CEO",
        "财务负责人"
      ],
      "region": "中国香港",
      "industry": "网络设备",
      "date": "2015-08-28",
      "period": "2015 财年 10-K 披露节点",
      "keywords": [
        "商业邮件诈骗",
        "BEC",
        "假冒员工",
        "转账被骗",
        "跨境汇款",
        "财务审批",
        "假冒老板",
        "中国香港"
      ],
      "insurance": [
        "crime",
        "cyber"
      ],
      "evidence": "risk",
      "amount": "4,670 万美元",
      "amountLabel": "年报披露的被诱导汇出总额",
      "summary": "公司披露，针对财务部门的商业邮件诈骗导致香港子公司资金汇往第三方海外账户。年报还提示保险回收存在不确定性。",
      "facts": [
        "事件通过冒充员工及虚假付款请求针对财务部门。",
        "年报记录被诱导汇款合计 4,670 万美元，当时追回 810 万美元。",
        "公司明确提示，未必能为此损失取得保险保障。"
      ],
      "outcome": "金额采用 2015 年报当时口径，不把当时追回资金写成保险赔款或推定最终净损失。",
      "insuranceNote": "有直接的保险不确定性披露，但没有本条确认的保险到账。",
      "mapping": "重点核对商业犯罪险的社会工程欺诈与资金转移条款，另查网络险是否响应相关损失。",
      "boundary": "员工被诱导主动汇款与未授权系统转移可能适用不同条件，网络安全产品不能替代付款复核。",
      "action": "供应商改账户及大额汇款必须用独立联系方式复核，并保留双人审批证据。",
      "sources": [
        [
          "Ubiquiti · 2015 财年 10-K 商业邮件诈骗披露",
          "https://www.sec.gov/Archives/edgar/data/1511737/000151173715000022/ubnt-06302015x10k.htm",
          "2015"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "public-mgm",
      "company": "MGM Resorts 美高梅国际",
      "mark": "M",
      "title": "重大公众安全事件后，经营者面对大规模索赔",
      "category": "publicliability",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人",
        "董事"
      ],
      "region": "美国",
      "industry": "酒店与活动场所",
      "date": "2019-10-03",
      "period": "2017 年事件 / 2019 年和解公告",
      "keywords": [
        "公众安全",
        "顾客受伤",
        "场所责任",
        "酒店",
        "大型活动",
        "第三方伤害",
        "公众责任",
        "美国"
      ],
      "insurance": [
        "publicliability"
      ],
      "evidence": "arrangement",
      "amount": "至少 7.35 亿美元",
      "amountLabel": "公告约定保险人注入和解基金的下限",
      "summary": "拉斯维加斯枪击事件相关诉讼中，公司与原告律师公布和解安排，并披露保险人将为和解基金提供资金。",
      "facts": [
        "2019 年公告预计和解总额为 7.35 亿至 8 亿美元，取决于参与人数。",
        "公告说明保险人为基金提供至少 7.35 亿美元。",
        "公司指出和解不构成责任承认，并披露其相关保险保障额度。"
      ],
      "outcome": "本条记录 2019 年和解及保险出资安排，不把预估总额或保障限额写为已到账赔款。",
      "insuranceNote": "有公司公开披露的保险出资安排；公告并未公开整套条款，不能认定所有场所责任保单均涵盖同类事件。",
      "mapping": "酒店、场馆和活动经营者可据此评估第三方人身伤害责任及分层限额、事件相关扩展。",
      "boundary": "暴力事件、恐怖行为、安保服务及多份保单之间的责任分配须具体审查。",
      "action": "把场地经营者、活动组织者和安保承包方的职责及保险衔接写清楚。",
      "sources": [
        [
          "MGM · 2019 年和解及保险出资公告（SEC 存档）",
          "https://www.sec.gov/Archives/edgar/data/789570/000119312519261734/d813586dex991.htm",
          "2019-10-03"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "epl-activision",
      "company": "Activision Blizzard 动视暴雪",
      "mark": "AB",
      "title": "员工投诉骚扰后，公司还要面对报复指控",
      "category": "epl",
      "roles": [
        "CEO",
        "董事",
        "人力资源负责人"
      ],
      "region": "美国",
      "industry": "游戏与数字娱乐",
      "date": "2022-03-30",
      "period": "2022 年 EEOC 和解批准公告",
      "keywords": [
        "职场骚扰",
        "性骚扰",
        "怀孕歧视",
        "报复",
        "员工投诉",
        "人力资源",
        "用工",
        "美国"
      ],
      "insurance": [
        "epl"
      ],
      "evidence": "risk",
      "amount": "1,800 万美元",
      "amountLabel": "和解中的金钱救济金额",
      "summary": "EEOC 就性骚扰、怀孕歧视及相关报复提起诉讼后，法院批准和解。风险既在员工遭遇，也在企业如何处理投诉。",
      "facts": [
        "2022 年公告称法院已批准三年期同意令，覆盖集团在美国的相关实体。",
        "同意令包含 1,800 万美元金钱救济及独立平等就业顾问。",
        "整改还包括投诉集中跟踪、培训、审计和定期报告。"
      ],
      "outcome": "本条记录 2022 年法院批准 EEOC 和解的节点，不代表集团其他诉讼一并解决。",
      "insuranceNote": "EEOC 公告未披露保险赔付；1,800 万美元是和解救济金额。",
      "mapping": "编辑关联：雇佣责任险可评估歧视、骚扰、报复索赔及抗辩费用。角色标签指阅读人群。",
      "boundary": "故意行为、既有投诉、通知时点及被保险实体范围须查条款；不能由和解反推承保。",
      "action": "建立能绕过直属主管的投诉入口，并由独立人员记录调查和整改结果。",
      "sources": [
        [
          "EEOC · 法院批准动视暴雪 1,800 万美元和解",
          "https://www.eeoc.gov/newsroom/court-approves-eeocs-18-million-settlement-activision-blizzard",
          "2022-03-30"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "epl-walmart-hiring",
      "company": "Walmart 沃尔玛",
      "mark": "W",
      "title": "招聘测试看似人人一样，也可能筛掉特定群体",
      "category": "epl",
      "roles": [
        "CEO",
        "人力资源负责人",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "零售与物流",
      "date": "2020-09-10",
      "period": "2020 年招聘歧视和解公告",
      "keywords": [
        "招聘歧视",
        "女性求职者",
        "体能测试",
        "招聘筛选",
        "性别",
        "人力资源",
        "配送中心",
        "美国"
      ],
      "insurance": [
        "epl"
      ],
      "evidence": "risk",
      "amount": "2,000 万美元",
      "amountLabel": "向受影响女性支付工资损失的和解基金",
      "summary": "EEOC 指控配送中心的入职体能测试对女性产生不成比例的排除效果。统一考试标准也需要证明与具体工作有关。",
      "facts": [
        "争议测试用于美国食品配送中心订单拣选岗位的招聘。",
        "法院于 2020 年 9 月 9 日录入同意令，次日 EEOC 公布。",
        "沃尔玛同意停止相关体能测试，并设立 2,000 万美元基金。"
      ],
      "outcome": "记录 2020 年同意令及和解安排，不据此断言全部申请人已收到款项。",
      "insuranceNote": "公告未披露保险赔付；基金用途是支付符合条件女性的工资损失。",
      "mapping": "编辑关联：雇佣责任险讨论范围可包括求职者提出的招聘歧视索赔。",
      "boundary": "求职者定义、工资性质款项及整改费用是否承保须逐项核对，不能只看保单名称。",
      "action": "定期按群体检查招聘筛选的通过率，并保存与岗位要求的验证材料。",
      "sources": [
        [
          "EEOC · 沃尔玛全国招聘歧视案和解",
          "https://www.eeoc.gov/newsroom/walmart-inc-pay-20-million-settle-eeoc-nationwide-hiring-discrimination-case",
          "2020-09-10"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "epl-ford-pregnancy",
      "company": "Ford 福特汽车",
      "mark": "F",
      "title": "录用条件都通过了，怀孕求职者却迟迟不能入职",
      "category": "epl",
      "roles": [
        "人力资源负责人",
        "运营负责人",
        "CEO"
      ],
      "region": "美国",
      "industry": "汽车制造",
      "date": "2022-11-04",
      "period": "2022 年怀孕歧视诉讼和解公告",
      "keywords": [
        "怀孕歧视",
        "录用通知",
        "入职延期",
        "体检",
        "招聘",
        "女性员工",
        "用工",
        "美国"
      ],
      "insurance": [
        "epl"
      ],
      "evidence": "risk",
      "amount": "11.5 万美元",
      "amountLabel": "雇佣歧视案件和解金",
      "summary": "EEOC 称，一名获有条件录用通知的孕妇通过体检等要求后仍未被安排上班。入职交接的决定同样可能引发歧视诉讼。",
      "facts": [
        "争议发生于伊利诺伊州 Chicago Heights 冲压工厂。",
        "EEOC 称公司医生已准许其于 2019 年 8 月上班，但她迟迟未获排班。",
        "福特同意支付 11.5 万美元，并接受两年期同意令及培训、投诉报告要求。"
      ],
      "outcome": "记录 2022 年和解公告及整改义务；EEOC 所述招聘经过属于其诉讼主张。",
      "insuranceNote": "来源未披露保险安排或赔付；和解金不能直接标成理赔额。",
      "mapping": "编辑关联：雇佣责任险可评估孕产歧视及求职阶段的索赔风险。",
      "boundary": "医疗资料要求、劳动法义务和保险保障各有边界，不能以投保替代合法招聘流程。",
      "action": "把有条件录用到正式入职之间的延迟设为 HR 必须复核的异常事项。",
      "sources": [
        [
          "EEOC · 福特怀孕歧视案 115,000 美元和解",
          "https://www.eeoc.gov/newsroom/ford-motor-company-pay-115000-settle-eeoc-pregnancy-discrimination-case",
          "2022-11-04"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "product-chipotle-foodborne",
      "company": "Chipotle Mexican Grill",
      "mark": "C",
      "title": "员工带病上班和温控失守，让顾客集体生病",
      "category": "product",
      "roles": [
        "CEO",
        "运营负责人",
        "产品负责人"
      ],
      "region": "美国",
      "industry": "连锁餐饮",
      "date": "2020-04-21",
      "period": "2015—2018 年食源性疾病事件 / 2020 年暂缓起诉协议",
      "keywords": [
        "食品安全",
        "食物中毒",
        "诺如病毒",
        "带病上班",
        "温控",
        "门店管理",
        "顾客受伤",
        "美国"
      ],
      "insurance": [
        "product"
      ],
      "evidence": "risk",
      "amount": "2,500 万美元",
      "amountLabel": "暂缓起诉协议中的刑事罚金",
      "summary": "DOJ 公告称，2015 至 2018 年至少五次食源性疾病事件造成逾 1,100 人生病。总部的食品安全制度需要落实到门店。",
      "facts": [
        "公司认可的事实陈述涉及病员工未被排除上岗及食物温控失误。",
        "2020 年公司同意支付 2,500 万美元刑事罚金。",
        "三年期暂缓起诉协议要求改进食品安全合规计划、培训和人员安排。"
      ],
      "outcome": "记录 2020 年协议成立时的义务，不将当时的有条件暂缓起诉写成后续结案结果。",
      "insuranceNote": "DOJ 来源未披露保险赔付；这里的 2,500 万美元是罚金。",
      "mapping": "编辑关联：产品或公众责任险可评估食品致顾客人身伤害的民事索赔。",
      "boundary": "刑事罚金、培训整改和自身经营损失不能当然计入产品责任险赔偿。",
      "action": "对门店病假排除和关键温度记录实施抽查，并赋予值班经理停供权限。",
      "sources": [
        [
          "美国 DOJ · Chipotle 食源性疾病案暂缓起诉协议",
          "https://www.justice.gov/archives/opa/pr/chipotle-mexican-grill-agrees-pay-25-million-fine-and-enter-deferred-prosecution-agreement",
          "2020-04-21"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "product-bluebell-listeria",
      "company": "Blue Bell Creameries",
      "mark": "BB",
      "title": "检出污染后悄悄撤货，风险并没有真正消失",
      "category": "product",
      "roles": [
        "CEO",
        "运营负责人",
        "产品负责人"
      ],
      "region": "美国",
      "industry": "冰淇淋与食品制造",
      "date": "2020-05-01",
      "period": "2015 年污染事件 / 2020 年认罪与和解协议公告",
      "keywords": [
        "食品污染",
        "李斯特菌",
        "冰淇淋",
        "食品安全",
        "撤货",
        "通知顾客",
        "工厂卫生",
        "美国"
      ],
      "insurance": [
        "product",
        "recall"
      ],
      "evidence": "risk",
      "amount": "1,935 万美元",
      "amountLabel": "刑事罚金、没收与民事和解合计",
      "summary": "Blue Bell 同意就受污染冰淇淋认罪并解决相关民事指控。公告描述了检出李斯特菌后撤货却未正式通知客户的处理。",
      "facts": [
        "2015 年部分冰淇淋检出李斯特菌，并与医院病人感染菌株相连。",
        "公司协议中的刑事罚金和没收合计 1,725 万美元，另有 210 万美元民事和解。",
        "公告还披露工厂清洁和发货前检测等整改。"
      ],
      "outcome": "记录 2020 年 5 月公司同意认罪及和解的节点，不延伸判断另案个人被告的最终结果。",
      "insuranceNote": "DOJ 公告未披露保险赔付，1,935 万美元也不是消费者赔偿总额。",
      "mapping": "编辑关联：食品致伤责任与污染产品召回费用应分别评估。",
      "boundary": "罚金、没收、故意隐瞒及合同扩大责任不能假设由产品责任或召回险承担。",
      "action": "将阳性检测与公开召回决策联动，禁止以内部撤货替代正式风险通知。",
      "sources": [
        [
          "美国 DOJ · Blue Bell 冰淇淋污染案公司协议",
          "https://www.justice.gov/archives/opa/pr/blue-bell-creameries-agrees-plead-guilty-and-pay-1935-million-ice-cream-listeria",
          "2020-05-01"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "product-gm-ignition",
      "company": "General Motors 通用汽车",
      "mark": "GM",
      "title": "零部件失效会致伤，延迟披露又增加另一层责任",
      "category": "product",
      "roles": [
        "CEO",
        "产品负责人",
        "董事"
      ],
      "region": "美国",
      "industry": "汽车制造",
      "date": "2015-09-17",
      "period": "点火开关缺陷 / 2015 年暂缓起诉协议",
      "keywords": [
        "产品缺陷",
        "点火开关",
        "安全气囊",
        "汽车安全",
        "事故伤亡",
        "缺陷报告",
        "延迟披露",
        "美国"
      ],
      "insurance": [
        "product",
        "recall"
      ],
      "evidence": "risk",
      "amount": "9 亿美元",
      "amountLabel": "协议要求转交美国政府并没收的款项",
      "summary": "点火开关可能离开运行位置，使前排安全气囊无法展开。通用在 2015 年协议中承认未披露安全缺陷并误导消费者。",
      "facts": [
        "DOJ 称缺陷涉及开关扭矩不足，增加特定碰撞中的重伤和死亡风险。",
        "公司同意向政府转交 9 亿美元，并接受独立监督员。",
        "协议要求检查安全声明、工程资料共享及召回流程。"
      ],
      "outcome": "记录 2015 年暂缓起诉及没收安排；此金额与受害者补偿计划应分开理解。",
      "insuranceNote": "来源未披露保险赔付；9 亿美元不是产品责任险理赔或受害者赔偿总额。",
      "mapping": "编辑关联：致伤索赔评估产品责任险，修复和撤回产品另查召回保障。",
      "boundary": "政府没收款、故意隐瞒和自身产品修复费用不能据本案推定可保。",
      "action": "让工程缺陷与事故资料直接进入安全委员会，并为监管报告设置责任人和期限。",
      "sources": [
        [
          "美国 DOJ 纽约南区 · 通用汽车暂缓起诉与 9 亿美元没收",
          "https://www.justice.gov/usao-sdny/pr/manhattan-us-attorney-announces-criminal-charges-against-general-motors-and-deferred",
          "2015-09-17"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "recall-samsung-note7-china",
      "company": "Samsung 三星中国",
      "mark": "S",
      "title": "手机过热起火后，退换货和回收要同时落地",
      "category": "recall",
      "roles": [
        "CEO",
        "产品负责人",
        "运营负责人",
        "CFO"
      ],
      "region": "中国内地",
      "industry": "消费电子",
      "date": "2016-10-11",
      "period": "2016 年中国大陆 Note7 全量召回公告",
      "keywords": [
        "手机召回",
        "电池起火",
        "过热",
        "退款",
        "退换货",
        "产品安全",
        "中国大陆",
        "Note7",
        "中国内地"
      ],
      "insurance": [
        "recall",
        "product"
      ],
      "evidence": "risk",
      "amount": "190,984 台",
      "amountLabel": "中国大陆召回数量，包含此前 1,858 台",
      "summary": "质检总局公告称，三星备案召回中国大陆销售的全部 SM-N9300 Note7。撤下销售页面之后，还要处理退换、物流与消费者通知。",
      "facts": [
        "2016 年 10 月 11 日起召回 190,984 台，含 9 月首次召回部分。",
        "公告称截至当时大陆发生 20 起过热、燃烧事故。",
        "方案包括换其他型号并退差价，或按原价退款；召回邮递费由公司承担。"
      ],
      "outcome": "记录当日召回范围与方案，不把数量写成已全部回收，也不混同美国召回数字。",
      "insuranceNote": "新华网转载的质检总局公告未披露保险赔付；台数不是损失金额。",
      "mapping": "编辑关联：召回险评估通知、回收等约定费用，致伤及财产损害另查产品责任险。",
      "boundary": "退款、换新、品牌损失及邮费是否纳入承保，取决于具体费用定义和分项限额。",
      "action": "按销售地区建立序列号、客户联系和回收完成记录，避免重复或遗漏召回。",
      "sources": [
        [
          "国家质检总局公告（新华网转载）· 三星中国召回 Note7",
          "https://www.xinhuanet.com/politics/2016-10/11/c_129318136.htm",
          "2016-10-11"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "recall-peloton-tread",
      "company": "Peloton Interactive",
      "mark": "P",
      "title": "已经召回的产品，还被配送出去",
      "category": "recall",
      "roles": [
        "CEO",
        "运营负责人",
        "产品负责人"
      ],
      "region": "美国",
      "industry": "健身器材",
      "date": "2023-01-05",
      "period": "2021 年召回 / 2023 年民事罚款和解公告",
      "keywords": [
        "跑步机",
        "召回",
        "卷入伤害",
        "延迟报告",
        "继续配送",
        "仓储",
        "供应链",
        "美国"
      ],
      "insurance": [
        "recall",
        "product"
      ],
      "evidence": "risk",
      "amount": "1,906.5 万美元",
      "amountLabel": "CPSC 民事罚款和解金额",
      "summary": "CPSC 就未及时报告跑步机风险、继续配送已召回产品的指控公布和解。召回通知还需要传到仓库和第三方配送商。",
      "facts": [
        "Tread+ 与 CPSC 于 2021 年 5 月宣布召回。",
        "CPSC 称公告后仍有 38 台已召回跑步机被配送。",
        "2023 年公司同意支付 19,065,000 美元，并维持强化合规及五年报告安排。"
      ],
      "outcome": "2023 年 1 月公告称委员会暂时接受协议并征求公众意见，不能据此写成理赔到账。",
      "insuranceNote": "CPSC 公告未披露保险赔付；列示金额为民事罚款。",
      "mapping": "编辑关联：召回险可评估约定召回费用；伤害赔偿属于另行审查的产品责任。",
      "boundary": "罚款、明知召回后继续出货和合规整改费用不能当然视为保险责任。",
      "action": "将召回型号同步加入 ERP、仓库和第三方配送的强制禁止出货名单。",
      "sources": [
        [
          "美国 CPSC · Peloton 19,065,000 美元民事罚款和解",
          "https://www.cpsc.gov/Newsroom/News-Releases/2023/Peloton-Agrees-to-Pay-19-Million-Civil-Penalty-for-Failure-to-Immediately-Report-Tread-Treadmill-Entrapment-Hazards-and-for-Distributing-Recalled-Treadmills",
          "2023-01-05"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "recall-takata-expansion",
      "company": "Takata 高田",
      "mark": "T",
      "title": "同一零部件装进多个品牌，召回会跨越整条供应链",
      "category": "recall",
      "roles": [
        "CEO",
        "产品负责人",
        "运营负责人",
        "CFO"
      ],
      "region": "美国",
      "industry": "汽车零部件",
      "date": "2016-05-04",
      "period": "2016 年安全气囊充气器召回扩围公告",
      "keywords": [
        "安全气囊",
        "供应链召回",
        "零部件",
        "高温高湿",
        "充气器",
        "批次追踪",
        "供应商",
        "美国"
      ],
      "insurance": [
        "recall",
        "product"
      ],
      "evidence": "risk",
      "amount": "新增约 3,500万—4,000 万个",
      "amountLabel": "公告计划分阶段召回的充气器数量",
      "summary": "美国交通部宣布扩大高田充气器召回。时间、湿气和温度变化影响推进剂，供应商缺陷由多个整车品牌共同处理。",
      "facts": [
        "2016 年公告计划在原有约 2,880 万个基础上扩围，分阶段至 2019 年。",
        "范围涉及不含干燥剂的特定硝酸铵推进剂充气器。",
        "召回优先次序结合零部件年龄及高湿、温度变化的暴露风险。"
      ],
      "outcome": "记录 2016 年扩围计划，新增数量既不是整车数量，也不是最终回收完成量。",
      "insuranceNote": "交通部公告未披露保险赔付或本轮召回成本。",
      "mapping": "编辑关联：零部件召回应评估自身费用、客户召回费用及合同追偿的保障边界。",
      "boundary": "一处缺陷可能跨批次和客户，事故合并、限额及追溯范围须查保单，不能只按单车估算。",
      "action": "建立零部件批次与整车客户的双向追踪表，并演练高风险批次优先处置。",
      "sources": [
        [
          "美国交通部 · 扩大并加速高田安全气囊充气器召回",
          "https://www.transportation.gov/briefing-room/us-department-transportation-expands-and-accelerates-takata-air-bag-inflator-recall",
          "2016-05-04"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "recall-philips-foam",
      "company": "Philips Respironics 飞利浦伟康",
      "mark": "PH",
      "title": "设备内部材料劣化，召回还要协调患者持续治疗",
      "category": "recall",
      "roles": [
        "CEO",
        "产品负责人",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "医疗器械",
      "date": "2021-06-14",
      "period": "2021 年消音泡棉问题召回通知",
      "keywords": [
        "医疗器械召回",
        "呼吸机",
        "CPAP",
        "泡棉劣化",
        "材料安全",
        "维修换机",
        "患者通知",
        "美国"
      ],
      "insurance": [
        "recall",
        "product"
      ],
      "evidence": "risk",
      "amount": "召回通知",
      "amountLabel": "2021 年公告未列明确成本",
      "summary": "飞利浦就部分呼吸治疗设备的消音泡棉发布召回通知。材料可能产生颗粒或释放化学物质，处置需同时考虑治疗连续性。",
      "facts": [
        "公告涉及部分 Bi-Level PAP、CPAP 和机械呼吸机。",
        "公司称 PE-PUR 泡棉可能降解，颗粒进入气路被吸入或摄入。",
        "公司提出更新使用说明及维修换机计划；FDA 于次日发布公司公告。"
      ],
      "outcome": "本条仅记录 2021 年召回启动及当时方案，不代表后续维修、更换或诉讼全部完成。",
      "insuranceNote": "FDA 托管的公司公告未披露保险赔付，未将设备产量当作召回台数。",
      "mapping": "编辑关联：召回费用与患者人身伤害责任分别核对召回险和产品责任险。",
      "boundary": "换机、维修、患者服务及后续伤害索赔须分别查条款，风险通知本身并不证明伤害因果。",
      "action": "在召回预案中加入医疗机构联络和替代设备安排，按型号追踪维修换机进展。",
      "sources": [
        [
          "FDA 托管公司公告 · Philips 消音泡棉风险召回通知",
          "https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts/philips-issues-recall-notification-mitigate-potential-health-risks-related-sound-abatement-foam",
          "2021-06-15"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "finsbury-ultrapharm-wi-2023",
      "company": "Finsbury Food Group",
      "mark": "FF",
      "title": "收购后发现降价，买方索赔被驳回",
      "category": "wi",
      "roles": [
        "CEO",
        "CFO",
        "实际控制人"
      ],
      "region": "英国",
      "industry": "食品制造",
      "date": "2023-06-26",
      "period": "2018年收购；2023年6月高院判决节点",
      "keywords": [
        "并购",
        "保证保险",
        "价格调整",
        "买方知情",
        "估值",
        "英国"
      ],
      "insurance": [
        "wi"
      ],
      "evidence": "coverage",
      "amount": "约 319 万英镑",
      "amountLabel": "买方主张的企业价值减少额（英镑），非获赔额",
      "summary": "Finsbury收购无麸质烘焙企业Ultrapharm后，就客户产品配方及价格变化向买方W&I保险人索赔。法院驳回请求，显示交易不如预期并不自动构成保单损失。",
      "facts": [
        "交易与买方W&I保单均签于2018年8月31日。",
        "索赔涉及交易状况保证及降价保证。",
        "法院审查了保证是否被违反、买方实际知情以及收购价格与损失。"
      ],
      "outcome": "2023年6月26日高院判定Finsbury无权取得所请求的保险补偿声明或损害赔偿，并驳回其诉讼。",
      "insuranceNote": "这是实际W&I承保诉讼；判决结果为请求被驳回，不能将买方主张金额写成保险赔款。",
      "mapping": "编辑映射：并购保证保险应与交易保证、披露材料和估值逻辑一起审查。",
      "boundary": "本案存在已知事项除外等具体条款；结论取决于该交易证据，不代表所有降价或配方变化均不承保。",
      "action": "收购前留存定价和客户变更记录，并逐项核对保证、已知事项除外及损失计算方法。",
      "sources": [
        [
          "英国高院原判：Finsbury v Axis [2023] EWHC 1559 (Comm)",
          "https://caselaw.nationalarchives.gov.uk/ewhc/comm/2023/1559",
          "2023-06-26"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "project-angel-wi-2024",
      "company": "Project Angel Bidco / King Construction",
      "mark": "PA",
      "title": "表格写着承保，反贿赂除外仍挡住索赔",
      "category": "wi",
      "roles": [
        "CEO",
        "CFO",
        "董事",
        "实际控制人"
      ],
      "region": "英国",
      "industry": "工程并购",
      "date": "2024-05-02",
      "period": "2019年收购与投保；2024年5月上诉判决节点",
      "keywords": [
        "并购",
        "反贿赂",
        "除外责任",
        "保单表格",
        "条款冲突",
        "英国"
      ],
      "insurance": [
        "wi"
      ],
      "evidence": "coverage",
      "amount": "除外争议",
      "amountLabel": "承保解释争议，非保险赔款",
      "summary": "收购King Construction的买方认为，承保表与反贿赂、反腐败责任除外之间存在错误，要求法院修正解释保单。上诉法院多数意见驳回上诉。",
      "facts": [
        "买方2019年收购King全部股本，并取得买方W&I保单。",
        "争议集中于ABC责任除外与承保表的关系。",
        "案件以假定事实审理初步法律问题，并非对贿赂事实作出定罪认定。"
      ],
      "outcome": "2024年5月2日上诉法院以多数意见维持相关除外条款解释，驳回买方上诉。",
      "insuranceNote": "来源是法院核准判决原文的公开镜像。此节点未确认买方取得保险赔款，也不能据此认定目标公司实际实施犯罪。",
      "mapping": "编辑映射：W&I的保证承保表须与正文定义和专项除外共同阅读。",
      "boundary": "承保表标注并不能独立消除正文除外；本案不等于所有反贿赂相关风险在所有W&I保单中都被排除。",
      "action": "签约前让交易、法务和保险团队逐行核对承保表与定义、专项除外及优先顺序条款。",
      "sources": [
        [
          "英国上诉法院核准判决原文镜像：Project Angel v Axis [2024] EWCA Civ 446",
          "https://files.passle.net/Passle/5a1c2144b00e80131c20b495/MediaLibrary/Images/2025-09-04-11-16-26-528-68b9750a3233b2a0084e3891.pdf",
          "2024-05-02"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "ever-given-suez-2021",
      "company": "Shoei Kisen / Ever Given",
      "mark": "EG",
      "title": "船脱浅后，还要解决扣船与赔偿谈判",
      "category": "marine",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "埃及／国际航运",
      "industry": "集装箱航运",
      "date": "2021-07-07",
      "period": "2021年3月搁浅；7月7日协议后离开扣留水域节点",
      "keywords": [
        "苏伊士运河",
        "搁浅",
        "保赔险",
        "扣船",
        "和解",
        "埃及／国际航运"
      ],
      "insurance": [
        "marine"
      ],
      "evidence": "risk",
      "amount": "和解未披露金额",
      "amountLabel": "保险人参与和解安排，非公开赔款金额",
      "summary": "Ever Given在苏伊士运河搁浅后，救援完成并未立即结束商业风险。UK P&I Club与船东及其他保险人参与谈判，协议达成后船舶和船员才得以继续航程。",
      "facts": [
        "UK Club官方声明记录了2021年3月23日搁浅事件。",
        "保险人与船东、其他利益方共同参与与运河管理局的谈判。",
        "2021年7月7日声明确认正式协议后船舶驶离大苦湖。"
      ],
      "outcome": "截至2021年7月7日官方声明，船舶获准离开大苦湖并计划前往塞得港检查。",
      "insuranceNote": "官方声明证实保险人参与解决方案，但未在该节点公布最终和解金额或各保险人的赔付分摊。",
      "mapping": "编辑映射：重大海事事故同时触及船舶责任、救助、扣船及货物交付安排。",
      "boundary": "船东保赔责任与货主货运险不是同一保障；船期延误或纯经济损失也不能仅凭搁浅事实认定可赔。",
      "action": "事故时尽早协调船东、承运人、货主和保险人，并留存运输合同、货权及担保要求。",
      "sources": [
        [
          "UK P&I Club官方媒体声明（页面含英文，2021年7月7日更新）",
          "https://www.ukpandi.com/ja/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9%E3%81%A8%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9/%E3%83%8B%E3%83%A5%E3%83%BC%E3%82%B9/article/press-release-articles/2021/ever-given-media-statement/",
          "2021-07-07"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "dali-baltimore-2024-2026",
      "company": "Grace Ocean / Synergy Marine / DALI",
      "mark": "DA",
      "title": "撞桥和解与保险付款，要分开看金额",
      "category": "marine",
      "roles": [
        "CEO",
        "CFO",
        "运营负责人"
      ],
      "region": "美国／国际航运",
      "industry": "集装箱航运",
      "date": "2026-08-25",
      "period": "2024年3月撞桥、10月联邦和解；2026年8月保赔集团付款更新节点",
      "keywords": [
        "巴尔的摩",
        "撞桥",
        "清障",
        "保赔险",
        "再保险",
        "美国／国际航运"
      ],
      "insurance": [
        "marine"
      ],
      "evidence": "recovery",
      "amount": "1.0198 亿美元",
      "amountLabel": "2024年联邦应急响应费用和解额（美元），非已披露保险赔款",
      "summary": "DALI撞毁巴尔的摩大桥后，船东与运营方就联邦响应费用达成和解。另在2026年，国际保赔集团确认Britannia代表会员向马里兰州付款及再保资金缺口的补足。",
      "facts": [
        "事故发生于2024年3月26日。",
        "2024年司法部公告的联邦和解不含桥梁重建损失。",
        "2026年8月集团更新称，各再保市场已支付相关份额。"
      ],
      "outcome": "2024年联邦费用争议达成和解；2026年8月25日更新确认另一起马里兰州和解付款的再保缺口已补足。",
      "insuranceNote": "联邦和解与马里兰州和解是不同事项。2026年公告证实实际保险付款机制，未披露付款总额，不能把101,980,000美元归为该笔保险赔款。",
      "mapping": "编辑映射：大型海事责任会跨越船东责任、保赔互助、共同分摊和再保险安排。",
      "boundary": "某一政府费用和解不能代表全部遇难者、重建或商业损失均已解决；来源仅支持所列历史节点。",
      "action": "分别追踪每一索赔人的责任基础、和解范围、保险层次和实际付款，避免用总索赔替代可回收保险金额。",
      "sources": [
        [
          "美国司法部：DALI船东及运营方就联邦费用达成和解",
          "https://www.justice.gov/archives/opa/pr/us-reaches-settlement-over-100m-civil-lawsuit-against-owner-and-operator-vessel-destroyed",
          "2024-10-24"
        ],
        [
          "国际保赔集团：Baltimore press release及2026年8月25日更新",
          "https://www.igpandi.org/article/baltimore-press-release/",
          "2026-08-25"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "sky-mace-roof-2024",
      "company": "Sky UK / Mace",
      "mark": "SK",
      "title": "施工时进水，保单到期后损坏继续扩大",
      "category": "construction",
      "roles": [
        "CFO",
        "工程负责人",
        "运营负责人"
      ],
      "region": "英国",
      "industry": "建筑工程／传媒",
      "date": "2024-12-16",
      "period": "2014—2016年建设；2024年12月上诉判决节点",
      "keywords": [
        "工程一切险",
        "屋面进水",
        "保期",
        "损害扩大",
        "调查费用",
        "英国"
      ],
      "insurance": [
        "construction"
      ],
      "evidence": "coverage",
      "amount": "承保范围重审",
      "amountLabel": "判决涉及承保范围与损失计量，非最终赔款",
      "summary": "Sky总部屋面在施工期间进水，木质构件的损坏延续至保期届满后。上诉法院认为，保期内承保损坏引起的可预见后续恶化，不应仅因发生于到期后而被排除。",
      "facts": [
        "Sky为业主，Mace为总承包商且列为被保险人。",
        "争议保期于2017年7月15日结束。",
        "法院也讨论了合理调查费用及按事件计算自留额。"
      ],
      "outcome": "2024年12月16日上诉法院支持Sky与Mace相关上诉，将损失重新评估等问题发回原审法官处理。",
      "insuranceNote": "这是工程一切险实际承保判决，但该上诉判决不是最终赔款支付公告。",
      "mapping": "编辑映射：工程交付与保单到期之后，施工期损坏的调查、修复和恶化仍可能引发争议。",
      "boundary": "须证明保期内已有承保损坏以及后续损害的因果关系；新发生的独立事故不能直接套用本案。",
      "action": "保存施工防水、含水率、隐蔽验收和交付时状态证据，并在发现异常时及时通知保险人。",
      "sources": [
        [
          "英国上诉法院原判：Sky / Mace v Riverstone [2024] EWCA Civ 1567",
          "https://caselaw.nationalarchives.gov.uk/ewca/civ/2024/1567",
          "2024-12-16"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "seattle-tunnel-bertha-2022",
      "company": "Seattle Tunnel Partners / WSDOT",
      "mark": "ST",
      "title": "盾构机停了两年，工程险仍有关键缺口",
      "category": "construction",
      "roles": [
        "工程负责人",
        "CFO",
        "运营负责人"
      ],
      "region": "美国",
      "industry": "隧道基建",
      "date": "2022-09-15",
      "period": "2013年12月至2015年12月停机；2022年9月州最高法院节点",
      "keywords": [
        "工程一切险",
        "盾构机",
        "设计缺陷",
        "延误",
        "物理损坏",
        "美国"
      ],
      "insurance": [
        "construction"
      ],
      "evidence": "coverage",
      "amount": "停机约两年",
      "amountLabel": "工程中断时长，非保险赔款",
      "summary": "西雅图隧道项目盾构机停机维修期间，承包商与交通部门向工程险保险人索赔。法院维持有关设计缺陷除外、延误损失及隧道使用受阻的部分简易判决。",
      "facts": [
        "保单分别设置隧道工程与盾构机保障部分。",
        "盾构机2013年12月停机，2015年12月恢复掘进。",
        "法院指出具体损坏原因仍有事实争议，审理重点为条款解释。"
      ],
      "outcome": "2022年9月15日华盛顿州最高法院维持上诉法院对相关承保问题的判断。",
      "insuranceNote": "所引网页载有州最高法院原判全文。判决不等于认定所有实际损坏均不赔，也未披露最终全部理赔金额。",
      "mapping": "编辑映射：工程物损、施工机械损坏和延误损失应分项安排，不能由一切险名称推断保障。",
      "boundary": "设计缺陷导致的机械损坏可能受专项除外影响；工程不能使用本身未必满足物理损坏触发条件。",
      "action": "投保时逐项核对关键机械、设计缺陷、试运行和延误保障，并测试单点设备失效情景。",
      "sources": [
        [
          "华盛顿州最高法院原判全文转载：Seattle Tunnel Partners v Great Lakes, No.100168-1",
          "https://law.justia.com/cases/washington/supreme-court/2022/100-168-1.html",
          "2022-09-15"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "apple-jobs-leave-2009",
      "company": "Apple",
      "mark": "AP",
      "title": "创始人休病假，日常经营交给接班团队",
      "category": "keyperson",
      "roles": [
        "CEO",
        "董事",
        "实际控制人"
      ],
      "region": "美国",
      "industry": "消费电子",
      "date": "2009-01-14",
      "period": "2009年1月14日病假与代理管理安排公告节点",
      "keywords": [
        "关键人物",
        "健康",
        "接班",
        "授权",
        "业务连续性",
        "美国"
      ],
      "insurance": [
        "keyperson"
      ],
      "evidence": "risk",
      "amount": "管理交接",
      "amountLabel": "关键人物缺席的运营安排，非损失或赔款",
      "summary": "苹果公告乔布斯因健康原因休假至2009年6月底，由Tim Cook负责日常运营，乔布斯仍参与重大策略决策。这是实际关键人物缺席与接班安排案例。",
      "facts": [
        "乔布斯在官方员工信中说明健康问题比原先认识的更复杂。",
        "Tim Cook受托负责公司日常运营。",
        "董事会支持该安排，乔布斯计划继续参与重大策略决策。"
      ],
      "outcome": "截至2009年1月14日公告，公司已公布病假期间的经营授权安排。",
      "insuranceNote": "所引公告没有披露关键人物保险、索赔或赔款；本条仅为风险事件，不能据此推断投保、财务损失或给付。",
      "mapping": "编辑映射：可用于讨论关键人物保障需求及接班计划；保险映射不代表苹果实际购买该险种。",
      "boundary": "关键人物险须以具体死亡、疾病或失能给付条件为准；普通离职、注意力分散或短期缺席未必触发。",
      "action": "为关键岗位建立代理授权和接班清单，再按缺席期间资金需求评估是否配置相应保障。",
      "sources": [
        [
          "Apple官方公告：Apple Media Advisory",
          "https://www.apple.com/newsroom/2009/01/14Apple-Media-Advisory/",
          "2009-01-14"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "mcdonalds-cantalupo-2004",
      "company": "McDonald's",
      "mark": "MC",
      "title": "董事长兼CEO突然离世，董事会当天接班",
      "category": "keyperson",
      "roles": [
        "CEO",
        "董事",
        "实际控制人"
      ],
      "region": "美国",
      "industry": "连锁餐饮",
      "date": "2004-04-19",
      "period": "2004年4月19日CEO突然离世及继任公告节点",
      "keywords": [
        "关键人物",
        "突然身故",
        "继任",
        "董事会",
        "管理交接",
        "美国"
      ],
      "insurance": [
        "keyperson"
      ],
      "evidence": "risk",
      "amount": "紧急接班",
      "amountLabel": "实际关键人物身故与管理交接事件，非保险赔款",
      "summary": "麦当劳董事长兼CEO Jim Cantalupo突然离世。公司同日公告由Charlie Bell接任总裁兼CEO，并由Andrew J. McKenna担任非执行董事长，任命立即生效。",
      "facts": [
        "公司2004年4月19日公告Cantalupo突然离世。",
        "董事会当天选举原总裁兼COO Charlie Bell担任CEO。",
        "公司向SEC提交8-K，并附身故与继任两份新闻稿。"
      ],
      "outcome": "截至2004年4月19日公告，CEO及董事长继任安排立即生效。",
      "insuranceNote": "SEC文件和两份新闻稿未披露关键人物保险或赔款；本条是实际身故及经营接班事件，不是已证实保险赔案。",
      "mapping": "编辑映射：核心高管突然身故可用于讨论继任授权、关键人物保障和过渡资金需求。",
      "boundary": "公司是否投保、受益人是谁、保障金额和给付条件均不能由死亡事实推定；继任计划仍需独立建立。",
      "action": "为关键岗位制定立即生效的继任授权，并把过渡期招聘、融资及经营资金需求纳入保障评估。",
      "sources": [
        [
          "McDonald's向SEC提交的2004年4月19日8-K",
          "https://www.sec.gov/Archives/edgar/data/63908/000006390804000021/mainbody.htm",
          "2004-04-19"
        ],
        [
          "McDonald's官方身故公告（SEC附件99.1）",
          "https://www.sec.gov/Archives/edgar/data/63908/000006390804000021/press_release1.htm",
          "2004-04-19"
        ],
        [
          "McDonald's官方继任公告（SEC附件99.2）",
          "https://www.sec.gov/Archives/edgar/data/63908/000006390804000021/press_release2.htm",
          "2004-04-19"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "carillion-credit-2018",
      "company": "Carillion及其供应商",
      "mark": "CA",
      "title": "大客户突然清算，已供货款要进债权程序",
      "category": "credit",
      "roles": [
        "CFO",
        "财务负责人",
        "运营负责人",
        "实际控制人"
      ],
      "region": "英国",
      "industry": "建筑供应链",
      "date": "2018-01-15",
      "period": "2018年1月强制清算及债权申报通知节点",
      "keywords": [
        "贸易信用",
        "客户破产",
        "应收账款",
        "供应商",
        "债权申报",
        "英国"
      ],
      "insurance": [
        "credit"
      ],
      "evidence": "risk",
      "amount": "应收款暴露",
      "amountLabel": "供应商债权风险，非已披露保险赔款",
      "summary": "Carillion及相关公司进入强制清算。英国政府通知，已提供货物或服务但尚未收到付款的供应商，应登记为清算债权人，呈现大客户违约对供应链的冲击。",
      "facts": [
        "2018年1月15日法院对Carillion及相关公司作出清盘令。",
        "官方接管人被任命为清算人。",
        "未收货款及已付款未收货的相关方被提示登记债权。"
      ],
      "outcome": "截至该政府通知节点，相关公司进入法院清算程序，供应商需依程序申报债权。",
      "insuranceNote": "政府通知没有披露任何具体供应商的信用险保单或赔款；本条为实际客户破产风险事件，不能认定每个供应商都已投保或获赔。",
      "mapping": "编辑映射：赊销客户破产可用于检查贸易信用保险与应收账款集中度。",
      "boundary": "是否属于保单买方、信用限额内交易、账款真实性及申报时限，都需要依具体信用险条款核对。",
      "action": "对大客户设置应收账款和账期限额，出现财务预警时核对保单额度并保存交付、验收及催收证据。",
      "sources": [
        [
          "英国破产署及就业与养老金部：Carillion清算及供应商通知",
          "https://www.gov.uk/government/news/carillion-declares-insolvency-information-for-employees-creditors-and-suppliers",
          "2018-01-15"
        ]
      ],
      "addedIn": "2.0"
    },
    {
      "id": "credit-suisse-greensill-2023",
      "company": "Credit Suisse / Greensill",
      "mark": "CS",
      "title": "以为账款有保险，监管仍发现风控失守",
      "category": "credit",
      "roles": [
        "CEO",
        "CFO",
        "董事",
        "财务负责人"
      ],
      "region": "瑞士／英国",
      "industry": "供应链金融",
      "date": "2023-02-28",
      "period": "2021年3月基金关闭；2023年2月FINMA执法结论节点",
      "keywords": [
        "贸易信用",
        "供应链金融",
        "未来应收",
        "保险依赖",
        "对手方",
        "瑞士／英国"
      ],
      "insurance": [
        "credit"
      ],
      "evidence": "risk",
      "amount": "约 100 亿美元",
      "amountLabel": "四只基金关闭时客户投资总额约数（美元），非损失或赔款",
      "summary": "FINMA认定，瑞信在Greensill相关业务中对账款掌握和控制不足，却依赖Greensill以自身名义安排的保险。基金资产后来还包括尚未形成的未来应收预期。",
      "facts": [
        "瑞信于2021年3月关闭四只相关基金。",
        "保险原计划保障大部分账款的买方违约风险。",
        "监管认定瑞信在风险管理及组织安排方面严重违反监管义务。"
      ],
      "outcome": "2023年2月28日FINMA公布执法结论并要求整改，包括高层定期整体审查重要业务关系及明确管理责任。",
      "insuranceNote": "监管来源确认存在保险安排与依赖，但未确认本条所涉保险赔款的实际回收总额。客户投资规模不能等同保险损失或可赔金额。",
      "mapping": "编辑映射：信用保险不能替代底层债权核验、投保主体与受益安排核对，以及独立对手方审查。",
      "boundary": "尚未形成的未来收入预期不当然等同真实应收账款；是否承保、是否有效及赔付条件须按具体保单判断。",
      "action": "核验基础合同、真实债务人、账款形成时间和保险权利链，并独立跟踪保险到期与额度变化。",
      "sources": [
        [
          "FINMA：对瑞信Greensill业务执法调查结论",
          "https://www.finma.ch/en/news/2023/02/20230228-mm-greensill/",
          "2023-02-28"
        ]
      ],
      "addedIn": "2.0"
    }
  ],
  "categories": {
    "do": {
      "name": "高管与董事责任",
      "label": "高管责任"
    },
    "cyber": {
      "name": "网络与数据安全",
      "label": "网络安全"
    },
    "pi": {
      "name": "AI 与专业失误",
      "label": "专业失误"
    },
    "crime": {
      "name": "资金与欺诈风险",
      "label": "资金欺诈"
    },
    "epl": {
      "name": "用工与雇佣争议",
      "label": "雇佣责任"
    },
    "product": {
      "name": "产品与食品安全",
      "label": "产品责任"
    },
    "recall": {
      "name": "产品召回与污染",
      "label": "产品召回"
    },
    "property": {
      "name": "企业财产与灾害",
      "label": "财产损失"
    },
    "bi": {
      "name": "停业与收入中断",
      "label": "营业中断"
    },
    "marine": {
      "name": "运输与海事事故",
      "label": "货运海事"
    },
    "construction": {
      "name": "工程与施工风险",
      "label": "工程施工"
    },
    "pollution": {
      "name": "污染与环境责任",
      "label": "环境污染"
    },
    "wi": {
      "name": "并购与交易保证",
      "label": "并购保证"
    },
    "keyperson": {
      "name": "关键人物与接班",
      "label": "关键人物"
    },
    "credit": {
      "name": "赊销与客户违约",
      "label": "贸易信用"
    },
    "publicliability": {
      "name": "公众与场所责任",
      "label": "公众责任"
    }
  }
};
Object.assign(data.guides,extra.guides);
for(const c of extra.cases)if(!data.cases.some(x=>x.id===c.id))data.cases.push(c);
const featured=['boeing-board','epl-activision','recall-samsung-note7-china','carillion-credit-2018','apple-jobs-leave-2009','bi-corbin-king','finsbury-ultrapharm-wi-2023','property-hynix-fire','crime-ubiquiti'];const rank=id=>featured.includes(id)?featured.indexOf(id):100;data.cases.sort((a,b)=>rank(a.id)-rank(b.id));data.categories=extra.categories;data.version='2.0';data.verifiedAt='2026-10-22';
if(typeof module!=='undefined'&&module.exports)module.exports=data;
})(typeof window!=='undefined'?window:globalThis);
