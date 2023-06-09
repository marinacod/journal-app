import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, TextField, Typography, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
  return (
    <AuthLayout title='Regístrate' >

    <form>

    <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>

        <TextField
          label="Nombre Completo"
          type="text"
          placeholder='Arostegui Maranto'
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label="Correo Electronico"
          type="email"
          placeholder='Arostegui@correo.com'
          fullWidth
        />
      </Grid>

      <Grid item xs={12} sx={{ mt: 2 }}>
        <TextField
          label="Contraseña"
          type="password"
          placeholder='password'
          fullWidth
        />
      </Grid>

      <Grid
        container
        spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12}>
          <Button variant='contained' fullWidth>
            Crear Cuenta
          </Button>
        </Grid>


      </Grid>
      
       

     

      <Grid container direction='row' justifyContent='end'>
      <Typography sx={{mr:1}} >¿Ya tienes cuenta?</Typography>
        <Link component={RouterLink} color='inherit' to="/auth/login"> 
        Ingresar
        </Link>

      </Grid>



    </Grid>

  </form>
    </AuthLayout>
    
    
  )
}
