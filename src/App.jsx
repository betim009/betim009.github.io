import { useState } from 'react'
import perfil from './assets/perfil.png'
import luisa from './assets/luisa.png'
import pedro from './assets/pedro.png'
import camilla from './assets/camilla.png'

import {
  Container,
  Typography,
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  CssBaseline,
  ThemeProvider,
  createTheme,
  FormControlLabel,
  Paper
} from '@mui/material'

import SchoolIcon from '@mui/icons-material/School'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ForumIcon from '@mui/icons-material/Forum'
import JavascriptIcon from '@mui/icons-material/Javascript'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { DiPython } from 'react-icons/di'


const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5'
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212'
    }
  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Container sx={{ py: 4, maxWidth: 480 }}>
        <Box sx={{ textAlign: 'right' }}>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            }
            label={darkMode ? 'Modo Escuro' : 'Modo Claro'}
          />
        </Box>

        {/* FOTO + NOME */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Avatar alt="Alberto" src={perfil} sx={{ width: 140, height: 140, mb: 2, mx: 'auto' }} />
          <Typography variant="h5" gutterBottom>
            Alberto Fernandes Couto
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto' }}>
            Professor de Informática e Desenvolvedor Full Stack Senior | Transforme sua carreira com aulas personalizadas de JavaScript, TypeScript e Python
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              component="a"
              href="https://albertoagenda.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver minha agenda
            </Button>
            <Button
              variant="contained"
              component="a"
              href="https://wa.me/5528999082744"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcar uma aula
            </Button>
          </Box>
        </Box>

        {/* SOBRE MIM */}
        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
          <Typography variant="h6" gutterBottom>Sobre mim</Typography>
          <Typography variant="body1" sx={{ textAlign: 'left' }}>
            Com mais de 10 anos de experiência e centenas de alunos satisfeitos, combino experiência prática do mundo real com metodologia pedagógica comprovada. Técnico em informática e graduado em Licenciatura em informática no IFES (Instituto Federal do Espírito Santo).
            <br /><br />
            <strong>As aulas são ideais para:</strong><br />
            – Iniciantes sem experiência em programação.<br />
            – Estudantes de TI que precisam de reforço.<br />
            – Profissionais buscando transição de carreira.<br />
            – Desenvolvedores buscando especialização.
          </Typography>
        </Paper>

        {/* LINKS */}
        <Paper elevation={2} sx={{ p: 2, mb: 3 }}>
          <List>
            <ListItem
              button
              component="a"
              href="https://www.superprof.com.br/professor-informatica-desenvolvedor-full-stack-senior-transforme-sua-carreira-com-aulas-personalizadas-javascript.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText
                primary="SuperProf"
                secondary="Aulas particulares"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://albertoagenda.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
              <ListItemText
                primary="Agenda Online"
                secondary="Visualize os horários disponíveis"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://discord.gg/DvstEBq5jW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><ForumIcon /></ListItemIcon>
              <ListItemText
                primary="Discord"
                secondary="Canal para alunos"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.linkedin.com/in/albertocouto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><LinkedInIcon /></ListItemIcon>
              <ListItemText
                primary="LinkedIn"
                secondary="Perfil profissional"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://github.com/betim009"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText
                primary="GitHub"
                secondary="Projetos e códigos"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://www.instagram.com/albertofernandescouto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><FaInstagram size={24} /></ListItemIcon>
              <ListItemText
                primary="Instagram"
                secondary="@albertofernandescouto"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://wa.me/5528999082744"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><FaWhatsapp size={24} /></ListItemIcon>
              <ListItemText
                primary="WhatsApp"
                secondary="Fale comigo diretamente"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://github.com/betim009/meu_curso_javascript"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><JavascriptIcon color="warning" sx={{ fontSize: 40 }} /></ListItemIcon>
              <ListItemText
                primary="Material JavaScript"
                secondary="Apostila e exercícios"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>
            <ListItem
              button
              component="a"
              href="https://github.com/betim009/meu_curso_python"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ListItemIcon><DiPython size={24} color="#306998" /></ListItemIcon>
              <ListItemText
                primary="Material Python"
                secondary="Conteúdo para iniciantes"
                primaryTypographyProps={{ color: 'text.primary' }}
              />
            </ListItem>

          </List>
        </Paper>

        {/* RECOMENDAÇÕES */}
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Recomendações
        </Typography>

        <Paper elevation={2} sx={{ display: 'flex', gap: 2, p: 2, mb: 2 }}>
          <Box sx={{ minWidth: 80, textAlign: 'center' }}>
            <Avatar alt="Larissa" src={luisa} sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }} />
            <Typography variant="body2"><strong>Luisa</strong></Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <JavascriptIcon color="warning" />
              <Typography variant="subtitle2"><strong>JavaScript</strong></Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              eu estou gostando muito das nossas aulas, mesmo sendo poucas, eu consegui evoluir muito de uma pessoa que não sabia de nada para hoje estar conseguindo aos poucos fazer um site de super trunfo, e sinceramente, achei super divertido nossa interação!! Você ensina muito e é uma pessoa compreensiva, obrigada pelas aulas que tivemos até hoje, pretendo continuar para aprender mais!!!
            </Typography>
          </Box>
        </Paper>

        {/* MAIS recomendações podem ser duplicadas aqui se quiser */}

        <Paper elevation={2} sx={{ display: 'flex', gap: 2, p: 2, mb: 2 }}>
          <Box sx={{ minWidth: 80, textAlign: 'center' }}>
            <Avatar alt="Larissa" src={pedro} sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }} />
            <Typography variant="body2"><strong>Pedro</strong></Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <DiPython size={24} color="#306998" />
              <Typography variant="subtitle2"><strong>Python</strong></Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              sinceramente por enquanto gostei de tudo Alberto, seu método de ensino é otimo e gostei que você é aberto a coisas novas, como por exemplo quando te mostrei o arquivo ipynb
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={2} sx={{ display: 'flex', gap: 2, p: 2, mb: 2 }}>
          <Box sx={{ minWidth: 80, textAlign: 'center' }}>
            <Avatar alt="Larissa" src={camilla} sx={{ width: 60, height: 60, mx: 'auto', mb: 1 }} />
            <Typography variant="body2"><strong>Camilla</strong></Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <DiPython size={24} color="#306998" />
              <Typography variant="subtitle2"><strong>Python</strong></Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: 'left' }}>
              O Alberto é um excelente professor! Ele explica tudo de forma super descomplicada e tem uma didática incrível, o que faz com que, mesmo sendo nova na área, eu consiga entender tudo perfeitamente. Além disso, ele sempre disponibiliza material de estudo que facilita ainda mais o aprendizado. Estou aprendendo muito com ele!
            </Typography>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default App
