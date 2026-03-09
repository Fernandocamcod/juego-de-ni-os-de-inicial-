// =============================================
// CONFIGURACIÓN DE PREGUNTAS POR JUEGO CON NIVELES
// =============================================
const juegos = {
    cocinar: {
        titulo: "👨‍🍳 VAMOS A COCINAR",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué usamos para cocinar la sopa?",
                        correcta: "olla",
                        opciones: [
                            { id: "olla", emoji: "🍲", texto: "Olla" },
                            { id: "escoba", emoji: "🧹", texto: "Escoba" },
                            { id: "plancha", emoji: "👕", texto: "Plancha" }
                        ]
                    },
                    {
                        pregunta: "¿Con qué cortamos la comida?",
                        correcta: "cuchillo",
                        opciones: [
                            { id: "cuchillo", emoji: "🔪", texto: "Cuchillo" },
                            { id: "tenedor", emoji: "🍴", texto: "Tenedor" },
                            { id: "cuchara", emoji: "🥄", texto: "Cuchara" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué servimos la comida?",
                        correcta: "cucharon",
                        opciones: [
                            { id: "cucharon", emoji: "🥄", texto: "Cucharón" },
                            { id: "cuchara", emoji: "🥄", texto: "Cuchara" },
                            { id: "tenedor", emoji: "🍴", texto: "Tenedor" },
                            { id: "espumadera", emoji: "🥄", texto: "Espumadera" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde guardamos la comida fría?",
                        correcta: "nevera",
                        opciones: [
                            { id: "nevera", emoji: "🧊", texto: "Nevera" },
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "microondas", emoji: "📦", texto: "Microondas" },
                            { id: "lavaplatos", emoji: "🍽️", texto: "Lavaplatos" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué usamos para batir huevos?",
                        correcta: "batidor",
                        opciones: [
                            { id: "batidor", emoji: "🥚", texto: "Batidor" },
                            { id: "tenedor", emoji: "🍴", texto: "Tenedor" },
                            { id: "cuchara", emoji: "🥄", texto: "Cuchara" },
                            { id: "espátula", emoji: "🍳", texto: "Espátula" },
                            { id: "cuchillo", emoji: "🔪", texto: "Cuchillo" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde calentamos la comida?",
                        correcta: "microondas",
                        opciones: [
                            { id: "microondas", emoji: "📦", texto: "Microondas" },
                            { id: "horno", emoji: "🔥", texto: "Horno" },
                            { id: "nevera", emoji: "🧊", texto: "Nevera" },
                            { id: "lavaplatos", emoji: "🍽️", texto: "Lavaplatos" },
                            { id: "armario", emoji: "🚪", texto: "Armario" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    },
    
    limpiar: {
        titulo: "🧹 VAMOS A LIMPIAR",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué barremos el piso?",
                        correcta: "escoba",
                        opciones: [
                            { id: "escoba", emoji: "🧹", texto: "Escoba" },
                            { id: "cuchara", emoji: "🥄", texto: "Cuchara" },
                            { id: "plancha", emoji: "👕", texto: "Plancha" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde echamos el agua para trapear?",
                        correcta: "balde",
                        opciones: [
                            { id: "balde", emoji: "🪣", texto: "Balde" },
                            { id: "olla", emoji: "🍲", texto: "Olla" },
                            { id: "lavadora", emoji: "🧺", texto: "Lavadora" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué trapeamos el piso?",
                        correcta: "trapeador",
                        opciones: [
                            { id: "trapeador", emoji: "🧹", texto: "Trapeador" },
                            { id: "escoba", emoji: "🧹", texto: "Escoba" },
                            { id: "plumero", emoji: "🪶", texto: "Plumero" },
                            { id: "esponja", emoji: "🧽", texto: "Esponja" }
                        ]
                    },
                    {
                        pregunta: "¿Qué usamos para limpiar el polvo?",
                        correcta: "plumero",
                        opciones: [
                            { id: "plumero", emoji: "🪶", texto: "Plumero" },
                            { id: "trapeador", emoji: "🧹", texto: "Trapeador" },
                            { id: "escoba", emoji: "🧹", texto: "Escoba" },
                            { id: "aspiradora", emoji: "🌀", texto: "Aspiradora" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué usamos para limpiar los vidrios?",
                        correcta: "limpiavidrios",
                        opciones: [
                            { id: "limpiavidrios", emoji: "🪟", texto: "Limpiavidrios" },
                            { id: "trapeador", emoji: "🧹", texto: "Trapeador" },
                            { id: "esponja", emoji: "🧽", texto: "Esponja" },
                            { id: "plumero", emoji: "🪶", texto: "Plumero" },
                            { id: "escoba", emoji: "🧹", texto: "Escoba" }
                        ]
                    },
                    {
                        pregunta: "¿Qué máquina aspira el polvo?",
                        correcta: "aspiradora",
                        opciones: [
                            { id: "aspiradora", emoji: "🌀", texto: "Aspiradora" },
                            { id: "lavadora", emoji: "🧺", texto: "Lavadora" },
                            { id: "nevera", emoji: "🧊", texto: "Nevera" },
                            { id: "microondas", emoji: "📦", texto: "Microondas" },
                            { id: "plancha", emoji: "👕", texto: "Plancha" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    },
    
    lavar: {
        titulo: "🧺 VAMOS A LAVAR",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Dónde lavamos la ropa?",
                        correcta: "lavadora",
                        opciones: [
                            { id: "lavadora", emoji: "🧺", texto: "Lavadora" },
                            { id: "nevera", emoji: "🧊", texto: "Nevera" },
                            { id: "microondas", emoji: "📦", texto: "Microondas" }
                        ]
                    },
                    {
                        pregunta: "¿Qué usamos para lavar la ropa a mano?",
                        correcta: "jabon",
                        opciones: [
                            { id: "jabon", emoji: "🧼", texto: "Jabón" },
                            { id: "cloro", emoji: "🧪", texto: "Cloro" },
                            { id: "suavizante", emoji: "🌸", texto: "Suavizante" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué usamos para que la ropa huela rico?",
                        correcta: "suavizante",
                        opciones: [
                            { id: "suavizante", emoji: "🌸", texto: "Suavizante" },
                            { id: "jabon", emoji: "🧼", texto: "Jabón" },
                            { id: "cloro", emoji: "🧪", texto: "Cloro" },
                            { id: "perfume", emoji: "🧴", texto: "Perfume" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde colgamos la ropa para secar?",
                        correcta: "tendedero",
                        opciones: [
                            { id: "tendedero", emoji: "👕", texto: "Tendedero" },
                            { id: "silla", emoji: "🪑", texto: "Silla" },
                            { id: "cama", emoji: "🛏️", texto: "Cama" },
                            { id: "mesa", emoji: "🪑", texto: "Mesa" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué usamos para proteger las manos al lavar?",
                        correcta: "guantes",
                        opciones: [
                            { id: "guantes", emoji: "🧤", texto: "Guantes" },
                            { id: "jabon", emoji: "🧼", texto: "Jabón" },
                            { id: "cepillo", emoji: "🧹", texto: "Cepillo" },
                            { id: "toalla", emoji: "🧣", texto: "Toalla" },
                            { id: "esponja", emoji: "🧽", texto: "Esponja" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde ponemos la ropa sucia?",
                        correcta: "cesto",
                        opciones: [
                            { id: "cesto", emoji: "🧺", texto: "Cesto de ropa" },
                            { id: "caja", emoji: "📦", texto: "Caja" },
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "cajon", emoji: "🗄️", texto: "Cajón" },
                            { id: "estante", emoji: "📚", texto: "Estante" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    },
    
    planchar: {
        titulo: "👕 VAMOS A PLANCHAR",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué planchamos la ropa?",
                        correcta: "plancha",
                        opciones: [
                            { id: "plancha", emoji: "👕", texto: "Plancha" },
                            { id: "lavadora", emoji: "🧺", texto: "Lavadora" },
                            { id: "nevera", emoji: "🧊", texto: "Nevera" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde ponemos la ropa para planchar?",
                        correcta: "tabla",
                        opciones: [
                            { id: "tabla", emoji: "🪑", texto: "Tabla de planchar" },
                            { id: "mesa", emoji: "🪑", texto: "Mesa" },
                            { id: "cama", emoji: "🛏️", texto: "Cama" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué ropa necesitas planchar?",
                        correcta: "camisa",
                        opciones: [
                            { id: "camisa", emoji: "👕", texto: "Camisa" },
                            { id: "pantalon", emoji: "👖", texto: "Pantalón" },
                            { id: "vestido", emoji: "👗", texto: "Vestido" },
                            { id: "falda", emoji: "👗", texto: "Falda" }
                        ]
                    },
                    {
                        pregunta: "¿Qué le echamos a la ropa para que no se pegue?",
                        correcta: "agua",
                        opciones: [
                            { id: "agua", emoji: "💧", texto: "Agua" },
                            { id: "aceite", emoji: "🫒", texto: "Aceite" },
                            { id: "jabon", emoji: "🧼", texto: "Jabón" },
                            { id: "perfume", emoji: "🌸", texto: "Perfume" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Dónde guardamos la ropa planchada?",
                        correcta: "armario",
                        opciones: [
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "cajon", emoji: "🗄️", texto: "Cajón" },
                            { id: "estante", emoji: "📚", texto: "Estante" },
                            { id: "caja", emoji: "📦", texto: "Caja" },
                            { id: "baul", emoji: "🧳", texto: "Baúl" }
                        ]
                    },
                    {
                        pregunta: "¿Qué máquina quita las arrugas con vapor?",
                        correcta: "vapor",
                        opciones: [
                            { id: "vapor", emoji: "💨", texto: "Vaporizador" },
                            { id: "plancha", emoji: "👕", texto: "Plancha" },
                            { id: "lavadora", emoji: "🧺", texto: "Lavadora" },
                            { id: "aspiradora", emoji: "🌀", texto: "Aspiradora" },
                            { id: "microondas", emoji: "📦", texto: "Microondas" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    },
    
    jardin: {
        titulo: "🌱 VAMOS AL JARDÍN",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué regamos las plantas?",
                        correcta: "regadera",
                        opciones: [
                            { id: "regadera", emoji: "🚿", texto: "Regadera" },
                            { id: "pala", emoji: "⛏️", texto: "Pala" },
                            { id: "rastrillo", emoji: "🧹", texto: "Rastrillo" }
                        ]
                    },
                    {
                        pregunta: "¿Qué necesitan las plantas para crecer?",
                        correcta: "agua",
                        opciones: [
                            { id: "agua", emoji: "💧", texto: "Agua" },
                            { id: "jabon", emoji: "🧼", texto: "Jabón" },
                            { id: "aceite", emoji: "🫒", texto: "Aceite" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Con qué cavamos la tierra?",
                        correcta: "pala",
                        opciones: [
                            { id: "pala", emoji: "⛏️", texto: "Pala" },
                            { id: "rastrillo", emoji: "🧹", texto: "Rastrillo" },
                            { id: "azada", emoji: "⛏️", texto: "Azada" },
                            { id: "manguera", emoji: "💧", texto: "Manguera" }
                        ]
                    },
                    {
                        pregunta: "¿Qué usamos para quitar las hojas secas?",
                        correcta: "rastrillo",
                        opciones: [
                            { id: "rastrillo", emoji: "🧹", texto: "Rastrillo" },
                            { id: "pala", emoji: "⛏️", texto: "Pala" },
                            { id: "tijeras", emoji: "✂️", texto: "Tijeras" },
                            { id: "guantes", emoji: "🧤", texto: "Guantes" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Qué nos protegemos las manos en el jardín?",
                        correcta: "guantes",
                        opciones: [
                            { id: "guantes", emoji: "🧤", texto: "Guantes" },
                            { id: "sombrero", emoji: "🧢", texto: "Sombrero" },
                            { id: "gafas", emoji: "👓", texto: "Gafas" },
                            { id: "botas", emoji: "👢", texto: "Botas" },
                            { id: "pala", emoji: "⛏️", texto: "Pala" }
                        ]
                    },
                    {
                        pregunta: "¿Qué usamos para cortar las ramas?",
                        correcta: "tijeras",
                        opciones: [
                            { id: "tijeras", emoji: "✂️", texto: "Tijeras de podar" },
                            { id: "cuchillo", emoji: "🔪", texto: "Cuchillo" },
                            { id: "pala", emoji: "⛏️", texto: "Pala" },
                            { id: "rastrillo", emoji: "🧹", texto: "Rastrillo" },
                            { id: "azada", emoji: "⛏️", texto: "Azada" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    },
    
    ordenar: {
        titulo: "📦 VAMOS A ORDENAR",
        nivelActual: 'facil',
        niveles: {
            facil: {
                nombre: "Fácil",
                estrellas: "⭐",
                preguntas: [
                    {
                        pregunta: "¿Dónde guardamos los juguetes?",
                        correcta: "caja",
                        opciones: [
                            { id: "caja", emoji: "📦", texto: "Caja de juguetes" },
                            { id: "cama", emoji: "🛏️", texto: "Cama" },
                            { id: "silla", emoji: "🪑", texto: "Silla" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde guardamos los libros?",
                        correcta: "estante",
                        opciones: [
                            { id: "estante", emoji: "📚", texto: "Estante" },
                            { id: "caja", emoji: "📦", texto: "Caja" },
                            { id: "mesa", emoji: "🪑", texto: "Mesa" }
                        ]
                    }
                ]
            },
            medio: {
                nombre: "Medio",
                estrellas: "⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Dónde guardamos la ropa?",
                        correcta: "armario",
                        opciones: [
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "cajon", emoji: "🗄️", texto: "Cajón" },
                            { id: "caja", emoji: "📦", texto: "Caja" },
                            { id: "estante", emoji: "📚", texto: "Estante" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde guardamos los cubiertos?",
                        correcta: "cajon",
                        opciones: [
                            { id: "cajon", emoji: "🗄️", texto: "Cajón" },
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "estante", emoji: "📚", texto: "Estante" },
                            { id: "mesa", emoji: "🪑", texto: "Mesa" }
                        ]
                    }
                ]
            },
            dificil: {
                nombre: "Difícil",
                estrellas: "⭐⭐⭐",
                preguntas: [
                    {
                        pregunta: "¿Dónde tiramos la basura?",
                        correcta: "basura",
                        opciones: [
                            { id: "basura", emoji: "🗑️", texto: "Bote de basura" },
                            { id: "caja", emoji: "📦", texto: "Caja" },
                            { id: "bolsa", emoji: "🛍️", texto: "Bolsa" },
                            { id: "saco", emoji: "🎒", texto: "Saco" },
                            { id: "cesto", emoji: "🧺", texto: "Cesto" }
                        ]
                    },
                    {
                        pregunta: "¿Dónde guardamos los zapatos?",
                        correcta: "zapatero",
                        opciones: [
                            { id: "zapatero", emoji: "👞", texto: "Zapatero" },
                            { id: "armario", emoji: "🚪", texto: "Armario" },
                            { id: "cajon", emoji: "🗄️", texto: "Cajón" },
                            { id: "estante", emoji: "📚", texto: "Estante" },
                            { id: "caja", emoji: "📦", texto: "Caja" }
                        ]
                    }
                ]
            }
        },
        indicePregunta: 0
    }
};

let tiempoEspera = null;
let hoverTimeout = null;

// =============================================
// VOZ
// =============================================
function hablar(texto) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'es-ES';
        utterance.rate = 0.9;
        utterance.pitch = 1.3;
        
        const voces = window.speechSynthesis.getVoices();
        const vozEspañol = voces.find(voz => voz.lang.includes('es'));
        if (vozEspañol) utterance.voice = vozEspañol;
        
        window.speechSynthesis.speak(utterance);
    }
}

// =============================================
// LEER OPCIÓN AL PASAR EL MOUSE
// =============================================
function leerOpcion(texto) {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
    }
    
    hoverTimeout = setTimeout(() => {
        hablar(texto);
    }, 200);
}

// =============================================
// CAMBIAR ENTRE PANTALLAS
// =============================================
function cambiarPantalla(pantalla) {
    document.querySelectorAll('.pantalla').forEach(p => {
        p.classList.remove('active');
    });
    
    document.getElementById(`pantalla-${pantalla}`).classList.add('active');
    
    if (pantalla !== 'menu') {
        // Reiniciar al nivel fácil al entrar
        juegos[pantalla].nivelActual = 'facil';
        juegos[pantalla].indicePregunta = 0;
        actualizarIndicadorNivel(pantalla);
        cargarPregunta(pantalla);
    } else {
        document.getElementById('burbuja-menu').textContent = '¡Elige una tarea!';
        hablar('Elige una tarea de la casa');
    }
}

// =============================================
// CAMBIAR NIVEL DE DIFICULTAD
// =============================================
function cambiarNivel(tipo, nivel) {
    juegos[tipo].nivelActual = nivel;
    juegos[tipo].indicePregunta = 0;
    
    actualizarIndicadorNivel(tipo);
    cargarPregunta(tipo);
    
    let mensaje = "";
    if (nivel === 'facil') mensaje = "Nivel fácil. Solo 3 opciones";
    else if (nivel === 'medio') mensaje = "Nivel medio. 4 opciones";
    else mensaje = "Nivel difícil. 5 opciones";
    
    hablar(mensaje);
    document.getElementById(`mensaje-${tipo}`).innerHTML = mensaje;
}

// =============================================
// ACTUALIZAR INDICADOR DE NIVEL
// =============================================
function actualizarIndicadorNivel(tipo) {
    const juego = juegos[tipo];
    const nivel = juego.nivelActual;
    const estrellas = juego.niveles[nivel].estrellas;
    
    document.getElementById(`estrellas-${tipo}`).textContent = estrellas;
    
    // Resaltar botón de nivel activo
    document.querySelectorAll(`#pantalla-${tipo} .boton-nivel`).forEach(btn => {
        btn.classList.remove('activo');
    });
    
    const botonActivo = document.querySelector(`#pantalla-${tipo} .boton-nivel[onclick*="${nivel}"]`);
    if (botonActivo) botonActivo.classList.add('activo');
}

// =============================================
// CARGAR PREGUNTA EN PANTALLA
// =============================================
function cargarPregunta(tipo) {
    const juego = juegos[tipo];
    const nivel = juego.nivelActual;
    const preguntas = juego.niveles[nivel].preguntas;
    const pregunta = preguntas[juego.indicePregunta];
    
    // Actualizar textos
    document.getElementById(`pregunta-${tipo}`).textContent = pregunta.pregunta;
    document.getElementById(`burbuja-${tipo}`).textContent = pregunta.pregunta;
    
    // Generar botones
    const grid = document.getElementById(`grid-${tipo}`);
    grid.innerHTML = '';
    grid.setAttribute('data-juego', tipo);
    
    pregunta.opciones.forEach(opcion => {
        const boton = document.createElement('button');
        boton.className = 'boton-herramienta';
        boton.setAttribute('data-herramienta', opcion.id);
        
        // Evento para leer al pasar el mouse
        boton.addEventListener('mouseenter', function() {
            leerOpcion(opcion.texto);
        });
        
        // Evento para verificar al hacer clic
        boton.addEventListener('click', function() {
            verificarHerramienta(tipo, opcion.id);
        });
        
        boton.innerHTML = `
            ${opcion.emoji} <span>${opcion.texto}</span>
        `;
        
        grid.appendChild(boton);
    });
    
    // Quitar resaltados
    document.querySelectorAll(`#pantalla-${tipo} .resaltado`).forEach(el => {
        el.classList.remove('resaltado');
    });
    
    // Hablar la pregunta
    setTimeout(() => {
        hablar(pregunta.pregunta);
    }, 300);
}

// =============================================
// VERIFICAR RESPUESTA
// =============================================
function verificarHerramienta(tipo, herramienta) {
    const juego = juegos[tipo];
    const nivel = juego.nivelActual;
    const pregunta = juego.niveles[nivel].preguntas[juego.indicePregunta];
    const mensajeDiv = document.getElementById(`mensaje-${tipo}`);
    
    if (herramienta === pregunta.correcta) {
        // ¡ACIERTO!
        mensajeDiv.innerHTML = '🎉 ¡Muy bien! ¡Correcto! 🎉';
        hablar(`¡Muy bien! ${pregunta.opciones.find(o => o.id === herramienta).texto} es correcto`);
        
        // Resaltar la opción correcta
        document.querySelectorAll(`#pantalla-${tipo} .boton-herramienta`).forEach(b => {
            b.classList.remove('resaltado');
        });
        event.currentTarget.classList.add('resaltado');
        
        // Cambiar a siguiente pregunta después de 2 segundos
        if (tiempoEspera) clearTimeout(tiempoEspera);
        tiempoEspera = setTimeout(() => {
            const preguntas = juego.niveles[nivel].preguntas;
            juego.indicePregunta = (juego.indicePregunta + 1) % preguntas.length;
            cargarPregunta(tipo);
            mensajeDiv.innerHTML = '¡Siguiente pregunta!';
            tiempoEspera = null;
        }, 2000);
        
    } else {
        // ERROR
        mensajeDiv.innerHTML = '😅 Casi... ¡inténtalo de nuevo!';
        
        // Mensaje de ayuda
        const correcta = pregunta.opciones.find(o => o.id === pregunta.correcta);
        hablar(`No es esa. Busca ${correcta.texto}`);
        
        // Feedback visual
        const boton = event.currentTarget;
        boton.style.transform = 'translateX(5px)';
        setTimeout(() => boton.style.transform = '', 100);
        setTimeout(() => boton.style.transform = 'translateX(-5px)', 150);
        setTimeout(() => boton.style.transform = '', 200);
    }
}

// =============================================
// REINICIAR JUEGO (siguiente pregunta)
// =============================================
function reiniciarJuego(tipo) {
    if (tiempoEspera) {
        clearTimeout(tiempoEspera);
        tiempoEspera = null;
    }
    
    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
    }
    
    const juego = juegos[tipo];
    const nivel = juego.nivelActual;
    const preguntas = juego.niveles[nivel].preguntas;
    
    juego.indicePregunta = (juego.indicePregunta + 1) % preguntas.length;
    cargarPregunta(tipo);
    
    document.getElementById(`mensaje-${tipo}`).innerHTML = '¡Siguiente pregunta!';
    document.getElementById(`burbuja-${tipo}`).textContent = '¡Otra vez!';
    hablar('¡Siguiente pregunta!');
}

// =============================================
// INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', function() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
    
    setTimeout(() => {
        hablar('¡Hola! Soy Pepito. Pasa el mouse por las opciones para escucharlas');
    }, 500);
});