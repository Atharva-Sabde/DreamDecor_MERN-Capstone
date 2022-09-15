import Navbar from "./Navbar"
import { useCSVReader } from "react-papaparse"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { createProducts, getProducts } from "../Slice"
import ProgressBar from "./ProgressBar"
import './Home.css'
const Home=()=>{
    const {CSVReader}=useCSVReader()
    const [arr,setArr]=useState([])
    const dispatch=useDispatch()
    const styles = {
        progressBarBackgroundColor: {
          backgroundColor: 'brown',
          fontSize: '1px'
        }
    };
    const submitCSV=()=>{
        if(arr.length!==0) dispatch(createProducts(arr))
        else return alert("Nothing chosen to upload!")
    }
    return(
        <div>
            <Navbar></Navbar>
            {/* <div style={{marginTop: '200px'}}>
                <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px'}}>
                    <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        <i className="fa fa-light fa-file-circle-plus" style={{fontSize: '40px',cursor: 'pointer'}}></i>
                        <br/>
                        <h5 style={{color: 'grey'}}><b>No Result Found! <i style={{color: 'red',cursor: 'pointer'}} className="fa-solid fa-minus"></i></b></h5>
                    </div>
                </div>
            </div> */}
            <CSVReader
                onUploadAccepted={(results) => {
                    console.log(results);
                    const data=results.data
                    data.splice(data.length-1,1)
                    let array=[]
                    for(let i = 1;i < data[0].length;i++) {
                        let obj={}
                        data.map((item,index)=>{
                            if(index===0) {
                                obj[item[0]]=item[i].split(',')
                            }
                            else if(index===5||index===6) {
                                obj[item[0]]=(+item[i])
                            }
                            else obj[item[0]]=item[i]
                        })
                        array.push(obj)
                    }
                    setArr(array)
                }}
            >
            {({
                getRootProps,
                acceptedFile,
                ProgressBar,
                getRemoveFileProps,
            }) => (
            <>
            <div style={{marginTop: '190px'}}>
                <div style={{boxShadow: '0px 0px 5px 0px #888888',backgroundColor: 'white',marginLeft: '103px',marginRight: '100px',padding: '30px'}}>
                    <div style={{padding: '50px',display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                        {acceptedFile ? <i style={{fontSize: '40px'}} className="fa-solid fa-file"></i> : <i className="fa fa-light fa-file-circle-plus" {...getRootProps()} style={{fontSize: '40px',cursor: 'pointer'}}></i>}
                        <br/>
                        <h5 style={{color: 'grey',fontSize: '120%'}}><b>{acceptedFile ? acceptedFile.name : "Choose a file to upload!"} {acceptedFile && <i style={{color: 'grey',cursor: 'pointer',position: 'absolute', marginLeft: '30px'}} {...getRemoveFileProps()} className="fa-solid fa-trash-can"></i>}</b></h5>
                        <br/>
                        <button onClick={submitCSV} className="btn chng" style={{marginLeft: '-5px'}}>Upload</button>
                    </div>
                </div>
            </div>
            {/* <ProgressBar bgcolor="orange" progress='30'  height={30}></ProgressBar> */}
            {/* <ProgressBar style={styles.progressBarBackgroundColor} /> */}
            </>
            )}
            </CSVReader>
        </div>
    )
}
export default Home