import {Input, Form, Select, Divider} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'

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
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        password: "",
        phone_number: null,
        degree: "",
        expertise: [],
        description: "", 
        photo: null,
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
        <div style={{display: "flex"}}>
            <Form {...layout}
                name="register-tutor"
                onFinish={handleSubmit}
                form={form}
            >
            <div>
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
                </div>
            </div>
            <div>

            </div>
            </Form>
        </div>
    );
}

export default RegisterTutor;