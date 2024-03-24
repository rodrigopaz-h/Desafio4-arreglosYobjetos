// ARREGLO DE PROPIEDADES EN VENTA

const propiedades_venta =[
    {
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        nombre: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: '4 Habitaciones',
        baños: '4 Baños',
        costo: 5000,
        smoke: false,
        pets: false
        } 
    ,{
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones:'2 Habitaciones',
        baños:'1 Baños',
        costo: 1200,
        smoke: true,
        pets: true
        } 
    ,{
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        nombre: 'Penthouse de lujo con terraza panorámica',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: '3 Habitaciones',
        baños:'3 Baños',
        costo: 4500,
        smoke: false,
        pets: true
        } 
    ,{
        src: './assets/img/v1.jpg"',
        nombre: 'Departamento estilo industrial',
        descripcion: 'Acogedor y hermoso departamento cerca de la aturaleza',
        ubicacion: 'Calle San Eugenio, 600',
        habitaciones:'1 habitación',
        baños:'1 baño',
        costo: 3000,
        smoke: true,
        pets: false
        } 
    ,{
        src: './assets/img/v2.jpg"',
        nombre: 'Hermosa casa para familia pequeña',
        descripcion: 'Casa con vista a la playa y cercana a bosques',
        ubicacion: 'Serrano 1501',
        habitaciones: '3 habiataciones',
        baños:'2 baños',
        costo: 3500,
        smoke: false,
        pets: true
        } 
    ,{
        src: './assets/img/v3.jpg"',
        nombre: 'Luminoso departamentoen el centro',
        descripcion: 'En el centro de la ciudad. Cercana a colegios, supermercados y centro comercial',
        ubicacion: 'Calle Juan Gutenberg, 647 - Villa Mexico',
        habitaciones: 0,
        baños:'2 baños',
        costo: 3000,
        smoke: true,
        pets: true
        } 
    
]

// ARREGLO DE PROPIEDADES EN ALQUILER

const propiedades_alquiler =[
    {
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        nombre: 'Apartamento en el centro de la ciudad',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños:'2 Baños',
        costo: 2.000,
        smoke: false,
        pets: true
        }
    ,{
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        nombre: 'Apartamento luminoso con vista al mar',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: '3 Habitaciones',
        baños:'3 Baños',
        costo: 2.500,
        smoke: true,
        pets: true
        } 
    ,{
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        nombre: 'Condominio moderno en zona residencial',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: '2 Habitaciones',
        baños:'2 Baños',
        costo: 2.000,
        smoke: false,
        pets: false
        } 
    ,{
        src: './assets/img/a1.jpg"',
        nombre: 'Casa en barrio desidencial',
        descripcion: 'Una casa cla sica de los años 50, muy bien conservada y acaogedora',
        ubicacion: 'Calle Cardenal José María Caro, 4772',
        habitaciones: '4 habitaciones',
        baños:'3 baños',
        costo: 2200,
        smoke: true,
        pets: true
        } 
    ,{
        src: './assets/img/a2.jpg"',
        nombre: 'Casa estilo mediterraneo',
        descripcion: 'Hermosa casa de concepto abierto y su trasparecia hace que tenga una maravillosa vista',
        ubicacion: ' Calle Almirante Latorre, 718',
        habitaciones: '4 habiataciones',
        baños:'3 baños',
        costo: 3000,
        smoke: false,
        pets: false
        } 
    ,{
        src: './assets/img/a3.jpg"',
        nombre: 'Casa a las afueras de la ciudad',
        descripcion: 'Casa con salia al lago y muelle',
        ubicacion: ' Luis Thayer Ojeda 183 104, Providencia Santiago (2)2830664, Maipú',
        habitaciones: '4 habitaciones',
        baños:'4 baños',
        costo: 3500,
        smoke: false,
        pets: false
        } 

]

function nuevaCard({src, nombre, descripcion, ubicacion, habitaciones, baños, costo, smoke, pets}) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">${descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${ubicacion}</p>
                    <p><i class="fas fa-bed"></i>${habitaciones} | <i class="fas fa-bath"></i>${baños}</p>
                    <p><i class="fas fa-dollar-sign"></i>${costo}</p>
                    <div>${smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}</div>
                    <div>${pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}</div>   
                </div>
            </div>
        </div> `;
}


const pathname = window.location.pathname;

if (pathname === '/index.html' || pathname === '/') {
    const ventas_container = document.querySelector('#venta');
    const alquiler_container = document.querySelector('#alquiler');

    const ventas = propiedades_venta.slice(0, 3);
    const alquiler = propiedades_alquiler.slice(0, 3);

    ventas.forEach(propiedad => ventas_container.innerHTML += nuevaCard(propiedad));
    alquiler.forEach(propiedad => alquiler_container.innerHTML += nuevaCard(propiedad));
} 
else if (pathname === '/propiedades_venta.html') {
    
    const ventas_container = document.querySelector('#venta');
    propiedades_venta.forEach(propiedad => ventas_container.innerHTML += nuevaCard(propiedad));
} 
else if (pathname === '/propiedades_alquiler.html') {
    
    const alquiler_container = document.querySelector('#alquiler');
    propiedades_alquiler.forEach(propiedad => alquiler_container.innerHTML += nuevaCard(propiedad));
}

