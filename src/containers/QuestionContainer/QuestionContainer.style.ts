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

const nextBtn:CSSProperties = {
    position: "absolute",
    bottom: "2rem",
    right: "2rem",
}

export default {
    spin,
    card,
    nextBtn
}