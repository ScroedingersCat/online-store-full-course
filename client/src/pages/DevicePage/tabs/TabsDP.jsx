import React, { useState } from "react";
import {Image, Row, Tab, Tabs} from "react-bootstrap";

function TabsDP() {
    const [key, setKey] = useState('home');
    return(
        <Tabs
                                    id="controlled-tab-example"
                                    activeKey={key}
                                    onSelect={(k) => setKey(k)}
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Оплата">
                                        <Row style={{justifyContent: 'space-between'}}>
                                            <div style={{flex:'1 1 45%'}}>
                                                Наличный расчет
                                            </div>
                                            <div style={{flex:'1 1 45%'}}>
                                                <Image src='#'/>
                                            </div>
                                            <div style={{flex:'1 1 45%'}}>
                                                На карты Сбербанк, Тинькоф
                                            </div>
                                            <div style={{flex:'1 1 45%'}}>
                                                <Image src='#'/>
                                            </div>
                                            <div style={{flex:'1 1 45%'}}>
                                                Безналичный расчет без НДС
                                            </div>
                                            <div style={{flex:'1 1 45%'}}>
                                                <Image src='#'/>
                                            </div>

                                        </Row>
                                    </Tab>
                                    <Tab eventKey="profile" title="Доставка">
                                        <Row>
                                            <p>
                                                Доставка осуществляется по городу от 150 руб в зависимости от района
                                            </p>
                                            <p>
                                                Доставка тяжелой техники осуществляется от 800 руб
                                            </p>
                                            <p>
                                                Подробнее уточняйте у менеджера
                                            </p>
                                        </Row>
                                    </Tab>
                                </Tabs>
    )
}
export default TabsDP