import React, { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db, auth, storage } from './config/firebase';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import {ref, uploadBytes} from "firebase/storage"


const App = () => {
  const [vacancies, setVacancies] = useState([])
//New Vacancy
  const [rank, setRank] = useState("")
  const [vesselType, setVesselType] = useState("")
  const [salary, setSalary] = useState("")
  const [duration, setDuration] = useState("")
  const [joinDate, setJoinDate] = useState("")
//Update duration of contract
  const [uptadedDuration, setUptadedDuration] = useState("")
// upload File
  const [fileUpload, setFileUpload]=useState(null)



  const vacanciesListRef = collection(db, "vacancies")
  
  const getVacancies = async () => {
    try {
      const data = await getDocs(vacanciesListRef)
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))

      setVacancies(filteredData)
    } catch (err) {
      console.error(err)
    }
  }

const deletVacancy = async (id) =>{
  const vacancyDoc = doc(db, "vacancies", id)
await deleteDoc(vacancyDoc)
getVacancies()

}

const updateDuration = async (id) =>{
  const vacancyDoc = doc(db, "vacancies", id )
await updateDoc(vacancyDoc, {duration:uptadedDuration})
getVacancies()

}

  useEffect(() => {
    
    getVacancies()
  }, [])

  const addVacancy = async () => {
    try {
await addDoc (vacanciesListRef, {rank:rank, 
  vesselType:vesselType,
  salary:salary, 
  duration:duration,
  joinDate:joinDate,
  userId: auth?.currentUser?.uid

})
getVacancies()

    } catch (err) {
      console.error(err)
    }
  }

  const uploadFile = async () => {
if  (!fileUpload) return;
const filesFolderRef = ref(storage,`projectFiles/${fileUpload.name}`);
try {
await uploadBytes (filesFolderRef, fileUpload)
} catch (err) {
  console.error(err)
}
  }

  return (
    <div className='app-wrapper'>
      <div className='app-wrapper-content'>
        <Auth />
        <div>
          <input
            placeholder='enter Rank'
            onChange={(e) => setRank(e.target.value)}
          />

          <input
            placeholder='enter Type of the Vessel'
            onChange={(e) => setVesselType(e.target.value)}

          />
          <input
            placeholder='enter Salary'
            onChange={(e) => setSalary(e.target.value)}
          />

          <input
            placeholder='enter Join Date'
            onChange={(e) => setJoinDate(e.target.value)}
          />

          <input
            placeholder='enter Contract Duration'
             type='number'
            onChange={(e) => setDuration(Number(e.target.value))}
          />

          <button onClick={addVacancy}>Add new Vacancy</button>


        </div>

        <div>
          {vacancies.map((vacancy)  => (
            <div key={vacancy.id}>
              <h1>{vacancy.rank} on {vacancy.vesselType}</h1>
              <p>Salary: {vacancy.salary}</p>
              <p>Duration: {vacancy.duration}</p>
              <p>Join Date: {vacancy.joinDate}</p>
<button onClick={()=> deletVacancy(vacancy.id)} >Delet Vacancy</button>

<input placeholder='change duration' onChange={(e)=>setUptadedDuration(e.target.value)}/>
<button onClick={()=> updateDuration(vacancy.id)}>Update duration </button>

            </div>
          ))}
        </div>
        <div>
        <input type='file' onChange={(e)=> setFileUpload(e.target.files[0])}/>
        <button onClick={uploadFile}>Upload File</button>
      </div>
      </div>
      
    </div>
  )
}


export default App;


