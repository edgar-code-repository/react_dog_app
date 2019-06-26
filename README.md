THE DOG APP
--------------------------------------------------------------------------------------------------------------------

Aplicación SPA desarrollada con React 16 y Bootstrap que recupera informacion de razas y sub-razas de perros, 
y permite desplegar imagenes de perros correspondientes a la raza y/o sub-raza que se selecciona en la aplicacion.

La aplicación utiliza axios para conectarse a una API Rest llamada "Dog API": 

https://dog.ceo/dog-api/

--------------------------------------------------------------------------------------------------------------------

Pantalla inicial:

![Screenshot Inicial](screenshots/the_dog_app1.png)

--------------------------------------------------------------------------------------------------------------------

Pantalla de busqueda:

![Screenshot Search](screenshots/the_dog_app2.png)

Los drop down de raza y sub-raza son cargados a partir de la data obtenida desde la url:

https://dog.ceo/api/breeds/list/all

--------------------------------------------------------------------------------------------------------------------

Busqueda por raza:

![Screenshot SearchByBreed](screenshots/the_dog_app3.png)

El despliegue de imagenes por raza se realiza a partir de la data obtenida desde la url:

https://dog.ceo/api/breed/{nombre_raza}/images

Por ejemplo:

https://dog.ceo/api/breed/akita/images

Se muestran como maximo 10 imagenes de la raza seleccionada.

--------------------------------------------------------------------------------------------------------------------

Busqueda por raza y sub-raza:

![Screenshot SearchBySubBreed](screenshots/the_dog_app4.png)

El despliegue de imagenes por raza y sub-raza se realiza a partir de la data obtenida desde la url:

https://dog.ceo/api/breed/{nombre_raza}/{nombre_sub_raza}/images

Por ejemplo:

https://dog.ceo/api/breed/bulldog/boston/images

Se muestran como maximo 10 imagenes de la raza / sub-raza seleccionada.

--------------------------------------------------------------------------------------------------------------------

Pantalla about:

![Screenshot Inicial](screenshots/the_dog_app5.png)