import React from "react";

interface Props {
    id: string;
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedFilters: string[];
}

function InputTemplate({id,title,onChange,selectedFilters} : Props) {
    return (
        <div className="flex gap-4 ">
            <input value={selectedFilters} onChange={onChange} type="checkbox" id={id} name={id} className=""/>
            <label htmlFor={id} className="text-gray-1 p-medium-14">{title}</label>
        </div>
    );
}

export default InputTemplate;