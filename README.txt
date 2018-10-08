1. Clonar el repositorio desde GitHub
    git clone https://github.com/facugm/Nemo_Pasantias
    En caso de no tener instalado Node JS, ejecutar el siguiente comando:
    sudo apt install nodejs

2. Ejecutar los scripts "NORMALIZACION_FAQS_QA.sql" y "FAQS_FIX_COLLATE_QA.sql" en la base de datos FAQS  

3. Cargar los módulos del proyecto con npm, estando dentro del directorio del proyecto (Ejecutar en Nemo_Pasantias/Application/Ex_App)
    npm install

4. Para levantar el proyecto en el puerto 3000, basta con escribir el comando: 
    npx nodemon
    Y luego acceder a http://localhost:3000/ desde el navegador


Nota: si Ex_App no aparece dentro de Application hay que moverse a la rama development:
    git checkout development
