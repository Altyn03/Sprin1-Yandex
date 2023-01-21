import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const SwitchPanel = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div style={{ display: 'flex'}}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                <div style={{padding:'16px', color: '#F2F2F3'}}>Булки</div>
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                <div style={{padding:'16px', color: '#F2F2F3'}}>Соусы</div>
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                <div style={{padding:'16px', color: '#F2F2F3'}}>Начинки</div>
            </Tab>
        </div>
    )
}

export default SwitchPanel