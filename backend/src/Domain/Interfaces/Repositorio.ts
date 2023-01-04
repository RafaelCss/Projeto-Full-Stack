export interface Repository<T> {
  criar(data: T) : any;
  buscarPorId(id: string): Promise<T | null>;
  update(id: string, data: T): Promise<T | null>;
  delete(id: string): Promise<boolean>;
  findMany(query?: object): Promise<T[]>
}