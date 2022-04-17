import GetAPI from "./Get";
import PostAPI from "./Post";
import DeleteAPI from "./Delete";

const getMahasiswaData = () => GetAPI('listMHS?_sort=id&_order=desc');
const postMahasiswaData = (dataYgDiKirim) => PostAPI('listMHS', dataYgDiKirim);
const deleteNewMahasiswa = (dataYgDiHapus) => DeleteAPI('listMHS', dataYgDiHapus);

const API = {
    getMahasiswaData,
    postMahasiswaData,   
    deleteNewMahasiswa
}

export default API;