import React from "react";
import "./NodeItem.css";

// Define props type
interface NodeItemProps {
    text: string;
}

const NodeItem: React.FC<NodeItemProps> = ({ text }) => {
    return <div className="node-item">{text}</div>;
};

export default NodeItem;
