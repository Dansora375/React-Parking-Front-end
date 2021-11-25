import { createTheme } from "@mui/material/styles";

const typography ={
  // si se desea cambiar la fuente de la letra  
  // ahcerlo aqui
  fontFamily:'PT Sans Caption, sans-serif',
  
}


export const darkTheme  = createTheme({
  shadows:['none'],
  typography,
  palette: {
    mode:'dark',
    primary: {
      main: '#14FFEC',
      contrastText:'#e5e8ec'
    },
    secondary: {
      main: '#0D7377'
    },
    tertiary:{
      main:'#BCFFFA',
    },  
    background:{
      main: '#323232'
    },
    text:{
      primary:'#14FFEC',
      secondary:'#BCFFFA',
      tertiary:'#0D7377',
      dark:'#323232',
      other:'#e5e8ec'
    },
  },
  
  // Por si se desean cambiar los colores de warning
  // y otros

  // error:{
  //   main:''
  // },
  // warning:{
  //   main:''
  // },
  //  info:{
  //   main:''
  // },
  //  success:{
  //     main:''
  //   },
  overrides:{
    MuiAppBar:{
      root:{
        // cuando se utilice cambair por el color 
        // correspondiente
        background:'white',
        boxShadow:'none'
      },
      colorPrimary:{
        background:'red',
      }
    }
  }
})

// export const lightTheme  = createTheme({
//   shadows:['none'],
//   typography,
//   palette: {
  // mode:'light',
//     primary: {
//       main: '#14FFEC'
//     },
//     secondary: {
//       main: '#0D7377'
//     },
//     background:{
//       main: '#323232'
//     }
//   }
// })