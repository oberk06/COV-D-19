import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';

const Covid = () => {

const [veri,setVeri]=useState("")
const [tarih,setTarih]=useState("")

useEffect(() => {
  axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
  .then(res => setVeri(res.data[tarih]))
  .catch(error=>console.log(error))


}, [veri,tarih])



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2> TÜRKİYE COVID-19 ARAMA MOTORU </h2>
            <input
              type="text"
              placeholder="GG/AA/YY"
              className="form-control"
              onChange={(e)=>setTarih(e.target.value)}
            />
            <table className="table text-white">
              <thead  >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody className={veri===undefined ? "bg-danger" : "bg-success" }  >
                <tr>
                  <th scope="row">1</th>
                  <td> {veri===undefined ? "Veri Bekleniyor" : veri.totalTests} </td>
                  <td> {veri===undefined ? "Veri Bekleniyor" : veri.patients} </td>
                  <td> {veri===undefined ? "Veri Bekleniyor" : veri.deaths} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Covid