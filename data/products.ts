import type { Product, CategoryInfo, ProductCategory } from "@/types"

export const categories: CategoryInfo[] = [
  {
    slug: "chemicals",
    title: { ru: "Химическая продукция", kz: "Химиялық өнімдер", en: "Chemical Products" },
    description: {
      ru: "Промышленная химия высокой чистоты для производственных процессов",
      kz: "Өндірістік процестерге арналған жоғары тазалықтағы өнеркәсіптік химия",
      en: "High-purity industrial chemicals for manufacturing processes",
    },
    icon: "flask",
    count: 40,
  },
  {
    slug: "metals",
    title: { ru: "Металлы и сплавы", kz: "Металдар мен қорытпалар", en: "Metals & Alloys" },
    description: {
      ru: "Широкий ассортимент металлопродукции и специализированных сплавов",
      kz: "Металл өнімдері мен мамандандырылған қорытпалардың кең ассортименті",
      en: "Wide range of metal products and specialized alloys",
    },
    icon: "layers",
    count: 40,
  },
  {
    slug: "equipment",
    title: { ru: "Оборудование", kz: "Жабдықтар", en: "Equipment" },
    description: {
      ru: "Промышленное оборудование и комплектующие для энергетических объектов",
      kz: "Энергетика объектілеріне арналған өнеркәсіптік жабдықтар мен құрамдас бөлшектер",
      en: "Industrial equipment and components for energy facilities",
    },
    icon: "cog",
    count: 30,
  },
]

function generateChemicals(): Product[] {
  const chemicals = [
    { name: { ru: "Серная кислота", kz: "Күкірт қышқылы", en: "Sulfuric Acid" }, slug: "sulfuric-acid", price: 45000 },
    { name: { ru: "Соляная кислота", kz: "Тұз қышқылы", en: "Hydrochloric Acid" }, slug: "hydrochloric-acid", price: 38000 },
    { name: { ru: "Каустическая сода", kz: "Каустикалық сода", en: "Caustic Soda" }, slug: "caustic-soda", price: 52000 },
    { name: { ru: "Азотная кислота", kz: "Азот қышқылы", en: "Nitric Acid" }, slug: "nitric-acid", price: 67000 },
    { name: { ru: "Ортофосфорная кислота", kz: "Ортофосфор қышқылы", en: "Phosphoric Acid" }, slug: "phosphoric-acid", price: 73000 },
    { name: { ru: "Перекись водорода", kz: "Сутегі асқын тотығы", en: "Hydrogen Peroxide" }, slug: "hydrogen-peroxide", price: 29000 },
    { name: { ru: "Хлорид натрия (техн.)", kz: "Натрий хлориді (техн.)", en: "Sodium Chloride (tech.)" }, slug: "sodium-chloride", price: 18000 },
    { name: { ru: "Карбонат натрия", kz: "Натрий карбонаты", en: "Sodium Carbonate" }, slug: "sodium-carbonate", price: 24000 },
    { name: { ru: "Гидроксид калия", kz: "Калий гидроксиді", en: "Potassium Hydroxide" }, slug: "potassium-hydroxide", price: 61000 },
    { name: { ru: "Аммиак водный", kz: "Сулы аммиак", en: "Aqueous Ammonia" }, slug: "aqueous-ammonia", price: 34000 },
    { name: { ru: "Этиленгликоль", kz: "Этиленгликоль", en: "Ethylene Glycol" }, slug: "ethylene-glycol", price: 55000 },
    { name: { ru: "Метанол технический", kz: "Техникалық метанол", en: "Technical Methanol" }, slug: "technical-methanol", price: 42000 },
    { name: { ru: "Изопропиловый спирт", kz: "Изопропил спирті", en: "Isopropyl Alcohol" }, slug: "isopropyl-alcohol", price: 48000 },
    { name: { ru: "Толуол", kz: "Толуол", en: "Toluene" }, slug: "toluene", price: 56000 },
    { name: { ru: "Ксилол", kz: "Ксилол", en: "Xylene" }, slug: "xylene", price: 53000 },
    { name: { ru: "Формальдегид", kz: "Формальдегид", en: "Formaldehyde" }, slug: "formaldehyde", price: 39000 },
    { name: { ru: "Силикат натрия", kz: "Натрий силикаты", en: "Sodium Silicate" }, slug: "sodium-silicate", price: 27000 },
    { name: { ru: "Хлорид кальция", kz: "Кальций хлориді", en: "Calcium Chloride" }, slug: "calcium-chloride", price: 22000 },
    { name: { ru: "Сульфат магния", kz: "Магний сульфаты", en: "Magnesium Sulfate" }, slug: "magnesium-sulfate", price: 31000 },
    { name: { ru: "Бикарбонат натрия", kz: "Натрий бикарбонаты", en: "Sodium Bicarbonate" }, slug: "sodium-bicarbonate", price: 19000 },
    { name: { ru: "Хлорид цинка", kz: "Мырыш хлориді", en: "Zinc Chloride" }, slug: "zinc-chloride", price: 64000 },
    { name: { ru: "Борная кислота", kz: "Бор қышқылы", en: "Boric Acid" }, slug: "boric-acid", price: 47000 },
    { name: { ru: "Уксусная кислота", kz: "Сірке қышқылы", en: "Acetic Acid" }, slug: "acetic-acid", price: 36000 },
    { name: { ru: "Щавелевая кислота", kz: "Қымыздық қышқылы", en: "Oxalic Acid" }, slug: "oxalic-acid", price: 58000 },
    { name: { ru: "Гипохлорит натрия", kz: "Натрий гипохлориті", en: "Sodium Hypochlorite" }, slug: "sodium-hypochlorite", price: 21000 },
    { name: { ru: "Тринатрийфосфат", kz: "Тринатрийфосфат", en: "Trisodium Phosphate" }, slug: "trisodium-phosphate", price: 33000 },
    { name: { ru: "Полиакриламид", kz: "Полиакриламид", en: "Polyacrylamide" }, slug: "polyacrylamide", price: 89000 },
    { name: { ru: "Антифриз промышленный", kz: "Өнеркәсіптік антифриз", en: "Industrial Antifreeze" }, slug: "industrial-antifreeze", price: 41000 },
    { name: { ru: "Деэмульгатор", kz: "Деэмульгатор", en: "Demulsifier" }, slug: "demulsifier", price: 95000 },
    { name: { ru: "Ингибитор коррозии", kz: "Коррозия ингибиторы", en: "Corrosion Inhibitor" }, slug: "corrosion-inhibitor", price: 78000 },
    { name: { ru: "Флокулянт катионный", kz: "Катиондық флокулянт", en: "Cationic Flocculant" }, slug: "cationic-flocculant", price: 82000 },
    { name: { ru: "Реагент для водоподготовки", kz: "Су дайындауға арналған реагент", en: "Water Treatment Reagent" }, slug: "water-treatment-reagent", price: 69000 },
    { name: { ru: "Диоксид кремния", kz: "Кремний диоксиді", en: "Silicon Dioxide" }, slug: "silicon-dioxide", price: 44000 },
    { name: { ru: "Оксид алюминия", kz: "Алюминий оксиді", en: "Aluminum Oxide" }, slug: "aluminum-oxide", price: 57000 },
    { name: { ru: "Карбид кальция", kz: "Кальций карбиді", en: "Calcium Carbide" }, slug: "calcium-carbide", price: 36000 },
    { name: { ru: "Бентонит", kz: "Бентонит", en: "Bentonite" }, slug: "bentonite", price: 25000 },
    { name: { ru: "Активированный уголь", kz: "Белсендірілген көмір", en: "Activated Carbon" }, slug: "activated-carbon", price: 71000 },
    { name: { ru: "Сульфат натрия", kz: "Натрий сульфаты", en: "Sodium Sulfate" }, slug: "sodium-sulfate", price: 20000 },
    { name: { ru: "Хромовый ангидрид", kz: "Хром ангидриді", en: "Chromic Anhydride" }, slug: "chromic-anhydride", price: 112000 },
    { name: { ru: "Фторид натрия", kz: "Натрий фториді", en: "Sodium Fluoride" }, slug: "sodium-fluoride", price: 54000 },
  ]

  return chemicals.map((c, i) => ({
    id: i + 1,
    slug: c.slug,
    category: "chemicals" as ProductCategory,
    title: c.name,
    shortDescription: {
      ru: `${c.name.ru} промышленного качества для технологических процессов`,
      kz: `Технологиялық процестерге арналған өнеркәсіптік сапалы ${c.name.kz}`,
      en: `Industrial-grade ${c.name.en} for technological processes`,
    },
    description: {
      ru: `${c.name.ru} — высококачественный химический продукт, применяемый в промышленных и производственных процессах. Поставляется в соответствии с ГОСТ, с полным пакетом сопроводительной документации. Доступны различные фасовки и концентрации.`,
      kz: `${c.name.kz} — өнеркәсіптік және өндірістік процестерде қолданылатын жоғары сапалы химиялық өнім. ГОСТ сәйкес жеткізіледі, ілеспе құжаттаманың толық пакетімен. Түрлі фасовкалар мен концентрациялар қол жетімді.`,
      en: `${c.name.en} is a high-quality chemical product used in industrial and manufacturing processes. Supplied in accordance with GOST standards, with a complete set of documentation. Available in various packaging and concentrations.`,
    },
    price: c.price,
    currency: "KZT",
    specs: [
      { key: { ru: "ГОСТ/ТУ", kz: "ГОСТ/ТУ", en: "GOST/TU" }, value: { ru: "ГОСТ 2184-2013", kz: "ГОСТ 2184-2013", en: "GOST 2184-2013" } },
      { key: { ru: "Чистота", kz: "Тазалық", en: "Purity" }, value: { ru: "99.5%", kz: "99.5%", en: "99.5%" } },
      { key: { ru: "Фасовка", kz: "Фасовка", en: "Packaging" }, value: { ru: "Канистра 25 л / Бочка 200 л", kz: "Канистр 25 л / Бөшке 200 л", en: "Canister 25L / Barrel 200L" } },
      { key: { ru: "Срок хранения", kz: "Сақтау мерзімі", en: "Shelf Life" }, value: { ru: "12 месяцев", kz: "12 ай", en: "12 months" } },
    ],
    tags: ["chemistry", "industrial", c.slug],
    images: [`/placeholder-product.svg`],
    relatedSlugs: chemicals.filter((_, j) => j !== i).slice(0, 4).map(r => r.slug),
  }))
}

function generateMetals(): Product[] {
  const metals = [
    { name: { ru: "Лист нержавеющий AISI 304", kz: "Тот баспайтын парақ AISI 304", en: "Stainless Steel Sheet AISI 304" }, slug: "stainless-sheet-304", price: 185000 },
    { name: { ru: "Лист нержавеющий AISI 316", kz: "Тот баспайтын парақ AISI 316", en: "Stainless Steel Sheet AISI 316" }, slug: "stainless-sheet-316", price: 245000 },
    { name: { ru: "Труба бесшовная Ст20", kz: "Жіксіз құбыр Ст20", en: "Seamless Pipe St20" }, slug: "seamless-pipe-st20", price: 127000 },
    { name: { ru: "Труба электросварная", kz: "Электрдәнекерленген құбыр", en: "Electric Welded Pipe" }, slug: "electric-welded-pipe", price: 89000 },
    { name: { ru: "Арматура А500С", kz: "Арматура А500С", en: "Rebar A500C" }, slug: "rebar-a500c", price: 156000 },
    { name: { ru: "Швеллер 16П", kz: "Швеллер 16П", en: "Channel Bar 16P" }, slug: "channel-bar-16p", price: 142000 },
    { name: { ru: "Двутавр 20Б1", kz: "Қостілік 20Б1", en: "I-Beam 20B1" }, slug: "i-beam-20b1", price: 198000 },
    { name: { ru: "Уголок 50x50x5", kz: "Бұрыш 50x50x5", en: "Angle Bar 50x50x5" }, slug: "angle-bar-50", price: 94000 },
    { name: { ru: "Круг стальной Ст45", kz: "Болат дөңгелек Ст45", en: "Steel Round Bar St45" }, slug: "steel-round-st45", price: 112000 },
    { name: { ru: "Полоса стальная", kz: "Болат жолақ", en: "Steel Flat Bar" }, slug: "steel-flat-bar", price: 78000 },
    { name: { ru: "Лист горячекатаный", kz: "Ыстықтай илемделген парақ", en: "Hot-Rolled Sheet" }, slug: "hot-rolled-sheet", price: 95000 },
    { name: { ru: "Лист холоднокатаный", kz: "Суықтай илемделген парақ", en: "Cold-Rolled Sheet" }, slug: "cold-rolled-sheet", price: 108000 },
    { name: { ru: "Лист оцинкованный", kz: "Мырышталған парақ", en: "Galvanized Sheet" }, slug: "galvanized-sheet", price: 118000 },
    { name: { ru: "Проволока вязальная", kz: "Байлау сымы", en: "Binding Wire" }, slug: "binding-wire", price: 56000 },
    { name: { ru: "Сетка сварная", kz: "Дәнекерленген тор", en: "Welded Mesh" }, slug: "welded-mesh", price: 67000 },
    { name: { ru: "Медный лист М1", kz: "Мыс парақ М1", en: "Copper Sheet M1" }, slug: "copper-sheet-m1", price: 520000 },
    { name: { ru: "Медная труба", kz: "Мыс құбыр", en: "Copper Tube" }, slug: "copper-tube", price: 480000 },
    { name: { ru: "Алюминиевый лист АМг3", kz: "Алюминий парағы АМг3", en: "Aluminum Sheet AMg3" }, slug: "aluminum-sheet-amg3", price: 310000 },
    { name: { ru: "Алюминиевый профиль", kz: "Алюминий профилі", en: "Aluminum Profile" }, slug: "aluminum-profile", price: 275000 },
    { name: { ru: "Латунный пруток Л63", kz: "Жез шыбық Л63", en: "Brass Rod L63" }, slug: "brass-rod-l63", price: 390000 },
    { name: { ru: "Титановый лист ВТ1-0", kz: "Титан парағы ВТ1-0", en: "Titanium Sheet VT1-0" }, slug: "titanium-sheet-vt1", price: 1250000 },
    { name: { ru: "Никелевая проволока", kz: "Никель сымы", en: "Nickel Wire" }, slug: "nickel-wire", price: 780000 },
    { name: { ru: "Лист Хардокс 450", kz: "Парақ Хардокс 450", en: "Hardox 450 Sheet" }, slug: "hardox-450-sheet", price: 420000 },
    { name: { ru: "Фланец стальной", kz: "Болат фланец", en: "Steel Flange" }, slug: "steel-flange", price: 89000 },
    { name: { ru: "Отвод стальной", kz: "Болат иін", en: "Steel Elbow" }, slug: "steel-elbow", price: 67000 },
    { name: { ru: "Заглушка стальная", kz: "Болат тығын", en: "Steel Cap" }, slug: "steel-cap", price: 45000 },
    { name: { ru: "Переход стальной", kz: "Болат өтпе", en: "Steel Reducer" }, slug: "steel-reducer", price: 56000 },
    { name: { ru: "Тройник стальной", kz: "Болат үштік", en: "Steel Tee" }, slug: "steel-tee", price: 78000 },
    { name: { ru: "Балка двутавровая 30Б", kz: "Қостілік арқалық 30Б", en: "I-Beam 30B" }, slug: "i-beam-30b", price: 267000 },
    { name: { ru: "Шестигранник стальной", kz: "Болат алты қырлы", en: "Steel Hexagon Bar" }, slug: "steel-hexagon", price: 134000 },
    { name: { ru: "Лист жаропрочный 12Х18Н10Т", kz: "Ыстыққа берік парақ 12Х18Н10Т", en: "Heat-Resistant Sheet 12Kh18N10T" }, slug: "heat-resistant-sheet", price: 380000 },
    { name: { ru: "Полоса бронзовая БрАЖ", kz: "Қола жолақ БрАЖ", en: "Bronze Strip BrAZh" }, slug: "bronze-strip", price: 620000 },
    { name: { ru: "Цинковый анод", kz: "Мырыш аноды", en: "Zinc Anode" }, slug: "zinc-anode", price: 145000 },
    { name: { ru: "Молибденовая проволока", kz: "Молибден сымы", en: "Molybdenum Wire" }, slug: "molybdenum-wire", price: 950000 },
    { name: { ru: "Вольфрамовый пруток", kz: "Вольфрам шыбығы", en: "Tungsten Rod" }, slug: "tungsten-rod", price: 1100000 },
  ]

  return metals.map((m, i) => ({
    id: 41 + i,
    slug: m.slug,
    category: "metals" as ProductCategory,
    title: m.name,
    shortDescription: {
      ru: `${m.name.ru} — сертифицированная металлопродукция с доставкой`,
      kz: `${m.name.kz} — жеткізумен сертификатталған металл өнімдері`,
      en: `${m.name.en} — certified metal products with delivery`,
    },
    description: {
      ru: `${m.name.ru} производства ведущих металлургических предприятий. Полное соответствие ГОСТ. Поставляем партиями любого объёма с комплектом сертификатов качества. Возможна резка и дополнительная обработка по ТЗ заказчика.`,
      kz: `Жетекші металлургиялық кәсіпорындардың ${m.name.kz} өндірісі. ГОСТ-қа толық сәйкестік. Сапа сертификаттары жиынтығымен кез-келген көлемде партиялармен жеткіземіз. Тапсырыс берушінің ТЗ бойынша кесу және қосымша өңдеу мүмкіндігі бар.`,
      en: `${m.name.en} produced by leading metallurgical enterprises. Full GOST compliance. We supply in batches of any volume with a complete set of quality certificates. Cutting and additional processing according to customer specifications is available.`,
    },
    price: m.price,
    currency: "KZT",
    specs: [
      { key: { ru: "Марка стали", kz: "Болат маркасы", en: "Steel Grade" }, value: { ru: "Ст20 / AISI 304", kz: "Ст20 / AISI 304", en: "St20 / AISI 304" } },
      { key: { ru: "ГОСТ", kz: "ГОСТ", en: "GOST" }, value: { ru: "ГОСТ 19903-2015", kz: "ГОСТ 19903-2015", en: "GOST 19903-2015" } },
      { key: { ru: "Размеры", kz: "Өлшемдері", en: "Dimensions" }, value: { ru: "По запросу", kz: "Сұраныс бойынша", en: "On request" } },
      { key: { ru: "Покрытие", kz: "Жабын", en: "Coating" }, value: { ru: "Без покрытия / Цинк", kz: "Жабынсыз / Мырыш", en: "Uncoated / Zinc" } },
    ],
    tags: ["metal", "steel", "alloy", m.slug],
    images: [`/placeholder-product.svg`],
    relatedSlugs: metals.filter((_, j) => j !== i).slice(0, 4).map(r => r.slug),
  }))
}

function generateEquipment(): Product[] {
  const equipment = [
    { name: { ru: "Теплообменник пластинчатый", kz: "Пластиналы жылу алмастырғыш", en: "Plate Heat Exchanger" }, slug: "plate-heat-exchanger", price: 2450000 },
    { name: { ru: "Теплообменник кожухотрубный", kz: "Қабықшалы құбырлы жылу алмастырғыш", en: "Shell & Tube Heat Exchanger" }, slug: "shell-tube-exchanger", price: 3200000 },
    { name: { ru: "Насос центробежный", kz: "Ортадан тепкіш сорғы", en: "Centrifugal Pump" }, slug: "centrifugal-pump", price: 1850000 },
    { name: { ru: "Насос дозировочный", kz: "Мөлшерлегіш сорғы", en: "Dosing Pump" }, slug: "dosing-pump", price: 780000 },
    { name: { ru: "Компрессор поршневой", kz: "Поршеньді компрессор", en: "Piston Compressor" }, slug: "piston-compressor", price: 4500000 },
    { name: { ru: "Компрессор винтовой", kz: "Бұрандалы компрессор", en: "Screw Compressor" }, slug: "screw-compressor", price: 5800000 },
    { name: { ru: "Котёл паровой", kz: "Бу қазаны", en: "Steam Boiler" }, slug: "steam-boiler", price: 8500000 },
    { name: { ru: "Котёл водогрейный", kz: "Су жылытқыш қазан", en: "Hot Water Boiler" }, slug: "hot-water-boiler", price: 6200000 },
    { name: { ru: "Ёмкость нержавеющая", kz: "Тот баспайтын ыдыс", en: "Stainless Steel Tank" }, slug: "stainless-tank", price: 1950000 },
    { name: { ru: "Фильтр промышленный", kz: "Өнеркәсіптік сүзгі", en: "Industrial Filter" }, slug: "industrial-filter", price: 890000 },
    { name: { ru: "Задвижка клиновая", kz: "Сыналы ысырма", en: "Gate Valve" }, slug: "gate-valve", price: 345000 },
    { name: { ru: "Клапан обратный", kz: "Кері клапан", en: "Check Valve" }, slug: "check-valve", price: 278000 },
    { name: { ru: "Кран шаровой", kz: "Шарлы кран", en: "Ball Valve" }, slug: "ball-valve", price: 156000 },
    { name: { ru: "Регулятор давления", kz: "Қысым реттегіші", en: "Pressure Regulator" }, slug: "pressure-regulator", price: 420000 },
    { name: { ru: "Манометр промышленный", kz: "Өнеркәсіптік манометр", en: "Industrial Pressure Gauge" }, slug: "pressure-gauge", price: 67000 },
    { name: { ru: "Датчик температуры", kz: "Температура датчигі", en: "Temperature Sensor" }, slug: "temperature-sensor", price: 89000 },
    { name: { ru: "Расходомер ультразвуковой", kz: "Ультрадыбыстық шығынөлшегіш", en: "Ultrasonic Flow Meter" }, slug: "ultrasonic-flow-meter", price: 1250000 },
    { name: { ru: "Деаэратор", kz: "Деаэратор", en: "Deaerator" }, slug: "deaerator", price: 3800000 },
    { name: { ru: "Сепаратор пара", kz: "Бу сепараторы", en: "Steam Separator" }, slug: "steam-separator", price: 2100000 },
    { name: { ru: "Градирня вентиляторная", kz: "Желдеткішті градирня", en: "Cooling Tower" }, slug: "cooling-tower", price: 7500000 },
    { name: { ru: "Дымосос промышленный", kz: "Өнеркәсіптік түтін сорғыш", en: "Industrial Draft Fan" }, slug: "draft-fan", price: 1650000 },
    { name: { ru: "Электродвигатель АИР", kz: "АИР электрқозғалтқышы", en: "Electric Motor AIR" }, slug: "electric-motor-air", price: 890000 },
    { name: { ru: "Частотный преобразователь", kz: "Жиіліктік түрлендіргіш", en: "Variable Frequency Drive" }, slug: "vfd", price: 560000 },
    { name: { ru: "Щит управления", kz: "Басқару қалқаны", en: "Control Panel" }, slug: "control-panel", price: 1340000 },
    { name: { ru: "Газоанализатор", kz: "Газ анализаторы", en: "Gas Analyzer" }, slug: "gas-analyzer", price: 980000 },
    { name: { ru: "Циклон промышленный", kz: "Өнеркәсіптік циклон", en: "Industrial Cyclone" }, slug: "industrial-cyclone", price: 1450000 },
    { name: { ru: "Конденсатоотводчик", kz: "Конденсат шығарғыш", en: "Steam Trap" }, slug: "steam-trap", price: 234000 },
    { name: { ru: "Горелка газовая", kz: "Газ оттығы", en: "Gas Burner" }, slug: "gas-burner", price: 2800000 },
    { name: { ru: "Экономайзер", kz: "Экономайзер", en: "Economizer" }, slug: "economizer", price: 4100000 },
    { name: { ru: "Воздухоподогреватель", kz: "Ауа жылытқыш", en: "Air Preheater" }, slug: "air-preheater", price: 3500000 },
  ]

  return equipment.map((e, i) => ({
    id: 76 + i,
    slug: e.slug,
    category: "equipment" as ProductCategory,
    title: e.name,
    shortDescription: {
      ru: `${e.name.ru} для промышленных и энергетических объектов`,
      kz: `Өнеркәсіптік және энергетика объектілеріне арналған ${e.name.kz}`,
      en: `${e.name.en} for industrial and energy facilities`,
    },
    description: {
      ru: `${e.name.ru} — надёжное промышленное оборудование от ведущих производителей. Комплектация и технические параметры подбираются индивидуально под задачи заказчика. Гарантия, сервис, пусконаладка.`,
      kz: `${e.name.kz} — жетекші өндірушілердің сенімді өнеркәсіптік жабдығы. Жиынтықтау және техникалық параметрлер тапсырыс берушінің міндеттеріне жеке таңдалады. Кепілдік, сервис, іске қосу-реттеу.`,
      en: `${e.name.en} — reliable industrial equipment from leading manufacturers. Complete configuration and technical parameters are individually selected for customer requirements. Warranty, service, and commissioning included.`,
    },
    price: e.price,
    currency: "KZT",
    specs: [
      { key: { ru: "Производительность", kz: "Өнімділік", en: "Capacity" }, value: { ru: "По ТЗ заказчика", kz: "Тапсырыс берушінің ТЗ бойынша", en: "Per customer specs" } },
      { key: { ru: "Материал корпуса", kz: "Корпус материалы", en: "Body Material" }, value: { ru: "Сталь / Нержавеющая сталь", kz: "Болат / Тот баспайтын болат", en: "Steel / Stainless Steel" } },
      { key: { ru: "Рабочее давление", kz: "Жұмыс қысымы", en: "Working Pressure" }, value: { ru: "До 40 бар", kz: "40 бар дейін", en: "Up to 40 bar" } },
      { key: { ru: "Гарантия", kz: "Кепілдік", en: "Warranty" }, value: { ru: "24 месяца", kz: "24 ай", en: "24 months" } },
    ],
    tags: ["equipment", "industrial", e.slug],
    images: [`/placeholder-product.svg`],
    relatedSlugs: equipment.filter((_, j) => j !== i).slice(0, 4).map(r => r.slug),
  }))
}

export const products: Product[] = [
  ...generateChemicals(),
  ...generateMetals(),
  ...generateEquipment(),
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as Product[]
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("ru-RU").format(price)
}
