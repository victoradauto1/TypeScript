import React from 'react'

type Props = {
    title: string;
    content: string;
    comentsQty: number;
    tags: string[]

    //8-Enum
    category: Category
}

export enum Category{
  JS = "JavaScript",
  TS = "TypeScript",
  P = "Python"
}

function Destructuring({title, content, comentsQty, tags, category}: Props) {
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
        <p>Categoria:{category}</p>
    </div>
  )
}

export default Destructuring