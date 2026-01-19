import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const timelineEvents = [
  { year: 1919, title: 'Основание фашистского движения', description: 'Бенито Муссолини создаёт «Итальянский союз борьбы» (Fasci Italiani di Combattimento) в Милане 23 марта' },
  { year: 1921, title: 'Национальная фашистская партия', description: 'Преобразование движения в Национальную фашистскую партию (PNF)' },
  { year: 1922, title: 'Поход на Рим', description: 'Октябрь: 30 000 чернорубашечников маршируют на Рим. Муссолини становится премьер-министром' },
  { year: 1924, title: 'Убийство Маттеотти', description: 'Убийство социалиста Джакомо Маттеотти усиливает диктаторский режим' },
  { year: 1925, title: 'Установление диктатуры', description: 'Муссолини объявляет себя главой правительства с диктаторскими полномочиями' },
  { year: 1926, title: 'Законы о защите государства', description: 'Принятие репрессивных законов, запрет оппозиционных партий и свободной прессы' },
  { year: 1929, title: 'Латеранские соглашения', description: 'Примирение с Ватиканом, создание города-государства Ватикан' },
  { year: 1935, title: 'Вторжение в Эфиопию', description: 'Начало колониальной экспансии в Африке' },
];

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[2]);

  return (
    <div className="min-h-screen paper-texture">
      {/* Header */}
      <header className="border-b-2 border-primary/30 bg-[#E8DCC8] sepia-shadow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-center mb-2">
            ФАШИЗМ В ИТАЛИИ
          </h1>
          <p className="text-xl md:text-2xl text-center text-primary/80 font-light">
            1920 — 1930
          </p>
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

                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground font-bold text-lg sepia-shadow z-10 shrink-0">
                  {event.year}
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
        <Tabs defaultValue="rise" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 bg-secondary/50 p-1 gap-1">
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
              Реформы
            </TabsTrigger>
            <TabsTrigger value="society" className="text-xs md:text-sm">
              <Icon name="Users" size={16} className="mr-1" />
              Общество
            </TabsTrigger>
            <TabsTrigger value="sources" className="text-xs md:text-sm">
              <Icon name="Archive" size={16} className="mr-1" />
              Источники
            </TabsTrigger>
          </TabsList>

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

          <TabsContent value="sources" className="mt-6">
            <Card className="vintage-border bg-card sepia-shadow">
              <CardHeader>
                <CardTitle className="text-3xl text-primary">Архивные источники и документы</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="ScrollText" size={20} />
                    Первичные источники
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>«Доктрина фашизма» — статья Муссолини в Итальянской энциклопедии (1932)</li>
                    <li>Законы о защите государства (1926)</li>
                    <li>Латеранские соглашения (1929)</li>
                    <li>Официальные речи и выступления Бенито Муссолини</li>
                    <li>Документы Национальной фашистской партии (PNF)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Library" size={20} />
                    Историография
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Де Гранд А. «Итальянский фашизм: его происхождение и развитие»</li>
                    <li>Пэйн С. «История фашизма 1914-1945»</li>
                    <li>Джентиле Э. «Истоки фашистской идеологии 1918-1925»</li>
                    <li>Морган Ф. «Итальянский фашизм 1919-1945»</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Film" size={20} />
                    Визуальные источники
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Кинохроника Института LUCE (государственная пропаганда)</li>
                    <li>Плакаты и агитационные материалы 1920-1930-х годов</li>
                    <li>Фотографии Поход на Рим и массовых мероприятий</li>
                    <li>Архитектурные памятники фашистской эпохи</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
                    <Icon name="Database" size={20} />
                    Архивы
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Центральный государственный архив Италии (ACS)</li>
                    <li>Архив МИД Италии (ASDMAE)</li>
                    <li>Музей освобождения Рима</li>
                    <li>Фонд Джентиле по изучению фашизма</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-primary/30 bg-[#E8DCC8] mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            Историческая презентация • Фашизм в Италии 1920-1930гг
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
