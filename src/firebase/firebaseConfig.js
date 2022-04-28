
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set,update } from "firebase/database";




// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration


const firebaseConfig = {

    apiKey: "AIzaSyAj1wZv6ulIWXOK11JU_6LMpMs5rCATAg8",
    authDomain: "react-blog-app-607dd.firebaseapp.com",
    databaseURL: "https://react-blog-app-607dd-default-rtdb.firebaseio.com",
    projectId: "react-blog-app-607dd",
    storageBucket: "react-blog-app-607dd.appspot.com",
    messagingSenderId: "935607967950",
    appId: "1:935607967950:web:826da3c50a892967beb09f"
  
};
  
  
  
  // Initialize Firebase

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  set(ref(database), {
    title : 'blog title 1',
    description:"blog 1 desc",
    author : {
        name: "Ceylani",
        surname: "Koç"
    }
  }).then(()=> {
    console.log("kayıt eklendi");
    set(ref(database,"tags"),["react","angular","javascript"])
    .then(() => {
        console.log('etiketler eklendi.');
    })
    .catch((e) => {
        console.log("hata etiket ekleme",e);
    })
  })
  .catch((e) => {
      console.log("hata", e);
  })

  console.log('uygulama çalıştı');

//  update methodu

update(ref(database),{
    title:"update title references",
    description:"updated description with firebase update method",
    // author : {
    //     name:"just name references updates but surname value değer atanmadığından silindi"
    // }
    "author/name" :"konumlanarak yapıldı just name references updates but surname value değeri silinmedi",
    imageUrl : "update methodu kullanarak veri ekledik "
})
  

//   remove(ref(database,"title"))
//   .then(() => {
//       console.log("title silindi");
//   })
//   .catch((e) => {
//       console.log('Removing Data Error',e);
//   })

//   remove(ref(database,"author/name"))
//   .then(() => {
//       console.log("author node in name deleted");
//   })
//   .catch((e) => {
//       console.log('author node in name silinirken hata oluştur', e);
//   })

// not belirtilmediğinde kayıdın tamamını silder
//   remove(ref(database))
//   .then(() => {
//       console.log('Kayıtların tamamı silindi');
//   })
//   .catch((e) => {
//       console.log('tüm kayıtlar silinirken hata oluştu:', e);
//   })

// remove işleminin alternatifi set ederek database null gönderip siliyoruz.
//set(ref(database),null)

//   önceki bilgiler gider çünkü roota gönderiyoruz set(ref(database)) diyerek root kaydını referans olarak aldığından
 // set(ref(database), ("yeni kayıt"))

 //   önceki bilgiler gider çünkü roota gönderiyoruz set(ref(database)) diyerek root kaydını referans olarak aldığından
//  set(ref(database),{
//      title:"blog title new"
//  })


// veri güncelleme
// update(ref(database),{
//     title:"new blog title"
// })

// update(ref(database),{
//     author : {
//         name:"ceylani edit",
//         surname: "Koç"
//     }
// })

// burada author dizinsindeki sadece name i değiştirdik, ve surname kaldı.

// update(ref(database,'author/'),{
//     name:"sadık"
// })

// burada tags ekledik
// set(ref(database,"tags"),["react","angular","javascript"])
// set(ref(database,"tags"),["react","angular","javascript update"])


