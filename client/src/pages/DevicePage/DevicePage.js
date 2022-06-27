import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row, Tabs, Tab, } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import bigStar from '../../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../../http/deviceAPI";
import TabsDP from './tabs/TabsDP';
import BrandD from './BrandD/BrandD';

const DevicePage = observer(() => {
    // const {device} = useContext(Context)
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={12}>
                    <Row className="d-flex flex-column align-items-center p-2 pb-5">
                        <h1 className='display-4' style={{ fontSize: '1.5rem' }}>{device.name}</h1>
                    </Row>
                </Col>
                <Col md={7} className='d-flex align-items-center justify-content-center'>
                    <Image width={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={5}>
                    <Row className='justify-content-end flex-column'>
                        <>
                            <h3 style={{ fontSize: '1.2rem' }}>От: {device.price} руб.</h3>
                        </>
                        <Row className="d-flex flex-column m-3">
                            <TabsDP />
                        </Row>
                    </Row>
                    {/* <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card> */}
                </Col>
            </Row>
            <Row md={12} className='m-3'>
                <Row className="d-flex flex-column m-3 p-3" style={{ flex: '1 1 35%' }}>
                    <h3 className='display-4' style={{ fontSize: '1.5rem' }}>Характеристики:</h3>
                    {device.info.map((info, index) =>
                        <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10, justifyContent: 'space-between' }}>
                            <b>{info.title} :&ensp;</b> {info.description}
                        </Row>
                    )}
                    <BrandD/>
                    {device.rating}

                </Row>
                <Row className="d-flex flex-column m-3  p-3" style={{ flex: '1 1 45%' }}>
                    <h3 className='display-4' style={{ fontSize: '1.5rem' }}>Описание товара:</h3>
                    <p>
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
                    </p>
                </Row>
            </Row>
        </Container>
    );
});

export default DevicePage;
