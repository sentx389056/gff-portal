'use client';

import React from 'react';

const services = [
  {
    id: 1,
    title: 'ИТ-поддержка',
    description: 'Помощь в настройке рабочих мест, устранение технических неисправностей оборудования и программного обеспечения.',
    icon: '🖥️',
  },
  {
    id: 2,
    title: 'Доступ к сервисам',
    description: 'Предоставление и управление доступами к корпоративным системам, почте, VPN и внутренним ресурсам.',
    icon: '🔑',
  },
  {
    id: 3,
    title: 'Заявки на оборудование',
    description: 'Оформление заявок на приобретение, замену или ремонт офисного и специализированного оборудования.',
    icon: '🖨️',
  },
  {
    id: 4,
    title: 'Корпоративная почта',
    description: 'Настройка и обслуживание корпоративных почтовых ящиков, настройка клиентов и фильтров.',
    icon: '📧',
  },
  {
    id: 5,
    title: 'Делопроизводство',
    description: 'Консультации по оформлению документов, регистрация входящей и исходящей корреспонденции.',
    icon: '📄',
  },
  {
    id: 6,
    title: 'Административные услуги',
    description: 'Оформление командировок, заявлений, справок и иных кадровых и административных документов.',
    icon: '📋',
  },
];

export default function ServicesPage() {
  return (
    <main className="p-5">
      <div className="container mx-auto">
        <section className="py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl text-black-100 font-semibold mb-4">Услуги</h1>
            <p className="text-1xl font-normal text-gray-500">Внутренние сервисы и услуги Госфильмофонда</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-black-100">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
