import { CSSProperties } from 'react';

const card: CSSProperties = {
    height: "80%",
    width: "90%",
    position: "relative",
}

const spin:CSSProperties = {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
}

export default {
    spin,
    card
}