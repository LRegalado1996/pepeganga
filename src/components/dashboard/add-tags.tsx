"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface Props {
  onChange: (tags: string[]) => void;
  value: string[] | undefined;
}

export const AddTags = ({ onChange, value }: Props) => {
  const [newTag, setNewTag] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTag(event.target.value);
  };

  const addTag = () => {
    const newTags = value ?? [];

    if (!newTags.includes(newTag)) newTags.push(newTag);

    onChange(newTags);
    setNewTag("");
  };

  const removeTag = (tag: string) => {
    const newTags = value?.filter((t) => t !== tag) ?? [];

    onChange(newTags);
  };

  return (
    <div className="flex flex-col gap-4 p-2 bg-gray-50 rounded">
      <div className="flex">
        <input className="flex-1 p-1 uppercase text-xs" value={newTag} onChange={handleChange} />
        <button className="btn-primary text-xs" onClick={() => addTag()} type="button">
          Agregar
        </button>
      </div>

      <ul className="flex flex-wrap gap-1">
        {value?.map((tag, i) => (
          <li key={i} className="flex bg-ivory rounded-full overflow-hidden">
            <span className="py-1 px-2 uppercase text-xs">{tag}</span>
            <button
              className="p-1 hover:bg-forestGreen"
              onClick={() => removeTag(tag)}
              type="button"
            >
              <IoClose />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
