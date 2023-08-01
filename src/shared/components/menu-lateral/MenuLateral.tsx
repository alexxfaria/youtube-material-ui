import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IAppThemeProviderProps {
    children: React.ReactNode;
}
interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({to, icon, label, onClick}) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false});
  
  const handleClick = () => {
    onClick?.();
    navigate(to);
  };
  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label}/>
    </ListItemButton>
  );
}; 

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useAppDrawerContext();
  return (
    <>
      <Drawer open={ isDrawerOpen } variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen}>
        <Box width={ theme.spacing(28) } display={'flex'} flexDirection={'column'} height={'100%'}>
          <Box width='100%' height={theme.spacing(20)} display='flex' alignItems={'center'} justifyContent={'center'}>
            <Avatar sx={{ height: theme.spacing(12), width: theme.spacing(12) }} alt='Alex' src="/Alex"/>
          </Box>
          <Divider />
          <Box flex={1}>
            <List component='nav'>
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  to={drawerOptions.path}
                  key={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height='100vh' marginLeft={ smDown ? 0 : theme.spacing(28) }>
        {children}
      </Box>
    </>
  );
};
