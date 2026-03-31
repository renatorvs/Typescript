import { Negociacao } from './Negociacao';
import { Negociacoes } from './Negociacoes';

interface NegociacaoData {
    data: string;
    quantidade: number;
    valor: number;
}

export class NegociacoesStorage {

    private _chave: string;

    constructor(chave = 'negociacoes') {

        this._chave = chave;
    }

    obterNegociacoes(): Negociacoes {

        const negociacoes = new Negociacoes();
        const dados = localStorage.getItem(this._chave);

        if (dados) {
            try {
                (JSON.parse(dados) as NegociacaoData[]).forEach(dado => {
                    negociacoes.adiciona(new Negociacao(
                        new Date(dado.data),
                        dado.quantidade,
                        dado.valor
                    ));
                });
            } catch (err) {
                console.log('Erro ao carregar negociações do histórico:', err);
            }
        }

        return negociacoes;
    }

    salvar(negociacoes: Negociacoes): void {

        localStorage.setItem(this._chave, JSON.stringify(negociacoes.paraArray()));
    }
}
