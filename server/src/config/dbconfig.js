const CONFIG_LAMEP = () => {
    return {
        user: "lamep",
        password: "Lamep2020+",
        server: "SQL\\SQL2017",
        database: "LAMEP",
        options: {
            "enableArithAbort": true
        }
    }
}

exports.CONFIG_LAMEP = CONFIG_LAMEP

const CONFIG_LAMEP_AWM = () => {
    return {
        user: "sa",
        password: "Sql2017",
        server: "SQL\\SQL2017",
        database: "LAMEP_AWM",
        options: {
            "enableArithAbort": true
        }
    }
}

exports.CONFIG_LAMEP_AWM = CONFIG_LAMEP_AWM