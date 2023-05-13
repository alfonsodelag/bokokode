import React, { createContext, useState, useContext } from "react";

type SortContextType = {
  sort: { key: string; type: string };
  setSort: React.Dispatch<React.SetStateAction<{ key: string; type: string }>>;
};

interface SortProviderProps {
  children: React.ReactNode;
}

const SortContext = createContext<SortContextType | undefined>(undefined);

export const SortProvider = ({ children }: SortProviderProps) => {
  const [sort, setSort] = useState<{ key: string; type: string }>({
    key: "",
    type: "",
  });

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => {
  const context = useContext(SortContext);
  if (!context) {
    throw new Error("useSort must be used within a SortProvider");
  }
  return context;
};
