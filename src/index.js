const fs = require('fs/promises')
const path = require('path')
// const filepath = `${dirpath}/module.txt`

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	const dirpath = path.join(__dirname,fileName);
	fs.writeFile(dirpath,fileContent,(err)=>{
		if(err != null){
			console.log(err);
		}
	})
}

const myFileReader = async (fileName) => {
	// write code here
	const dirpath = path.join(__dirname,fileName);
	const file = await fs.readFile(dirpath,"utf-8",(err)=>{
		if(err!=null){
			console.log(err);
		}
	});
	console.log(file);
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	const dirpath = path.join(__dirname,fileName);
	fs.appendFile(fileName,fileContent,(err)=>{
		if(err!=null){
			console.log(err);
		}
	})
}

const myFileDeleter = async (fileName) => {
	// write code here
	const dirpath = path.join(__dirname,fileName);
	fs.unlink(dirpath,(err)=>{
		if(err!=null){
			console.log(err);
		}
	})

}
myFileDeleter('module.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }