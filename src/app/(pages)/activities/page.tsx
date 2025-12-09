'use client';

import React from 'react';

export default function ActivitiesPage() {
  return (
    <main className="p-5">
      <div className="container mx-auto">
        <section className="py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl text-black-100 font-semibold mb-4">Наша деятельность</h1>
            <p className="text-1xl font-normal text-gray-500">Основные направления работы Госфильмофонда</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Сохранение кинонаследия</h3>
              <p className="text-gray-600 leading-relaxed">
                Систематическая работа по сбору, хранению и реставрации кинофильмов, 
                обеспечивая сохранность культурного наследия для будущих поколений.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Цифровизация архивов</h3>
              <p className="text-gray-600 leading-relaxed">
                Перевод киноматериалов в цифровой формат, создание современных 
                электронных архивов и обеспечение доступа к ним.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Научно-исследовательская работа</h3>
              <p className="text-gray-600 leading-relaxed">
                Изучение истории кино, публикация исследований, организация конференций 
                и образовательных программ в области киноведения.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Культурные программы</h3>
              <p className="text-gray-600 leading-relaxed">
                Организация кинофестивалей, ретроспективных показов, выставок 
                и других культурных мероприятий для широкой аудитории.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Международное сотрудничество</h3>
              <p className="text-gray-600 leading-relaxed">
                Взаимодействие с зарубежными киноархивами, участие в международных 
                программах по сохранению мирового кинонаследия.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-black-100">Консультационная деятельность</h3>
              <p className="text-gray-600 leading-relaxed">
                Предоставление экспертных консультаций по вопросам сохранения 
                киноматериалов, реставрации и архивного дела.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
