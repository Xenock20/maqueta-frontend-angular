export interface education {
  titulo: string,
  fechaInicio: Date | null,
  fechaFinal: Date | null,
  ubicacion: string
}

export interface experiencia {
  titulo: string,
  fechaInicio: Date | null,
  fechaFinal: Date | null,
  descrip: string
}

export interface project {
  titulo: string,
  img: string,
  descrip: string,
  demo: string,
  code: string
}
