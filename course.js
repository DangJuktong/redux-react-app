const http = require('http');
const { hostname } = require('os');

const port = 3001;

const fieldData = [
    {
        field: '0',
        field_name: '前端提高'
    },
    {
        field: '1',
        field_name: '前端基础'
    },
    {
        field: '2',
        field_name: '前端深入'
    },
    {
        field: '3',
        field_name: '前端实战'
    }
]

const courseList = [
    {
        id: '123',
        course_name: "JS基础"
    },
    {
        id: '234',
        course_name: "React"
    },
    {
        id: '345',
        course_name: "VUE"
    },
    {
        id: '456',
        course_name: "HTML"
    },
    {
        id: '567',
        course_name: "CSS"
    },
    {
        id: '789',
        course_name: "Redux"
    },
    {
        id: '890',
        course_name: "Webpack"
    },
]

const server = http.createServer((req, res) => {
    const result = {
        success: true
    }
    if(req.url == "/course/v2/get_course_fields") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        result.result = fieldData
        res.end(JSON.stringify(result))
    } else if(req.url == "/course/v2/get_courses/all"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(JSON.stringify(courseList))
    }
})

server.listen(port, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`)
})
