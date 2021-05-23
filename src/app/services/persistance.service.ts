import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersistanceService {

    public persons = [
        {
            name: 'Maria Flores',
            cpf: '83321492075',
            phone: '1533283928',
            email: 'maria_f@gmail.com',
            cep: '69906043',
            state: 'AC',
            city: 'Rio Branco',
            street: 'Rua Arnaldo Aleixo (Conjunto Canaã)',
        },
        {
            name: 'João Carlos',
            cpf: '31213393035',
            phone: '1532841040',
            email: 'joao.c@gmail.com',
            cep: '79096766',
            state: 'MS',
            city: 'Campo Grande',
            street: 'Rua Rodolfho José Rospide da Motta',
        },
        {
            name: 'Stephanie Dias',
            cpf: '02085196020',
            phone: '1533294040',
            email: 'ste.dias@gmail.com',
            cep: '23825080',
            state: 'RJ',
            city: 'Itaguaí',
            street: 'Rua Mario Bastos Filho',
        },
        {
            name: 'Mirtes Souza',
            cpf: '33764389001',
            phone: '1530178756',
            email: 'irma.mirtes@gmail.com',
            cep: '40420150',
            state: 'BA',
            city: 'Salvador',
            street: '1ª Travessa Clóvis de Almeida Maia',
        }
    ]

    constructor() { }

    /**
     * 
     * @param key  chave do store
     * @todo popula os objetos do storeage
     */
    populateTable(key: string): void {    
        this.setLocal(key, this.persons);
    }

    /**
     * 
     * @param key  chave do store
     * @todo retorna o objetos do storeage
     */
    getLocal(key: string): any {
        const data = window.localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }

    /**
     * 
     * @param key  chave do store
     * @param person valor da store
     * @todo grava os objetos no storeage
     */
    setLocal(key: string, value: any): void {
        const data = value === undefined ? '' : JSON.stringify(value);
        window.localStorage.setItem(key, data);
    }

    /**
     * 
     * @param key  chave do store
     * @param person valor da store
     * @todo grava e atualiza os objetos no storeage
     */
    save(key: string, person: any) : void{
        const persons = this.getLocal(key)
        let index = persons.findIndex(foundPerson => Number(foundPerson.cpf) == Number(person.cpf))
        if (index == -1) index = persons.length
        persons[index] = person
        this.setLocal(key,  persons);
    }

    /**
     * 
     * @param key  chave do store
     * @param person valor da store
     * @todo remove os objetos no storeage
     */
    remove(key: string, person: any) {
        const persons = this.getLocal(key)
        let cpf = Number(person.cpf)
        var index = persons.findIndex(foundPerson => foundPerson.cpf == String(cpf))
        persons.splice(index, 1)
        this.setLocal(key, persons);
    }



    /**
     * 
     * @param key  chave do store
     * @todo remove os objetos no storeage
     */
    removeLocal(key: string): void {
        window.localStorage.removeItem(key);
    }

    /**
     * 
     * @todo remove os dados da storeage
     */
    removeAllLocals(): void {
        for (const key in window.localStorage) {
            if (window.localStorage.hasOwnProperty(key)) {
                this.removeLocal(key);
            }
        }
    }
}
