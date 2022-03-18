import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return (

        <div class="card w-50">
            <div class="card-body">
                <li className="list-group-item">
                <List atribut="Nim" value={props.nim} />
                <List atribut="Nama" value={props.nama} />
                <List atribut="Alamat" value={props.alamat} />
                <List atribut="Hp" value={props.hp} />
                <List atribut="Angkatan" value={props.angkatan} />
                <List atribut="Status" value={props.status} />
                <button className="btn btn-sm btn-danger" onClick={() => props.deleteData(props.nim)}>Hapus</button>
            </li>
            </div>
        </div>
    )
}

export default Mahasiswa;