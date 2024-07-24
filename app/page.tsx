"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any[]>([]);
  const [search, setSearch] = useState<string>("");
  const userFiltered: any[] =
    search.length > 0 ? user.filter((user) => user.name.includes(search)) : [];

  useEffect(() => {
    console.log("Renderizou");
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setUser(data));
    } catch (error) {
      console.log("Erro ao carregar o user", error);
    }
  }, []);
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-5">
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar..."
        className="border p-2 rounded-md bg-slate-300 text-white placeholder:text-white"
      />
      <ul>
        {search.length > 0
          ? userFiltered.map((us) => (
              <li key={us.id}>
                {us.name} - {us.username}
              </li>
            ))
          : user.map((us) => (
              <li key={us.id}>
                {us.name} - {us.username}
              </li>
            ))}
      </ul>
    </div>
  );
}
