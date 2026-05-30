import React, { createContext, useState } from "react";

export const QCContext = createContext();

export const QCProvider = ({ children }) => {
  // Data Awal Item QC dengan nama Icon MaterialCommunityIcons yang make sense
  const [items, setItems] = useState([
    {
      id: "1",
      nama: "Komponen Mesin CNC",
      standar: "Presisi toleransi < 0.02mm",
      status: "Pending",
      foto: "cog-outline",
    },
    {
      id: "2",
      nama: "Kemasan Botol Oli",
      standar: "Segel rapat, tidak ada rembesan",
      status: "Pending",
      foto: "bottle-tonic-outline",
    },
    {
      id: "3",
      nama: "Sensor Proximity",
      standar: "Respons deteksi jarak 5mm",
      status: "Pending",
      foto: "power-plug-outline",
    },
  ]);

  // Fungsi untuk mengubah status kelolosan item
  const updateItemStatus = (id, newStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  return (
    <QCContext.Provider value={{ items, updateItemStatus }}>
      {children}
    </QCContext.Provider>
  );
};
