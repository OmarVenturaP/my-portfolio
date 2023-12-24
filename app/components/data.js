"use client"
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { allProjects, allSkills, allJobs } from "./../context/state";

export default function Data() {
    // llamar datos de proyectos
    const [project, setProjects] = useRecoilState(allProjects);
    const [skills, setSkills] = useRecoilState(allSkills);
    const [jobs, setJobs] = useRecoilState(allJobs);

    const getProjectsData = async () => {
        await fetch("https://puce-famous-dolphin.cyclic.app/projects", {
            revalidate: 0,
        })
            .then((res) => res.json())
            .then((data) => {
            setProjects(data);
            });
    }

    // llamar datos de skills
    const getSkills = async () => {
        await fetch("https://puce-famous-dolphin.cyclic.app/skills", {
            revalidate: 0,
        })
            .then((res) => res.json())
            .then((data) => {
                setSkills(data);
            });
    }

    // llamar datos de trabajos
    const getJobs = async () => {
        await fetch("https://puce-famous-dolphin.cyclic.app/jobs", {
            revalidate: 0,
        })
            .then((res) => res.json())
            .then((data) => {
                setJobs(data);
            });
    }

    useEffect(
    () => {
        getJobs();
        getProjectsData();
        getSkills();
    
    }, 
    [],
    );
};

