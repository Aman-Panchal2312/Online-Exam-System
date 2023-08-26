 
   import axios from "axios";

   import {useEffect , useState} from "react";

   
   import style from "../SubjectComponent/Subject.module.css"

   import baseUrl from "../../../baseUrl";

   import swal from 'sweetalert';
   


    function Result(){

        const [tab_change, setTabChange] = useState(0);

        const [results , setResults] = useState([]);

        useEffect(()=>{

        //    ==============================================================================
            document.addEventListener("visibilitychange", handleVisibilityChange, false);
        //    ==============================================================================

           async function getAllResults(){
               let value = await axios.get(`${baseUrl}/result`);
               setResults(value.data);
               //console.log(value.data[0]);
           }
               getAllResults();
        },[]);
//    ==============================================================================
        function handleVisibilityChange() {
            if (!document.hidden) {
                // the page is hidden
                // setTabChange(tab_change+1);
                // swal("Changed Tab Detected", "Action has been Recorded", "error");
                // document.visibilityState;
                
                
            } else {
              // the page is visible
            }
          }
//    ==============================================================================
        return (
            <>
               <div id={style.displayHeadingBox}> 
                   <h2>Exam List</h2>     
                </div>

                <div id={style.tableBox}>
                    <table>
                       <thead>
                           <tr>
                             <th id="center">User Email</th>
                             <th id="center">Exam Name</th>
                             <th id="center">Exam Date</th>
                             <th id="center">Result Status</th>
                             <th id="center">Your Score</th>  
                             <th id="center">Total Marks</th>
                             <th id="center">Total Question</th>  
                             <th id="center">Tab Switch Count</th> 
                          </tr>
                        </thead>
                        <tbody>
                            {
                                results.map((data , i) => {
                                    return(
                                          <tr key={i}>
                                              <td>{data.email.email}</td>
                                              <td>{data.sname.name}</td>
                                              <td>{data.edate}</td>
                                              <td>{data.status}</td>
                                              <td>{data.score}</td>
                                              <td>{data.totalMarks}</td>
                                              <td>{data.totalQuestion}</td>
                                              <td>{data.mpcount}</td>

                                          </tr>
                                    );
                                })
                            }
                               
                        </tbody>
                     </table>
                </div>
            </>
        );
    }

    export default Result;