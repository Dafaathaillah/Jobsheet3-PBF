import React, { Component } from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import ListImage from './component/ListImage'; 
import ListMahasiswa from './container/Mahasiswa/ListMahasiswa';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListMahasiswa />
        <Footer judul='2022 SistemInputData.com' nama='Dafa bintang Athaillah' />
      </div>
    );
  }
} export default App;
