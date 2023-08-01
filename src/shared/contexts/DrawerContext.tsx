import { createContext, useState, useCallback, useContext } from 'react';

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  icon: string;
  path: string;
  label: string;
}
interface IAppDrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({
  children,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setdrawerOptions] = useState<IDrawerOptions[]>([]);
  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []);
  const handleSetDrawnOptions = useCallback((newDrawerOptions: IDrawerOptions[]) => {
    setdrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, drawerOptions, toggleDrawerOpen, setDrawerOptions: handleSetDrawnOptions }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useAppDrawerContext = () => {
  return useContext(DrawerContext);
};
