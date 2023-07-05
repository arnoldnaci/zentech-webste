"use client"

import Image from "next/image";
import { useState } from "react";
import Plus from "../../../../public/icons/plus.svg";
import Minus from "../../../../public/icons/minus.svg";

type ItemProps = {
    id: number,
    question: string,
    answer: string
}

const Item = ({ id, question, answer }: ItemProps) => {
    const [selected, setSelected] = useState<boolean>(false);

    const toggle = () => {
        setSelected(prevValue => !prevValue);
    };

    return (
        <div key={id} className="item">
            <div className="accordian-title" onClick={() => toggle()}>
                <span className="titlee">{question}</span>
                {selected ? (
                    <Image src={Minus} alt={""} />
                ) : (
                    <Image src={Plus} alt={""} />
                )}
            </div>
            <div className={selected ? "content show" : "content"}>
                {answer}
            </div>
        </div>
    );
};

export default Item;