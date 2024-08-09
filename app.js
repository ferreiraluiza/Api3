import express from 'express'
const servidor = express();
servidor.use(express.json());


//calculadora do açaí
servidor.get('/calcuacai/:n1/:n2/:n3', (rep, resp) =>{
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let n3 = Number(rep.params.n3)

    let p = 13.50;
    let m = 15;
    let g = 17.50;

    let somafinal = (n1*p) + (n2*m) + (n3*g);

    resp.send(`o total a pagar a pagar é ${somafinal}`);
})


//calculadora de tempo de leitura em POST
servidor.post('/treino/treinoLeitura', (req,resp) =>{
    let paginas = req.body.paginas;
    let tempoSeg = req.body.tempoPorPagina;

    let totalSeg = paginas * tempoSeg;
    let horas = totalSeg / 60 / 60;

    resp.send({
        tempoLeitura: horas
    })
})


//combinação de cores em GET
servidor.get('/treino/CombinacaodeCores')

servidor.listen(5001, () => console.log(`SUBIU ESSA MERDA!`))

