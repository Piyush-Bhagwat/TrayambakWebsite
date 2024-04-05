import React from "react";

const SkillCard = ({ number, title, img, onMouseEnter, skillHoverCard }) => {
    return (
        <div
            className={`skill-card ${
                skillHoverCard == number ? "skill-card-hover" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
            onMouseEnter={onMouseEnter}
        >
            <div> {number} </div>
            <h2>{title}</h2>
        </div>
    );
};

export default SkillCard;
