
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set,update } from "firebase/database";




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
  })

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