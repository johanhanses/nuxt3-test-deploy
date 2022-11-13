export type MovieResponse = {
  Search: Movie[]
}

export type Movie = {
  imdbID: string
  Poster: string
  Title: string
  Plot: string
  Response?: string
  Error?: string
}
