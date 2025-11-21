import { JobOffer } from './types';

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'rosa-vientos',
    title: 'Técnico/a Superior en Administración y Finanzas',
    company: 'Rosa de los Vientos S.L.',
    location: 'Higuera de Vargas, Badajoz',
    salary: '18.000 - 20.000 € Bruto/Año',
    type: 'Indefinido',
    description: 'Formación vial y servicios educativos. Pequeña empresa familiar que busca reforzar su área administrativa debido al crecimiento.',
    mission: 'Formar conductores responsables y seguros, promoviendo una educación vial de calidad.',
    functions: [
      'Gestión administrativa y contable diaria.',
      'Emisión y registro de facturas, cobros y pagos.',
      'Elaboración de presupuestos y tesorería.',
      'Gestión de matrículas y bases de datos.',
      'Coordinación con gestoría externa.',
      'Atención telefónica y presencial.',
      'Informes mensuales y control de material.'
    ],
    requirements: {
      min: [
        'Técnico Superior en Administración y Finanzas.',
        'Experiencia mínima de 1 año.',
        'Dominio de herramientas ofimáticas.',
        'Conocimientos básicos de contabilidad.'
      ],
      valued: [
        'Programas: Contasol, Sage, A3.',
        'Experiencia en centros de formación.',
        'Inglés básico.',
        'Carné B.'
      ],
      soft: [
        'Responsabilidad.',
        'Trabajo en equipo.',
        'Orientación al cliente.'
      ]
    },
    benefits: [
      'Formación continua.',
      'Descuento en cursos de conducción.',
      'Flexibilidad horaria en alta demanda.',
      'Ambiente familiar.'
    ],
    process: [
      'Revisión de CV (12-30 Nov 2025).',
      'Entrevista telefónica.',
      'Entrevista presencial.',
      'Prueba práctica.',
      'Comunicación final.'
    ],
    contactEmail: 'rosadelosvientos@rosadelosvientos.es',
    deadline: '30 Noviembre 2025',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-rose-50'
  },
  {
    id: 'innovasteel',
    title: 'Técnico Administrativo Especializado en Logística',
    company: 'InnovaSteel',
    location: 'Badajoz',
    salary: '1.400 € Bruto/Mes',
    type: 'Temporal',
    description: 'PYME del sector secundario dedicada a diseños innovadores de viviendas sostenibles y ligeras.',
    mission: 'Aportar viviendas dignas, económicas y sostenibles.',
    functions: [
      'Gestión de logística de la empresa.',
      'Redacción y gestión de facturas.',
      'Notas de envío.',
      'Atención a proveedores.',
      'Gestión y archivo de documentación.',
      'Tabulación de datos.'
    ],
    requirements: {
      min: [
        'Grado Superior Administración y Finanzas.',
        'Manejo de programas de logística.',
        'Excel avanzado.',
        'Manejo de lengua portuguesa.'
      ],
      valued: [
        'Experiencia en logística de almacenes.',
        'Carné de conducir.'
      ],
      soft: [
        'Versatilidad.',
        'Proactividad.',
        'Resolución.'
      ]
    },
    benefits: [
      'Reducción de gastos de construcción de vivienda personal.',
      'Horario intensivo: 7:00h a 15:00h.'
    ],
    process: [
      'Envío de CV por correo.'
    ],
    contactEmail: 'InnovasteelSL@gmail.com',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-slate-50'
  },
  {
    id: 'el-elixir',
    title: 'Técnico de Administración y Finanzas',
    company: '"El Elixir" Balneario',
    location: 'Badajoz (Polígono Santa Engracia)',
    salary: '18.000 - 22.000 € Bruto/Año',
    type: 'Indefinido',
    description: 'Nuevo balneario enfocado en turismo, bienestar y salud. Ambiente positivo y colaborativo.',
    mission: 'Ofrecer experiencias únicas de descanso, salud y bienestar en un entorno natural.',
    functions: [
      'Atención de llamadas y clientes.',
      'Gestión de correspondencia y reservas.',
      'Control de stock y facturación.',
      'Planificación de promociones.'
    ],
    requirements: {
      min: [
        'Capacidad de organización.',
        'Herramientas de oficina.',
        'Habilidades de comunicación.'
      ],
      valued: [
        'Experiencia en gestión de reservas.',
        'Contabilidad básica.'
      ],
      soft: [
        'Actitud positiva.',
        'Discreción y confidencialidad.',
        'Adaptabilidad.'
      ]
    },
    benefits: [
      'Vacaciones retribuidas.',
      'Posibilidad de adaptación horaria.',
      'Entorno de crecimiento profesional.'
    ],
    process: [
      'Recepción CV (12-30 Enero 2025).',
      'Preselección.',
      'Entrevista.',
      'Prueba práctica.',
      'Entrevista final.'
    ],
    contactEmail: 'cv@elelixir.es', 
    deadline: '30 Enero 2025',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-teal-50'
  },
  {
    id: 'homepets',
    title: 'Técnico/a Superior en Administración',
    company: 'Homepets Olivenza S.L.',
    location: 'Olivenza, Badajoz',
    salary: '1.400 - 1.600 € Bruto/Mes',
    type: 'Indefinido',
    description: 'Centro integral de adiestramiento y cuidado de mascotas. Equipo multidisciplinar.',
    mission: 'Ofrecer un entorno seguro y educativo para mascotas.',
    functions: [
      'Gestión contable y financiera (asientos, balances).',
      'Tesorería y facturación.',
      'Coordinación fiscal con gestoría.',
      'Atención a clientes y proveedores.',
      'Gestión de subvenciones.'
    ],
    requirements: {
      min: [
        'Técnico Superior o equivalente.',
        'Experiencia mínima 1 año.',
        'Sólida contabilidad y fiscalidad básica.',
        'Software contable y Excel.'
      ],
      valued: [
        'Experiencia en PYMES.',
        'Gestión de nóminas.',
        'Inglés intermedio.',
        'Marketing básico.'
      ],
      soft: [
        'Amor por los animales.',
        'Iniciativa.',
        'Transparencia.'
      ]
    },
    benefits: [
      'Formación continua.',
      'Descuentos en servicios.',
      'Posibilidad de promoción.',
      'Opción de teletrabajo parcial (1 día/semana).',
      'Jornada intensiva en verano.'
    ],
    process: [
      'Recepción CV (10-25 Nov 2025).',
      'Entrevista telefónica.',
      'Entrevista presencial.',
      'Prueba técnica (Excel/Contable).',
      'Formalización.'
    ],
    contactEmail: 'empleo@homepetsolivenza.es',
    deadline: '25 Noviembre 2025',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=1000',
    color: 'bg-orange-50'
  }
];