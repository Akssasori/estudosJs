

interface Service<T> {   // genericos
    create(data: T): void
    show(): T[]
}

interface IVeiculo {
    name: string,
    year: number
}

class Veiculo implements Service<IVeiculo> {

    create(data: IVeiculo): void {
       console.log(data.name);
    }
    show(): IVeiculo[] {
        const veiculos: IVeiculo[] = [];
        return veiculos;
    }

}

