import { Component } from '@angular/core';
import { Plan } from './interface-plan';
// import * as nodemailer from 'nodemailer';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})


export class InicioComponent {

  planes: Plan[] = [
    {
      opcion: 'HairSo',
      texto: 'Si te gusta la acción, el airsoft es perfecto para ti. Es una actividad de simulación militar en la que utilizamos réplicas de armas de fuego para disparar bolas de plástico. Será una oportunidad perfecta para demostrar tus habilidades estratégicas y tu trabajo en equipo.',
      marked: false,
      color: 'black'
    },
    {
      opcion: 'Turramitica',
      texto: 'Si prefieres algo más tranquilo, podemos ir a Terramitica, un parque temático donde puedes disfrutar de montañas rusas, atracciones acuáticas y espectáculos en vivo. Será un día divertido y lleno de emociones.',
      marked: false,
      color: 'black'
    },
    {
      opcion: 'Cars (mcqueen)',
      texto: '¿Te gusta la velocidad? Entonces los karts son la opción ideal. Podemos ir a una pista de karts y competir para ver quién es el más rápido. ¡Será una carrera emocionante!',
      marked: false,
      color: 'black'
    },
    {
      opcion: 'PinBA',
      texto: 'Si te gusta la acción pero prefieres algo más tranquilo que el airsoft, entonces el paintball es para ti. Es una actividad en la que utilizamos pistolas de pintura para disparar a nuestros oponentes. Será una oportunidad para demostrar tus habilidades de puntería y estrategia.',
      marked: false,
      color: 'black'
    },
    {
      opcion: 'Escape rum',
      texto: ' "¿Te imaginas estar en una habitación misteriosa con acertijos por resolver para escapar? Bueno, eso es exactamente lo que haremos este fin de semana. ¿Te unes?"',
      marked: false,
      color: 'black'
    }
  ];

  
  changeColor(pos: number) {
    if (this.planes[pos].marked) {
      this.planes[pos].marked = false; // desmarcamos el botón
      this.planes[pos].color = 'black';
    } else {
      this.planes.find(plan => {
        if (plan.marked) {
          plan.marked = false;
          plan.color = 'black';
        }
      });
      this.planes[pos].marked = true; // marcamos el botón actual
      this.planes[pos].color = 'red';
    }
  }

  enviar(){

    // const nodemailerUso = require(nodemailer);

    // let transporter = nodemailerUso.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: 'richardromero.gog@gmail.com', // Correo electrónico que enviará el correo
    //     pass: 'Y^97vE96RVgU2cG' // Contraseña del correo electrónico
    //   }
    // });

    // let mensaje=""
    this.planes.find(plan => {
      if (plan.marked) {
        console.log("Opcion elegida " + plan.opcion);
        // mensaje = plan.opcion;
      }
    }
    );

    // let mailOptions = {
    //   from: 'tuscolegas@gmail.com', // Correo electrónico que enviará el correo
    //   to: 'joseviki10@gmail.com', // Correo electrónico del destinatario
    //   subject: 'Enhorabuena, has contribuido a salvar el mundo',
    //   text: mensaje
    // };

    // transporter.sendMail(mailOptions, function(error: any, info: { response: string; }){
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Correo electrónico enviado: ' + info.response);
    //   }
    // });

  }
  
}