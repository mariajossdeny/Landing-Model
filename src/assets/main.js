 const API ='https://api.jikan.moe/v4/seasons/2013/spring?sfw'
 console.log(API)

const content = null || document.getElementById('content')
const profile = null || document.getElementById('phto.profile')
const information = null || document.getElementById('information')

 async function fetchData(urlApi) {
   const response = await fetch(urlApi);
   const data = await response.json();
   return data; 
 }
// (async () => {
//     try {
//         const 

//     } catch{

//     }
// })();

(async () => {
    try {
        const info = await fetchData(API);
        const infoData = info.data[9].synopsis;
        let showInfo = `
             <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              ${infoData}
            </p>
        `
        information.innerHTML =showInfo;

    } catch(error){
        console.error(console.error("Hubo un error al llamar a la info:", error))

    }
})();

(async () => {
    try {
        const profilePhoto = await fetchData(API);
        const photo = profilePhoto.data[8]
        let viewPhoto = `
        
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="${photo.images.jpg.image_url}" alt="${photo.title}">
            
        `;
        profile.innerHTML = viewPhoto
     }catch(error) {
        console.error("Hubo un error al llamar a la photo:", error);
     };

})();


 (async () => {
     try {
         const anime = await fetchData(API);
         let view = ` 
         ${anime.data.map(anime => `
            <div class="group relative">
           <div
             class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${anime.images.jpg.image_url}" alt="${anime.title}" class="w-full">
           </div>
           <div class="mt-4 flex justify-between">
             <h3 class="text-m text-[#999B85]">
               <span aria-hidden="true" class="absolute inset-0"></span>
               ${anime.title}
             </h3>
           </div>
         </div>
             `).slice(0,4).join('')}
        
         `;
         content.innerHTML = view;
     } catch (error) {
         console.error("Hubo un error al llamar a la API:", error);
    }
})();



console.log(`hola carambola`)

