import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return(
        <div>
            <li className="list-group-item">
                <List atribut="NIM" value={props.nim} />
                <List atribut="Nama" value={props.nama} />
                <List atribut="Alamat" value={props.alamat} />
                <List atribut="No. HP" value={props.hp} />
                <List atribut="Angkatan" value={props.angkatan} />
                <List atribut="Status" value={props.status} />
                <button className="btn btn-sm btn-danger" onClick={() => props.deleteData(props.id)}>Hapus</button>
            </li>
        </div>
    )
}

export default Mahasiswa;