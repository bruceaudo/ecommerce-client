"use client";
import { SetStateAction, createContext, useState } from "react";

export type SearchModalProps = {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
};

export const InitialSearchModalState: SearchModalProps = {
  open: false,
  setOpen: () => {}
};

export const SearchModalContext = createContext<SearchModalProps>(InitialSearchModalState);

export type Props = {
  children: React.ReactNode;
};

export const SearchModalContextProvider = ({ children }: Props) => {
  const [open, setOpen] = useState(
    InitialSearchModalState.open
  );

  const searchModalValues = {
    open,
    setOpen
  };

  return (
      <SearchModalContext.Provider value={searchModalValues}>
          {children}
    </SearchModalContext.Provider>
  );
};
