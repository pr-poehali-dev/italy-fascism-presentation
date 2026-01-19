import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const timelineEvents = [
  { year: 1919, title: 'Основание фашистского движения', description: 'Бенито Муссолини создаёт «Итальянский союз борьбы» в Милане 23 марта' },
  { year: 1921, title: 'Национальная фашистская партия', description: 'Преобразование движения в Национальную фашистскую партию (PNF)' },
  { year: 1922, title: '🔥 Поход на Рим', description: '30 000 чернорубашечников маршируют на Рим. Муссолини становится премьер-министром' },
  { year: 1924, title: 'Убийство Маттеотти', description: 'Убийство социалиста Джакомо Маттеотти — начало террора против оппозиции' },
  { year: 1925, title: 'Установление диктатуры', description: 'Муссолини объявляет себя диктатором с неограниченной властью' },
  { year: 1926, title: 'Репрессивные законы', description: 'Запрет всех партий кроме фашистской, цензура прессы, тайная полиция' },
  { year: 1929, title: 'Договор с Ватиканом', description: 'Примирение с церковью. Создание города-государства Ватикан' },
  { year: 1930, title: 'Пик режима', description: 'Полный контроль над Италией. Начало подготовки к войне' },
];

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[2]);

  return (
    <div className="min-h-screen paper-texture">
      {/* Header */}
      <header className="border-b-2 border-primary/30 bg-[#E8DCC8] sepia-shadow">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-4">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-lg mb-4">
              <p className="text-sm font-semibold text-primary">📚 Школьная презентация по истории</p>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-center mb-2">
            ФАШИЗМ В ИТАЛИИ
          </h1>
          <p className="text-xl md:text-2xl text-center text-primary/80 font-light mb-4">
            1920 — 1930
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="bg-card px-4 py-2 rounded-lg sepia-shadow">
              <p className="text-sm"><strong>Период:</strong> 10 лет диктатуры</p>
            </div>
            <div className="bg-card px-4 py-2 rounded-lg sepia-shadow">
              <p className="text-sm"><strong>Лидер:</strong> Бенито Муссолини</p>
            </div>
            <div className="bg-card px-4 py-2 rounded-lg sepia-shadow">
              <p className="text-sm"><strong>Тип режима:</strong> Тоталитаризм</p>
            </div>
          </div>
        </div>
      </header>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            <Icon name="Calendar" size={36} />
            Хронология событий
          </h2>
          <p className="text-muted-foreground">Нажмите на событие для просмотра подробностей</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block" />

          {/* Timeline events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex flex-col md:flex-row items-center gap-4 fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card
                    className={`vintage-border bg-card hover:bg-secondary/50 transition-all cursor-pointer sepia-shadow ${
                      selectedEvent.year === event.year ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary flex items-center gap-2 justify-between">
                        <span>{event.title}</span>
                        <Icon name="FileText" size={20} />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground font-bold sepia-shadow z-10 shrink-0">
                  <div className="text-xs opacity-80">год</div>
                  <div className="text-xl">{event.year}</div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>

        {/* Selected Event Detail */}
        <Card className="mt-12 vintage-border bg-[#E8DCC8] sepia-shadow">
          <CardHeader>
            <CardTitle className="text-3xl text-primary flex items-center gap-2">
              <Icon name="BookOpen" size={28} />
              {selectedEvent.year} — {selectedEvent.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{selectedEvent.description}</p>
          </CardContent>
        </Card>
      </section>

      {/* Main Content Tabs */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="intro" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 bg-secondary/50 p-1 gap-1">
            <TabsTrigger value="intro" className="text-xs md:text-sm">
              <Icon name="Info" size={16} className="mr-1" />
              Введение
            </TabsTrigger>
            <TabsTrigger value="rise" className="text-xs md:text-sm">
              <Icon name="TrendingUp" size={16} className="mr-1" />
              Приход к власти
            </TabsTrigger>
            <TabsTrigger value="ideology" className="text-xs md:text-sm">
              <Icon name="Lightbulb" size={16} className="mr-1" />
              Идеология
            </TabsTrigger>
            <TabsTrigger value="reforms" className="text-xs md:text-sm">
              <Icon name="Landmark" size={16} className="mr-1" />
              Что изменилось
            </TabsTrigger>
            <TabsTrigger value="society" className="text-xs md:text-sm">
              <Icon name="Users" size={16} className="mr-1" />
              Жизнь людей
            </TabsTrigger>
            <TabsTrigger value="conclusion" className="text-xs md:text-sm">
              <Icon name="CheckCircle" size={16} className="mr-1" />
              Выводы
            </TabsTrigger>
          </TabsList>

          <TabsContent value="intro" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Что такое фашизм?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-[#E8DCC8] p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-primary mb-4 text-center">📖 Определение</h3>
                  <p className="text-lg leading-relaxed text-center">
                    <strong>Фашизм</strong> — это политический режим, при котором вся власть сосредоточена в руках одного лидера (диктатора), 
                    запрещены другие партии, подавляется свобода слова, а государство полностью контролирует жизнь граждан.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-[#E8DCC8] p-4 rounded-lg text-center">
                    <div className="text-4xl mb-2">👑</div>
                    <h4 className="font-semibold text-primary mb-2">Один вождь</h4>
                    <p className="text-sm">Вся власть у диктатора, нет выборов</p>
                  </div>
                  <div className="bg-[#E8DCC8] p-4 rounded-lg text-center">
                    <div className="text-4xl mb-2">🚫</div>
                    <h4 className="font-semibold text-primary mb-2">Нет свободы</h4>
                    <p className="text-sm">Запрет критики, цензура, репрессии</p>
                  </div>
                  <div className="bg-[#E8DCC8] p-4 rounded-lg text-center">
                    <div className="text-4xl mb-2">⚔️</div>
                    <h4 className="font-semibold text-primary mb-2">Милитаризм</h4>
                    <p className="text-sm">Культ силы, агрессивная внешняя политика</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Icon name="MapPin" size={20} />
                    Почему именно Италия?
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <p>После Первой мировой войны страна в кризисе: безработица, инфляция, голод</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <p>Люди недовольны правительством, которое не может решить проблемы</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <p>Муссолини обещает «сильную руку» и возвращение величия Рима</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <p>Италия стала <strong>первой фашистской страной в мире</strong> (1922)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rise" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Восхождение Муссолини к власти</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Flag" size={20} />
                    Послевоенный кризис (1919-1920)
                  </h3>
                  <p className="leading-relaxed">
                    После Первой мировой войны Италия переживала глубокий социально-экономический кризис. 
                    Массовая безработица, инфляция, забастовки и захваты предприятий рабочими создали атмосферу 
                    нестабильности. Либеральное правительство не могло справиться с ситуацией.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Shield" size={20} />
                    Фашистские боевые отряды
                  </h3>
                  <p className="leading-relaxed">
                    Муссолини организовал военизированные отряды чернорубашечников (squadristi), которые применяли 
                    насилие против социалистов, коммунистов и профсоюзов. Эти действия получили поддержку 
                    промышленников и землевладельцев, опасавшихся революции.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Crown" size={20} />
                    Поход на Рим (1922)
                  </h3>
                  <p className="leading-relaxed">
                    28 октября 1922 года около 30 000 фашистов начали марш на Рим. Король Виктор Эммануил III 
                    отказался объявить военное положение и 30 октября назначил Муссолини премьер-министром. 
                    Это стало началом фашистского режима в Италии.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ideology" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Фашистская идеология и принципы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Building" size={20} />
                    Тоталитарное государство
                  </h3>
                  <p className="leading-relaxed">
                    Фашизм провозглашал примат государства над личностью. Девиз режима: «Всё в государстве, 
                    ничего вне государства, ничего против государства». Государство контролировало все сферы 
                    жизни общества.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Sparkles" size={20} />
                    Культ личности вождя
                  </h3>
                  <p className="leading-relaxed">
                    Муссолини культивировал образ непогрешимого лидера — «Дуче». Его портреты висели повсюду, 
                    его речи передавались по радио, его имя превозносилось в прессе. Принцип вождизма 
                    (il principio del capo) стал основой политической системы.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Sword" size={20} />
                    Национализм и милитаризм
                  </h3>
                  <p className="leading-relaxed">
                    Фашисты романтизировали Римскую империю и стремились возродить её величие. Они пропагандировали 
                    экспансионизм, милитаризм и идею о превосходстве итальянской нации. Война рассматривалась 
                    как высшая форма национального самовыражения.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Scale" size={20} />
                    Корпоративизм
                  </h3>
                  <p className="leading-relaxed">
                    Экономическая система основывалась на корпорациях, объединявших работодателей и рабочих 
                    под контролем государства. Забастовки были запрещены, а экономика направлялась на 
                    достижение автаркии (экономической самодостаточности).
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reforms" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Внутренние реформы и политика</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Gavel" size={20} />
                    Законодательные изменения
                  </h3>
                  <p className="leading-relaxed">
                    В 1925-1926 годах были приняты «фашистские законы», ликвидировавшие парламентскую демократию. 
                    Запрещены все партии кроме фашистской, упразднена свобода печати, создана тайная полиция OVRA 
                    для борьбы с оппозицией.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Church" size={20} />
                    Латеранские соглашения (1929)
                  </h3>
                  <p className="leading-relaxed">
                    Муссолини заключил Латеранский договор с Ватиканом, положивший конец 60-летнему конфликту 
                    между итальянским государством и католической церковью. Ватикан признал итальянское государство, 
                    а католицизм стал государственной религией.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Briefcase" size={20} />
                    Экономическая политика
                  </h3>
                  <p className="leading-relaxed">
                    Режим провёл ряд масштабных проектов: осушение Понтинских болот, строительство дорог и 
                    общественных зданий. Была начата «битва за зерно» для достижения продовольственной независимости. 
                    Однако экономический рост был неравномерным, а уровень жизни рабочих снизился.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="society" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Влияние на итальянское общество</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="GraduationCap" size={20} />
                    Образование и молодёжь
                  </h3>
                  <p className="leading-relaxed">
                    Фашистский режим контролировал образование на всех уровнях. Созданы молодёжные организации: 
                    «Балилла» для мальчиков и «Маленькие итальянки» для девочек. Учебные программы были пронизаны 
                    фашистской идеологией, воспитывали преданность Дуче и государству.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Radio" size={20} />
                    Пропаганда и культура
                  </h3>
                  <p className="leading-relaxed">
                    Министерство народной культуры контролировало все СМИ, кино, театр и литературу. Радио стало 
                    главным инструментом пропаганды. Интеллектуалы и художники должны были служить режиму или 
                    эмигрировать. Создавался образ «нового итальянца» — дисциплинированного, физически крепкого, 
                    преданного Дуче.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Heart" size={20} />
                    Женщины и семья
                  </h3>
                  <p className="leading-relaxed">
                    Фашистская идеология отводила женщине роль матери и хранительницы домашнего очага. 
                    Пропагандировалась многодетность, проводились «демографические кампании». Работающие женщины 
                    облагались специальным налогом, их доля в экономике сокращалась.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="AlertTriangle" size={20} />
                    Репрессии и оппозиция
                  </h3>
                  <p className="leading-relaxed">
                    Тысячи противников режима были арестованы, сосланы на острова или принуждены к эмиграции. 
                    Тайная полиция следила за населением, поощрялось доносительство. К концу 1920-х годов 
                    организованная оппозиция внутри страны была полностью подавлена.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conclusion" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Выводы: Уроки истории</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-[#E8DCC8] p-6 rounded-lg">
                  <h3 className="text-2xl font-semibold text-primary mb-4 text-center flex items-center justify-center gap-2">
                    <Icon name="Lightbulb" size={28} />
                    Главное о фашизме в Италии
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">1️⃣</div>
                      <p className="text-lg"><strong>Фашизм пришёл к власти легально</strong> через слабость демократии и кризис в стране</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">2️⃣</div>
                      <p className="text-lg"><strong>Режим быстро уничтожил все свободы:</strong> партии, прессу, права человека</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">3️⃣</div>
                      <p className="text-lg"><strong>Тоталитарный контроль</strong> охватил образование, культуру, семью, все сферы жизни</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">4️⃣</div>
                      <p className="text-lg"><strong>Итальянский фашизм стал моделью</strong> для других диктатур в Европе (Германия, Испания)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Icon name="AlertCircle" size={20} />
                    Почему это важно помнить?
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">⚠️ Опасность диктатуры</h4>
                      <p className="text-sm">Показывает, как быстро можно потерять свободу, если не защищать демократию</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">🧠 Критическое мышление</h4>
                      <p className="text-sm">Учит не верить пропаганде и простым обещаниям «сильной руки»</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">🕊️ Ценность прав человека</h4>
                      <p className="text-sm">Напоминает о важности свободы слова, выборов и защиты меньшинств</p>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">📚 Историческая память</h4>
                      <p className="text-sm">Помогает не повторять ошибки прошлого в современном мире</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-lg italic text-center">
                    «Тот, кто не помнит своего прошлого, обречён пережить его снова» <br/>
                    <span className="text-sm opacity-80">— Джордж Сантаяна, философ</span>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
                    <Icon name="BookOpen" size={20} />
                    Для дополнительного изучения
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Icon name="Book" size={16} className="mt-1" />
                      <span>Учебник истории 9-11 класс: раздел «Тоталитарные режимы в Европе»</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Film" size={16} className="mt-1" />
                      <span>Документальные фильмы о Муссолини и фашистской Италии</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Globe" size={16} className="mt-1" />
                      <span>Музеи истории XX века (Рим, Милан, Музей Холокоста)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 bg-[#E8DCC8] mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-primary mb-2">Спасибо за внимание!</h3>
            <p className="text-muted-foreground">Историческая презентация для школы</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>📅 Период: 1920-1930 гг</span>
            <span>•</span>
            <span>👤 Лидер: Бенито Муссолини</span>
            <span>•</span>
            <span>🇮🇹 Страна: Италия</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
