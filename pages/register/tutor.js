import {Input, Form, Select, Layout, Space, Image, Button, Checkbox, Upload} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'

import NavBar from '../../src/layout/NavBar'
import Footer from '../../src/layout/Footer.js'

const RegisterTutor = () => {
    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
    };
    const [form] = Form.useForm();
    const {Option} = Select;
    const {Content} = Layout;
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        phone_number: null,
        degree: "",
        expertise: [],
        description: "", 
        photo: "foto",
        certificate: null,
        ktp: null
    });
    const [keahlian, setKeahlian] = useState({
        list_keahlian:["Matematika", "Fisika", "Kimia"],
        extra_item: ""
    }) 

    useEffect(()=>{
        // fetch daftar keahlian disini
    },
    [input]);

    const onNameChange = (event) =>{
        // add nama keahlian ke backend
        setKeahlian({extra_item: event.target.value});
    }

    const handleSubmit = (event) => {
        
    }

    const handleChange = (value) => {

    }

    const addItem = () => {
        const { list_keahlian, extra_item } = keahlian;
        setKeahlian({
            list_keahlian: [...list_keahlian, extra_item || 'Kosong'],
            extra_item: '',
        });
    };
    const validatePassword = (event, values) => {
        let name = event.target.name;
        let value = event.target.value;

        // do logic here
    }
    return (
        <>
        <Layout>
        <NavBar/>
        <Content style={{background: "white"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap"}}>
            <img src="/pasaredu-logo.png"/>
            <h1 style={{fontSize: "1.6rem"}}>Welcome to Pasaredu!</h1>
        </div>
        <div style={{display: "flex", justifyContent: "center", width: "100%", padding: "10px"}} className="tutor-register">
            <Form {...layout}
                name="register-tutor"
                onFinish={handleSubmit}
                form={form}
            >
            <div className="formm" style={{float: "left"}}>
                <div>
                <label>Nama Lengkap</label>
                    <Form.Item
                        name="fullname"
                        rules={[{required: true, message: 'Masukkan nama lengkap!'}]}
                    >
                        <Input placeholder="Nama Lengkap"/>
                    </Form.Item>
                </div>
                <div>
                <label>Email</label>
                    <Form.Item
                        name="email"
                        rules={[{required: true, message: 'Masukkan email!', type: 'email'}]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>
                </div>
                <div>
                <label>Password</label>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Masukkan password!', type: 'password'}]}
                    >
                        <Input placeholder="Password"/>
                    </Form.Item>
                </div>
                <div>
                <label>Konfirmasi Password</label>
                    <Form.Item
                        name="password-confirm"
                        rules={[{required: true, message: 'Masukkan password!', type: 'password'}]}
                    >
                        <Input placeholder="Password" onChange={validatePassword}/>
                    </Form.Item>
                </div>
                <div>
                <label>Nomor Telepon</label>
                    <Form.Item
                        name="phone_number"
                        rules={[{ required: true, message: 'Masukkan nomor telepon!' }]}
                    >
                        <Input addonBefore={<label>+62</label>} style={{ width: '100%' }} />
                    </Form.Item>
                </div>
                <div>
                <label>Pendidikan Terakhir</label>
                    <Form.Item
                        name="last_study"
                        rules={[{ required: true }]}
                    >
                        <Select
                            allowClear
                            placeholder="Pendidikan terakhir"
                        >
                            <Option value="smp">SMP</Option>
                            <Option value="sma">SMA</Option>
                            <Option value="s1">D3/D4/S1</Option>
                            <Option value="s2">S2</Option>
                            <Option value="s3">S3</Option>
                        </Select>
                    </Form.Item>
                </div>
                <div>
                <label>Bidang Keahlian</label>
                    <Form.Item
                        name="expertise"
                        rules={[{ required: true }]}
                    >
                        <Select
                            mode="multiple"
                            style={{width: "100%"}}
                            placeholder="Pilih bidang keahlian"
                            onChange={handleChange}
                            // fungsi menambahkan keahlian dari ketika keyboard
                            // dropdownRender={
                            //     menu => {
                            //         <div>
                            //             {menu}
                            //             <Divider style={{ margin: '4px 0' }} />
                            //             <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                            //             <Input style={{ flex: 'auto' }} onChange={onNameChange} />
                            //             <a
                            //                 style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                            //                 onClick={addItem}
                            //             >
                            //                 <PlusOutlined /> Add item
                            //             </a>
                            //             </div>
                            //         </div>
                            //     }
                            // }
                        >
                            <Option value="matematika">Matematika</Option>
                            <Option value="fisika">Fisika</Option>
                            <Option value="kimia">Kimia</Option>
                            <Option value="ekonomi">Ekonomi</Option>
                            <Option value="sejarah">Sejarah</Option>
                            <Option value="geografi">Geografi</Option>
                        </Select>
                    </Form.Item>
                    <div>
                    <label>Deskripsikan keahlianmu</label>
                    <Form.Item
                        required
                    >
                        <Input.TextArea placeholder="Deskripsi" style={{height: "30ch"}}/>
                    </Form.Item>
                    </div>
                </div>
            </div>

            <div className="formm" style={{float: "right"}}>
                <div style={{justifyItem: "center", width: "100%"}}>
                    <Space size={12}>
                    <Image
                        width={200}
                        src={input.photo}
                        fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                        placeholder="Foto"
                    />
                    </Space>
                </div>
                {/* Todo melakukan upload file ke database (alternatif pertama google drive) */}
                <div style={{margin: 0}}>
                    <Form.Item>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                            <label style={{float: "left"}}>Foto pribadi</label>
                            <Upload name="foto-pribadi" >
                                <Button block>Upload foto</Button>
                            </Upload>
                        </div>
                    </Form.Item>
                </div>
                <div style={{margin: 0}}>
                    <Form.Item>
                        <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                            <label style={{float: "left"}}>Data pendukung</label>
                            <Upload name="data-pendukung" >
                                <Button block>Upload file</Button>
                            </Upload>
                        </div>
                    </Form.Item>
                </div>
                <div>
                <Form.Item>
                    <Checkbox>Saya menyatakan data ini adalah asli milik saya</Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{background: "#ffb300", color: "white", border: "#ffb300"}}>
                    Daftar
                    </Button>
                </Form.Item>
                </div>
            </div>
            </Form>  
        </div>
        </Content>
        </Layout>
        </>
    );
}

export default RegisterTutor;