import { createContext, useState, useCallback, useContext } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}
interface IAppDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen,  toggleDrawerOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};
