import { Drawer, useTheme, Avatar, Divider, List, ListItemButton, ListItemIcon, Icon, ListItemText, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDrawerContext } from '../../contexts';

interface IAppThemeProviderProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<IAppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const {isDrawerOpen, toggleDrawerOpen} = useAppDrawerContext();
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
              <ListItemButton>

                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary='Pagina inicial'/>
              </ListItemButton>
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
