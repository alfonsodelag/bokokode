import React, { createContext, useState, useContext } from "react";

type PageContextType = {
  page: number;
  setPage: (page: number) => void;
};

interface PageProviderProps {
  children: React.ReactNode;
}

const PageContext = createContext<PageContextType | undefined>({
  page: 1,
  setPage: () => {},
});

export const PageProvider = ({ children }: PageProviderProps) => {
  const [page, setPage] = useState(1);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};
