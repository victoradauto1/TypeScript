import React from 'react'

type Props = {
    title: string;
    content: string;
    comentsQty: number;
    tags: string[]
}

function Destructuring({title, content, comentsQty, tags}: Props) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>Quantidades de comentários: {comentsQty}</p>
        <div>
            {tags.map((tag)=>(
                <span>#{tag}</span>
            ))}
        </div>
    </div>
  )
}

export default Destructuring