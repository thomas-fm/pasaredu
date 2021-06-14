import React, { useEffect, useState } from 'react'
import { Row, Col, Divider, Layout, Card, Input } from 'antd'
import { Content } from 'antd/lib/layout/layout';
import { EditOutlined } from 'antd/lib/icon'

const {Meta} = Card;

const tutor = [
    {
        id: 1,
        name: "Ridho",
        keahlian: [
            "Matematika", "Fisika", "Ekonomi"
        ],
        photo: "",
        description: "Saya dapat mengajarkan materi SMP, SMA dan untuk persiapan SBMPTN"
    },
    {
        id: 2,
        name: "Daffa",
        keahlian: [
            "Musik(Biola)", "Musik(Piano)"
        ],
        photo: "",
        description: "Saya dapat mengajarkan dasar-dasar bermain biola dan musik"
    },
    {
        id: 1,
        name: "Ridho",
        keahlian: [
            "Matematika", "Fisika", "Ekonomi"
        ],
        photo: "",
        description: "Saya dapat mengajarkan materi SMP, SMA dan untuk persiapan SBMPTN"
    },
    {
        id: 1,
        name: "Ridho",
        keahlian: [
            "Matematika", "Fisika", "Ekonomi"
        ],
        photo: "",
        description: "Saya dapat mengajarkan materi SMP, SMA dan untuk persiapan SBMPTN"
    }
]

const loadPhoto = (link) =>{
    if (link === "") return '';
    return link; 
}

/*
    Ada search bar + tombol filter
*/

const Katalog = () => {
    const[input, setInput] = useState();
    const[data, setData] = useState([]);
    const[fetch, setFetch] = useState(true);

    useEffect(()=>{
        // fetch data from API
        // sementara menggunakan dummy
        if (fetch){
            setData(tutor);
            setFetch(false);
        }
    }, [data])

    // Submit search handler
    const handleSubmit = (value) => {
        // Butuh API lagi
        let fetchTutor = tutor;
        let filterTutor = fetchTutor.filter(x=>
            x.name.toLowerCase() === value.toString().toLowerCase() || 
            x.description.toLowerCase().includes(value.toString().toLowerCase()))
        setData([...filterTutor]);
    }

    const defaultError = (event) => {
        event.target.src = "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png";
    }

    return (
    <>
        <div>
            <Input.Search
                placeholder="Cari subjek"
                required
                allowClear
                onSearch={handleSubmit}
            />
        </div>
        <Row gutter={[16, 32]} justify="center">
            {data.map(result => {
                return (
                    <>
                        <Col className="tutor-list"
                        style={{height: "100%", margin: "10px", display: "block"}}>
                            <Card
                                className="shadow-lg"
                                hoverable
                                style={{width: 240, height: "100%", display: "block"}}
                                cover={
                                    <img
                                        alt={result.name}
                                        src={loadPhoto(result.photo)}
                                        onError={defaultError}
                                    />
                                }
                            >
                            <Meta
                                title={result.name}
                                description={result.description}
                            />
                            </Card>
                        </Col>
                    </>
                )
            })}
        </Row>
    </>
    )
}

export default Katalog