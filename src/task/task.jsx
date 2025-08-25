import { useEffect, useState } from 'react'
import '../../public/productData.json'
import axios from 'axios'

export function Task() {

    const [data, setData] = useState([{ id: 0, name: '', price: 0 }])

    const [togglebtn, setTogglebtn] = useState(null);


    function handleEditClick(objid) {

        if (togglebtn === objid) {
            setTogglebtn(null)
        } else {
            setTogglebtn(objid)
        }

    }

    function handleSaveClick(objid) {
        if (togglebtn === objid) {
            setTogglebtn(null)
        } else {
            setTogglebtn(objid)
        }

    }

  

    useEffect(() => {
        axios.get('./productData.json')
            .then(res => { setData(res.data) });
    }, [])
    return (
        <>
            <div className="h2 text-center">Editable Form table</div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        {

                            Object.keys(data[0]).map((key) => {
                                // console.log(data[0].name);
                                return <th key={key}>{key.toUpperCase()}</th>
                            })
                        }
                        <th className='text-uppercase'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((object) => {
                            // console.log(object.id)
                            return (
                                <tr key={object.id}>
                                    {
                                        Object.values(object).map((val, i) => {
                                            return (
                                                <td key={i}> {togglebtn === object.id ? <input type="text" value={val}  /> : val}</td>
                                            )

                                        })
                                    }
                                    <td>
                                        {
                                            togglebtn === object.id
                                                ?
                                                <button onClick={() => handleSaveClick(object.id)} className='btn btn-danger'>Save</button>
                                                :
                                                <button onClick={() => handleEditClick(object.id)} className='btn btn-warning'>Edit</button>
                                        }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}