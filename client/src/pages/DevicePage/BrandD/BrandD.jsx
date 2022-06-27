


import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import {Card, Row} from "react-bootstrap";

const BrandD = observer(() => {
    const {device} = useContext(Context)
    console.log({device})
debugger
    return (
        <Row className="d-flex">
            {device.brands.map(brand =>
                <div
                    style={{cursor:'pointer'}}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)}
                >
                    {brand.name}
                </div>
            )}
        </Row>
    );
});

export default BrandD;