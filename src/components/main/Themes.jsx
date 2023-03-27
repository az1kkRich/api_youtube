import React from 'react';
// There will be React slide "react-slick"


function Themes({ selectedCategoryHandler, selectedCategory, selectedButton }) {

    const category = [
        { name: 'Hamma' },
        { name: 'Aralash' },
        { name: 'Coding' },
        { name: 'ReactJS' },
        { name: 'JavaScript' },
        { name: 'Redux' },
        { name: 'NodeJS' },
        { name: 'ExpressJS' },
        { name: 'MaterialUI' },
        { name: 'Sammi.ac' },
        { name: 'Django' },
        { name: 'recentEnglish' },
        { name: 'SeleconValley' },
        { name: 'Cambridge' },
        { name: 'USA' },
        { name: 'Apple' },
        { name: 'Eminem' },
        { name: 'Ed' },
        { name: 'MILLYMALLYMOE' },
        { name: 'Xxxtentacion' },
        { name: 'Sammi' },
        { name: 'Kunduziy' },
        { name: 'Subyektiv' },
        { name: 'NmaGap' },
        
    ]




    return (
        <>
            <div className="sliwep">
                {category.map(item =>
                (
                    <button
                        key={item.name}
                        onClick={() => selectedCategoryHandler(item.name)}
                        style={{ background: item.name == selectedCategory && '#fff', color: item.name == selectedCategory && '#000' }}
                    >
                        <span>{item.name}</span>
                    </button>
                )
                )}


            </div>
        </>
    );
}

export default Themes;