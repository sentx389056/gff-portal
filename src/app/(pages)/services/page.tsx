'use client';

import React from 'react';
import ServiceBookingDialog from '@/components/ServiceBookingDialog';

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

const internalServices = [
  {
    id: 1,
    title: 'Парикмахерские услуги',
    icon: '✂️',
    description:
      'Профессиональный уход за волосами от опытного мастера-парикмахера-стилиста. Стрижки, укладка и окрашивание волос любой сложности. Индивидуальная консультация и подбор идеальной формы, цвета и стиля для каждого клиента.',
    note: 'Приём осуществляется в порядке предварительной записи.',
    contact: {
      name: 'Довгань Анастасия Павловна',
      phone: '8 961 902-13-52',
      email: 'dovgan.a@gff-rf.ru',
    },
  },
  {
    id: 2,
    title: 'Маникюр',
    icon: '💅',
    description:
      'Услуги маникюрного мастера в рамках программы корпоративного благополучия. Сервис направлен на поддержку сотрудников и создание комфортных условий труда — уход за собой прямо на рабочем месте.',
    note: 'Приём осуществляется в порядке предварительной записи.',
    contact: {
      name: 'Довгань Анастасия Павловна',
      phone: '8 961 902-13-52',
      email: 'dovgan.a@gff-rf.ru',
    },
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

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-black-100 mb-2">Заказы внутренних сервисов</h2>
            <p className="text-gray-500 mb-8">Дополнительные услуги для сотрудников Госфильмофонда</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {internalServices.map((service) => (
                <div key={service.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col gap-4">
                  <div className="text-3xl">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-black-100">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{service.description}</p>
                  <p className="text-sm text-gray-400 italic">{service.note}</p>
                  <div className="border-t border-gray-100 pt-4 text-sm text-gray-600 space-y-1">
                    <p className="font-medium text-gray-700">{service.contact.name}</p>
                    <p>
                      Тел.:{' '}
                      <a href={`tel:${service.contact.phone.replace(/\D/g, '')}`} className="text-blue-600 hover:underline">
                        {service.contact.phone}
                      </a>
                    </p>
                    <p>
                      E-mail:{' '}
                      <a href={`mailto:${service.contact.email}`} className="text-blue-600 hover:underline">
                        {service.contact.email}
                      </a>
                    </p>
                  </div>
                  <ServiceBookingDialog defaultService={service.id === 1 ? 'hairdressing' : 'manicure'} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
