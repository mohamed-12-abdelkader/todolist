
import './App.css';
import Todolist from './componantes/Todolist';
//import ColorButtons from './list';
import {createTheme,ThemeProvider} from "@mui/material/styles"

const theme = createTheme({
typography:{
  fontFamily:[
    "A"
  ]
}
});


export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
    <Todolist/>
  </div>
  </ThemeProvider>
  );
}


