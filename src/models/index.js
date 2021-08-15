import { axiosGet } from '../utils/http';

function getCourseFields () {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_course_fields',
            success (data) {
                resolve(data.result);
            },
            error (err) {
                reject(err);
            }
        })
    })
}

function getCourseList () {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/v2/get_courses/all',
            success (data) {
                resolve(data);
            },
            error (err) {
                reject(err);
            }
        })
    })
}

export {
    getCourseFields,
    getCourseList
}