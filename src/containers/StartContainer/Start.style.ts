import { CSSProperties } from 'react';

const card: CSSProperties = {
    width: 500,
    height: 300,
    textAlign: "center",
};

const button: CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
};

export default {
    card,
    button
}