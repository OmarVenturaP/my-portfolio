"use client";
import React from "react";
import styles from "../page.module.css";
import { useRecoilState } from "recoil";
import { allSkills } from "./../context/state";

export default function HardSkills() {
  const [hardSkills, setSkills] = useRecoilState(allSkills);

  return (
    <>
      <div className="container pb-5 pt-5 mb-5" id="skills">
        <h1 className="text-center mt-5 pt-5 mb-5">Skills</h1>
        <div className="row justify-content-center col-12">
          {hardSkills.length ? (
            hardSkills
              .slice(0)
              .sort((a, b) => a.id - b.id)
              .map((skill, key) => (
                <div
                  className="ms-3 me-3 col-4 col-sm-3 col-md-2 col-xl-1 mt-3 mb-3 justify-content-center"
                  key={key}
                >
                  <div className={styles.skills}>
                    <div className="w-100 h-100 rounded-circle mx-auto btn-skills justify-content-around">
                      <picture>
                        <img
                          src={skill.hardskill}
                          width={38}
                          height={38}
                          className="text-center img-color"
                          alt={skill.nombre}
                        />
                      </picture>
                      <p className="text-center text-btn mt-1 mb-3 fw-bold">
                        {skill.nombre}
                      </p>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <span className="d-block mb-5 pb-5" id="portfolio" />
    </>
  );
}
