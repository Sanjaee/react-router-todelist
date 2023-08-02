import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { v4 } from "uuid";
import "./Notes.css";

const Notes = () => {
  const [nama, setNama] = useState("");
  const [note, setNote] = useState("");
  const [waktu, setWaktu] = useState("");
  const [data, setData] = useState([]);
  const formHandler = (e) => {
    e.preventDefault();

    const rawData = {
      id: v4(),
      nama: nama,
      note: note,
      waktu: waktu,
    };
    setData([...data, rawData]);
    setNama("");
    setNama("");
    setWaktu("");
  };

  return (
    <div>
      <h1 className="font-bold text-4xl mt-7 mb-7 text-orange-400">Catatan </h1>
      <form onSubmit={formHandler} className="drop-shadow-md">
        <div className="formstyle">
          <input type="text " placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />

          <input type="text " placeholder="Note" value={note} onChange={(e) => setNote(e.target.value)} />

          <input type="date" placeholder="Waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} />

          <button className="rounded-full h-10 px-6 font-semibold text-white bg-blue-500 hover:bg-blue-950 mt-3">SUBMIT</button>
          <Link className="rounded-full h-10 px-6 font-semibold text-white bg-blue-500 hover:bg-slate-700 mt-5" to={"/"}>
            BACK HOME
          </Link>
        </div>
      </form>
      <div className="DATA">
        {data.map((item) => (
          <div key={item.id}>
            <span>Nama:{item.nama}</span>
            <span>Catatan:{item.note}</span>
            <span>Waktu:{item.waktu}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
