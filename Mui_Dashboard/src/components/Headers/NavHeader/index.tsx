import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import DisableElevation from '../../Button/Button';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const NAVIGATION: Navigation = [
  {
    segment: 'Dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
];

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

function PageToolbar() {
  return (
    <PageContainerToolbar>
      <Stack direction="row" spacing={1} alignItems="center">
        <CachedOutlinedIcon sx={{ color: '#2979ff' }}/>
        <FilterListOutlinedIcon sx={{ color: '#2979ff' }}/>
        <DisableElevation title={"Today : 29 April"}/>
      </Stack>
    </PageContainerToolbar>
  );
}

export default function PageContainerBasic(props: any) {
  const { window } = props;
  const router = useDemoRouter('/Dashboard');
  const theme = useTheme();
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={theme}
      window={demoWindow}
      branding={{
        title: 'ACME Inc.',
      }}
    >
      <Paper sx={{ width: '100%',boxShadow:'none' ,borderBottom:'1px solid #bdbdbd' }}>
        <PageContainer
          slots={{
            toolbar: PageToolbar,
          }}
        >
        </PageContainer>
      </Paper>
    </AppProvider>
  );
}
