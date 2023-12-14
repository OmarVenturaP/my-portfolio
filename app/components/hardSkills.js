"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../page.module.css";

export default function HardSkills() {
  const [hardSkills, setHardSkills] = useState();

  const getHardSkills = async () => {
    await fetch("https://backend-servitec.onrender.com/skills", {
      next: {
        revalidate: 60,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setHardSkills(data);
      });
  }

  useEffect(() => {
    getHardSkills();
  }, []);


  return (
    <>
      <div className="container pb-5 pt-5 mb-5" id="skills">
        <h1 className="text-center mt-5 pt-5 mb-5">Skills</h1>
        <div className="row justify-content-center col-12">
          {
                hardSkills ? (
                  hardSkills.map((skill) => (
                    <div className="ms-3 me-3 col-4 col-sm-3 col-md-2 col-xl-1 mt-3 mb-3 justify-content-center" key={skill.id}>
                      <div className={styles.skills}>
                        <div className="w-100 h-100 rounded-circle mx-auto btn-dark justify-content-around">
                        <picture>
                          <img src={skill.hardskill} width={38} height={38} className="text-center" alt={skill.nombre} />
                        </picture>
                          <p className="text-center text-dark fw-bold">{skill.nombre}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                )
            }
        </div>
      </div>
      <span className="d-block mb-5 pb-5" id="portfolio" />
    </>
  );
}
