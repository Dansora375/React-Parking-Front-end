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
      main: '#14FFEC'
    },
    secondary: {
      main: '#0D7377'
    },
    background:{
      main: '#323232'
    }
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