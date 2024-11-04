import { extendTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AppsIcon from '@mui/icons-material/Apps';
import PieChartIcon from '@mui/icons-material/PieChart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RoomIcon from '@mui/icons-material/Room';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FenceIcon from '@mui/icons-material/Fence';
import { AppProvider, Navigation } from '@toolpad/core/AppProvider';  
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import PrimarySearchAppBar from '../NavBar';
import HomeIcon from '@mui/icons-material/Home';
import Footer from '../Footer';
import './index.css';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import DefaultPage from '../../Pages/Dashboards/Default_Page';
import Analytics from '../../Pages/Dashboards/Analytics_Page';
import SassPage from '../../Pages/Dashboards/SasPage';
import ProfilePage from '../../Pages/Pages_section/ProfilePage';
import SettingsPage from '../../Pages/Pages_section/SettingsPage/SettingsPage';
import PricingPage from '../../Pages/Pages_section/Pricing_Pages';
import ChatComponent from '../../Pages/Pages_section/ChattingPage';
import EmptyPage from '../../Pages/Pages_section/Empty_Page';
import ProjectPage from '../../Pages/ProjectPage';
import Order_Page from '../../Pages/Orders_Page';
import Products_page from '../../Pages/Products_page';
import ListDataTable from '../Tables/ListTable';
import ProductDetailPage from '../../Pages/Invoice_section/ProduvtDetailPage';
import Task_Page from '../../Pages/Tasks_page';
import CalenderPge from '../../Pages/CalenderPage';
import SignInPage from '../../Pages/Auth/SignIn_page';
import SignUpForm from '../Auth_components/signUp_form';
import SignInCover from '../Auth_components/signInCover';
import SignUpCover from '../Auth_components/signUpCover';
import ResetPass from '../Auth_components/Reset_password';
import ResetPasssCover from '../Auth_components/resetPasswordCover';
import Page404 from '../../Pages/Auth/404Page';
import { Button } from 'rsuite';
import { blueTheme, greenTheme, darkTheme } from '../darkTheme';
import { useState } from 'react';

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: <div style={{ textAlign: 'center', fontSize:'30px', marginTop:'-10px'}}><SsidChartIcon/> Mira</div>, 
  },
  {
    kind: 'header',
    title: 'PAGES',
  },
  {
    segment: 'Dashboards',
    title: 'Dashboards',
    icon: <HomeIcon sx={{color:'white'}}/>,
    children: [
      {
        segment: 'Default',
        title: 'Default',
      },
      {
        segment: 'Analytics',
        title: 'Analytics',
      },
      {
        segment: 'SaaS',
        title: 'SaaS',
      },
    ],
  },
  {
    segment: 'Pages',
    title: 'Pages',
    icon: <AutoAwesomeMotionIcon sx={{ color: 'white' }}/>,
    children: [
      {
        segment: 'Profile',
        title: 'Profile',
      },
      {
        segment: 'Settings',
        title: 'Settings',
      },
      {
        segment: 'Pricing',
        title: 'Pricing',
      },
      {
        segment: 'Chat',
        title: 'Chat',
      },
      {
        segment: 'Blank Page',
        title: 'Blank Page',
      },
    ],
  },
  {
    segment: 'Projects',
    title: 'Projects',
    icon: <FenceIcon />
  },
  {
    segment: 'Order',
    title: 'Order',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'Products',
    title: 'Products',
    icon: <InventoryIcon />,
  },
  {
    segment: 'Invoice',
    title: 'Invoice',
    icon: <FolderOpenIcon />,
    children: [
      {
        segment: 'List',
        title: 'List',
      },
      {
        segment: 'Details',
        title: 'Details',
      }
    ],
  },
  {
    segment: 'Tasks',
    title: 'Tasks',
    icon: <TaskAltIcon />,
  },
  {
    segment: 'Calendar',
    title: 'Calendar',
    icon: <CalendarMonthIcon />,
  },
  {
    segment: 'Auth',
    title: 'Auth',
    icon: <PeopleOutlineIcon />,
    children: [
      {
        segment: 'Sign in',
        title: 'Sign in',
      },
      {
        segment: 'Sign in Cover',
        title: 'Sign in Cover',
      },
      {
        segment: 'Sign Up',
        title: 'Sign Up',
      },
      {
        segment: 'Sign up Cover',
        title: 'Sign up Cover',
      },
      {
        segment: 'Reset Password',
        title: 'Reset Password',
      },
      {
        segment: 'Reset Password cover',
        title: 'Reset Password cover',
      },
      {
        segment: '404 Page',
        title: '404 Page',
      },
      {
        segment: '500 Page',
        title: '500 Page',
      },
    ],
  },
  {
    kind: 'header',
    title: 'ELEMENTS',
  },
  {
    segment: 'Components',
    title: 'Components',
    icon: <AppsIcon />,
    children: [
      {
        segment: 'Alerts',
        title: 'Alerts',
      },
      {
        segment: 'Accordion',
        title: 'Accordion',
      },
      {
        segment: 'Avatars',
        title: 'Avatars',
      },
      {
        segment: 'Badges',
        title: 'Badges',
      },
      {
        segment: 'Buttons',
        title: 'Buttons',
      },
      {
        segment: 'Cards',
        title: 'Cards',
      },
      {
        segment: 'Chips',
        title: 'Chips',
      },
      {
        segment: 'Dialogs',
        title: 'Dialogs',
      },
      {
        segment: 'Lists',
        title: 'Lists',
      },
      {
        segment: 'Menus',
        title: 'Menus',
      },
      {
        segment: 'Pagination',
        title: 'Pagination',
      },
      {
        segment: 'Progress',
        title: 'Progress',
      },
      {
        segment: 'Snackbar',
        title: 'Snackbar',
      },
      {
        segment: 'Tooltips',
        title: 'Tooltips',
      },
    ],
  },
  {
    segment: 'Charts',
    title: 'Charts',
    icon: <PieChartIcon sx={{color:'white'}} />,
    children: [
      {
        segment: 'Chart.Js',
        title: 'Chart.Js',
      },
      {
        segment: 'ApexCharts',
        title: 'ApexCharts',
      }
    ],
  },
  {
    segment: 'Forms',
    title: 'Forms',
    icon: <ChecklistIcon sx={{color:'white'}}/>,
    children: [
      {
        segment: 'Pickers',
        title: 'Pickers',
      },
      {
        segment: 'Selection Controls',
        title: 'Selection Controls',
      },
      {
        segment: 'Selects',
        title: 'Selects',
      },
      {
        segment: 'Text Fields',
        title: 'Text Fields',
      },
      {
        segment: 'Editors',
        title: 'Editors',
      },
      {
        segment: 'Formik',
        title: 'Formik',
      },
    ],
  },
  {
    segment: 'Tables',
    title: 'Tables',
    icon: <FormatListBulletedIcon sx={{color:'white'}}/>,
    children: [
      {
        segment: 'Simple Table',
        title: 'Simple Table',
      },
      {
        segment: 'Advanced Table',
        title: 'Advanced Table',
      },
      {
        segment: 'Data Grid',
        title: 'Data Grid',
      },
    ],
  },
  {
    segment: 'Icons',
    title: 'Icons',
    icon: <FavoriteIcon />,
    children: [
      {
        segment: 'Material Icons',
        title: 'Material Icons',
      },
      {
        segment: 'Lucide Icons',
        title: 'Lucide Icons',
      },
    ],
  },
  {
    segment: 'Maps',
    title: 'Maps',
    icon: <AutoAwesomeMotionIcon />,
    children: [
      {
        segment: 'Google Maps',
        title: 'Google Maps',
      },
      {
        segment: 'Vector Maps',
        title: 'Vector Maps',
      },
    ],
  },
  {
    kind: 'header',
    title: 'Mira Pro',
  },
  {
    segment: 'Documentation',
    title: 'Documentation',
    icon: <RoomIcon />,
  },
  {
    segment: 'Changelog',
    title: 'Changelog',
    icon: <MenuBookIcon />,
  },
];

const routes = [
  { path: "/", element: <DefaultPage /> },
  { path: "Dashboards/Default", element: <DefaultPage /> },
  { path: "Dashboards/Analytics", element: <Analytics /> },
  { path: "Dashboards/Saas", element: <SassPage /> },
  { path: "Pages/Profile", element: <ProfilePage /> },
  { path: "Pages/Settings", element: <SettingsPage /> },
  { path: "Pages/Pricing", element: <PricingPage /> },
  { path: "Pages/Chat", element: <ChatComponent /> },
  { path: "Pages/Blank Page", element: <EmptyPage /> },
  { path: "Projects", element: <ProjectPage /> },
  { path: "Order", element: <Order_Page /> },
  { path: "Products", element: <Products_page /> },
  { path: "Invoice/List", element: <ListDataTable /> },
  { path: "Invoice/Details", element: <ProductDetailPage /> },
  { path: "Tasks", element: <Task_Page /> },
  { path: "Calendar", element: <CalenderPge /> },
];

const authRoutes = [
  { path: "/auth/sign in", element: <SignInPage /> },
  { path: "/auth/sign up", element: <SignUpForm /> },
  { path: "/auth/sign in cover", element: <SignInCover /> },
  { path: "/auth/sign up cover", element: <SignUpCover /> },
  { path: "/auth/reset password", element: <ResetPass /> },
  { path: "/auth/reset password cover", element: <ResetPasssCover /> },
  { path: "/auth/404 Page", element: <Page404 title='404' subTitle='Page not found.' body='The page you are looking for might have been removed.' /> },
  { path: "/auth/500 Page", element: <Page404 title='500' subTitle='Internal server error.' body='The server encountered something unexpected that didnt allow it to complete the request.' /> }
];

const backgroundStyles = {
  blue: { backgroundColor: 'white' }, // Light blue background for blue theme
  green: { backgroundColor: '#e8f5e9' }, // Light green background for green theme
  dark: { backgroundColor: 'rgb(27, 38, 53)' }, // Dark gray background for dark theme
};

export default function DashboardLayoutBasic() {
  const savedTheme = localStorage.getItem('theme') || 'blue';
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (savedTheme === 'green') return greenTheme;
    if (savedTheme === 'dark') return darkTheme;
    return blueTheme; // Default theme
  });

  const changeTheme = (theme) => {
    let newTheme;
    switch (theme) {
      case 'blue':
        newTheme = blueTheme;
        break;
      case 'green':
        newTheme = greenTheme;
        break;
      case 'dark':
        newTheme = darkTheme;
        break;
      default:
        newTheme = blueTheme;
    }
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', theme); // Save the theme to local storage
  };

  const DashboardRoute = ({ children }) => {
    // Get the background style based on the current theme
    const backgroundStyle = backgroundStyles[currentTheme.name] || backgroundStyles.blue;

    return (
      <DashboardLayout>
        <PrimarySearchAppBar changeTheme={changeTheme} />
        <PageContainer sx={backgroundStyle}>
          {children}
        </PageContainer>
        <Footer />
      </DashboardLayout>
    );
  };

  return (
    <Router>
      <AppProvider navigation={NAVIGATION} theme={currentTheme}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={<DashboardRoute>{element}</DashboardRoute>} />
          ))}
          {authRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </AppProvider>
    </Router>
  );
}