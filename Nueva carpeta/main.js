var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Definición de la clase Vehiculo
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, color, dueno, kilometraje) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.dueno = dueno;
        this.kilometraje = kilometraje;
    }
    Vehiculo.prototype.mostrarInfo = function () {
        console.log("Marca: ".concat(this.marca, ", Modelo: ").concat(this.modelo, ", Color: ").concat(this.color));
        console.log("Due\u00F1o: ".concat(this.dueno, ", Kilometraje: ").concat(this.kilometraje, " km"));
    };
    return Vehiculo;
}());
// Clase VehiculoTerrestre
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(marca, modelo, color, dueno, kilometraje, tipo) {
        var _this = _super.call(this, marca, modelo, color, dueno, kilometraje) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("Tipo: ".concat(this.tipo));
    };
    return VehiculoTerrestre;
}(Vehiculo));
// Clase VehiculoMaritimo
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo(marca, modelo, color, dueno, kilometraje, eslora) {
        var _this = _super.call(this, marca, modelo, color, dueno, kilometraje) || this;
        _this.eslora = eslora;
        return _this;
    }
    VehiculoMaritimo.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("Eslora: ".concat(this.eslora, " metros"));
    };
    return VehiculoMaritimo;
}(Vehiculo));
// Clase VehiculoAereo
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo(marca, modelo, color, dueno, kilometraje, envergadura) {
        var _this = _super.call(this, marca, modelo, color, dueno, kilometraje) || this;
        _this.envergadura = envergadura;
        return _this;
    }
    VehiculoAereo.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("Envergadura: ".concat(this.envergadura, " metros"));
    };
    return VehiculoAereo;
}(Vehiculo));
var camion = new VehiculoTerrestre('Volvo', 'VNL 860', 'Azul', 'Juan Pérez', 50000, 'Camión de Carga');
var camioneta = new VehiculoTerrestre('Jeep', 'Wrangler', 'Verde', 'María González', 20000, 'Camioneta Todoterreno');
var automovil = new VehiculoTerrestre('Honda', 'Civic', 'Plata', 'Carlos Rodríguez', 30000, 'Sedán');
var bote = new VehiculoMaritimo('Mastercraft', 'ProStar', 'Blanco y Azul', 'Luis Martínez', 120, 6.5);
var yate = new VehiculoMaritimo('Sunseeker', 'Predator 74', 'Negro', 'Elena López', 450, 22);
var avion = new VehiculoAereo('Airbus', 'A380', 'Blanco', 'Pedro Ramírez', 15000, 73);
var avioneta = new VehiculoAereo('Piper', 'Cherokee', 'Rojo y Blanco', 'Laura Sánchez', 3000, 10);
var vehiculos = [camion, camioneta, automovil, bote, yate, avion, avioneta];
for (var _i = 0, vehiculos_1 = vehiculos; _i < vehiculos_1.length; _i++) {
    var vehiculo = vehiculos_1[_i];
    console.log('----------------------');
    vehiculo.mostrarInfo();
}
