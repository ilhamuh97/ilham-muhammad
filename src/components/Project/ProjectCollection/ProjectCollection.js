import React from "react";
import "./ProjectCollection.scss";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const ProjectCollection = ({ list }) => {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style }} onClick={onClick} />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div className={className} style={{ ...style }} onClick={onClick} />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const projectListWrapper = list.map((project, i) => {
        return <ProjectCard key={i} className="card" project={project} />;
    });

    return (
        <>
            <div className="project-collection">
                <Slider {...settings}>{projectListWrapper}</Slider>
            </div>
        </>
    );
};

export default ProjectCollection;
