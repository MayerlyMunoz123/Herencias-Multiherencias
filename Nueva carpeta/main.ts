// Definición de la clase Vehiculo
class Vehiculo {
    marca: string;
    modelo: string;
    color: string;
    dueno: string;
    kilometraje: number;
  
    constructor(marca: string, modelo: string, color: string, dueno: string, kilometraje: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.color = color;
      this.dueno = dueno;
      this.kilometraje = kilometraje;
    }
  
    mostrarInfo(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${this.color}`);
      console.log(`Dueño: ${this.dueno}, Kilometraje: ${this.kilometraje} km`);
    }
  }
  
  
  // Clase VehiculoTerrestre
  class VehiculoTerrestre extends Vehiculo {
    tipo: string;
  
    constructor(marca: string, modelo: string, color: string, dueno: string, kilometraje: number, tipo: string) {
      super(marca, modelo, color, dueno, kilometraje);
      this.tipo = tipo;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Tipo: ${this.tipo}`);
    }
  }
  
  // Clase VehiculoMaritimo
  class VehiculoMaritimo extends Vehiculo {
    eslora: number;
  
    constructor(marca: string, modelo: string, color: string, dueno: string, kilometraje: number, eslora: number) {
      super(marca, modelo, color, dueno, kilometraje);
      this.eslora = eslora;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Eslora: ${this.eslora} metros`);
    }
  }
  
  // Clase VehiculoAereo
  class VehiculoAereo extends Vehiculo {
    envergadura: number;
  
    constructor(marca: string, modelo: string, color: string, dueno: string, kilometraje: number, envergadura: number) {
      super(marca, modelo, color, dueno, kilometraje);
      this.envergadura = envergadura;
    }
  
    mostrarInfo(): void {
      super.mostrarInfo();
      console.log(`Envergadura: ${this.envergadura} metros`);
    }
  }
  
  
  const camion = new VehiculoTerrestre('Volvo', 'VNL 860', 'Azul', 'Juan Pérez', 50000, 'Camión de Carga');
  const camioneta = new VehiculoTerrestre('Jeep', 'Wrangler', 'Verde', 'María González', 20000, 'Camioneta Todoterreno');
  const automovil = new VehiculoTerrestre('Honda', 'Civic', 'Plata', 'Carlos Rodríguez', 30000, 'Sedán');
  
  const bote = new VehiculoMaritimo('Mastercraft', 'ProStar', 'Blanco y Azul', 'Luis Martínez', 120, 6.5);
  const yate = new VehiculoMaritimo('Sunseeker', 'Predator 74', 'Negro', 'Elena López', 450, 22);
  
  const avion = new VehiculoAereo('Airbus', 'A380', 'Blanco', 'Pedro Ramírez', 15000, 73);
  const avioneta = new VehiculoAereo('Piper', 'Cherokee', 'Rojo y Blanco', 'Laura Sánchez', 3000, 10);
  
  const vehiculos = [camion, camioneta, automovil, bote, yate, avion, avioneta];
  
  for (const vehiculo of vehiculos) {
    console.log('----------------------');
    vehiculo.mostrarInfo();
  }
  