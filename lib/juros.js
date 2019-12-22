const jurosSimples = (c, i, t) => c*i*t

const montanteJurosSimples = ({jurosSimples}) => (c, i, t) => c + jurosSimples(c, i, t)

const montanteJurosCompostos = (c, i, t) => c * Math.pow((1 + i), t)

const jurosCompostos = ({montanteJurosCompostos}) => (c, i, t) => montanteJurosCompostos(c, i, t) - c

module.exports = {
    jurosSimples,
    jurosCompostos: jurosCompostos({montanteJurosCompostos}),
    montanteJurosSimples: montanteJurosSimples({jurosSimples}),
    montanteJurosCompostos,
    pure: {
        montanteJurosSimples,
        jurosCompostos
    }
}