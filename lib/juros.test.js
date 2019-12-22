const juros = require('./juros')

test('jurosSimples', () => {
    const res = juros.jurosSimples(1000, 0.10, 1)
    const exp = 100
    expect(res).toBe(exp)
})

test('montanteJurosSimples', () => {
    const jurosSimplesMock = jest.fn()
    jurosSimplesMock.mockReturnValue(100)
    const montanteJurosSimples = juros.pure.montanteJurosSimples({jurosSimples: jurosSimplesMock})
    
    const res = montanteJurosSimples(1000, 0.10, 1)
    expect(jurosSimplesMock.mock.calls[0]).toEqual([1000, 0.10, 1])
    expect(res).toBe(1100)
})

test('montanteJurosCompostos', () => {
    const res = juros.montanteJurosCompostos(1000, 0.10, 1)
    const exp = 1100
    expect(res).toBe(exp)
})

test('jurosCompostos', () => {
    const montantejurosCompostosMock = jest.fn()
    montantejurosCompostosMock.mockReturnValue(1100)
    const jurosCompostos = juros.pure.jurosCompostos({montanteJurosCompostos: montantejurosCompostosMock})
    
    const res = jurosCompostos(1000, 0.10, 1)
    expect(montantejurosCompostosMock.mock.calls[0]).toEqual([1000, 0.10, 1])
    expect(res).toBe(100)
})