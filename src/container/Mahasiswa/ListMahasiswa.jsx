import React, { Component } from "react";
// import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";
import Mahasiswa from "../../component/Mahasiswa/Mahasiswa";
import API from "../../services";

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
      time: "",
    },
  };

  ambilDataDaraiServerAPI = () => {
        API.getMahasiswaData().then(result => {
        this.setState({
          ListMahasiswa: result
        })
      })
  }
  componentDidMount() {
    this.ambilDataDaraiServerAPI()
  }

  actionDeleteData = (data) => {
     //alamat url api yang ingin di hapius datanya
      API.deleteNewMahasiswa(data).then((response) => {
        this.ambilDataDaraiServerAPI()
      })
  }


  actionAddData = (event) => {
    let formInsertDataMHS = { ...this.state.insertMahasiswa }
    let timestamp = new Date().getTime()
    formInsertDataMHS['id'] = formInsertDataMHS.nim
    formInsertDataMHS[event.target.name] = event.target.value
    this.setState({
      insertMahasiswa: formInsertDataMHS
    })
  }

  actionSaveDataMHS = () => {
      API.getMahasiswaData(this.state.insertMahasiswa)
      .then((Response) => {
        this.ambilDataDaraiServerAPI()
      })
  }

  render() {
    return (
      <>
        <div className='row g-3'>
          <div class="card">
            <h3>Tambah Mahasiswa</h3>
            <div class="card-body">
              <div className="row g-3">
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
                <div className='col-md-4'>
                  <label htmlFor='time' className='form-label'>Date</label>
                  <input type='date' className='form-control' id='time' name='time' onChange={this.actionAddData} />
                </div>
              </div>
              <div>
                <br />
                <button type='submit' className='btn btn-primary' onClick={this.actionSaveDataMHS}>Simpan</button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <center>
          <h5>Data Mahasiswa</h5>
        </center>
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
                time={mahasiswa.time}
                deleteData={this.actionDeleteData} />
            })
          }
        </div>
      </>
    )
  }
}
export default ListMahasiswa;