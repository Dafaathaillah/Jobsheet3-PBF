import React, { Component } from "react";
// import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";
import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";

class ListMahasiswa extends Component {
  state = {
    ListMahasiswa: [],
    insertMahasiswa: {
      id: "",
      nim: "",
      nama: "",
      alamat: "",
      hp: "",
      angkatan: "",
      status: "",
    },
  };

  ambilDataDaraiServerAPI = () => {
    fetch('http://localhost:3001/listMHS')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          ListMahasiswa: jsonHasilAmbilDariAPI
        })
      })
  }
  componentDidMount() {
    this.ambilDataDaraiServerAPI()
  }

  actionDeleteData = (data) => {
    fetch(`http://localhost:3001/listMHS/${data}`, { method: 'DELETE' }) //alamat url api yang ingin di hapius datanya
      .then(res => {
        this.jsonHasilAmbilDariAPI()
      })
  }

  actionAddData = (event) => {
    let formInsertDataMHS = { ...this.state.insertMahasiswa }
    let timestamp = new Date().getTime()
    formInsertDataMHS['id'] = timestamp
    formInsertDataMHS[event.target.name] = event.target.value
    this.setState({
      insertMahasiswa: formInsertDataMHS
    })
  }

  actionSaveDataMHS = () => {
    fetch('http://localhost:3001/listMHS', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.insertMahasiswa),
    })
      .then((Response) => {
        this.ambilDataDaraiServerAPI()
      })
  }

  render() {
    return (
      <>
        <div className='row g-3'>
          <h5>Tambah Data Baru</h5>
          <div className='col-md-6'>
            <label htmlFor='nim' className='form-label'>NIM</label>
            <input type='number' className='form-control' id='nim' name='nim' onChange={this.actionAddData} />
          </div>
          <div className='col-md-6'>
            <label htmlFor='nama' className='form-label'>Nama</label>
            <input type='text' className='form-control' id='nama' name='nama' onChange={this.actionAddData} />
          </div>
          <div className='col-md-12'>
            <label htmlFor='alamat' className='form-label'>Alamat</label>
            <textarea className='form-control' id='alamat' name='alamat' onChange={this.actionAddData}></textarea>
          </div>
          <div className='col-md-4'>
            <label htmlFor='hp' className='form-label'>No. Handphone</label>
            <input type='text' className='form-control' id='hp' name='hp' onChange={this.actionAddData} />
          </div>
          <div className='col-md-4'>
            <label htmlFor='angkatan' className='form-label'>Angkatan</label>
            <input type='number' className='form-control' id='angkatan' name='angkatan' onChange={this.actionAddData} />
          </div>
          <div className='col-md-4'>
            <label htmlFor='status' className='form-label'>Status</label>
            <select id='status' name='status' className='form-select' onChange={this.actionAddData} defaultValue='{DEFAULT}'>
              <option value="DEFAULT">Choose...</option>
              <option value='aktif'>Aktif</option>
              <option value='cuti'>Cuti</option>
              <option value='lulus'>Lulus</option>
            </select>
          </div>
          <div className='col-12'>
            <button type='submit' className='btn btn-primary' onClick={this.actionSaveDataMHS}>Simpan</button>
          </div>
        </div>
        <hr />
        <h5>Data Mahasiswa</h5>
        <div className='row g-3'>
          {
            this.state.ListMahasiswa.map(mahasiswa => {
              return <Mahasiswa
                key={mahasiswa.nim}
                nim={mahasiswa.nim}
                nama={mahasiswa.nama}
                alamat={mahasiswa.alamat}
                hp={mahasiswa.hp}
                angkatan={mahasiswa.angkatan}
                status={mahasiswa.status}
                deleteMahasiswa={this.actionDeleteData} />
            })
          }
        </div>
      </>
     
    )
  }
}
export default ListMahasiswa;