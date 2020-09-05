var Bicicleta = require('../../models/bicicleta');

beforeEach(() => { Bicicleta.allBicis = []; });

describe('Bicicleta.allBicis', () => {
    it('Comienza vacida', () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    });
});

describe('Bicicleta.add', () => {
    it('agregamos una', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -58.38614971]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    });
});

describe('Bicicleta.findByID', () => {
    it('Debe devolver la bicicleta con el Id 1', () => {
        expect(Bicicleta.allBicis.length).toBe(0);

        var aBici = new Bicicleta(1, 'rojo', 'urbana');
        var bBici = new Bicicleta(2, 'blanca', 'urbana');
        Bicicleta.add(aBici);
        Bicicleta.add(bBici);

        var targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);

    });
});