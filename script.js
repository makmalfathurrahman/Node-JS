const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

class FileManager {
  constructor(filename) {
    this.filename = filename;
    this.data = this.#readFile(filename);
  }

  #readFile(path) {
    const datatxt = fs.readFileSync(path, "utf-8");
    return JSON.parse(datatxt);
  }

  addData(newData) {
    let finalData = this.data;
    finalData.push(newData);
    const _datastr = JSON.stringify(finalData);
    fs.writeFileSync(this.filename, _datastr);
    return true;
  }

  deleteData(id) {
    let _finaldata = this.data;
    let idx = _finaldata.findIndex((x) => x.id === id);
    console.log((idx, "<<<< IDX"));
    _finaldata.splice(idx, 1);
    console.log(_finaldata);
    fs.writeFileSync(this.filename, JSON.stringify(_finaldata));
  }

  editData(path) {
    const changeName = this.#readFile(path);
    changeName.forEach((Object) => renameKey(Object, "name", "_name"));
    const updateName = JSON.stringify(changeName);
  }
}

// const data = FileManager.readFile("./data.txt");

// const read = FileManager.editData("./data.txt");
// console.log(read);

// const newData = {
//   id: uuidv4(),
//   name: "EFGH",
//   address: "Earth2",
// };

// data.push(newData);

// FileManager.addData("./data.txt", data);

// const newData = {
//   id: uuidv4(),
//   name: "IJKL",
//   address: "Earth3",
// };

// const file = new FileManager(filename);

// file.deleteData("7143641f-827f-4fc8-921c-2d0d596ca094");
// file.addData(newData);
// console.log(file.data);
