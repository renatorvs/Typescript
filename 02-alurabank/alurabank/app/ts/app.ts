import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));

// agora com loader e export vai precisar instalar 
//npm install lite-server@2.3.0 --save-dev servidor tipo para typescript

// npm run server roda o lite server,  + abre outroa aba para rodar o  compilador do typescript(npm start)

// uma lib que faz os dois juntos.

// npm install concurrently@3.4.0 --save-dev 