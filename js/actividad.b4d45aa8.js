(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0125":function(e,t,a){e.exports=a.p+"img/imagen4.a9ab05bb.png"},"1cf4":function(e,t,a){},"212d":function(e,t,a){"use strict";a("1cf4")},"27ba":function(e,t,a){},3126:function(e,t,a){"use strict";a("ec46")},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled,respuestas:e.respuestas},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],n=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("strong",{domProps:{innerHTML:e._s(e.pregunta.texto)}})]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-5"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col",domProps:{innerHTML:e._s(a.texto)}})])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("8f8a"),a("2877")),p=Object(l["a"])(u,n,c,!1,null,"3fad6faa",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.rtas.correctas!==e.preguntasCount&&e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Volver a intentarlo")])]):e.rtas.correctas===e.preguntasCount?t("div",{staticClass:"py-4"}):9===e.respuestasLength?t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Verificar")]),t("i",{staticClass:"fas fa-arrow-right"})]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],v={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0},respuestas:{type:Array,required:!0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"},rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e}}},C=v,f=(a("212d"),Object(l["a"])(C,b,g,!1,null,"71aa3d6e",null)),h=f.exports,x=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},_=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},y=j,A=(a("4d40"),Object(l["a"])(y,x,_,!1,null,"360ec089",null)),S=A.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:h,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},L=R,w=(a("3126"),Object(l["a"])(L,o,i,!1,null,"e84807d4",null)),M=w.exports,E={name:"ActividadDidactica",components:{Actividad:M},data:()=>({cuestionario:{tema:"Aspectos clave de frutas, verduras, y la preparación de alimentos saludables",titulo:"Cuestionario: Elaboración de alimentos saludables a base de frutas y verduras",introduccion:"<b> Objetivo:</b> Identificar los procesos clave de manipulación, conservación y transformación de frutas y verduras, así como los compuestos principales que intervienen en su calidad. ",barajarPreguntas:!0,preguntas:[{id:1,texto:"¿Qué porcentaje de agua contienen las frutas?",imagen:a("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"60 % - 70 %.",esCorrecta:!1},{id:"b",texto:"50 % - 60 %.",esCorrecta:!1},{id:"c",texto:"75 % - 90 %.",esCorrecta:!0},{id:"d",texto:"40 % - 50 %.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál es el principal proceso que ocurre en frutas y hortalizas después de ser recolectadas?",imagen:a("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Respiran, absorben oxígeno y emiten dióxido de carbono.",esCorrecta:!0},{id:"b",texto:"Se descomponen inmediatamente.",esCorrecta:!1},{id:"c",texto:"No sufren ningún cambio.",esCorrecta:!1},{id:"d",texto:"Pierden toda su humedad.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué afecta la madurez en frutas y hortalizas?",imagen:a("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"La cantidad de vitaminas que contiene la fruta.",esCorrecta:!1},{id:"b",texto:"El tamaño y forma de la semilla.",esCorrecta:!1},{id:"c",texto:"El sabor, color y jugosidad del producto.",esCorrecta:!0},{id:"d",texto:"El contenido de grasa de la fruta.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué compuesto de las frutas es responsable de la degradación del almidón en azúcares durante la maduración?",imagen:a("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Pectina.",esCorrecta:!1},{id:"b",texto:"Ácido ascórbico.",esCorrecta:!1},{id:"c",texto:"Celulosa.",esCorrecta:!1},{id:"d",texto:"Almidón.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Cuál es un ejemplo de verdura clasificada como raíz?",imagen:a("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Tomate.",esCorrecta:!1},{id:"b",texto:"Pepino.",esCorrecta:!1},{id:"c",texto:"Zanahoria.",esCorrecta:!0},{id:"d",texto:"Espinaca.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Qué técnica se utiliza para conservar frutas y verduras en vinagre?",imagen:a("b70f"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Liofilización.",esCorrecta:!1},{id:"b",texto:"Secado.",esCorrecta:!1},{id:"c",texto:"Fermentación.",esCorrecta:!1},{id:"d",texto:"Encurtido.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué fruta se recomienda no refrigerar para evitar que se retrase su maduración?",imagen:a("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Plátano.",esCorrecta:!0},{id:"b",texto:"Fresa.",esCorrecta:!1},{id:"c",texto:"Manzana.",esCorrecta:!1},{id:"d",texto:"Uva.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"El escaldado es un proceso que consiste en cocer los vegetales y frutas en agua caliente por breves periodos.",imagen:a("0125"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero.",esCorrecta:!0},{id:"b",texto:"Falso.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"El contenido de proteínas en la mayoría de las frutas es considerable y constituye una fuente importante para la dieta humana.",imagen:a("b3a4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero.",esCorrecta:!1},{id:"b",texto:"Falso.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"La salsa de tomate del documento se elabora con conservantes artificiales.",imagen:a("6a9b"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Verdadero.",esCorrecta:!1},{id:"b",texto:"Falso.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},H=E,I=Object(l["a"])(H,s,r,!1,null,null,null);t["default"]=I.exports},"4d40":function(e,t,a){"use strict";a("27ba")},5291:function(e,t,a){},"6a9b":function(e,t,a){e.exports=a.p+"img/imagen2.0897847a.png"},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},"8f8a":function(e,t,a){"use strict";a("5291")},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},b3a4:function(e,t,a){e.exports=a.p+"img/imagen1.2feac08a.png"},b70f:function(e,t,a){e.exports=a.p+"img/imagen3.dec1c153.png"},ec46:function(e,t,a){}}]);
//# sourceMappingURL=actividad.b4d45aa8.js.map