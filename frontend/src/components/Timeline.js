import React from "react";
import { Timeline } from 'antd';

import AddThingForm from './AddThingForm';

const timeLine = ({ loading, items }) => {
    return (
        <div>
            <Timeline pending="Recording..." reverse={true}>
            { items.map(item => {
                return <Timeline.Item key={item.description}>{item.description}</Timeline.Item>
            })}
                {/* <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item> */}
            </Timeline>
            <AddThingForm />
        </div>
    );
}

export default timeLine;
