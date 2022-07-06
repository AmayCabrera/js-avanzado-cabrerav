const os = require('os');

console.log(os.version()); //Muestra nuestra version del kernel
console.log(os.arch()); //Obtiene arquitectura (X64 o X86(x32))
console.log(os.cpus());// Da informacion acerca de los cpus
console.log(os.freemem());//memoria libre en bytes
console.log('Carpeta ususario actual',os.homedir());//Carpeta del ususario actual
console.log('Direccion IP',os.hostname());//Direccion IP (local)
console.log('Version de sistema',os.platform());//Version del sistema operativo 
console.log('Version del sistema detallado',os.version());//Detalle de la version del sistema 
