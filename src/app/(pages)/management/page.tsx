'use client';

import React from 'react';

export default function ManagementPage() {
  return (
    <main className="p-5">
      <div className="container mx-auto">
        <section className="py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl text-black-100 font-semibold mb-4">Руководство портала</h1>
            <p className="text-1xl font-normal text-gray-500">Руководящий состав Госфильмофонда</p>
          </div>
          
          <div className="mt-12 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Фото</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-black-100 mb-2">Директор Госфильмофонда</h3>
                  <h4 className="text-xl text-gray-700 mb-4">Иванов Иван Иванович</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Кандидат искусствоведения, заслуженный деятель искусств Российской Федерации. 
                    Руководит деятельностью Госфильмофонда с 2020 года. Имеет более 25 лет опыта 
                    в области кинематографии и архивного дела.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Образование:</strong> ВГИК, кафедра киноведения (1995)</p>
                    <p><strong>Опыт работы:</strong> Кинокритик, киновед, архивист</p>
                    <p><strong>Контакты:</strong> director@gosfilmofond.ru</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Фото</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-black-100 mb-2">Заместитель директора по научной работе</h3>
                  <h4 className="text-xl text-gray-700 mb-4">Петров Петр Петрович</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Доктор искусствоведения, профессор. Отвечает за научно-исследовательскую 
                    деятельность фонда, публикацию архивных материалов и образовательные программы.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Образование:</strong> МГУ, исторический факультет (1992)</p>
                    <p><strong>Научные интересы:</strong> История российского кино, архивоведение</p>
                    <p><strong>Контакты:</strong> science@gosfilmofond.ru</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Фото</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-black-100 mb-2">Заместитель директора по реставрации</h3>
                  <h4 className="text-xl text-gray-700 mb-4">Сидорова Анна Викторовна</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Специалист по реставрации кинofilms, имеет международные сертификаты 
                    в области цифровых технологий восстановления киноматериалов.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Образование:</strong> СПбГУКиТ, факультет аудиовизуальных технологий (2005)</p>
                    <p><strong>Специализация:</strong> Цифровая реставрация, сохранность архивов</p>
                    <p><strong>Контакты:</strong> restoration@gosfilmofond.ru</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Фото</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-black-100 mb-2">Начальник административного отдела</h3>
                  <h4 className="text-xl text-gray-700 mb-4">Козлов Дмитрий Сергеевич</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Отвечает за административно-хозяйственную деятельность фонда, 
                    организацию работы персонала и взаимодействие с партнерами.
                  </p>
                  <div className="text-sm text-gray-500">
                    <p><strong>Образование:</strong> РЭУ им. Плеханова, факультет менеджмента (2008)</p>
                    <p><strong>Опыт работы:</strong> Управление проектами, административная деятельность</p>
                    <p><strong>Контакты:</strong> admin@gosfilmofond.ru</p>
                  </div>
                </div>
              </div>
            </div>
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
