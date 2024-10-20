<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Aspectos clave de frutas, verduras, y la preparación de alimentos saludables',
      titulo:
        'Cuestionario: Elaboración de alimentos saludables a base de frutas y verduras',
      introduccion:
        '<b> Objetivo:</b> Identificar los procesos clave de manipulación, conservación y transformación de frutas y verduras, así como los compuestos principales que intervienen en su calidad. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué porcentaje de agua contienen las frutas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '60 % - 70 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '50 % - 60 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '75 % - 90 %.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '40 % - 50 %.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el principal proceso que ocurre en frutas y hortalizas después de ser recolectadas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Respiran, absorben oxígeno y emiten dióxido de carbono.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se descomponen inmediatamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No sufren ningún cambio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pierden toda su humedad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué afecta la madurez en frutas y hortalizas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de vitaminas que contiene la fruta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tamaño y forma de la semilla.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El sabor, color y jugosidad del producto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El contenido de grasa de la fruta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué compuesto de las frutas es responsable de la degradación del almidón en azúcares durante la maduración?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Pectina.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ácido ascórbico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Celulosa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almidón.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Cuál es un ejemplo de verdura clasificada como raíz?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomate.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pepino.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zanahoria.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Espinaca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué técnica se utiliza para conservar frutas y verduras en vinagre?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Liofilización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Secado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fermentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Encurtido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué fruta se recomienda no refrigerar para evitar que se retrase su maduración?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Plátano.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Manzana.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El escaldado es un proceso que consiste en cocer los vegetales y frutas en agua caliente por breves periodos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El contenido de proteínas en la mayoría de las frutas es considerable y constituye una fuente importante para la dieta humana.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La salsa de tomate del documento se elabora con conservantes artificiales.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
