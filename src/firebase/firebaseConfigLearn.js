
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove, set, update, onValue, get, off, push, onChildRemoved } from "firebase/database";




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

    // get(ref(database,"products"))
    // .then((snapshot) => {
    //     console.log(snapshot.val(), "veriler birkez okur get methodu");
    //     const products = [];
    //     snapshot.forEach((product) => {
    //         products.push({
    //             id:product.key,
    //             ...product.val()
    //         })
    //     })

    //     console.log(products);
    // })
    // .catch((e)=> {
    //     console.log(e);
    // })

    // onValue(ref(database,"products"),(snapshot) => {
    //     console.log(snapshot.val(), "veriler sürekli okur bir dinleyicidir");
    //     const products = [];
    //     snapshot.forEach((product) => {
    //         products.push({
    //             id:product.key,
    //             ...product.val()
    //         })
    //     })
    // })

    // onChildRemoved(ref(database,"products"),(snapshot)=> {
    //     console.log(snapshot.key,snapshot.val());
    // })



//   Firebase Diziler -1 

// const blogs = [
//     {
//         id:"1",
//         title:"blog title 1"
//     },
//     {
//         id:"2",
//         title:"blog title 2"
//     },
//     {
//         id:"3",
//         title:"blog title 3"
//     },
//     {
//         id:"4",
//         title:"blog title 4"
//     }
// ]

// const users = [
//     {
//         id:1,
//         name: "Ceylani"
//     },
//     {
//         id:2,
//         name: "Asya"
//     },
//     {
//         id:3,
//         name: "Gülce"
//     }
// ]

// const blogs = {
//     101: {
//         id:"1",
//         title: "blog title 1"
//     },
//     102: {
//         id:"2",
//         title: "blog title 2"
//     }
// }

// const users = {
//     "sadikturan" : {
//         name : "Sadık",
//         surname : "Turan"
//     },
//     "ceylanikoc" : {
//         name : "Ceylani",
//         surname : "Koç"
//     }
// }

// set(ref(database),{
//     blogs,
//     users
// })

// get(ref(database,"blogs/101"))
//     .then((snapshot) => {
//         console.log(snapshot.val());
//     })
//     .catch((e) => {
//         console.log("hata", e);
//     })

// onValue(ref(database,"blogs"),(snapshot) => {
//     console.log(snapshot.val());
// })

// push(ref(database,"blogs"),{
//     title:"blog title 3",
//     id:"3"
// })

// push(ref(database,"blogs"),{
//     title:"blog title 3",
//     id:"3"
// })


// set(ref(database,"blogs/-N0v-2skcHTvZ7TouV-R"),{
//     title:"blog title 4",
//     id:"4"
// })

// push(ref(database,"products"), {
//     name:"Samsung s5",
//     price: 5000,
//     isApproved: true
// })

// push(ref(database,"products"), {
//     name:"Samsung s6",
//     price: 6000,
//     isApproved: true
// })

// push(ref(database,"products"), {
//     name:"Samsung s7",
//     price: 7000,
//     isApproved: false
// })




//   set(ref(database), {
//     title : 'blog title 1',
//     description:"blog 1 desc",
//     author : {
//         name: "Ceylani",
//         surname: "Koç"
//     }
//   }).then(()=> {
//     console.log("kayıt eklendi");
//     set(ref(database,"tags"),["react","angular","javascript"])
//     .then(() => {
//         console.log('etiketler eklendi.');
//     })
//     .catch((e) => {
//         console.log("hata etiket ekleme",e);
//     })
//   })
//   .catch((e) => {
//       console.log("hata", e);
//   })

//   console.log('uygulama çalıştı');

//  update methodu

// update(ref(database),{
//     title:"update title references",
//     description:"updated description with firebase update method",
//     // author : {
//     //     name:"just name references updates but surname value değer atanmadığından silindi"
//     // }
//     "author/name" :"konumlanarak yapıldı just name references updates but surname value değeri silinmedi",
//     imageUrl : "update methodu kullanarak veri ekledik "
// })

// verileri okuma

// biz veritabanı ile event oluşturduk ve ne zaman değişiklik olursa bu fonksiyon çalışır
// onValue(ref(database),(snapshot) => {
//     const data = snapshot.val();
//     console.log('onValue() her değişiklikte okuyor veritabanını',data);
// })

// bu off methodu onValue ile event bağlantı yapmıştık veri tabanı bu kod bağlantıyı kaldırmaktadır.
// setTimeout(() => {
//     off(ref(database))
// }, 3000);

// setTimeout(() => {
//     update(ref(database),{
//         title:"title changed"
//     })
// }, 6000);

// get(ref(database))
//     .then((snapshot) => {
//         console.log(snapshot.val(), "veriler birkez okur get methodu");
//     })
//     .catch((e)=> {
//         console.log(e);
//     })


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


