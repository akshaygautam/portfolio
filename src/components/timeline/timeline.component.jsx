import React from "react";
import './timeline.styles.css';
import { Timeline,Divider } from "antd";
export const TimeLine = ({timeLine, title})=>{
    return (
    <div>
        <Divider orientation="center">
           <div className="portfolio-divider-content">{title}</div>
        </Divider>
        <Timeline mode={'left'}  className="timeline">
            {
                timeLine.map((item)=>{
                    return <Timeline.Item
                    key={item.label}
                    color={item.color} >{item.label} - {item.desc}</Timeline.Item>
            })
        }
    </Timeline>
    </div>
    )
}