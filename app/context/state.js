const { atom } = require("recoil");

const useModal = atom({
    key: "useModal",
    default: false,
});

const allProjects = atom({
    key: "allProjects",
    default: {
        id: "",
        nombre: "",
        url_repo: "",
        url_demo: "",
        descripcion: "",
        img: "",
    },
});

const allSkills = atom({
    key: "allSkills",
    default: {
        id: "",
        nombre: "",
        img: "",
    },
});

const allJobs = atom({
    key: "allJobs",
    default: {
        id: "",
        posicion: "",
        empresa: "",
        periodo: "",
        descripcion: "",
        logo: "",
    },
});

const useProjectInfo = atom({
    key: "useProjectInfo",
    default: {
        id: "",
        nombre: "",
        url_repo: "",
        url_demo: "",
        descripcion: "",
        img: "",
    },
});

export {
    useModal,
    useProjectInfo,
    allProjects,
    allSkills,
    allJobs,
};
