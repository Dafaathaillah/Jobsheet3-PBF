import React from "react";
import List from "./List";

const Mahasiswa = (props) => {
    return(
        <div>
            <li className="list-group-item">
                <List atribut="nim" value={props.nim} />
                <List atribut="nama" value={props.nama} />
                <List atribut="alamat" value={props.alamat} />
                <List atribut="hp" value={props.hp} />
                <List atribut="angkatan" value={props.angkatan} />
                <List atribut="status" value={props.status} />
                <button className="btn btn-sm btn-danger" onClick={() => props.deleteData(props.id)}>Hapus</button>
            </li>
        </div>
    )
}

export default Mahasiswa;