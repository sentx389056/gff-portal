'use client';
import DocumentsList from '@/components/DocumentsList/DocumentsList';
import DocumentsFilter from '@/components/DocumentsFilter/DocumentsFilter';
import { useState } from 'react';


export default function DocumentsPage() {
  const [filter, setFilter] = useState<string>('');
  const [query, setQuery] = useState<string>('');
  return (
    <main className="p-5">
      <div className="container mx-auto">
        <section className="py-20 max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl text-black-100 font-semibold mb-4">Официальные документы</h1>
            <p className="text-1xl font-normal text-gray-500">Приказы, положения, отчеты и другие документы Госфильмофонда</p>
          </div>
          <DocumentsFilter filter={filter} setFilter={setFilter} query={query} setQuery={setQuery} />
          <DocumentsList filter={filter} query={query} />
        </section>
      </div>
    </main>
  );
}