import {readFileSync} from 'fs';
export function model(parameter) {
    const data = readFileSync('./data/siswa.json', 'utf-8')
    let hasil = "";
    if(parameter == "kelas1"){
        hasil = JSON.parse(data).kelas1;
    }
    else if(parameter == "kelas2"){
        hasil = JSON.parse(data).kelas2;
    }
    return hasil;
}