'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon, BookOpenIcon } from 'lucide-react';

const departments = [
  {
    id: 1,
    position: 'Директор Госфильмофонда',
    name: 'Иванов Иван Иванович',
    description: 'Кандидат искусствоведения, заслуженный деятель искусств Российской Федерации. Руководит деятельностью Госфильмофонда с 2020 года. Имеет более 25 лет опыта в области кинематографии и архивного дела.',
    education: 'ВГИК, кафедра киноведения (1995)',
    experience: 'Кинокритик, киновед, архивист',
    contact: 'director@gosfilmofond.ru',
    memos: [
      { title: 'Порядок согласования приказов', content: 'Все приказы проходят согласование через канцелярию. Срок рассмотрения — 3 рабочих дня. Электронная копия направляется на почту director@gosfilmofond.ru.' },
      { title: 'Регламент приёма сотрудников', content: 'Приём ведётся по предварительной записи в секретариате. Вторник и четверг с 10:00 до 13:00.' },
    ],
  },
  {
    id: 2,
    position: 'Заместитель директора по научной работе',
    name: 'Петров Петр Петрович',
    description: 'Доктор искусствоведения, профессор. Отвечает за научно-исследовательскую деятельность фонда, публикацию архивных материалов и образовательные программы.',
    education: 'МГУ, исторический факультет (1992)',
    experience: 'История российского кино, архивоведение',
    contact: 'science@gosfilmofond.ru',
    memos: [
      { title: 'Оформление научных публикаций', content: 'Все статьи перед публикацией согласовываются с отделом. Шаблон оформления доступен на общем диске: /Шаблоны/Наука.' },
      { title: 'Заявки на командировки', content: 'Заявки подаются за 10 рабочих дней. Форма заявки — в канцелярии или на внутреннем портале.' },
    ],
  },
  {
    id: 3,
    position: 'Заместитель директора по реставрации',
    name: 'Сидорова Анна Викторовна',
    description: 'Специалист по реставрации киноматериалов, имеет международные сертификаты в области цифровых технологий восстановления киноматериалов.',
    education: 'СПбГУКиТ, факультет аудиовизуальных технологий (2005)',
    experience: 'Цифровая реставрация, сохранность архивов',
    contact: 'restoration@gosfilmofond.ru',
    memos: [
      { title: 'Техника безопасности в реставрационном зале', content: 'Обязательно ознакомиться с инструкцией по ТБ при работе с плёнкой. Без допуска вход запрещён.' },
      { title: 'Журнал учёта реставрационных работ', content: 'Каждый специалист ведёт журнал по установленной форме. Журналы хранятся 5 лет.' },
    ],
  },
  {
    id: 4,
    position: 'Начальник административного отдела',
    name: 'Козлов Дмитрий Сергеевич',
    description: 'Отвечает за административно-хозяйственную деятельность фонда, организацию работы персонала и взаимодействие с партнерами.',
    education: 'РЭУ им. Плеханова, факультет менеджмента (2008)',
    experience: 'Управление проектами, административная деятельность',
    contact: 'admin@gosfilmofond.ru',
    memos: [
      { title: 'Порядок заказа канцтоваров', content: 'Заявки на канцтовары подаются до 25 числа каждого месяца. Форма заявки — на внутреннем портале в разделе АХО.' },
      { title: 'Правила пропускного режима', content: 'Пропуска оформляются через АХО. Временные пропуска для гостей — в бюро пропусков (1 этаж, каб. 101).' },
    ],
  },
];

function MemoBlock({ memos }: { memos: { title: string; content: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5 border-t border-gray-100 pt-4">
      <button
        className="flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 transition-colors cursor-pointer"
        onClick={() => setOpen((v) => !v)}
      >
        <BookOpenIcon size={16} />
        База знаний / Памятки
        {open ? <ChevronUpIcon size={16} /> : <ChevronDownIcon size={16} />}
      </button>
      {open && (
        <div className="mt-3 space-y-3">
          {memos.map((memo, i) => (
            <div key={i} className="bg-indigo-50 rounded-md p-4 border border-indigo-100">
              <p className="font-semibold text-indigo-800 text-sm mb-1">{memo.title}</p>
              <p className="text-gray-600 text-sm">{memo.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ManagementPage() {
  return (
    <main className="p-5">
      <div className="container mx-auto">
        <section className="py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl text-black-100 font-semibold mb-4">Структура</h1>
            <p className="text-1xl font-normal text-gray-500">Структура и руководящий состав Госфильмофонда</p>
          </div>

          <div className="mt-12 space-y-8">
            {departments.map((dept) => (
              <div key={dept.id} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gray-500 text-sm">Фото</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-black-100 mb-2">{dept.position}</h3>
                    <h4 className="text-xl text-gray-700 mb-4">{dept.name}</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">{dept.description}</p>
                    <div className="text-sm text-gray-500">
                      <p><strong>Образование:</strong> {dept.education}</p>
                      <p><strong>Специализация:</strong> {dept.experience}</p>
                      <p><strong>Контакты:</strong> {dept.contact}</p>
                    </div>
                    <MemoBlock memos={dept.memos} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-black-100 mb-4">Научный совет</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Научный совет Госфильмофонда состоит из ведущих специалистов в области
              киноведения, архивоведения и реставрации кинематографического наследия.
              Совет определяет стратегические направления развития фонда и утверждает
              научно-исследовательские программы.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
